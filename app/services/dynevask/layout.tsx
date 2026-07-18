import type { ReactNode } from "react";
import JsonLd from "@/app/components/seo-json-ld";
import { metadataFor, routeByPath, serviceJsonLd } from "@/app/seo";

const path = "/services/dynevask/";

export const metadata = metadataFor(path);

export default function DynevaskLayout({ children }: { children: ReactNode }) {
  const route = routeByPath[path];

  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd(path, "Dyne- og pudevask", route.description),
        ]}
      />
      {children}
    </>
  );
}
