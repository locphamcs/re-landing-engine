import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProjectBySlug } from "@/lib/projects";
import { ProjectLandingPage } from "@/components/project-landing-page";

const DEFAULT_SLUG = "the-reflection-westlake";
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://reflectionwestlake.online";

export function generateMetadata(): Metadata {
  const project = getProjectBySlug(DEFAULT_SLUG);

  if (!project) {
    return {
      title: "Trang chủ – Reflection Westlake",
      alternates: {
        canonical: SITE_URL,
      },
    };
  }

  return {
    title: project.seo.title,
    description: project.seo.description,
    keywords: project.seo.keywords,
    alternates: {
      canonical: SITE_URL,
    },
    openGraph: {
      title: project.seo.title,
      description: project.seo.description,
      url: SITE_URL,
      siteName: project.brand,
      locale: "vi_VN",
      type: "website",
      images: project.seo.ogImage
        ? [
            {
              url: project.seo.ogImage,
              width: 1200,
              height: 630,
              alt: project.name,
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: project.seo.title,
      description: project.seo.description,
      images: project.seo.ogImage ? [project.seo.ogImage] : [],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function HomePage() {
  const project = getProjectBySlug(DEFAULT_SLUG);

  if (!project) notFound();

  return <ProjectLandingPage project={project} />;
}
