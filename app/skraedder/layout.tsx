import type { ReactNode } from "react";
import { metadataFor } from "../seo";

export const metadata = metadataFor("/skraedder/");

export default function SkraedderLayout({ children }: { children: ReactNode }) {
  return children;
}
