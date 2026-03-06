"use client"

import { GallerySection } from "@/components/project/GallerySection"
import type { Project } from "@/lib/projects/types"

interface GalleryProps {
  project: Project
}

export function Gallery({ project }: GalleryProps) {
  return <GallerySection project={project} />
}

