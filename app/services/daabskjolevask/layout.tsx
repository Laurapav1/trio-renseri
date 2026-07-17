import type { ReactNode } from "react";
import JsonLd from "@/app/components/seo-json-ld";
import { metadataFor, routeByPath, serviceJsonLd } from "@/app/seo";

const path = "/services/daabskjolevask/";

export const metadata = metadataFor(path);

export default function DaabskjolevaskLayout({ children }: { children: ReactNode }) {
  const route = routeByPath[path];

  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd(path, "Vask og rens af dåbskjole", route.description),
        ]}
      />
      {children}
    </>
  );
}
