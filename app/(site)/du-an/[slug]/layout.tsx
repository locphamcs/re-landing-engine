// ─────────────────────────────────────────────────────────────
//  Layout for /du-an/[slug]
//
//  Sticky CTAs have been moved into ProjectLandingPage so they
//  render identically on both / and /du-an/[slug].
//  This layout is now a thin pass-through kept for potential
//  future additions (e.g. nav, breadcrumb).
// ─────────────────────────────────────────────────────────────

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
