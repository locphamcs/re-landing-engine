"use client"
// Client Component – uses Tabs (interactive)
import Image from "next/image"
import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { Project } from "@/lib/projects/types"

interface MasterPlanProps {
  project: Project
}

export function MasterPlan({ project }: MasterPlanProps) {
  const { masterPlan } = project
  const [activeZone, setActiveZone] = useState(masterPlan.zones[0]?.name ?? "")

  return (
    <section id="masterplan" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6 max-w-6xl">

        {/* ── Section header ── */}
        <div className="text-center mb-14">
          <p className="text-[10px] tracking-[0.4em] uppercase text-primary font-semibold mb-3">
            Quy hoạch
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-4">
            {masterPlan.title}
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="block h-px w-10 bg-primary" />
            <span className="block w-1 h-1 rounded-full bg-primary" />
            <span className="block h-px w-10 bg-primary" />
          </div>
          <p className="text-muted-foreground text-base font-light max-w-2xl mx-auto">
            {masterPlan.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* ── Master plan image ── */}
          <div className="relative aspect-square rounded-lg overflow-hidden border border-border bg-secondary">
            {masterPlan.image ? (
              <Image
                src={masterPlan.image}
                alt={`Mặt bằng ${project.name}`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <p className="text-muted-foreground text-sm tracking-widest uppercase">
                  Mặt bằng đang cập nhật
                </p>
              </div>
            )}
          </div>

          {/* ── Zone tabs ── */}
          <Tabs
            value={activeZone}
            onValueChange={setActiveZone}
            className="flex flex-col gap-2"
          >
            <TabsList className="flex flex-col h-auto gap-1 bg-transparent p-0">
              {masterPlan.zones.map((zone) => (
                <TabsTrigger
                  key={zone.name}
                  value={zone.name}
                  className="
                    w-full justify-start text-left px-5 py-3 rounded-none border border-border
                    text-muted-foreground text-sm tracking-wide
                    data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:bg-primary/5
                    hover:border-primary/40 hover:text-foreground transition-all
                  "
                >
                  {zone.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {masterPlan.zones.map((zone) => (
              <TabsContent key={zone.name} value={zone.name} className="mt-4">
                <div className="border border-primary/20 rounded-lg p-6 bg-background">
                  <h3 className="font-heading text-xl text-primary mb-3">{zone.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {zone.description}
                  </p>
                </div>
              </TabsContent>
            ))}
          </Tabs>

        </div>
      </div>
    </section>
  )
}

