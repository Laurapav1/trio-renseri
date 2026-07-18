import type { ReactNode } from "react";
import { metadataFor } from "../seo";

export const metadata = metadataFor("/services/");

export default function ServicesLayout({ children }: { children: ReactNode }) {
  return children;
}
