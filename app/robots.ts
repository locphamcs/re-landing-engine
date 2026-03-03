import type { MetadataRoute } from "next"

// Update BASE_URL when deploying to production
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://diaockienhung.vn"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  }
}

