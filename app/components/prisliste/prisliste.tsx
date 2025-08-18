// app/components/prisliste/prisliste.tsx
import styles from "./prisliste.module.css";

interface PriceItem {
  name: string;
  prices: string[];
  /** Optional stable id for deep-linking/highlighting (recommended). */
  service?: string;
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
  const sectionHighlighted =
    typeof highlightSection === "string" && highlightSection === heading;

  return (
    <div className={styles.prislisteContainer}>
      <div
        className={`${styles.prisliste} ${
          sectionHighlighted ? styles.highlighted : ""
        }`}
      >
        <h2>{heading}</h2>
        <ul>
          {items.map((item) => {
            const isRowHighlighted =
              typeof highlightService === "string" &&
              (item.service
                ? item.service === highlightService
                : item.name === highlightService);

            return (
              <li
                key={item.service ?? item.name}
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
