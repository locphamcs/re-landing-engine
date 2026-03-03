"use client"
// Client Component – uses Dialog lightbox (interactive)
import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Project } from "@/lib/projects/types"

interface GalleryProps {
  project: Project
}

export function Gallery({ project }: GalleryProps) {
  const { gallery } = project
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  function openAt(i: number) {
    setIndex(i)
    setOpen(true)
  }

  function prev() {
    setIndex((i) => (i - 1 + gallery.images.length) % gallery.images.length)
  }

  function next() {
    setIndex((i) => (i + 1) % gallery.images.length)
  }

  const current = gallery.images[index]

  return (
    <section id="gallery" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">

        {/* ── Section header ── */}
        <div className="text-center mb-14">
          <p className="text-[10px] tracking-[0.4em] uppercase text-primary font-semibold mb-3">
            Hình ảnh
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-4">
            {gallery.title}
          </h2>
          <div className="flex items-center justify-center gap-3">
            <span className="block h-px w-10 bg-primary" />
            <span className="block w-1 h-1 rounded-full bg-primary" />
            <span className="block h-px w-10 bg-primary" />
          </div>
        </div>

        {/* ── Masonry-style grid ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {gallery.images.map((img, i) => {
            // Make 1st and 5th images larger (span 2 cols)
            const isLarge = i === 0 || i === 4
            return (
              <button
                key={img.src}
                onClick={() => openAt(i)}
                className={`
                  group relative overflow-hidden rounded-lg bg-secondary
                  ${isLarge ? "col-span-2 aspect-[16/9]" : "aspect-square"}
                  border border-border hover:border-primary/50 transition-all
                `}
                aria-label={`Xem ảnh: ${img.alt}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                {/* hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <ZoomIn className="size-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                {/* caption badge */}
                {img.caption && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-3 py-2 translate-y-full group-hover:translate-y-0 transition-transform">
                    <p className="text-white text-xs truncate">{img.caption}</p>
                  </div>
                )}
              </button>
            )
          })}
        </div>

        {/* ── Lightbox Dialog ── */}
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="max-w-5xl w-full p-0 bg-black border-none rounded-none overflow-hidden">
            <div className="relative">
              {/* Close */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 z-50 text-white/70 hover:text-white transition-colors"
                aria-label="Đóng"
              >
                <X className="size-6" />
              </button>

              {/* Image */}
              <div className="relative aspect-[16/10] w-full bg-black">
                {current && (
                  <Image
                    src={current.src}
                    alt={current.alt}
                    fill
                    className="object-contain"
                    sizes="90vw"
                    priority
                  />
                )}
              </div>

              {/* Caption + counter */}
              <div className="flex items-center justify-between px-6 py-3 bg-black/80">
                <p className="text-white/70 text-sm">{current?.caption}</p>
                <p className="text-primary text-sm font-medium">
                  {index + 1} / {gallery.images.length}
                </p>
              </div>

              {/* Prev / Next */}
              <Button
                variant="ghost"
                size="icon"
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 size-10"
                aria-label="Ảnh trước"
              >
                <ChevronLeft className="size-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 size-10"
                aria-label="Ảnh tiếp"
              >
                <ChevronRight className="size-6" />
              </Button>
            </div>
          </DialogContent>
        </Dialog>

      </div>
    </section>
  )
}

