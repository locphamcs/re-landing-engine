// Server Component – VẬT LIỆU BÀN GIAO (Handover materials)
import Image from "next/image"
import type { Project } from "@/lib/projects/types"

const GOLD = "#C7A15A"

const DEFAULT_INTERIOR_IMAGE =
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80"

interface HandoverMaterialsProps {
  project: Project
}

function KitchenList() {
  const lines: Array<{ raw: string; brands: string[] }> = [
    { raw: "Bếp & Lò nướng: SMEG – Cung cấp bởi ALC (Casta)", brands: ["SMEG"] },
    { raw: "Chậu rửa & Vòi bếp: TEKA", brands: ["TEKA"] },
    { raw: "Máy rửa bát: Trang bị sẵn", brands: [] },
  ]
  return (
    <ul className="space-y-3">
      {lines.map(({ raw, brands }) => {
        let content: React.ReactNode = raw
        brands.forEach((brand) => {
          const parts = String(content).split(brand)
          if (parts.length > 1) {
            content = (
              <>
                {parts[0]}
                <span className="font-semibold text-foreground">{brand}</span>
                {parts[1]}
              </>
            )
          }
        })
        return (
          <li key={raw} className="flex items-start gap-3 text-sm font-light text-foreground/90">
            <span
              className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
              style={{ backgroundColor: GOLD }}
            />
            <span>{content}</span>
          </li>
        )
      })}
    </ul>
  )
}

export function HandoverMaterials({ project }: HandoverMaterialsProps) {
  return (
    <section id="handover-materials" className="bg-background py-20 md:py-28">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-[55fr_45fr] gap-12 lg:gap-16 items-stretch">
          {/* Left: Image ~55% – premium feel */}
          <div className="order-2 lg:order-1">
            <div className="relative min-h-[320px] lg:min-h-[520px] w-full rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={DEFAULT_INTERIOR_IMAGE}
                alt="Nội thất cao cấp bàn giao"
                fill
                className="object-cover scale-105"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </div>
          </div>

          {/* Right: Content – max-w content block */}
          <div className="flex flex-col justify-center order-1 lg:order-2 max-w-[460px]">
            <p
              className="text-xs tracking-[0.35em] uppercase mb-3"
              style={{ color: GOLD }}
            >
              VẬT LIỆU BÀN GIAO
            </p>
            <h2 className="font-heading text-4xl font-light text-foreground leading-tight">
              Bàn giao full nội thất cao cấp
            </h2>
            <div
              className="h-px w-12 mt-4 mb-8"
              style={{ backgroundColor: GOLD }}
            />

            <div className="space-y-10">
              <div>
                <h3
                  className="uppercase tracking-widest text-sm mb-4"
                  style={{ color: GOLD }}
                >
                  Khu bếp
                </h3>
                <KitchenList />
              </div>
              <div>
                <h3
                  className="uppercase tracking-widest text-sm mb-4"
                  style={{ color: GOLD }}
                >
                  Thiết bị vệ sinh
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-sm font-light text-foreground/90">
                    <span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: GOLD }}
                    />
                    <span>
                      <span className="font-semibold text-foreground">VILLEROY & BOCH</span>
                      {" – Cung cấp bởi Vietceramic"}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
