import { notFound } from "next/navigation";
import { projects } from "@/lib/siteData";
import { ProjectDetailContent } from "@/components/ProjectDetailContent";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projects.find((item) => item.slug === params.slug);
  if (!project) return notFound();

  return <ProjectDetailContent project={project} />;
}
