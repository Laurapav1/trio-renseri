"use client";

import { useCallback, useEffect, useState } from "react";
import yaml from "js-yaml";
import {
  ClosedBannerFileSchema,
  type ClosedBannerFile,
  type ClosedBannerInterval,
} from "@/app/types/closedBanner";

type UseClosedBannerResult = {
  banner: ClosedBannerInterval | null;
  loading: boolean;
  error: string | null;
  reload: () => void;
};

const toLocalDate = (value: string, endOfDay: boolean): Date => {
  const [day, month, year] = value.split("-").map(Number);
  const parsed = new Date(
    year,
    month - 1,
    day,
    endOfDay ? 23 : 0,
    endOfDay ? 59 : 0,
    endOfDay ? 59 : 0,
    endOfDay ? 999 : 0,
  );

  const isValidDate =
    !Number.isNaN(parsed.getTime()) &&
    parsed.getFullYear() === year &&
    parsed.getMonth() === month - 1 &&
    parsed.getDate() === day;

  if (!isValidDate) {
    throw new Error(`Ugyldig dato: ${value}`);
  }

  return parsed;
};

const isIntervalActive = (interval: ClosedBannerInterval, now: Date): boolean => {
  const start = toLocalDate(interval.start, false);
  const end = toLocalDate(interval.end, true);
  return now >= start && now <= end;
};

const resolveBanner = (
  config: ClosedBannerFile,
  now: Date,
): ClosedBannerInterval | null => {
  const activeInterval = config.intervals.find((interval) =>
    isIntervalActive(interval, now),
  );

  return activeInterval ?? null;
};

export function useClosedBanner(url: string): UseClosedBannerResult {
  const [banner, setBanner] = useState<ClosedBannerInterval | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${url}?ts=${Date.now()}`, { cache: "no-store" });
      if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);

      const text = await res.text();
      const unknownData = yaml.load(text) as unknown;

      const parsed: ClosedBannerFile = ClosedBannerFileSchema.parse(unknownData);

      // Hide the banner unless there is an active interval or an explicitly enabled default.
      const nextBanner = resolveBanner(parsed, new Date());
      setBanner(nextBanner);
    } catch (e) {
      console.error(e);
      setError("Kunne ikke hente beskeden.");
      setBanner(null);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    void load();
  }, [load]);

  return { banner, loading, error, reload: load };
}
