"use client";

import { useCallback, useEffect, useState } from "react";
import yaml from "js-yaml";
import {
  ClosedBannerFileSchema,
  type ClosedBanner,
  type ClosedBannerFile,
} from "@/app/types/closedBanner";

type UseClosedBannerResult = {
  banner: ClosedBanner | null;
  loading: boolean;
  error: string | null;
  reload: () => void;
};

export function useClosedBanner(url: string): UseClosedBannerResult {
  const [banner, setBanner] = useState<ClosedBanner | null>(null);
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

      const parsed: ClosedBannerFile =
        ClosedBannerFileSchema.parse(unknownData);

      // Hide the banner if it is explicitly disabled in the YAML file.
      setBanner(parsed.banner.enabled ? parsed.banner : null);
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
