// ─────────────────────────────────────────────────────────────
//  Dynamic Project Page  /du-an/[slug]
//  Delegates ALL rendering to the shared ProjectLandingPage.
// ─────────────────────────────────────────────────────────────

import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { getProjectBySlug, listProjects } from "@/lib/projects"
import { buildProjectMetadata } from "@/lib/projects/metadata"
import { ProjectLandingPage } from "@/components/project-landing-page"

interface PageProps {
  params: Promise<{ slug: string }>
}

// Pre-render all known slugs at build time
export async function generateStaticParams() {
  return listProjects().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return { title: "Không tìm thấy dự án" }
  return buildProjectMetadata(project)
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) notFound()

  return <ProjectLandingPage project={project} />
}
