// Server Component
import { MapPin, Navigation, Clock } from "lucide-react"
import type { Project } from "@/lib/projects/types"

interface LocationProps {
  project: Project
}

// Connection points shown beside the map (hard-coded for this design, content from project config)
const NEARBY_POI = [
  { icon: Clock, label: "Sân bay Nội Bài", value: "~35 phút" },
  { icon: Navigation, label: "Trung tâm Hoàn Kiếm", value: "~20 phút" },
  { icon: Navigation, label: "Times City", value: "~15 phút" },
  { icon: Navigation, label: "Vincom Phạm Ngọc Thạch", value: "~18 phút" },
  { icon: Navigation, label: "Bệnh viện Bạch Mai", value: "~20 phút" },
  { icon: Navigation, label: "Trường THPT Chu Văn An", value: "~5 phút" },
]

export function Location({ project }: LocationProps) {
  return (
    <section id="location" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6 max-w-6xl">

        {/* ── Section header ── */}
        <div className="text-center mb-14">
          <p className="text-[10px] tracking-[0.4em] uppercase text-primary font-semibold mb-3">
            Vị trí
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-4">
            Vị trí vàng Tây Hồ
          </h2>
          <div className="flex items-center justify-center gap-3">
            <span className="block h-px w-10 bg-primary" />
            <span className="block w-1 h-1 rounded-full bg-primary" />
            <span className="block h-px w-10 bg-primary" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* ── Map embed ── */}
          <div className="aspect-[4/3] rounded-lg overflow-hidden border border-border">
            {project.mapEmbedUrl ? (
              <iframe
                src={project.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Bản đồ ${project.name}`}
              />
            ) : (
              /* Placeholder khi chưa có map embed URL */
              <div className="w-full h-full bg-secondary flex flex-col items-center justify-center gap-3 text-muted-foreground">
                <MapPin className="size-10 text-primary/40" />
                <p className="text-sm tracking-widest uppercase">Bản đồ đang cập nhật</p>
              </div>
            )}
          </div>

          {/* ── Info panel ── */}
          <div className="flex flex-col gap-6">
            {/* Address */}
            <div className="flex items-start gap-4">
              <MapPin className="size-5 text-primary mt-1 shrink-0" />
              <div>
                <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-1">
                  Địa chỉ
                </p>
                <p className="text-foreground font-light text-base leading-relaxed">
                  {project.address}
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-border" />

            {/* Nearby POI */}
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-4">
                Khoảng cách di chuyển
              </p>
              <ul className="space-y-3">
                {NEARBY_POI.map((poi) => (
                  <li
                    key={poi.label}
                    className="flex items-center justify-between text-sm"
                  >
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <poi.icon className="size-3.5 text-primary/60" />
                      <span>{poi.label}</span>
                    </div>
                    <span className="text-primary font-medium">{poi.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

