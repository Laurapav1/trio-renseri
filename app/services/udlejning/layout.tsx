import type { ReactNode } from "react";
import JsonLd from "@/app/components/seo-json-ld";
import { metadataFor, routeByPath, serviceJsonLd } from "@/app/seo";

const path = "/services/udlejning/";

export const metadata = metadataFor(path);

export default function UdlejningLayout({ children }: { children: ReactNode }) {
  const route = routeByPath[path];

  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd(path, "Udlejning af møbel- og tæpperensmaskine", route.description),
        ]}
      />
      {children}
    </>
  );
}
