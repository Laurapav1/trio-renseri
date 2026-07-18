import type { ReactNode } from "react";
import JsonLd from "@/app/components/seo-json-ld";
import { metadataFor, routeByPath, serviceJsonLd } from "@/app/seo";

const path = "/services/madrasser/";

export const metadata = metadataFor(path);

export default function MadrasserLayout({ children }: { children: ReactNode }) {
  const route = routeByPath[path];

  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd(path, "Vask af madrasser", route.description),
        ]}
      />
      {children}
    </>
  );
}
