// Server Component
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Phone } from "lucide-react"
import type { Project } from "@/lib/projects/types"

interface PricingProps {
  project: Project
}

// badge variant mapping for urgency
function badgeStyle(badge?: string) {
  if (!badge) return "secondary"
  if (badge.includes("hết") || badge.includes("Giới hạn") || badge.includes("Độc quyền"))
    return "destructive"
  return "secondary"
}

export function Pricing({ project }: PricingProps) {
  const { pricing } = project

  return (
    <section id="pricing" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6 max-w-5xl">

        {/* ── Section header ── */}
        <div className="text-center mb-14">
          <p className="text-[10px] tracking-[0.4em] uppercase text-primary font-semibold mb-3">
            Bảng giá
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-4">
            {pricing.title}
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="block h-px w-10 bg-primary" />
            <span className="block w-1 h-1 rounded-full bg-primary" />
            <span className="block h-px w-10 bg-primary" />
          </div>
          <p className="text-muted-foreground text-base font-light max-w-2xl mx-auto">
            {pricing.description}
          </p>
        </div>

        {/* ── Pricing table ── */}
        <div className="border border-border rounded-lg overflow-hidden mb-8">
          {/* Table header */}
          <div className="grid grid-cols-5 gap-px bg-primary/20 text-[11px] tracking-[0.25em] uppercase text-primary px-0">
            <div className="bg-card px-5 py-3">Loại căn</div>
            <div className="bg-card px-5 py-3">Diện tích</div>
            <div className="bg-card px-5 py-3">Giá</div>
            <div className="bg-card px-5 py-3 hidden sm:block">Giá/m²</div>
            <div className="bg-card px-5 py-3">Trạng thái</div>
          </div>

          {/* Table rows */}
          {pricing.units.map((unit, i) => (
            <div
              key={unit.type}
              className={`grid grid-cols-5 gap-px bg-border text-sm ${
                i % 2 === 0 ? "" : "bg-primary/3"
              }`}
            >
              <div className="bg-card px-5 py-4 font-heading font-medium text-foreground text-base">
                {unit.type}
              </div>
              <div className="bg-card px-5 py-4 text-muted-foreground">
                {unit.area}
              </div>
              <div className="bg-card px-5 py-4 text-primary font-semibold">
                {unit.price}
              </div>
              <div className="bg-card px-5 py-4 text-muted-foreground hidden sm:block">
                {unit.pricePerSqm ?? "—"}
              </div>
              <div className="bg-card px-5 py-4">
                {unit.badge && (
                  <Badge
                    variant={badgeStyle(unit.badge) as "secondary" | "destructive"}
                    className="text-[10px] rounded-none tracking-wide"
                  >
                    {unit.badge}
                  </Badge>
                )}
                {unit.available !== undefined && unit.total !== undefined && (
                  <p className="text-[11px] text-muted-foreground mt-1">
                    {unit.available}/{unit.total} căn
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* ── Note ── */}
        <p className="text-muted-foreground text-xs leading-relaxed mb-8 italic">
          {pricing.note}
        </p>

        <Separator className="mb-8" />

        {/* ── CTA ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-lg border border-primary/30 bg-primary/5 px-6 py-5">
          <div>
            <p className="text-foreground font-heading text-xl">
              Nhận báo giá chi tiết
            </p>
            <p className="text-muted-foreground text-sm">
              Đặt cọc tối thiểu: <span className="text-primary font-semibold">{project.bookingMin}</span>
            </p>
          </div>
          <div className="flex gap-3">
            <Button
              asChild
              className="bg-primary text-black hover:bg-primary/90 rounded-none tracking-widest uppercase text-[11px] font-semibold"
            >
              <a href="#contact">Đăng ký ngay</a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-primary/40 text-primary hover:bg-primary/10 rounded-none tracking-widest uppercase text-[11px]"
            >
              <a href={`tel:${project.hotline}`}>
                <Phone className="mr-2 size-4" />
                {project.hotline}
              </a>
            </Button>
          </div>
        </div>

      </div>
    </section>
  )
}

