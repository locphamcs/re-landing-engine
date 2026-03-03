// Server Component – no interactivity needed
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Phone, ChevronDown } from "lucide-react"
import type { Project } from "@/lib/projects/types"

interface HeroProps {
  project: Project
}

export function Hero({ project }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative h-screen min-h-[640px] flex items-center justify-center overflow-hidden"
    >
      {/* ── Background image with dark overlay ──
           The hero is ALWAYS photo-driven; dark vignette ensures legibility
           of white text regardless of light/dark body theme.
           Fallback bg-neutral-900 shows if image hasn't loaded yet. ── */}
      <div className="absolute inset-0 z-0 bg-neutral-900">
        <Image
          src={project.hero.image}
          alt={project.name}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Gradient vignette – keeps white text readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/75" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
        {/* Brand */}
        <p className="text-[10px] md:text-xs tracking-[0.45em] uppercase text-primary font-semibold mb-5">
          {project.brand}
        </p>

        {/* Badge */}
        {project.hero.badge && (
          <Badge className="mb-6 bg-primary/15 text-primary border border-primary/50 text-[10px] tracking-[0.3em] uppercase px-5 py-1.5 rounded-none">
            {project.hero.badge}
          </Badge>
        )}

        {/* Project name */}
        <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-[88px] font-light text-white tracking-tight leading-[1.05] mb-5">
          {project.name}
        </h1>

        {/* Gold rule */}
        <div className="flex items-center gap-3 mb-5">
          <span className="block h-px w-14 bg-primary" />
          <span className="block w-1.5 h-1.5 rounded-full bg-primary" />
          <span className="block h-px w-14 bg-primary" />
        </div>

        {/* Subtitle */}
        <p className="text-white/60 text-[11px] tracking-[0.3em] uppercase mb-4">
          {project.hero.subtitle}
        </p>

        {/* Tagline */}
        <p className="text-white/75 text-base md:text-lg font-light leading-relaxed mb-10 max-w-2xl">
          {project.tagline}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            asChild
            size="lg"
            className="bg-primary text-black hover:bg-primary/90 font-semibold tracking-[0.2em] uppercase text-[11px] px-10 h-12 rounded-none"
          >
            <a href="#contact">Đăng ký tư vấn</a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10 tracking-[0.2em] uppercase text-[11px] px-10 h-12 rounded-none"
          >
            <a href={`tel:${project.hotline}`}>
              <Phone className="mr-2 size-4" />
              Gọi ngay: {project.hotline}
            </a>
          </Button>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <a
        href="#overview"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/40 hover:text-primary transition-colors"
        aria-label="Cuộn xuống"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">Khám phá</span>
        <ChevronDown className="size-5 animate-bounce" />
      </a>
    </section>
  )
}

