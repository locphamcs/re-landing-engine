// Server Component – no interactivity needed
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone, ChevronDown } from "lucide-react";
import type { Project } from "@/lib/projects/types";
import { TrackedLink } from "@/components/tracked-link";

const GOLD = "#C7A15A";

interface HeroProps {
  project: Project;
}

export function Hero({ project }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative h-screen min-h-[640px] flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0 bg-neutral-900">
        <Image
          src={project.hero.image}
          alt={project.name}
          fill
          priority
          className="object-cover brightness-90 contrast-110"
          sizes="100vw"
        />
        {/* Overlay: chữ nổi, ảnh vẫn đẹp */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/25 to-black/65"
          aria-hidden
        />
      </div>

      {/* Spotlight blur phía sau khối text */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[1] w-[min(90vw,800px)] h-[320px] rounded-full bg-black/35 blur-3xl pointer-events-none"
        aria-hidden
      />

      {/* Content – spacing hierarchy: Brand → 16px → Badge → 32px → Title → 24px → Subheading → 16px → Tagline → 40px → Buttons */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
        {/* 1. Brand line */}
        <p
          className="text-[12px] tracking-[0.35em] uppercase font-medium opacity-90 mb-4"
          style={{ color: GOLD }}
        >
          {project.brand}
        </p>

        {/* 2. Badge */}
        {project.hero.badge && (
          <span
            className="inline-flex items-center rounded-full border px-5 py-2 text-xs font-medium tracking-[0.25em] uppercase mb-8"
            style={{ color: GOLD, borderColor: GOLD }}
          >
            {project.hero.badge}
          </span>
        )}

        {/* 3. Title – serif 300/400, depth shadow, leading-tight */}
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[88px] font-light text-white tracking-tight leading-tight mb-6 drop-shadow-[0_10px_45px_rgba(0,0,0,0.6)]">
          {project.name}
        </h1>

        {/* 4. Subheading */}
        <p className="text-white/80 text-[13px] tracking-[0.35em] uppercase mb-4">
          {project.hero.subtitle}
        </p>

        {/* 5. Tagline */}
        <p className="text-white/90 text-[17px] font-light leading-relaxed max-w-[600px] mb-10 text-center">
          {project.tagline}
        </p>

        {/* 6. CTA */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <Button
            asChild
            size="lg"
            className="bg-[#C7A15A] text-black hover:bg-[#B8935D] font-medium tracking-[0.15em] uppercase text-xs px-8 py-4 h-auto rounded-sm border-0 shadow-lg"
          >
            <a href="#contact">Đăng ký tư vấn</a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/30 bg-black/20 text-white backdrop-blur-sm hover:bg-black/35 font-medium tracking-[0.15em] uppercase text-xs px-8 py-4 h-auto rounded-sm"
          >
            <TrackedLink
              href={`tel:${project.hotline}`}
              eventName="click_hotline"
            >
              <Phone className="mr-2 size-4" />
              Gọi ngay: {project.hotline}
            </TrackedLink>
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
  );
}
