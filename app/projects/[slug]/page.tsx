import { notFound, redirect } from "next/navigation";
import { projects } from "@/lib/siteData";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projects.find((item) => item.slug === params.slug);
  if (!project) return notFound();

  redirect("/#projects");
}
