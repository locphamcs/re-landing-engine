"use client";
// Client Component – interactive form with state
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Phone,
  MapPin,
  CheckCircle2,
  Loader2,
  ShieldCheck,
  MessageCircle,
} from "lucide-react";
import type { Project } from "@/lib/projects/types";

interface ContactProps {
  project: Project;
}

type FormState = "idle" | "submitting" | "success";

export function Contact({ project }: ContactProps) {
  const { contact } = project;
  const { formFields } = contact;

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [need, setNeed] = useState(formFields.needOptions[0]);
  const [formState, setFormState] = useState<FormState>("idle");
  const [nameError, setNameError] = useState<string | null>(null);
  const [phoneError, setPhoneError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const cleanName = name.trim();
    const cleanPhone = phone.trim().replace(/\s+/g, "");

    // Clear previous errors
    setNameError(null);
    setPhoneError(null);

    let hasError = false;
    if (!cleanName) {
      setNameError("Vui lòng nhập họ tên.");
      hasError = true;
    }
    if (!cleanPhone) {
      setPhoneError("Vui lòng nhập số điện thoại.");
      hasError = true;
    } else if (!/^(0|\+84)\d{9,10}$/.test(cleanPhone)) {
      setPhoneError("Số điện thoại không hợp lệ.");
      hasError = true;
    }
    if (hasError) return;

    setFormState("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: cleanName,
          phone: cleanPhone,
          need,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Gửi thất bại");
      }

      setFormState("success");
      setName("");
      setPhone("");
      setNameError(null);
      setPhoneError(null);
      setNeed(formFields.needOptions[0]);
    } catch (error) {
      console.error("Submit error:", error);
      alert("Gửi thông tin thất bại. Vui lòng thử lại.");
      setFormState("idle");
    }
  }

  const inputBase =
    "h-11 w-full rounded-lg border border-neutral-200 bg-white px-3 text-sm text-foreground font-sans transition-colors focus-visible:border-[#C7A15A] focus:outline-none focus-visible:ring-0";

  return (
    <section id="contact" className="py-28 bg-background">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* ── Section header ── */}
        <div className="text-center mb-16">
          <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-[#C7A15A] font-medium mb-3">
            LIÊN HỆ
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-4">
            Đăng ký nhận bảng giá
          </h2>
          <div className="flex justify-center mb-6">
            <span className="block h-px w-16 bg-[#C7A15A]/60" aria-hidden />
          </div>
          <p className="font-sans text-muted-foreground text-base font-normal max-w-xl mx-auto leading-relaxed">
            Để lại thông tin để nhận bảng giá mới nhất và tư vấn chi tiết từ
            chuyên viên dự án.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-16 items-start">
          {/* ── Form ── */}
          <div className="border border-neutral-200/80 rounded-lg p-8 bg-card/50">
            {formState === "success" ? (
              <div className="flex flex-col items-center justify-center gap-4 py-10 text-center">
                <CheckCircle2 className="size-12 text-[#C7A15A]" />
                <p className="font-heading text-xl text-foreground">
                  {formFields.successMessage}
                </p>
                <Button
                  variant="outline"
                  onClick={() => setFormState("idle")}
                  className="rounded-lg border-neutral-200 tracking-widest uppercase text-xs mt-4 font-sans hover:border-[#C7A15A] hover:bg-[#C7A15A]/5"
                >
                  Đăng ký thêm
                </Button>
              </div>
            ) : (
              <>
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col space-y-5"
                >
                  <div className="flex flex-col gap-1.5">
                    <label className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground">
                      {formFields.fullNameLabel} *
                    </label>
                    <Input
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (nameError) setNameError(null);
                      }}
                      placeholder="Nguyễn Văn A"
                      required
                      className={`${inputBase} ${nameError ? "border-red-500 focus-visible:border-red-500" : ""}`}
                      aria-invalid={!!nameError}
                    />
                    {nameError && (
                      <p className="font-sans text-xs text-red-500 mt-0.5" role="alert">
                        {nameError}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground">
                      {formFields.phoneLabel} *
                    </label>
                    <Input
                      type="tel"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        if (phoneError) setPhoneError(null);
                      }}
                      placeholder="09xx xxx xxx"
                      required
                      className={`${inputBase} ${phoneError ? "border-red-500 focus-visible:border-red-500" : ""}`}
                      aria-invalid={!!phoneError}
                    />
                    {phoneError && (
                      <p className="font-sans text-xs text-red-500 mt-0.5" role="alert">
                        {phoneError}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground">
                      {formFields.needLabel}
                    </label>
                    <select
                      value={need}
                      onChange={(e) => setNeed(e.target.value)}
                      className={inputBase}
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
                    className="mt-1 h-12 rounded-lg bg-[#C7A15A] text-primary-foreground font-sans font-semibold tracking-[0.2em] uppercase text-xs hover:bg-[#B8935D] focus-visible:ring-0 focus-visible:ring-offset-0 border-0"
                  >
                    {formState === "submitting" ? (
                      <Loader2 className="size-4 animate-spin mr-2" />
                    ) : null}
                    NHẬN BẢNG GIÁ NGAY
                  </Button>
                </form>
                <p className="font-sans text-muted-foreground text-xs mt-5 flex items-center gap-2">
                  <ShieldCheck className="size-3.5 shrink-0 text-[#C7A15A]" />
                  Thông tin của bạn sẽ được bảo mật tuyệt đối.
                </p>
              </>
            )}
          </div>

          {/* ── Contact info ── */}
          <div className="flex flex-col gap-10">
            {/* Chủ đầu tư */}
            <div>
              <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-muted-foreground mb-2">
                Chủ đầu tư
              </p>
              <p className="font-heading text-2xl text-foreground">
                {contact.developerName}
              </p>
            </div>

            {/* Thông tin liên hệ */}
            <div>
              <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-muted-foreground mb-5">
                Thông tin liên hệ
              </p>
              <div className="flex flex-col gap-6">
                <a
                  href={`tel:${project.hotline}`}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-11 h-11 rounded-lg border border-neutral-200 flex items-center justify-center group-hover:border-[#C7A15A] group-hover:bg-[#C7A15A]/5 transition-colors">
                    <Phone className="size-5 text-[#C7A15A]" />
                  </div>
                  <div>
                    <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
                      Hotline
                    </p>
                    <p className="font-sans text-sm text-foreground group-hover:text-[#C7A15A] transition-colors">
                      {project.hotline}
                    </p>
                  </div>
                </a>

                <a
                  href={`https://zalo.me/${project.zalo}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-11 h-11 rounded-lg border border-neutral-200 flex items-center justify-center group-hover:border-[#C7A15A] group-hover:bg-[#C7A15A]/5 transition-colors">
                    <MessageCircle className="size-5 text-[#C7A15A]" />
                  </div>
                  <div>
                    <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
                      Zalo
                    </p>
                    <p className="font-sans text-sm text-foreground group-hover:text-[#C7A15A] transition-colors">
                      {project.zalo}
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg border border-neutral-200 flex items-center justify-center shrink-0">
                    <MapPin className="size-5 text-[#C7A15A]" />
                  </div>
                  <div>
                    <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-1">
                      Địa chỉ
                    </p>
                    <p className="font-sans text-foreground text-sm leading-relaxed">
                      {contact.developerAddress}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
