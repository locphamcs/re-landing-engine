// ─────────────────────────────────────────────────────────────
//  ProjectLandingPage – Server Component
//
//  Single source of truth for rendering a project landing page.
//  Used by BOTH:
//    • app/page.tsx             (home, default project)
//    • app/(site)/du-an/[slug]/page.tsx  (dynamic route)
//
//  Only the interactive sections (Gallery, MasterPlan, Contact)
//  are "use client" — everything else is server-rendered.
// ─────────────────────────────────────────────────────────────

import Image from "next/image";
import { Phone, FileText } from "lucide-react";
import type { Project } from "@/lib/projects/types";
import { buildProjectJsonLd } from "@/lib/projects/metadata";

// ── Section imports (each section is Server or Client as needed) ──
import { Hero } from "@/app/(site)/du-an/[slug]/sections/Hero";
import { Overview } from "@/app/(site)/du-an/[slug]/sections/Overview";
import { Location } from "@/app/(site)/du-an/[slug]/sections/Location";
import { HandoverMaterials } from "@/app/(site)/du-an/[slug]/sections/HandoverMaterials";
import { Amenities } from "@/app/(site)/du-an/[slug]/sections/Amenities";
import { MasterPlan } from "@/app/(site)/du-an/[slug]/sections/MasterPlan";
import { Gallery } from "@/app/(site)/du-an/[slug]/sections/Gallery";
import { SalesPolicy } from "@/app/(site)/du-an/[slug]/sections/SalesPolicy";
import { Pricing } from "@/app/(site)/du-an/[slug]/sections/Pricing";
import { Contact } from "@/app/(site)/du-an/[slug]/sections/Contact";

interface ProjectLandingPageProps {
  project: Project;
}

export function ProjectLandingPage({ project }: ProjectLandingPageProps) {
  const jsonLd = buildProjectJsonLd(project);

  return (
    <>
      {/* ── JSON-LD structured data ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Main content: pb-16 on mobile so sticky bar doesn't overlap ── */}
      <main className="pb-16 md:pb-0">
        <Hero project={project} />
        <Overview project={project} />
        <Location project={project} />
        <HandoverMaterials project={project} />
        {/* <Amenities project={project} /> */}
        {/* <MasterPlan project={project} /> */}
        <Gallery project={project} />
        <SalesPolicy project={project} />
        <Pricing project={project} />
        <Contact project={project} />

        {/* ── Footer strip ── */}
        <footer className="bg-card border-t border-border py-10 text-center">
          <p className="text-[10px] tracking-[0.4em] uppercase text-primary font-semibold mb-1">
            {project.brand}
          </p>
          <p className="text-muted-foreground text-xs">
            {project.name} — {project.address}
          </p>
          <p className="text-muted-foreground text-xs mt-1">
            Hotline:{" "}
            <a
              href={`tel:${project.hotline}`}
              className="text-primary hover:underline"
            >
              {project.hotline}
            </a>
          </p>
          <p className="text-muted-foreground/30 text-[10px] mt-5">
            © {new Date().getFullYear()} {project.brand}. Thông tin dự án mang
            tính tham khảo, không có giá trị pháp lý.
          </p>
        </footer>
      </main>

      {/* ── Sticky CTA bar — mobile (bottom) ── */}
      <div className="fixed bottom-0 inset-x-0 z-50 md:hidden flex border-t border-border">
        <a
          href={`tel:${project.hotline}`}
          className="
            flex-1 flex items-center justify-center gap-2
            bg-primary text-black font-semibold text-sm tracking-widest uppercase
            py-4 hover:brightness-110 active:brightness-95 transition-all
          "
        >
          <Phone className="size-4" />
          Gọi ngay
        </a>
        <a
          href={`https://zalo.me/${project.zalo}`}
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex-1 flex items-center justify-center gap-2
            bg-background text-primary border-l border-border
            font-semibold text-sm tracking-widest uppercase
            py-4 hover:bg-primary/10 transition-all
          "
        >
          <Image
            src="/projects/the-reflection-westlake/Icon_Zalo.svg.png"
            alt="Zalo"
            width={20}
            height={20}
            className="shrink-0"
          />
          Zalo
        </a>
      </div>

      {/* ── Floating CTA pills — desktop (bottom-right) ── */}
      <div className="fixed right-5 bottom-8 z-50 hidden md:flex flex-col gap-3">
        <a
          href={`tel:${project.hotline}`}
          title={`Gọi ngay: ${project.hotline}`}
          className="
            flex items-center gap-2 bg-primary text-black text-xs font-semibold
            tracking-widest uppercase px-5 py-3 rounded-full
            shadow-lg shadow-primary/25 hover:brightness-110 transition-all
          "
        >
          <Phone className="size-4" />
          {project.hotline}
        </a>
        <a
          href={`https://zalo.me/${project.zalo}`}
          target="_blank"
          rel="noopener noreferrer"
          title="Chat Zalo"
          className="
            flex items-center gap-2 bg-white border border-[#C7A15A] text-foreground
            text-xs font-semibold tracking-widest uppercase px-5 py-3 rounded-full
            shadow-md hover:bg-[#C7A15A] hover:text-black transition-all
          "
        >
          <Image
            src="/projects/the-reflection-westlake/Icon_Zalo.svg.png"
            alt="Zalo"
            width={18}
            height={18}
            className="shrink-0"
          />
          Zalo
        </a>
        <a
          href="#contact"
          title="Nhận bảng giá"
          className="
            flex items-center gap-2 bg-white border border-[#C7A15A] text-foreground
            text-xs font-semibold tracking-widest uppercase px-5 py-3 rounded-full
            shadow-md hover:bg-[#C7A15A] hover:text-black transition-all
          "
        >
          <FileText className="size-4" />
          NHẬN BẢNG GIÁ
        </a>
      </div>
    </>
  );
}
