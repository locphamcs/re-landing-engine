import type { Metadata } from "next";
import type { Project } from "./types";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://reflectionwestlake.online";

function toAbsoluteUrl(url?: string) {
  if (!url) return undefined;
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  return `${BASE_URL}${url.startsWith("/") ? "" : "/"}${url}`;
}

/** Builds Next.js Metadata from a Project config */
export function buildProjectMetadata(project: Project): Metadata {
  const { seo, slug, brand, name } = project;

  const canonicalUrl = slug ? `${BASE_URL}/du-an/${slug}` : BASE_URL;
  const ogImage = toAbsoluteUrl(seo.ogImage);

  return {
    metadataBase: new URL(BASE_URL),
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: { canonical: canonicalUrl },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: canonicalUrl,
      siteName: brand,
      locale: "vi_VN",
      type: "website",
      images: ogImage
        ? [{ url: ogImage, width: 1200, height: 630, alt: name }]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: ogImage ? [ogImage] : [],
    },
  };
}

/** Builds a schema.org ApartmentComplex JSON-LD object */
export function buildProjectJsonLd(project: Project) {
  const image = toAbsoluteUrl(project.seo.ogImage ?? project.hero.image);

  return {
    "@context": "https://schema.org",
    "@type": "ApartmentComplex",
    name: project.name,
    description: project.seo.description,
    url: `${BASE_URL}/du-an/${project.slug}`,
    image,
    address: {
      "@type": "PostalAddress",
      streetAddress: project.address,
      addressLocality: project.city,
      addressRegion: project.city,
      addressCountry: "VN",
    },
    telephone: project.hotline,
    amenityFeature: project.amenities.items.map((a) => ({
      "@type": "LocationFeatureSpecification",
      name: a.name,
      value: true,
    })),
    containsPlace: project.unitTypes.map((u) => ({
      "@type": "Accommodation",
      name: u.type,
      offers: {
        "@type": "Offer",
        price: u.price,
        priceCurrency: "VND",
      },
    })),
    brand: {
      "@type": "Organization",
      name: project.brand,
    },
  };
}
