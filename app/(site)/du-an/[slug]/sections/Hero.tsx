// Server Component – no interactivity needed
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone, ChevronDown } from "lucide-react"
import type { Project } from "@/lib/projects/types"

const GOLD = "#C7A15A"

interface HeroProps {
  project: Project
}

export function Hero({ project }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative h-screen min-h-[640px] flex items-center justify-center overflow-hidden"
    >
      {/* Background image – subtle brightness/contrast for separation */}
      <div className="absolute inset-0 z-0 bg-neutral-900">
        <Image
          src={project.hero.image}
          alt={project.name}
          fill
          priority
          className="object-cover brightness-90 contrast-110"
          sizes="100vw"
        />
        {/* Full overlay: contrast zone for legibility, image still visible */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/25 to-black/65"
          aria-hidden
        />
      </div>

      {/* Spotlight blur behind text block only (below content z-index) */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[1] w-[min(90vw,720px)] h-[min(70vh,520px)] rounded-full bg-black/35 blur-3xl pointer-events-none"
        aria-hidden
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
        {/* 1. Brand line */}
        <p
          className="text-[12px] md:text-[13px] tracking-[0.35em] uppercase font-medium mb-4"
          style={{ color: GOLD }}
        >
          {project.brand}
        </p>

        {/* 2. Badge – pill outline gold */}
        {project.hero.badge && (
          <span
            className="inline-flex items-center rounded-full border px-5 py-1.5 text-[11px] md:text-xs font-medium tracking-[0.35em] uppercase mb-6"
            style={{ color: GOLD, borderColor: GOLD }}
          >
            {project.hero.badge}
          </span>
        )}

        {/* 3. Title – serif light, premium shadow */}
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[88px] font-light text-white tracking-tight leading-[1.05] mb-4 drop-shadow-[0_14px_60px_rgba(0,0,0,0.60)]">
          {project.name}
        </h1>

        {/* 4. Subheading */}
        <p className="text-white/80 text-[11px] md:text-xs tracking-[0.35em] uppercase mb-3">
          {project.hero.subtitle}
        </p>

        {/* 5. Tagline */}
        <p className="text-white/90 text-base md:text-lg font-light leading-relaxed mb-10 max-w-2xl">
          {project.tagline}
        </p>

        {/* 6. CTA – primary gold, secondary glass */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <Button
            asChild
            size="lg"
            className="bg-[#C7A15A] text-black hover:bg-[#B8935D] font-semibold tracking-[0.2em] uppercase text-xs px-10 h-12 rounded-sm border-0"
          >
            <a href="#contact">Đăng ký tư vấn</a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="bg-white/10 border-white/20 text-white backdrop-blur-sm hover:bg-white/20 tracking-[0.2em] uppercase text-xs px-10 h-12 rounded-sm"
          >
            <a href={`tel:${project.hotline}`}>
              <Phone className="mr-2 size-4" />
              Gọi ngay: {project.hotline}
            </a>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#overview"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/40 hover:text-[#C7A15A] transition-colors"
        aria-label="Cuộn xuống"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">Khám phá</span>
        <ChevronDown className="size-5 animate-bounce" />
      </a>
    </section>
  )
}
