import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/portfolio";
export default function Footer() {
  return (
    <footer className="border-line mt-16 border-t">
      <div className="container flex flex-col gap-5 py-7 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="font-extrabold tracking-tight">
          koenaite<span className="text-brand">.dev</span>
        </Link>
        <p className="text-xs text-muted">
          Designed with care. Built for clarity.
        </p>
        <div className="flex gap-4">
          <a
            aria-label="GitHub"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="text-muted transition hover:text-brand"
          >
            <Github size={18} />
          </a>
          <a
            aria-label="LinkedIn"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-muted transition hover:text-brand"
          >
            <Linkedin size={18} />
          </a>
          <Link
            aria-label="Contact"
            href="/contact"
            className="text-muted transition hover:text-brand"
          >
            <Mail size={18} />
          </Link>
        </div>
      </div>
      <div className="container pb-5 text-[10px] text-muted">
        Tool-assisted workflow acknowledged. Verify project status, links,
        employer names, dates, and contact details before publishing.
      </div>
    </footer>
  );
}
