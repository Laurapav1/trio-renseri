import type { ReactNode } from "react";
import { metadataFor } from "../seo";

export const metadata = metadataFor("/tojrens/");

export default function TojrensLayout({ children }: { children: ReactNode }) {
  return children;
}
