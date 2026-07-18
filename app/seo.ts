import type { Metadata, MetadataRoute } from "next";

export const siteUrl = "https://www.trio-renseri.dk";

export const business = {
  name: "Trio Renseriet",
  legalName: "Trio Renseri",
  description:
    "Professionelt renseri og skrædderi i Højbjerg ved Aarhus med tekstilrens, skjorteservice, tæpperens, møbelrens og specialpleje.",
  address: {
    streetAddress: "L. A. Rings Vej 19",
    postalCode: "8270",
    addressLocality: "Højbjerg",
    addressRegion: "Midtjylland",
    addressCountry: "DK",
  },
  telephone: "+45 86 27 09 56",
  email: "andriustrio@hotmail.com",
  mapUrl: "https://maps.app.goo.gl/GSzww1hdHhaeqpZJ7",
  facebook: "https://facebook.com/TrioRenseri",
  instagram: "https://instagram.com/triorenseri",
  latitude: 56.11784987310981,
  longitude: 10.198686,
};

export type RouteEntry = {
  path: string;
  title: string;
  description: string;
  priority: number;
};

export const siteContentLastModified = "2026-07-18";

export const routes: RouteEntry[] = [
  {
    path: "/",
    title: "Trio Renseriet | Renseri og Skrædderi i Højbjerg",
    description:
      "Trio Renseriet i Højbjerg tilbyder professionel rens, vask, skjorteservice, skrædderi og tekstilpleje for kunder i Aarhus.",
    priority: 1,
  },
  {
    path: "/kontakt/",
    title: "Kontakt Trio Renseriet i Højbjerg",
    description:
      "Kontakt Trio Renseriet på L. A. Rings Vej 19 i Højbjerg. Ring på 86 27 09 56 eller skriv for rens, vask og skrædderi.",
    priority: 0.8,
  },
  {
    path: "/kunderabat/",
    title: "Kunderabat på Tekstilrens | Trio Renseriet",
    description:
      "Studerende og pensionister kan få 15% rabat på tekstilrens hos Trio Renseriet i Højbjerg med gyldigt kort.",
    priority: 0.6,
  },
  {
    path: "/priser/",
    title: "Priser på Rens og Vask | Trio Renseriet",
    description:
      "Se priser på tekstilrens, skjorteservice, dynevask, gardinrens, tæpperens og andre ydelser hos Trio Renseriet.",
    priority: 0.8,
  },
  {
    path: "/services/",
    title: "Renseri Ydelser i Højbjerg | Trio Renseriet",
    description:
      "Få overblik over Trio Renseriets ydelser: tekstilrens, skjorteservice, brudetøj, dyner, gardiner, tæpper og møbelbetræk.",
    priority: 0.9,
  },
  {
    path: "/services/baadkalache/",
    title: "Bådkaleche Rens i Aarhus | Trio Renseriet",
    description:
      "Professionel vask, rens og imprægnering af bådkalecher hos Trio Renseriet i Højbjerg nær Aarhus.",
    priority: 0.7,
  },
  {
    path: "/services/brudekjolerens/",
    title: "Brudekjolerens i Højbjerg | Trio Renseriet",
    description:
      "Skånsom rens af brudekjoler, selskabskjoler og sarte detaljer hos Trio Renseriet i Højbjerg.",
    priority: 0.7,
  },
  {
    path: "/services/daabskjolevask/",
    title: "Dåbskjole Vask og Rens | Trio Renseriet",
    description:
      "Bevar familiens dåbskjole med skånsom vask og rens hos Trio Renseriet i Højbjerg.",
    priority: 0.6,
  },
  {
    path: "/services/dynevask/",
    title: "Dyne- og Pudevask i Højbjerg | Trio Renseriet",
    description:
      "Få dyner, puder, soveposer og silkedyner vasket grundigt og skånsomt hos Trio Renseriet.",
    priority: 0.7,
  },
  {
    path: "/services/gardinservice/",
    title: "Gardinrens og Gardinvask | Trio Renseriet",
    description:
      "Rens og vask af gardiner, velourgardiner og foldegardiner med skånsom behandling i Højbjerg.",
    priority: 0.7,
  },
  {
    path: "/services/madrasser/",
    title: "Vask af Madrasser i Aarhus | Trio Renseriet",
    description:
      "Vask af topmadrasser, madrasbetræk og specialmadrasser hos Trio Renseriet i Højbjerg.",
    priority: 0.7,
  },
  {
    path: "/services/mobelbetraak/",
    title: "Rens af Møbelbetræk | Trio Renseriet",
    description:
      "Professionel rensning af sofabetræk, lænestole og møbeltekstiler med mulighed for imprægnering.",
    priority: 0.7,
  },
  {
    path: "/services/skjorteservice/",
    title: "Skjorteservice i Højbjerg | Trio Renseriet",
    description:
      "Skjortevask og strygning til skarpe, rene skjorter hos Trio Renseriet i Højbjerg nær Aarhus.",
    priority: 0.8,
  },
  {
    path: "/services/sofa/",
    title: "Rensning af Sofabetræk | Trio Renseriet",
    description:
      "Få sofabetræk vasket og renset skånsomt, så pletter, støv og allergener fjernes.",
    priority: 0.7,
  },
  {
    path: "/services/taepperens/",
    title: "Tæpperens i Højbjerg | Trio Renseriet",
    description:
      "Professionel rensning af tæpper, måtter og større tekstilflader hos Trio Renseriet i Højbjerg.",
    priority: 0.8,
  },
  {
    path: "/services/tekstilrens/",
    title: "Tekstilrens i Højbjerg | Trio Renseriet",
    description:
      "Skånsom tekstilrens af hverdagstøj, habit, kjoler og sarte materialer hos Trio Renseriet.",
    priority: 0.9,
  },
  {
    path: "/services/udlejning/",
    title: "Udlejning af Møbel- og Tæpperensmaskine",
    description:
      "Lej en professionel rensemaskine til møbler og tæpper hos Trio Renseriet i Højbjerg.",
    priority: 0.6,
  },
  {
    path: "/services/vaskerulleservice/",
    title: "Vask og Rul af Duge | Trio Renseriet",
    description:
      "Vask og rulning af duge, sengetøj og servietter til private og virksomheder i Aarhus.",
    priority: 0.7,
  },
  {
    path: "/skraedder/",
    title: "Skrædderi og Reparationer i Højbjerg",
    description:
      "Trio Renseriets skræddere hjælper med reparationer, oplægning, tilpasning og omforandring af tøj.",
    priority: 0.8,
  },
  {
    path: "/skraedder/priser/",
    title: "Skrædder Priser | Trio Renseriet",
    description:
      "Se priser på skrædderarbejde, reparationer, oplægning og tilpasning hos Trio Renseriet.",
    priority: 0.7,
  },
  {
    path: "/tojrens/",
    title: "Tøjrens og Tekstilpleje | Trio Renseriet",
    description:
      "Trio Renseriet hjælper med tøjrens, skjorter, brudetøj, dyner, gardiner og tekstilpleje i Højbjerg.",
    priority: 0.7,
  },
];

export const routeByPath = Object.fromEntries(
  routes.map((route) => [route.path, route])
) as Record<string, RouteEntry>;

export function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}

export function metadataFor(path: string): Metadata {
  const route = routeByPath[path];

  return {
    title: route.title,
    description: route.description,
    alternates: {
      canonical: route.path,
    },
    openGraph: {
      title: route.title,
      description: route.description,
      url: absoluteUrl(route.path),
      siteName: business.name,
      locale: "da_DK",
      type: "website",
      images: [
        {
          url: absoluteUrl("/images/profil.jpg"),
          width: 1200,
          height: 630,
          alt: business.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: route.title,
      description: route.description,
      images: [absoluteUrl("/images/profil.jpg")],
    },
  };
}

export function sitemapEntries(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: new Date(siteContentLastModified),
    changeFrequency: route.path === "/" ? "weekly" : "monthly",
    priority: route.priority,
  }));
}

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "DryCleaningOrLaundry",
  "@id": `${siteUrl}/#localbusiness`,
  name: business.name,
  legalName: business.legalName,
  description: business.description,
  url: siteUrl,
  telephone: business.telephone,
  email: business.email,
  image: absoluteUrl("/images/profil.jpg"),
  address: {
    "@type": "PostalAddress",
    streetAddress: business.address.streetAddress,
    postalCode: business.address.postalCode,
    addressLocality: business.address.addressLocality,
    addressRegion: business.address.addressRegion,
    addressCountry: business.address.addressCountry,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: business.latitude,
    longitude: business.longitude,
  },
  hasMap: business.mapUrl,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:30",
      closes: "17:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "10:00",
      closes: "13:00",
    },
  ],
  areaServed: ["Højbjerg", "Aarhus", "Viby", "Risskov", "Skåde"],
  sameAs: [business.facebook, business.instagram],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: business.name,
  url: siteUrl,
  inLanguage: "da-DK",
  publisher: {
    "@id": `${siteUrl}/#localbusiness`,
  },
};

export function serviceJsonLd(path: string, serviceType: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(path)}#service`,
    name: serviceType,
    serviceType,
    description,
    provider: {
      "@id": `${siteUrl}/#localbusiness`,
    },
    areaServed: ["Højbjerg", "Aarhus"],
    url: absoluteUrl(path),
  };
}
