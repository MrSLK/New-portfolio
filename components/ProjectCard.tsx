import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import Reveal from "@/components/Reveal";
import type { projects } from "@/lib/portfolio";
type Project = (typeof projects)[number];
export default function ProjectCard({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  return (
    <Reveal
      delay={index * 0.06}
      className={`border-line group flex h-full flex-col rounded-card border bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-soft`}
    >
      <div className="flex items-start justify-between gap-4">
        <span className="text-[10px] font-extrabold uppercase tracking-[.14em] text-muted">
          {project.number} — {project.type}
        </span>
        <span className="grid h-11 w-11 place-items-center rounded-2xl bg-brand-soft text-lg text-brand">
          {project.icon}
        </span>
      </div>
      <h3 className="mt-5 text-2xl font-extrabold tracking-tight">
        {project.title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-muted">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((tag) => (
          <span
            key={tag}
            className="border-line rounded-lg border bg-page px-2.5 py-1.5 text-[10px] font-bold text-muted"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="border-line mt-6 mt-auto flex flex-wrap items-center gap-4 border-t pt-5 text-xs font-extrabold">
        <a
          className="inline-flex items-center gap-1.5 text-brand hover:underline"
          href={project.github}
          target={project.github.startsWith("http") ? "_blank" : undefined}
          rel={project.github.startsWith("http") ? "noreferrer" : undefined}
        >
          <Github size={14} /> GitHub <ArrowUpRight size={13} />
        </a>
        <Link
          className="inline-flex items-center gap-1.5 text-brand hover:underline"
          href={project.demo.startsWith("#") ? "/contact" : project.demo}
        >
          Details <ArrowUpRight size={13} />
        </Link>
        <span className="ml-auto text-[10px] font-semibold text-muted">
          {project.status}
        </span>
      </div>
    </Reveal>
  );
}
