import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
export const metadata: Metadata = {
  title: "About | Koenaite Shiba",
  description:
    "About my software engineering approach, education, and professional interests.",
};
export default function AboutPage() {
  return (
    <section className="container py-16 sm:py-24">
      <Reveal>
        <p className="eyebrow">About / 01</p>
        <h1 className="mt-5 max-w-3xl text-5xl font-extrabold leading-tight tracking-[-.06em] sm:text-6xl">
          Engineer first.
          <br />
          <span className="text-brand">Product-minded always.</span>
        </h1>
        <div className="mt-8 grid gap-10 md:grid-cols-[1fr_.75fr]">
          <div className="space-y-5 text-base leading-8 text-muted">
            <p>
              I&apos;m a software developer with experience across backend and
              full-stack development, working on APIs, data models, user
              interfaces, and delivery pipelines.
            </p>
            <p>
              I enjoy solving practical problems, making systems easier to
              maintain, and understanding how a feature behaves beyond the happy
              path — from validation and tests to deployment and observability.
            </p>
            <p>
              My day-to-day interests include programming, problem solving,
              DevOps, and building software products that can grow without
              adding unnecessary complexity.
            </p>
            <p>
              I have completed an Advanced Diploma in Computer Science and am
              pursuing postgraduate study in the field. My academic work also
              includes research into machine-learning approaches for used-car
              price prediction in South Africa.
            </p>
          </div>
          <aside className="border-line rounded-3xl border bg-white p-6">
            <p className="text-xs font-extrabold uppercase tracking-widest text-brand">
              What matters to me
            </p>
            <div className="mt-5 space-y-5">
              {[
                {
                  h: "Clarity over cleverness",
                  p: "Readable code, clear API contracts, and predictable behaviour.",
                },
                {
                  h: "Own the outcome",
                  p: "Consider testing, deployment, monitoring, and support.",
                },
                {
                  h: "Build for change",
                  p: "Choose useful abstractions and avoid complexity without a reason.",
                },
                {
                  h: "Keep learning",
                  p: "Connect formal study with practical engineering decisions.",
                },
              ].map((x) => (
                <div key={x.h}>
                  <h2 className="text-base font-extrabold">{x.h}</h2>
                  <p className="mt-1 text-sm leading-6 text-muted">{x.p}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
        <div className="mt-9 flex flex-wrap gap-3">
          <Link
            className="rounded-xl bg-brand px-5 py-3 text-sm font-bold text-white"
            href="/work"
          >
            Explore my work ↗
          </Link>
          <Link
            className="border-line rounded-xl border bg-white px-5 py-3 text-sm font-bold"
            href="/contact"
          >
            Get in touch
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
