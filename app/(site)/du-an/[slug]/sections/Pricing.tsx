// Server Component
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/lib/projects/types";

interface PricingProps {
  project: Project;
}

// badge variant mapping for urgency
function badgeStyle(badge?: string) {
  if (!badge) return "secondary";
  if (
    badge.includes("hết") ||
    badge.includes("Giới hạn") ||
    badge.includes("Độc quyền")
  )
    return "destructive";
  return "secondary";
}

export function Pricing({ project }: PricingProps) {
  const { pricing } = project;

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

        {/* ── Mobile: card layout ── */}
        <div className="block md:hidden space-y-3 mb-8">
          {pricing.units.map((unit, i) => (
            <div
              key={unit.type}
              className={`border border-border rounded-lg overflow-hidden ${
                i % 2 === 0 ? "bg-card" : "bg-primary/[0.03]"
              }`}
            >
              <div className="p-4 space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-heading font-medium text-foreground text-base shrink-0">
                    {unit.type}
                  </h3>
                  {unit.badge && (
                    <Badge
                      variant={
                        badgeStyle(unit.badge) as "secondary" | "destructive"
                      }
                      className="text-[10px] rounded-none tracking-wide shrink-0"
                    >
                      {unit.badge}
                    </Badge>
                  )}
                </div>
                <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-sm">
                  <span className="text-muted-foreground">Diện tích</span>
                  <span>{unit.area}</span>
                  <span className="text-muted-foreground">Giá</span>
                  <span className="text-primary font-semibold">{unit.price}</span>
                  {unit.pricePerSqm != null && (
                    <>
                      <span className="text-muted-foreground">Giá/m²</span>
                      <span className="text-muted-foreground">{unit.pricePerSqm}</span>
                    </>
                  )}
                  {unit.available !== undefined && unit.total !== undefined && (
                    <>
                      <span className="text-muted-foreground">Trạng thái</span>
                      <span className="text-muted-foreground text-[11px]">
                        {unit.available}/{unit.total} căn
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Desktop: table ── */}
        <div className="hidden md:block border border-border rounded-lg overflow-hidden mb-8">
          {/* Table header */}
          <div className="grid grid-cols-5 gap-px bg-primary/20 text-[11px] tracking-[0.25em] uppercase text-primary px-0">
            <div className="bg-card px-5 py-3">Loại căn</div>
            <div className="bg-card px-5 py-3">Diện tích</div>
            <div className="bg-card px-5 py-3">Giá</div>
            <div className="bg-card px-5 py-3">Giá/m²</div>
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
              <div className="bg-card px-5 py-4 text-muted-foreground">
                {unit.pricePerSqm ?? "—"}
              </div>
              <div className="bg-card px-5 py-4">
                {unit.badge && (
                  <Badge
                    variant={
                      badgeStyle(unit.badge) as "secondary" | "destructive"
                    }
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
        <p className="text-muted-foreground text-xs leading-relaxed mb-8 italic min-w-0">
          {pricing.note}
        </p>
      </div>
    </section>
  );
}
