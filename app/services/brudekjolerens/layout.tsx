import type { ReactNode } from "react";
import JsonLd from "@/app/components/seo-json-ld";
import { metadataFor, routeByPath, serviceJsonLd } from "@/app/seo";

const path = "/services/brudekjolerens/";

export const metadata = metadataFor(path);

export default function BrudekjolerensLayout({ children }: { children: ReactNode }) {
  const route = routeByPath[path];

  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd(path, "Brudekjolerens", route.description),
        ]}
      />
      {children}
    </>
  );
}
