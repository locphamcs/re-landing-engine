import type { MetadataRoute } from "next";
import { listProjects } from "@/lib/projects";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://reflectionwestlake.online";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];

  const projectRoutes: MetadataRoute.Sitemap = listProjects().map(
    (project) => ({
      url: `${SITE_URL}/du-an/${project.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    }),
  );

  return [...staticRoutes, ...projectRoutes];
}
