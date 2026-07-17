import type { ReactNode } from "react";
import { metadataFor } from "../seo";

export const metadata = metadataFor("/priser/");

export default function PriserLayout({ children }: { children: ReactNode }) {
  return children;
}
