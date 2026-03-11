import { Geist, Geist_Mono, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://reflectionwestlake.online";
const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "G-XBNW3CTXPN";

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

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "The Reflection Westlake – Căn hộ cao cấp Hồ Tây Hà Nội",
  description:
    "Thông tin dự án, mặt bằng, tiện ích, bảng giá và tư vấn chi tiết.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "The Reflection Westlake – Căn hộ cao cấp Hồ Tây Hà Nội",
    description:
      "Thông tin dự án, mặt bằng, tiện ích, bảng giá và tư vấn chi tiết.",
    url: SITE_URL,
    siteName: "Reflection Westlake",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Reflection Westlake",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Reflection Westlake – Căn hộ cao cấp Hồ Tây Hà Nội",
    description:
      "Thông tin dự án, mặt bằng, tiện ích, bảng giá và tư vấn chi tiết.",
    images: ["/og-image.jpg"],
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

        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${GA_ID}');
            `}
        </Script>
      </body>
    </html>
  );
}
