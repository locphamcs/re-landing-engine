import type { MetadataRoute } from "next"
import { listProjects } from "@/lib/projects"

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://diaockienhung.vn"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
  ]

  // Dynamic project routes — auto-generated from listProjects()
  const projectRoutes: MetadataRoute.Sitemap = listProjects().map((project) => ({
    url: `${BASE_URL}/du-an/${project.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }))

  return [...staticRoutes, ...projectRoutes]
}

