"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Project } from "@/lib/projects/types"

const GALLERY_CATEGORIES = [
  { id: "all" as const, label: "Tất cả" },
  { id: "noi-that" as const, label: "Nội thất căn hộ" },
  { id: "layout" as const, label: "Layout căn hộ" },
  { id: "mat-bang" as const, label: "Mặt bằng tầng" },
] as const

type CategoryId = (typeof GALLERY_CATEGORIES)[number]["id"]

interface GallerySectionProps {
  project: Project
}

export function GallerySection({ project }: GallerySectionProps) {
  const { gallery } = project
  const [activeCategory, setActiveCategory] = useState<CategoryId>("all")
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const filteredImages = useMemo(() => {
    if (activeCategory === "all") return gallery.images
    return gallery.images.filter((img) => img.category === activeCategory)
  }, [gallery.images, activeCategory])

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const goPrev = () => {
    setLightboxIndex((i) =>
      i - 1 < 0 ? filteredImages.length - 1 : i - 1
    )
  }

  const goNext = () => {
    setLightboxIndex((i) => (i + 1) % filteredImages.length)
  }

  const currentImage = filteredImages[lightboxIndex]

  return (
    <section
      id="gallery"
      className="py-24 md:py-32 bg-background"
      aria-labelledby="gallery-heading"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section header */}
        <div className="text-center mb-10 md:mb-14">
          <p
            id="gallery-heading"
            className="text-[10px] tracking-[0.4em] uppercase text-primary font-semibold mb-3"
          >
            HÌNH ẢNH
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

        {/* Category tabs */}
        <div
          className="flex flex-wrap justify-center gap-2 mb-8 md:mb-10"
          role="tablist"
          aria-label="Lọc theo danh mục ảnh"
        >
          {GALLERY_CATEGORIES.map(({ id, label }) => {
            const isActive = activeCategory === id
            const count =
              id === "all"
                ? gallery.images.length
                : gallery.images.filter((img) => img.category === id).length
            if (id !== "all" && count === 0) return null

            return (
              <button
                key={id}
                role="tab"
                aria-selected={isActive}
                aria-controls="gallery-grid"
                id={`tab-${id}`}
                onClick={() => setActiveCategory(id)}
                className={`
                  px-4 py-2.5 rounded-full text-sm font-medium
                  transition-all duration-300
                  border
                  ${isActive
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-background text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
                  }
                `}
              >
                {label}
                {id !== "all" && (
                  <span
                    className={`
                      ml-1.5 opacity-80
                      ${isActive ? "text-primary-foreground" : "text-muted-foreground"}
                    `}
                  >
                    ({count})
                  </span>
                )}
              </button>
            )
          })}
        </div>

        {/* Gallery grid: mobile 2 cols, desktop 4 cols; first item 2x2 on desktop */}
        <div
          id="gallery-grid"
          role="tabpanel"
          aria-labelledby={`tab-${activeCategory}`}
          className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3"
        >
          {filteredImages.map((img, i) => {
            const isLarge = i === 0
            return (
              <button
                key={`${img.src}-${i}`}
                type="button"
                onClick={() => openLightbox(i)}
                className={`
                  group relative overflow-hidden rounded-xl md:rounded-2xl
                  bg-secondary border border-border
                  hover:border-primary/50 transition-all duration-300
                  col-span-1
                  ${isLarge ? "md:col-span-2 md:row-span-2" : ""}
                  ${isLarge ? "aspect-square md:aspect-auto md:min-h-[280px]" : "aspect-square"}
                `}
                aria-label={`Xem ảnh: ${img.alt}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 25vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <ZoomIn className="size-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                {img.caption && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-3 py-2.5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-b-xl md:rounded-b-2xl">
                    <p className="text-white text-xs truncate">{img.caption}</p>
                  </div>
                )}
              </button>
            )
          })}
        </div>

        {/* Fullscreen lightbox */}
        <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
          <DialogContent
            showCloseButton={false}
            className="!fixed !inset-0 !top-0 !left-0 !right-0 !bottom-0 !z-50 !flex !flex-col !w-full !h-full !max-w-[100vw] !max-h-[100vh] !translate-x-0 !translate-y-0 p-0 bg-black border-none rounded-none overflow-hidden gap-0 shadow-none outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
          >
            <DialogTitle className="sr-only">
              {currentImage
                ? `${currentImage.alt} (${lightboxIndex + 1}/${filteredImages.length})`
                : "Thư viện ảnh"}
            </DialogTitle>
            <div className="relative flex-1 flex flex-col min-h-0 overflow-hidden">
              <button
                type="button"
                onClick={() => setLightboxOpen(false)}
                className="absolute top-4 right-4 z-50 text-white/70 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10"
                aria-label="Đóng"
              >
                <X className="size-6" />
              </button>

              <div className="relative flex-1 min-h-0 w-full bg-black">
                {currentImage && (
                  <Image
                    src={currentImage.src}
                    alt={currentImage.alt}
                    fill
                    className="object-contain"
                    sizes="100vw"
                    priority
                  />
                )}
              </div>

              <div className="flex items-center justify-between px-4 py-2.5 bg-black/90 shrink-0">
                <p className="text-white/70 text-sm truncate">
                  {currentImage?.caption ?? currentImage?.alt}
                </p>
                <p className="text-primary text-sm font-medium shrink-0 ml-2">
                  {lightboxIndex + 1} / {filteredImages.length}
                </p>
              </div>

              {filteredImages.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={goPrev}
                    className="absolute left-2 md:left-3 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 size-9 md:size-10 z-10"
                    aria-label="Ảnh trước"
                  >
                    <ChevronLeft className="size-5 md:size-6" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={goNext}
                    className="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 size-9 md:size-10 z-10"
                    aria-label="Ảnh tiếp"
                  >
                    <ChevronRight className="size-5 md:size-6" />
                  </Button>
                </>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
