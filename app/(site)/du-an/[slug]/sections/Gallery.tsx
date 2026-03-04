"use client"
// Client Component – uses Dialog lightbox (interactive)
import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
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

        {/* ── Masonry-style grid: mobile 2 cột đều, desktop 4 cột (ảnh 1 & 5 rộng 2) ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
          {gallery.images.map((img, i) => {
            const isLarge = i === 0 || i === 4
            return (
              <button
                key={img.src}
                onClick={() => openAt(i)}
                className={`
                  group relative overflow-hidden rounded-lg bg-secondary
                  col-span-1 ${isLarge ? "md:col-span-2" : ""}
                  ${isLarge ? "aspect-square md:aspect-[16/9]" : "aspect-square"}
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

        {/* ── Lightbox: full màn, ghi đè hết style mặc định Dialog (tránh sm:max-w-lg) ── */}
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent
            showCloseButton={false}
            className="!fixed !inset-0 !top-0 !left-0 !right-0 !bottom-0 !z-50 !flex !flex-col !w-full !h-full !max-w-[100vw] !max-h-[100vh] !translate-x-0 !translate-y-0 p-0 bg-black border-none rounded-none overflow-hidden gap-0 shadow-none outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
          >
            <DialogTitle className="sr-only">
              {current ? `${current.alt} (${index + 1}/${gallery.images.length})` : "Thư viện ảnh"}
            </DialogTitle>
            <div className="relative flex-1 flex flex-col min-h-0 overflow-hidden">
              {/* Close */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 z-50 text-white/70 hover:text-white transition-colors"
                aria-label="Đóng"
              >
                <X className="size-6" />
              </button>

              {/* Ảnh chiếm toàn bộ phần còn lại */}
              <div className="relative flex-1 min-h-0 w-full bg-black">
                {current && (
                  <Image
                    src={current.src}
                    alt={current.alt}
                    fill
                    className="object-contain"
                    sizes="100vw"
                    priority
                  />
                )}
              </div>

              {/* Thanh caption mỏng */}
              <div className="flex items-center justify-between px-4 py-2 bg-black/90 shrink-0">
                <p className="text-white/70 text-sm truncate">{current?.caption}</p>
                <p className="text-primary text-sm font-medium shrink-0 ml-2">
                  {index + 1} / {gallery.images.length}
                </p>
              </div>

              {/* Prev / Next */}
              <Button
                variant="ghost"
                size="icon"
                onClick={prev}
                className="absolute left-2 md:left-3 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 size-9 md:size-10 z-10"
                aria-label="Ảnh trước"
              >
                <ChevronLeft className="size-5 md:size-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={next}
                className="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 size-9 md:size-10 z-10"
                aria-label="Ảnh tiếp"
              >
                <ChevronRight className="size-5 md:size-6" />
              </Button>
            </div>
          </DialogContent>
        </Dialog>

      </div>
    </section>
  )
}

