import type { Metadata } from "next";
import { Geist, Geist_Mono, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Serif font for luxury headings (font-heading utility class)
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Địa Ốc Kiến Hưng – Dự án BĐS cao cấp",
    template: "%s | Địa Ốc Kiến Hưng",
  },
  description:
    "Khám phá các dự án bất động sản cao cấp của Địa Ốc Kiến Hưng tại Hà Nội và TP.HCM.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://diaockienhung.vn",
  ),
  openGraph: {
    type: "website",
    locale: "vi_VN",
    siteName: "Địa Ốc Kiến Hưng",
    title: "Địa Ốc Kiến Hưng – Dự án BĐS cao cấp",
    description:
      "Khám phá các dự án bất động sản cao cấp của Địa Ốc Kiến Hưng tại Hà Nội và TP.HCM.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Địa Ốc Kiến Hưng",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${cormorant.variable} ${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
