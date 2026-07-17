import type { ReactNode } from "react";
import JsonLd from "@/app/components/seo-json-ld";
import { breadcrumbJsonLd, metadataFor, routeByPath, serviceJsonLd } from "@/app/seo";

const path = "/services/sofa/";

export const metadata = metadataFor(path);

export default function SofaLayout({ children }: { children: ReactNode }) {
  const route = routeByPath[path];

  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd(path, "Rensning af sofabetræk", route.description),
          breadcrumbJsonLd(path, "Sofa"),
        ]}
      />
      {children}
    </>
  );
}
