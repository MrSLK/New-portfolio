import Link from "next/link";
import {
  ArrowDownRight,
  ArrowUpRight,
  Cloud,
  Code2,
  Layers3,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import CopyEmailButton from "@/components/CopyEmailButton";
import { experience, profile, projects, skills } from "@/lib/portfolio";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <section className="hero-glow pb-16 pt-16 sm:pb-20 sm:pt-24">
        <div className="container grid items-center gap-12 lg:grid-cols-[1.25fr_.75fr]">
          <Reveal>
            <p className="eyebrow">Software developer · South Africa</p>
            <h1 className="mt-5 max-w-3xl text-5xl font-extrabold leading-[1.02] tracking-[-.065em] sm:text-6xl lg:text-7xl">
              I build reliable software for{" "}
              <span className="text-brand">real-world problems.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-muted sm:text-lg">
              {profile.summary}
            </p>
            <div className="mt-5 inline-flex items-center gap-3 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-2 text-xs font-bold text-emerald-800">
              <span className="status-dot" />
              {profile.availability}
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/work"
                className="inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-0.5 hover:bg-blue-700"
              >
                Explore my work <ArrowDownRight size={16} />
              </Link>
              <CopyEmailButton />
            </div>
            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold text-muted">
              <span className="inline-flex items-center gap-2">
                <Code2 size={15} /> Backend & APIs
              </span>
              <span className="inline-flex items-center gap-2">
                <Cloud size={15} /> Cloud & CI/CD
              </span>
              <span className="inline-flex items-center gap-2">
                <Layers3 size={15} /> Full-stack delivery
              </span>
            </div>
          </Reveal>
          <Reveal
            delay={0.12}
            className="border-line rounded-[28px] border bg-white p-6 shadow-soft sm:p-7"
          >
            <div className="border-line flex items-center justify-between border-b pb-5">
              <div className="flex items-center gap-3">
                <Image
                  src="/logo.png"
                  alt="Portfolio logo"
                  width={40}
                  height={40}
                  priority
                />
                <div>
                  <p className="font-extrabold tracking-tight">
                    {profile.name}
                  </p>
                  <p className="text-xs text-muted">{profile.role}</p>
                </div>
              </div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-muted">
                Profile / 01
              </span>
            </div>
            <div className="border-line border-b py-5">
              <p className="text-[10px] font-extrabold uppercase tracking-[.15em] text-muted">
                Engineering focus
              </p>
              <p className="mt-1 text-xl font-extrabold tracking-tight">
                Build · Ship · Improve
              </p>
              <p className="mt-1 text-xs text-muted">
                Maintainable systems with practical product thinking.
              </p>
            </div>
            <div className="border-line border-b py-5">
              <p className="text-[10px] font-extrabold uppercase tracking-[.15em] text-muted">
                Current toolkit
              </p>
              <p className="mt-1 text-xl font-extrabold tracking-tight">
                TypeScript + Node.js
              </p>
              <p className="mt-1 text-xs text-muted">
                NestJS · React · MongoDB · Cloud
              </p>
            </div>
            <div className="pt-5">
              <p className="text-[10px] font-extrabold uppercase tracking-[.15em] text-muted">
                Learning in motion
              </p>
              <p className="mt-1 text-xl font-extrabold tracking-tight">
                Computer Science
              </p>
              <p className="mt-1 text-xs text-muted">
                Postgraduate study alongside hands-on engineering.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="py-16 sm:py-20">
        <div className="container">
          <SectionHeading
            kicker="Selected work / 01"
            title="Projects with a purpose."
            description="A selection of product and engineering work across workflow tools, APIs, and applied machine learning."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((project, i) => (
              <ProjectCard key={project.number} project={project} index={i} />
            ))}
          </div>
          <div className="mt-6">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm font-extrabold text-brand hover:underline"
            >
              All project details <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-[#eef2fa] py-16 sm:py-20">
        <div className="container grid gap-10 md:grid-cols-[.8fr_1.2fr]">
          <Reveal>
            <p className="eyebrow">A little about me / 02</p>
            <h2 className="mt-4 text-4xl font-extrabold leading-tight tracking-[-.055em] sm:text-5xl">
              Engineer first.
              <br />
              Product-minded always.
            </h2>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-brand hover:underline"
            >
              More about me <ArrowUpRight size={15} />
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-base leading-8 text-muted">
              I&apos;m a software developer with experience across backend and
              full-stack development, working on APIs, data models, user
              interfaces, and delivery pipelines.
            </p>
            <p className="mt-4 text-base leading-8 text-muted">
              I enjoy{" "}
              <strong className="text-ink">solving practical problems</strong>,
              making systems easier to maintain, and understanding how a feature
              behaves beyond the happy path — from validation and tests to
              deployment and observability.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                {
                  title: "Clarity over cleverness",
                  text: "Readable code, clear contracts, predictable behaviour.",
                },
                {
                  title: "Own the outcome",
                  text: "Think through testing, deployment, and support.",
                },
                {
                  title: "Build for change",
                  text: "Modular systems that can evolve.",
                },
                {
                  title: "Keep learning",
                  text: "Connect theory with practical decisions.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="border-line rounded-2xl border bg-white p-4"
                >
                  <p className="text-sm font-extrabold">{item.title}</p>
                  <p className="mt-1 text-xs leading-6 text-muted">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
      <section className="py-16 sm:py-20">
        <div className="container">
          <SectionHeading
            kicker="Technical competencies / 03"
            title="The tools behind the work."
            description="Grouped by how I use them — not a row of arbitrary percentage bars."
          />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((group, i) => (
              <Reveal
                key={group.title}
                delay={i * 0.05}
                className="border-line rounded-2xl border bg-white p-5"
              >
                <div className="mb-4 text-xl text-brand">{group.icon}</div>
                <h3 className="mb-4 text-sm font-extrabold">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg bg-page px-2.5 py-1.5 text-[11px] font-semibold text-muted"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
          <Link
            href="/skills"
            className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-brand hover:underline"
          >
            Explore skills <ArrowUpRight size={15} />
          </Link>
        </div>
      </section>
      <section className="bg-[#eef2fa] py-16 sm:py-20">
        <div className="container">
          <SectionHeading
            kicker="Career log / 04"
            title="Experience built over time."
            description="A progression from learning full-stack fundamentals to owning increasingly complex engineering work."
          />
          <div className="border-line ml-2 space-y-7 border-l pl-7">
            {experience.slice(0, 3).map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06} className="relative">
                <span className="absolute -left-[34px] top-1 h-3 w-3 rounded-full border-4 border-brand-soft bg-brand" />
                <p className="text-[11px] font-semibold text-muted">
                  {item.date}
                </p>
                <h3 className="mt-1 text-lg font-extrabold tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs font-extrabold text-brand">
                  {item.company}
                </p>
                <p className="mt-2 max-w-3xl text-sm leading-7 text-muted">
                  {item.description}
                </p>
              </Reveal>
            ))}
          </div>
          <Link
            href="/experience"
            className="mt-7 inline-flex items-center gap-2 text-sm font-extrabold text-brand hover:underline"
          >
            Full experience & education <ArrowUpRight size={15} />
          </Link>
        </div>
      </section>
      <section className="py-16 sm:py-20">
        <div className="container">
          <div className="relative overflow-hidden rounded-[28px] bg-brand p-7 text-white sm:p-12">
            <div className="relative z-10 grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="eyebrow text-blue-100">Contact / 05</p>
                <h2 className="mt-3 max-w-xl text-3xl font-extrabold leading-tight tracking-[-.05em] sm:text-4xl">
                  Have a meaningful problem to solve?
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-7 text-blue-100">
                  I&apos;m open to conversations about software engineering
                  roles, interesting product challenges, and collaborative
                  projects.
                </p>
              </div>
              <div className="flex flex-col items-start gap-3">
                <CopyEmailButton light />
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/40 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  Contact me <ArrowUpRight size={15} />
                </Link>
              </div>
            </div>
            <div className="pointer-events-none absolute -right-24 -top-40 h-80 w-80 rounded-full border border-white/20 shadow-[0_0_0_35px_rgba(255,255,255,.04),0_0_0_75px_rgba(255,255,255,.03)]" />
          </div>
        </div>
      </section>
    </>
  );
}
