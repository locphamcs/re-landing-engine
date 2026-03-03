"use client"
// Client Component – interactive form with state
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { Phone, MessageCircle, MapPin, CheckCircle2, Loader2 } from "lucide-react"
import type { Project } from "@/lib/projects/types"

interface ContactProps {
  project: Project
}

type FormState = "idle" | "submitting" | "success"

export function Contact({ project }: ContactProps) {
  const { contact } = project
  const { formFields } = contact

  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [need, setNeed] = useState(formFields.needOptions[0])
  const [formState, setFormState] = useState<FormState>("idle")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!name.trim() || !phone.trim()) return
    setFormState("submitting")
    // TODO: replace with real API call / form webhook
    await new Promise((r) => setTimeout(r, 1200))
    setFormState("success")
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 max-w-5xl">

        {/* ── Section header ── */}
        <div className="text-center mb-14">
          <p className="text-[10px] tracking-[0.4em] uppercase text-primary font-semibold mb-3">
            Liên hệ
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-4">
            {contact.title}
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="block h-px w-10 bg-primary" />
            <span className="block w-1 h-1 rounded-full bg-primary" />
            <span className="block h-px w-10 bg-primary" />
          </div>
          <p className="text-muted-foreground text-base font-light max-w-xl mx-auto">
            {contact.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* ── Form ── */}
          <div className="border border-border rounded-lg p-8">
            {formState === "success" ? (
              <div className="flex flex-col items-center justify-center gap-4 py-10 text-center">
                <CheckCircle2 className="size-12 text-primary" />
                <p className="font-heading text-xl text-foreground">
                  {formFields.successMessage}
                </p>
                <Button
                  variant="outline"
                  onClick={() => setFormState("idle")}
                  className="rounded-none border-border tracking-widest uppercase text-xs mt-4"
                >
                  Đăng ký thêm
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Full name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground">
                    {formFields.fullNameLabel} *
                  </label>
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nguyễn Văn A"
                    required
                    className="rounded-none border-border bg-card focus-visible:border-primary h-11"
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground">
                    {formFields.phoneLabel} *
                  </label>
                  <Input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="09xx xxx xxx"
                    required
                    className="rounded-none border-border bg-card focus-visible:border-primary h-11"
                  />
                </div>

                {/* Need – select via Textarea workaround (native select for server compat) */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground">
                    {formFields.needLabel}
                  </label>
                  <select
                    value={need}
                    onChange={(e) => setNeed(e.target.value)}
                    className="
                      h-11 w-full rounded-none border border-border bg-card px-3 text-sm text-foreground
                      focus:outline-none focus:border-primary transition-colors
                    "
                  >
                    {formFields.needOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <Button
                  type="submit"
                  disabled={formState === "submitting"}
                  className="bg-primary text-black hover:bg-primary/90 rounded-none h-12 tracking-[0.2em] uppercase text-[11px] font-semibold mt-2"
                >
                  {formState === "submitting" ? (
                    <Loader2 className="size-4 animate-spin mr-2" />
                  ) : null}
                  {formFields.submitLabel}
                </Button>
              </form>
            )}
          </div>

          {/* ── Contact info ── */}
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-[10px] tracking-[0.35em] uppercase text-muted-foreground mb-2">
                Chủ đầu tư
              </p>
              <p className="font-heading text-2xl text-foreground">{contact.developerName}</p>
            </div>

            <Separator className="bg-border" />

            {/* Hotline */}
            <a
              href={`tel:${project.hotline}`}
              className="flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <Phone className="size-5 text-primary" />
              </div>
              <div>
                <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                  Hotline
                </p>
                <p className="text-foreground font-semibold font-heading text-xl group-hover:text-primary transition-colors">
                  {project.hotline}
                </p>
              </div>
            </a>

            {/* Zalo */}
            <a
              href={`https://zalo.me/${project.zalo}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <MessageCircle className="size-5 text-primary" />
              </div>
              <div>
                <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                  Zalo
                </p>
                <p className="text-foreground font-semibold font-heading text-xl group-hover:text-primary transition-colors">
                  {project.zalo}
                </p>
              </div>
            </a>

            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center shrink-0">
                <MapPin className="size-5 text-primary" />
              </div>
              <div>
                <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-1">
                  Văn phòng dự án
                </p>
                <p className="text-foreground text-sm leading-relaxed">
                  {contact.developerAddress}
                </p>
              </div>
            </div>

            {/* Booking info */}
            <div className="border border-primary/30 rounded-lg px-5 py-4 bg-primary/5">
              <p className="text-[11px] tracking-[0.3em] uppercase text-primary mb-1">
                Đặt cọc tối thiểu
              </p>
              <p className="font-heading text-2xl text-foreground">{project.bookingMin}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

