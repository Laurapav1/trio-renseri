import type { ReactNode } from "react";
import { metadataFor } from "../seo";

export const metadata = metadataFor("/kunderabat/");

export default function KunderabatLayout({ children }: { children: ReactNode }) {
  return children;
}
