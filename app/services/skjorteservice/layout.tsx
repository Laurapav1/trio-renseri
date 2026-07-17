import type { ReactNode } from "react";
import JsonLd from "@/app/components/seo-json-ld";
import { breadcrumbJsonLd, metadataFor, routeByPath, serviceJsonLd } from "@/app/seo";

const path = "/services/skjorteservice/";

export const metadata = metadataFor(path);

export default function SkjorteserviceLayout({ children }: { children: ReactNode }) {
  const route = routeByPath[path];

  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd(path, "Skjorteservice", route.description),
          breadcrumbJsonLd(path, "Skjorteservice"),
        ]}
      />
      {children}
    </>
  );
}
