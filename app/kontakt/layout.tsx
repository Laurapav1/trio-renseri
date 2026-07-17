import type { ReactNode } from "react";
import { metadataFor } from "../seo";

export const metadata = metadataFor("/kontakt/");

export default function KontaktLayout({ children }: { children: ReactNode }) {
  return children;
}
