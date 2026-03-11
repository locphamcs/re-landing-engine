import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProjectBySlug, listProjects } from "@/lib/projects";
import { buildProjectMetadata } from "@/lib/projects/metadata";
import { ProjectLandingPage } from "@/components/project-landing-page";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://reflectionwestlake.online";
const DEFAULT_SLUG = "the-reflection-westlake";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return listProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Không tìm thấy dự án",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const metadata = buildProjectMetadata(project);

  // Nếu trang detail này trùng nội dung với homepage, canonical về homepage
  if (slug === DEFAULT_SLUG) {
    return {
      ...metadata,
      alternates: {
        canonical: SITE_URL,
      },
      openGraph: {
        ...metadata.openGraph,
        url: SITE_URL,
      },
    };
  }

  return metadata;
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return <ProjectLandingPage project={project} />;
}
