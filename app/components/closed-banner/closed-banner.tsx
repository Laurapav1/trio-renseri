"use client";

import { useLayoutEffect, useRef } from "react";
import { useClosedBanner } from "@/app/hooks/useClosedBanner";
import styles from "./closed-banner.module.css";

type ClosedBannerProps = {
  url?: string;
};

const DEFAULT_URL = "/lukketider.yaml";

export function ClosedBanner({ url = DEFAULT_URL }: ClosedBannerProps) {
  const { banner } = useClosedBanner(url);
  const bannerRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!banner) {
      document.documentElement.style.removeProperty("--closed-banner-h");
      return;
    }

    if (!bannerRef.current) return;

    const el = bannerRef.current;
    const setHeight = () => {
      const height = el.getBoundingClientRect().height;
      document.documentElement.style.setProperty(
        "--closed-banner-h",
        `${height}px`,
      );
    };

    setHeight();
    const ro = new ResizeObserver(setHeight);
    ro.observe(el);

    return () => {
      ro.disconnect();
      document.documentElement.style.removeProperty("--closed-banner-h");
    };
  }, [banner]);

  if (!banner) return null;

  return (
    <div ref={bannerRef} className={styles.closedBanner} role="status">
      <strong>{banner.heading}:</strong> {banner.text}
    </div>
  );
}
