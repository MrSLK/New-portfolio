import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { skills } from "@/lib/portfolio";
export const metadata: Metadata = {
  title: "Skills | Koenaite Shiba",
  description:
    "Technical competencies across languages, cloud, data, and architecture.",
};
export default function SkillsPage() {
  return (
    <section className="container py-16 sm:py-24">
      <SectionHeading
        kicker="Technical competencies / 03"
        title="The tools behind the work."
        description="A practical view of the technologies and engineering disciplines I have worked with. This list is intentionally grouped by purpose, not represented as arbitrary percentage ratings."
      />
      <div className="grid gap-4 sm:grid-cols-2">
        {skills.map((group, i) => (
          <Reveal
            key={group.title}
            delay={i * 0.05}
            className="border-line rounded-3xl border bg-white p-6 sm:p-7"
          >
            <div className="mb-4 grid h-11 w-11 place-items-center rounded-2xl bg-brand-soft text-xl text-brand">
              {group.icon}
            </div>
            <h2 className="text-xl font-extrabold tracking-tight">
              {group.title}
            </h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="border-line bg-page rounded-lg border px-3 py-2 text-xs font-semibold text-muted"
                >
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
      <div className="border-line mt-8 rounded-2xl border bg-white p-6">
        <h2 className="text-lg font-extrabold">How I approach engineering</h2>
        <p className="mt-2 max-w-3xl text-sm leading-7 text-muted">
          I care about clear API contracts, maintainable data models, meaningful
          tests, code review, and delivery workflows that make software easier
          to operate. Tools vary by project; sound engineering principles travel
          with me.
        </p>
      </div>
    </section>
  );
}
