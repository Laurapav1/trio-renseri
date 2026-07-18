import type { ReactNode } from "react";
import { metadataFor } from "@/app/seo";

export const metadata = metadataFor("/skraedder/priser/");

export default function SkraedderPriserLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
