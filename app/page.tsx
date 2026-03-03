// ─────────────────────────────────────────────────────────────
//  Home Page  /
//  Renders the default featured project landing page.
//  To change the featured project, update DEFAULT_SLUG below.
// ─────────────────────────────────────────────────────────────

import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { getProjectBySlug } from "@/lib/projects"
import { buildProjectMetadata } from "@/lib/projects/metadata"
import { ProjectLandingPage } from "@/components/project-landing-page"

/** Change this to whichever project should appear on the home page */
const DEFAULT_SLUG = "the-reflection-westlake"

export async function generateMetadata(): Promise<Metadata> {
  const project = getProjectBySlug(DEFAULT_SLUG)
  if (!project) return { title: "Trang chủ – Địa Ốc Kiến Hưng" }
  return buildProjectMetadata(project)
}

export default function HomePage() {
  const project = getProjectBySlug(DEFAULT_SLUG)

  // Fallback: show 404 if the default slug is ever removed from the registry
  if (!project) notFound()

  return <ProjectLandingPage project={project} />
}
