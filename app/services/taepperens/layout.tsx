import type { ReactNode } from "react";
import JsonLd from "@/app/components/seo-json-ld";
import { breadcrumbJsonLd, metadataFor, routeByPath, serviceJsonLd } from "@/app/seo";

const path = "/services/taepperens/";

export const metadata = metadataFor(path);

export default function TaepperensLayout({ children }: { children: ReactNode }) {
  const route = routeByPath[path];

  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd(path, "Tæpperens", route.description),
          breadcrumbJsonLd(path, "Tæpperens"),
        ]}
      />
      {children}
    </>
  );
}
