import styles from "./prisliste.module.css";

interface PriceItem {
    name: string;
    prices: string[];
    service?: string;
  }
  
  interface PriceListContentProps {
    heading: string;
    items: PriceItem[];
    service: string | null;
  }
  
  export default function PriceList({ heading, items, service }: PriceListContentProps) {
    return (
      <div className={styles.prislisteContainer}>
        <div className={styles.prisliste}>
          <h2>{heading}</h2>
          <ul>
            {items.map((item) => (
              <li
                key={item.name}
                className={service === item.service ? styles.highlighted : ""}
              >
                <span>{item.name}</span>
                <div>
                  {item.prices.map((price, index) => (
                    <div key={index}>{price}</div>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }