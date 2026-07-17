"use client";

// app/components/prisliste/prisliste.tsx
import { useEffect, useRef } from "react";
import styles from "./prisliste.module.css";

interface PriceItem {
  name: string;
  prices: string[];
  /** Optional stable id for deep-linking/highlighting (recommended). */
  service?: string;
  serviceAliases?: string[];
}

interface PriceListProps {
  heading: string;
  items: PriceItem[];
  /** If equals heading, the whole section gets highlighted. */
  highlightSection?: string | null;
  /** Row highlight: matches item.service (preferred) or item.name (fallback). */
  highlightService?: string | null;
}

export default function PriceList({
  heading,
  items,
  highlightSection,
  highlightService,
}: PriceListProps) {
  const highlightedRef = useRef<HTMLLIElement | HTMLDivElement | null>(null);
  const sectionHighlighted =
    typeof highlightSection === "string" && highlightSection === heading;
  const matchesHighlight = (item: PriceItem) =>
    typeof highlightService === "string" &&
    (item.service === highlightService ||
      item.serviceAliases?.includes(highlightService) ||
      (!item.service && item.name === highlightService));
  const hasHighlightedRow = items.some(matchesHighlight);
  const shouldScroll = hasHighlightedRow || sectionHighlighted;
  const setHighlightedDivRef = (node: HTMLDivElement | null) => {
    highlightedRef.current = node;
  };
  const setHighlightedListItemRef = (node: HTMLLIElement | null) => {
    highlightedRef.current = node;
  };

  useEffect(() => {
    if (!shouldScroll || !highlightedRef.current) return;

    highlightedRef.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
    highlightedRef.current.focus({ preventScroll: true });
  }, [shouldScroll]);

  return (
    <div className={styles.prislisteContainer}>
      <div
        ref={sectionHighlighted ? setHighlightedDivRef : undefined}
        tabIndex={sectionHighlighted ? -1 : undefined}
        className={`${styles.prisliste} ${
          sectionHighlighted ? styles.highlighted : ""
        }`}
      >
        <h2>{heading}</h2>
        <ul>
          {items.map((item) => {
            const isRowHighlighted = matchesHighlight(item);

            return (
              <li
                key={item.service ?? item.name}
                id={item.service ? `pris-${item.service}` : undefined}
                ref={
                  isRowHighlighted ? setHighlightedListItemRef : undefined
                }
                tabIndex={isRowHighlighted ? -1 : undefined}
                className={isRowHighlighted ? styles.highlighted : ""}
              >
                <span className={styles.itemName}>{item.name}</span>
                <div className={styles.pricesCol}>
                  {item.prices.map((price, i) => (
                    <div key={`${item.name}-${i}`} className={styles.price}>
                      {price}
                    </div>
                  ))}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
