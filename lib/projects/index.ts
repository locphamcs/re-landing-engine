// ─────────────────────────────────────────────────────────────
//  Project Registry
//  To add a new project: import its config and push to `projects`
// ─────────────────────────────────────────────────────────────

import type { Project } from "./types"
import { theReflectionWestlake } from "./the-reflection-westlake"

// ── Register all projects here ────────────────────────────────
const projects: Project[] = [
  theReflectionWestlake,
  // myNextProject,   ← add future projects here
]

/** Returns all registered projects (used for sitemap, listing page, etc.) */
export function listProjects(): Project[] {
  return projects
}

/** Looks up a project by slug; returns undefined if not found (→ 404) */
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

