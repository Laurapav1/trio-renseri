import type { ReactNode } from "react";
import JsonLd from "@/app/components/seo-json-ld";
import { metadataFor, routeByPath, serviceJsonLd } from "@/app/seo";

const path = "/services/gardinservice/";

export const metadata = metadataFor(path);

export default function GardinserviceLayout({ children }: { children: ReactNode }) {
  const route = routeByPath[path];

  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd(path, "Gardinrens og gardinvask", route.description),
        ]}
      />
      {children}
    </>
  );
}
