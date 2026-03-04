// Server Component – Location / Connectivity (premium layout)
import Image from "next/image"
import type { Project } from "@/lib/projects/types"

const GOLD = "#C7A15A"
const PANORAMA_FALLBACK = "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=80"

interface LocationProps {
  project: Project
}

function getPanoramaSrc(project: Project): { src: string; isExternal: boolean } {
  const path = project.location?.panoramaImage
  if (!path) return { src: PANORAMA_FALLBACK, isExternal: true }
  return { src: path, isExternal: path.startsWith("http") }
}

export function Location({ project }: LocationProps) {
  const loc = project.location
  const { src: panoramaSrc, isExternal: isExternalImage } = getPanoramaSrc(project)

  return (
    <section id="location" className="bg-card py-24">
      {/* ── Panorama: full-width, no overlay text, 520px desktop ── */}
      <div className="relative w-full h-[280px] sm:h-[360px] md:h-[420px] lg:h-[520px] overflow-hidden">
        {isExternalImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={panoramaSrc}
            alt=""
            className="absolute inset-0 w-full h-full object-contain"
          />
        ) : (
          <Image
            src={panoramaSrc}
            alt=""
            fill
            className="object-contain"
            sizes="100vw"
          />
        )}
      </div>

      {/* ── Map (60%) + Info (40%), gap-16 ── */}
      <div className="container mx-auto px-6 max-w-7xl pt-24">
        <div className="grid lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-stretch">
          {/* Left: Map – visual focus, 60% width, 420px height */}
          <div className="min-h-[320px] lg:min-h-[420px] rounded-xl overflow-hidden border border-border/80 bg-muted">
            {project.mapEmbedUrl ? (
              <iframe
                src={project.mapEmbedUrl}
                width="100%"
                height="100%"
                className="w-full h-full min-h-[320px] lg:min-h-[420px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Bản đồ ${project.name}`}
              />
            ) : (
              <div className="w-full h-full min-h-[320px] lg:min-h-[420px] flex flex-col items-center justify-center gap-2 text-muted-foreground">
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: GOLD }}
                />
                <p className="text-xs tracking-widest uppercase">Bản đồ đang cập nhật</p>
              </div>
            )}
          </div>

          {/* Right: 40% – Kết nối vùng + Thời gian di chuyển */}
          <div className="flex flex-col gap-16">
            {/* Block 1: Kết nối vùng – grid 2 cols */}
            <div>
              <p className="text-[10px] tracking-[0.35em] uppercase text-muted-foreground mb-2">
                Kết nối vùng
              </p>
              <h3 className="font-heading text-2xl md:text-3xl font-light text-foreground mb-6">
                Từ dự án
              </h3>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
                {(loc?.connectivity ?? []).map((item) => (
                  <li
                    key={item.name}
                    className="flex items-baseline justify-between gap-2 text-sm"
                  >
                    <span className="text-foreground/90 font-light truncate" title={item.name}>
                      {item.name}
                    </span>
                    <span
                      className="text-xs font-medium shrink-0 ml-2"
                      style={{ color: GOLD }}
                    >
                      {item.km}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Block 2: Thời gian di chuyển */}
            {loc?.travelTime && loc.travelTime.length > 0 && (
              <div>
                <p className="text-[10px] tracking-[0.35em] uppercase text-muted-foreground mb-2">
                  Thời gian di chuyển
                </p>
                <h3 className="font-heading text-xl md:text-2xl font-light text-foreground mb-6">
                  Ước tính
                </h3>
                <ul className="space-y-2.5">
                  {loc.travelTime.map((item) => (
                    <li
                      key={item.label}
                      className="flex items-center justify-between text-sm gap-4"
                    >
                      <span className="text-foreground/90 font-light">{item.label}</span>
                      <span
                        className="text-xs font-medium shrink-0"
                        style={{ color: GOLD }}
                      >
                        {item.value}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Địa chỉ – compact dưới cùng */}
            <div className="mt-auto pt-4 border-t border-border/60">
              <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-1.5">
                Địa chỉ
              </p>
              <p className="text-foreground/90 font-light text-sm leading-relaxed">
                {project.address}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
