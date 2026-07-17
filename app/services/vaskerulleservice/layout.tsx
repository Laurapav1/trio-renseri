import type { ReactNode } from "react";
import JsonLd from "@/app/components/seo-json-ld";
import { breadcrumbJsonLd, metadataFor, routeByPath, serviceJsonLd } from "@/app/seo";

const path = "/services/vaskerulleservice/";

export const metadata = metadataFor(path);

export default function VaskerulleserviceLayout({
  children,
}: {
  children: ReactNode;
}) {
  const route = routeByPath[path];

  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd(path, "Vask og rul af duge", route.description),
          breadcrumbJsonLd(path, "Vask og rul"),
        ]}
      />
      {children}
    </>
  );
}
