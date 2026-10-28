"use client";
import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { profile } from "@/lib/portfolio";
export default function CopyEmailButton({
  light = false,
}: {
  light?: boolean;
}) {
  const [copied, setCopied] = useState(false);
  async function copy() {
    if (profile.email === "your.email@example.com") {
      window.alert(
        "Please update the email address in lib/portfolio.ts first.",
      );
      return;
    }
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  }
  return (
    <button
      type="button"
      onClick={copy}
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold transition hover:-translate-y-0.5 ${light ? "bg-white text-[#234bc0] hover:bg-blue-50" : "border-line border bg-white text-ink hover:border-brand hover:text-brand"}`}
    >
      {copied ? <Check size={16} /> : <Copy size={16} />}{" "}
      {copied ? "Email copied" : "Copy email address"}
    </button>
  );
}
