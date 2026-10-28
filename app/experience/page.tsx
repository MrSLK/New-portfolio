import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { experience } from "@/lib/portfolio";
export const metadata: Metadata = {
  title: "Experience | Koenaite Shiba",
  description: "Software development experience and education timeline.",
};
export default function ExperiencePage() {
  return (
    <section className="container py-16 sm:py-24">
      <SectionHeading
        kicker="Career log / 04"
        title="Experience built over time."
        description="A progression from full-stack fundamentals to backend engineering and increasingly complex delivery work."
      />
      <div className="border-line ml-2 space-y-9 border-l pl-7 sm:pl-9">
        {experience.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.05} className="relative">
            <span className="absolute -left-[34px] top-1 h-3 w-3 rounded-full border-4 border-brand-soft bg-brand sm:-left-[42px]" />
            <p className="text-[11px] font-semibold text-muted">{item.date}</p>
            <h2 className="mt-1 text-xl font-extrabold tracking-tight">
              {item.title}
            </h2>
            <p className="mt-1 text-xs font-extrabold text-brand">
              {item.company}
            </p>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">
              {item.description}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
