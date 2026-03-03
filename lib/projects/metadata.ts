// ─────────────────────────────────────────────────────────────
//  Shared helpers: generateMetadata + JSON-LD builder
//  Used by both app/page.tsx and app/(site)/du-an/[slug]/page.tsx
// ─────────────────────────────────────────────────────────────

import type { Metadata } from "next"
import type { Project } from "./types"

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://diaockienhung.vn"

/** Builds Next.js Metadata from a Project config */
export function buildProjectMetadata(project: Project): Metadata {
  const { seo, slug, brand, name } = project
  const canonicalUrl = `${BASE_URL}/du-an/${slug}`

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: canonicalUrl,
      siteName: brand,
      locale: "vi_VN",
      type: "website",
      images: seo.ogImage
        ? [{ url: seo.ogImage, width: 1200, height: 630, alt: name }]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: seo.ogImage ? [seo.ogImage] : [],
    },
  }
}

/** Builds a schema.org ApartmentComplex JSON-LD object */
export function buildProjectJsonLd(project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "ApartmentComplex",
    name: project.name,
    description: project.seo.description,
    url: `${BASE_URL}/du-an/${project.slug}`,
    image: project.seo.ogImage ?? project.hero.image,
    address: {
      "@type": "PostalAddress",
      streetAddress: project.address,
      addressLocality: project.city,
      addressCountry: "VN",
    },
    telephone: project.hotline,
    numberOfRooms: project.unitTypes.length,
    amenityFeature: project.amenities.items.map((a) => ({
      "@type": "LocationFeatureSpecification",
      name: a.name,
      value: true,
    })),
    containsPlace: project.unitTypes.map((u) => ({
      "@type": "Accommodation",
      name: u.type,
      floorSize: { "@type": "QuantitativeValue", name: u.area },
      offers: { "@type": "Offer", price: u.price, priceCurrency: "VND" },
    })),
    brand: { "@type": "Organization", name: project.brand },
  }
}

