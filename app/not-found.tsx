// ─────────────────────────────────────────────────────────────
//  Global 404 – Friendly not-found page
//  Rendered when notFound() is called (invalid slug, etc.)
// ─────────────────────────────────────────────────────────────

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Phone } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 text-center">

      {/* Decorative gold number */}
      <p className="font-heading text-[140px] md:text-[200px] font-light leading-none text-primary/15 select-none">
        404
      </p>

      {/* Content */}
      <div className="-mt-6 flex flex-col items-center gap-5">
        {/* Gold rule */}
        <div className="flex items-center gap-3">
          <span className="block h-px w-10 bg-primary" />
          <span className="block w-1.5 h-1.5 rounded-full bg-primary" />
          <span className="block h-px w-10 bg-primary" />
        </div>

        <h1 className="font-heading text-3xl md:text-4xl font-light text-foreground">
          Trang không tồn tại
        </h1>

        <p className="text-muted-foreground text-base font-light max-w-sm leading-relaxed">
          Dự án hoặc trang bạn tìm kiếm không tồn tại, đã bị xoá hoặc đường
          dẫn không chính xác.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 mt-4">
          <Button
            asChild
            className="bg-primary text-black hover:bg-primary/90 rounded-none tracking-[0.2em] uppercase text-[11px] font-semibold px-8 h-11"
          >
            <Link href="/">
              <Home className="mr-2 size-4" />
              Về trang chủ
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-border text-muted-foreground hover:text-foreground hover:border-primary/40 rounded-none tracking-[0.2em] uppercase text-[11px] px-8 h-11"
          >
            <a href="tel:0857161157">
              <Phone className="mr-2 size-4" />
              Liên hệ tư vấn
            </a>
          </Button>
        </div>
      </div>

    </div>
  )
}

