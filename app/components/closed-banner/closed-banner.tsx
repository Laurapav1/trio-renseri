"use client";

import { useClosedBanner } from "@/app/hooks/useClosedBanner";
import styles from "./closed-banner.module.css";

type ClosedBannerProps = {
  url?: string;
};

const DEFAULT_URL = "/lukketider.yaml";

export function ClosedBanner({ url = DEFAULT_URL }: ClosedBannerProps) {
  const { banner } = useClosedBanner(url);

  if (!banner) return null;

  return (
    <div className={styles.closedBanner} role="status">
      <strong>{banner.heading}:</strong> {banner.text}
    </div>
  );
}
