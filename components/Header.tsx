"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
const links = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/skills", label: "Skills" },
  { href: "/experience", label: "Experience" },
];
export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="border-line/80 bg-page/90 sticky top-0 z-50 border-b backdrop-blur-xl">
      <div className="container flex min-h-[72px] items-center justify-between gap-5">
        <Link
          href="/"
          className="flex items-center gap-3 font-extrabold tracking-tight"
          onClick={() => setOpen(false)}
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand text-sm text-white">
            KS
          </span>
          <span>
            koenaite<span className="text-brand">.dev</span>
          </span>
        </Link>
        <button
          className="border-line rounded-xl border p-2 md:hidden"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav
          aria-label="Main navigation"
          className={`${open ? "flex" : "hidden"} border-line bg-page absolute left-0 right-0 top-[71px] flex-col border-b px-6 pb-5 md:static md:flex md:flex-row md:items-center md:gap-7 md:border-0 md:bg-transparent md:p-0`}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-3 text-sm font-semibold text-muted transition hover:text-brand md:py-0"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="border-line mt-2 inline-flex items-center justify-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-bold transition hover:border-brand hover:text-brand md:mt-0"
          >
            Let&apos;s talk <ArrowUpRight size={15} />
          </Link>
        </nav>
      </div>
    </header>
  );
}
