import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "Work | Koenaite Shiba",
  description: "Selected software projects, product prototypes, and research.",
};
export default function WorkPage() {
  return (
    <section className="container py-16 sm:py-24">
      <SectionHeading
        kicker="Selected work / 02"
        title="Projects with a purpose."
        description="Product builds and research exploring practical software problems. Project statuses and repository links are labelled honestly and should be verified before publishing."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard key={project.number} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
