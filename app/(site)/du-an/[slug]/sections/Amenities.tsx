// Server Component
import {
  Waves, Dumbbell, Trees, Shield, Car, Utensils,
  School, Building2, Sunset, Gamepad2, Coffee, Sparkles,
  Star, Wifi, ShoppingBag, Heart, Music, Zap,
  type LucideIcon,
} from "lucide-react"
import type { Project } from "@/lib/projects/types"

// ── Icon registry: maps string names from config to Lucide components ──
const ICON_MAP: Record<string, LucideIcon> = {
  Waves, Dumbbell, Trees, Shield, Car, Utensils,
  School, Building2, Sunset, Gamepad2, Coffee, Sparkles,
  Star, Wifi, ShoppingBag, Heart, Music, Zap,
}

function AmenityIcon({ name }: { name: string }) {
  const Icon = ICON_MAP[name]
  if (!Icon) return <Star className="size-6 text-primary" />
  return <Icon className="size-6 text-primary" />
}

interface AmenitiesProps {
  project: Project
}

export function Amenities({ project }: AmenitiesProps) {
  const { amenities } = project

  return (
    <section id="amenities" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">

        {/* ── Section header ── */}
        <div className="text-center mb-16">
          <p className="text-[10px] tracking-[0.4em] uppercase text-primary font-semibold mb-3">
            Tiện ích
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-4">
            {amenities.title}
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="block h-px w-10 bg-primary" />
            <span className="block w-1 h-1 rounded-full bg-primary" />
            <span className="block h-px w-10 bg-primary" />
          </div>
          <p className="text-muted-foreground text-base font-light max-w-2xl mx-auto">
            {amenities.description}
          </p>
        </div>

        {/* ── Amenity grid ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {amenities.items.map((item) => (
            <div
              key={item.name}
              className="group border border-border rounded-lg p-5 flex flex-col gap-3 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <AmenityIcon name={item.icon} />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  {item.name}
                </p>
                {item.description && (
                  <p className="text-[12px] text-muted-foreground mt-0.5 leading-snug">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

