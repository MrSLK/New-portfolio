import type { Metadata } from "next";
import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import CopyEmailButton from "@/components/CopyEmailButton";
import { profile } from "@/lib/portfolio";
export const metadata: Metadata = {
  title: "Contact | Koenaite Shiba",
  description:
    "Contact me about software engineering opportunities and collaborative projects.",
};
export default function ContactPage() {
  return (
    <section className="container py-16 sm:py-24">
      <Reveal>
        <p className="eyebrow">Contact / 05</p>
        <h1 className="mt-5 max-w-3xl text-5xl font-extrabold leading-tight tracking-[-.06em] sm:text-6xl">
          Let&apos;s talk about{" "}
          <span className="text-brand">what we can build.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-muted">
          I&apos;m open to conversations about software engineering roles,
          interesting product challenges, and collaborative projects. Send a
          note with a little context and what you&apos;re looking to solve.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <CopyEmailButton />
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
          >
            <Mail size={16} /> Email me <ArrowUpRight size={15} />
          </a>
        </div>
        <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-2">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="border-line flex items-center gap-4 rounded-2xl border bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-soft"
          >
            <Github size={22} />
            <span>
              <b className="block text-sm">GitHub</b>
              <span className="text-xs text-muted">Code and repositories</span>
            </span>
            <ArrowUpRight className="ml-auto text-brand" size={16} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="border-line flex items-center gap-4 rounded-2xl border bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-soft"
          >
            <Linkedin size={22} />
            <span>
              <b className="block text-sm">LinkedIn</b>
              <span className="text-xs text-muted">Professional profile</span>
            </span>
            <ArrowUpRight className="ml-auto text-brand" size={16} />
          </a>
        </div>
        <p className="mt-8 max-w-2xl text-xs leading-6 text-muted">
          The email, GitHub, and LinkedIn values are placeholders until you
          update{" "}
          <code className="rounded bg-white px-1.5 py-1">lib/portfolio.ts</code>
          . This page uses a direct email action rather than a fake form; add a
          backend or form service if you want submissions stored on the site.
        </p>
        <Link
          href="/"
          className="mt-7 inline-block text-sm font-bold text-brand hover:underline"
        >
          ← Back to home
        </Link>
      </Reveal>
    </section>
  );
}
