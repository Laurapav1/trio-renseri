import type { ReactNode } from "react";
import JsonLd from "@/app/components/seo-json-ld";
import { breadcrumbJsonLd, metadataFor, routeByPath, serviceJsonLd } from "@/app/seo";

const path = "/services/mobelbetraak/";

export const metadata = metadataFor(path);

export default function MobelbetraakLayout({ children }: { children: ReactNode }) {
  const route = routeByPath[path];

  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd(path, "Rens af møbelbetræk", route.description),
          breadcrumbJsonLd(path, "Møbelbetræk"),
        ]}
      />
      {children}
    </>
  );
}
