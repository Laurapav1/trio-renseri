import type { ReactNode } from "react";
import JsonLd from "@/app/components/seo-json-ld";
import { breadcrumbJsonLd, metadataFor, routeByPath, serviceJsonLd } from "@/app/seo";

const path = "/services/baadkalache/";

export const metadata = metadataFor(path);

export default function BaadkalacheLayout({ children }: { children: ReactNode }) {
  const route = routeByPath[path];

  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd(path, "Bådkaleche rens og imprægnering", route.description),
          breadcrumbJsonLd(path, "Bådkaleche"),
        ]}
      />
      {children}
    </>
  );
}
