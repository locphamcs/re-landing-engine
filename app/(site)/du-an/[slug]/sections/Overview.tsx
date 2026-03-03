// Server Component — no client interaction needed
import Image from "next/image"
import { MapPin } from "lucide-react"
import type { Project } from "@/lib/projects/types"

export function Overview({ project }: { project: Project }) {
  const { overview } = project

  return (
    <section id="overview" className="bg-background py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-[45fr_55fr] gap-8 lg:gap-12 items-stretch">

          {/* ── Left: Image ─────────────────────────────── */}
          <div className="relative min-h-[360px] lg:min-h-[520px] rounded-[22px] overflow-hidden shadow-[0_8px_48px_rgba(0,0,0,0.10)]">
            {overview.image ? (
              <Image
                src={overview.image}
                alt={overview.imageCaption ?? project.name}
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 45vw"
              />
            ) : (
              /* Champagne gradient placeholder */
              <div className="absolute inset-0 bg-gradient-to-br from-[#F5F0E6] via-[#FAF7F1] to-[#EDE6D8] flex flex-col items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full border border-primary/25 flex items-center justify-center">
                  <MapPin className="size-4 text-primary/40" />
                </div>
                <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground/55">
                  Ảnh đang cập nhật
                </span>
              </div>
            )}

            {/* Caption overlay */}
            {overview.imageCaption && (
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/55 to-transparent px-6 py-5">
                <p className="text-white/90 text-[11px] tracking-[0.25em] uppercase font-medium">
                  {overview.imageCaption}
                </p>
              </div>
            )}
          </div>

          {/* ── Right: Brochure slide content ────────────── */}
          <div className="relative flex flex-col h-full lg:pl-2">

            {/* Watermark – compass-rose geometry, gold opacity ~9% */}
            <svg
              className="absolute right-0 top-1/2 -translate-y-1/2 h-[85%] w-auto opacity-[0.09] pointer-events-none text-primary select-none"
              viewBox="0 0 400 480"
              fill="none"
              aria-hidden="true"
            >
              <circle cx="200" cy="240" r="178" stroke="currentColor" strokeWidth="1" />
              <circle cx="200" cy="240" r="118" stroke="currentColor" strokeWidth="0.75" />
              <circle cx="200" cy="240" r="58"  stroke="currentColor" strokeWidth="0.75" />
              <line x1="22"  y1="240" x2="378" y2="240" stroke="currentColor" strokeWidth="0.6" />
              <line x1="200" y1="62"  x2="200" y2="418" stroke="currentColor" strokeWidth="0.6" />
              <line x1="74"  y1="116" x2="326" y2="364" stroke="currentColor" strokeWidth="0.45" />
              <line x1="326" y1="116" x2="74"  y2="364" stroke="currentColor" strokeWidth="0.45" />
              <rect x="174"  y="214"  width="52" height="52"
                    stroke="currentColor" strokeWidth="0.9"
                    transform="rotate(45 200 240)" />
            </svg>

            {/* Eyebrow + logo */}
            <div className="flex items-start justify-between mb-7">
              <span className="text-[10px] tracking-[0.45em] uppercase text-primary font-semibold">
                Tổng quan dự án
              </span>

              {/* Developer logo / monogram */}
              {project.logoUrl ? (
                <Image
                  src={project.logoUrl}
                  alt={project.brand}
                  width={72}
                  height={24}
                  className="h-6 w-auto object-contain"
                />
              ) : (
                <div className="flex items-center gap-1.5 shrink-0">
                  <div className="w-6 h-6 border border-primary/40 flex items-center justify-center">
                    <span className="font-heading text-[9px] font-semibold text-primary leading-none">
                      KH
                    </span>
                  </div>
                  <span className="hidden sm:block text-[9px] tracking-[0.3em] uppercase text-foreground/40">
                    Kiến Hưng
                  </span>
                </div>
              )}
            </div>

            {/* Title */}
            <h2 className="font-heading text-3xl md:text-4xl lg:text-[44px] font-light tracking-tight text-foreground leading-[1.1] mb-4">
              {overview.title}
            </h2>

            {/* Gold rule */}
            <div className="flex items-center gap-2 mb-7">
              <span className="block h-px w-10 bg-primary" />
              <span className="block w-1.5 h-1.5 rounded-full bg-primary" />
            </div>

            {/* Bullet list — diamond square bullets */}
            {overview.bullets && overview.bullets.length > 0 && (
              <ul className="flex flex-col gap-[11px] grow">
                {overview.bullets.map((b) => (
                  <li key={b.label} className="flex items-start gap-3 text-[13.5px] leading-snug">
                    {/* Open diamond bullet: 6×6 rotated square with border */}
                    <span className="mt-[3px] w-[6px] h-[6px] shrink-0 border border-primary/55 rotate-45 inline-block" />
                    <span>
                      <span className="font-medium text-foreground">{b.label}</span>
                      {b.value && (
                        <span className="text-muted-foreground"> · {b.value}</span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            )}

            {/* Key metrics — inline chips */}
            {overview.keyMetrics && overview.keyMetrics.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-5 mt-6 border-t border-[#ECECEC]">
                {overview.keyMetrics.map((m) => (
                  <div
                    key={m.label}
                    className="flex items-baseline gap-1.5 px-4 py-2 border border-[#E5E5E5] rounded-full bg-[#FAFAFA]"
                  >
                    <span className="font-heading text-[18px] font-medium text-foreground leading-none">
                      {m.value}
                    </span>
                    <span className="text-[11px] text-muted-foreground">{m.label}</span>
                  </div>
                ))}
              </div>
            )}

          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════
            PART 2 — Spec detail cards (accordion data)
            ═══════════════════════════════════════════════════════ */}
        {overview.accordion && overview.accordion.length > 0 && (
          <>
            {/* Divider */}
            <div className="flex items-center gap-4 mt-14 mb-10">
              <div className="flex-1 h-px bg-[#ECECEC]" />
              <span className="flex items-center gap-2.5 px-1">
                <span className="block w-1 h-1 rounded-full bg-primary/40" />
                <span className="text-[10px] tracking-[0.4em] uppercase text-primary font-semibold">
                  Thông số kỹ thuật
                </span>
                <span className="block w-1 h-1 rounded-full bg-primary/40" />
              </span>
              <div className="flex-1 h-px bg-[#ECECEC]" />
            </div>

            {/* 3-column spec cards — 1 col mobile, 3 col sm+ */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {overview.accordion.map((group, i) => (
                <div
                  key={group.title}
                  className="flex flex-col rounded-xl border border-[#ECECEC] overflow-hidden bg-[#FAFAFA]"
                >
                  {/* Gold top accent bar */}
                  <div className="h-[2px] bg-gradient-to-r from-primary/70 via-primary to-primary/40" />

                  {/* Card header */}
                  <div className="px-5 py-3.5 border-b border-[#F0F0F0]">
                    <div className="flex items-center gap-2">
                      <span className="
                        flex items-center justify-center w-5 h-5 rounded-full
                        border border-primary/35 text-[9px] font-semibold text-primary
                        font-heading shrink-0
                      ">
                        {i + 1}
                      </span>
                      <h3 className="text-[11px] tracking-[0.28em] uppercase text-primary font-semibold leading-tight">
                        {group.title}
                      </h3>
                    </div>
                  </div>

                  {/* Item list — stacked label / value */}
                  <ul className="flex flex-col divide-y divide-[#F0F0F0] px-5 py-1">
                    {group.items.map((item) => (
                      <li key={item.label} className="flex flex-col gap-0.5 py-2.5">
                        <span className="text-[10px] tracking-wide uppercase text-muted-foreground/65 leading-none">
                          {item.label}
                        </span>
                        <span className="text-[13px] font-medium text-foreground leading-snug">
                          {item.value}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </>
        )}

      </div>
    </section>
  )
}
