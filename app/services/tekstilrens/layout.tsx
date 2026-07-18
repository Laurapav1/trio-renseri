import type { ReactNode } from "react";
import JsonLd from "@/app/components/seo-json-ld";
import { metadataFor, routeByPath, serviceJsonLd } from "@/app/seo";

const path = "/services/tekstilrens/";

export const metadata = metadataFor(path);

export default function TekstilrensLayout({ children }: { children: ReactNode }) {
  const route = routeByPath[path];

  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd(path, "Tekstilrens", route.description),
        ]}
      />
      {children}
    </>
  );
}
