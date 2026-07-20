import type { Metadata } from "next";
import About from "@/components/about";

export const metadata: Metadata = {
  title: "About Us — Onmog Softsol",
  description:
    "Learn about Onmog Softsol — a multidisciplinary technology firm bridging rail engineering, workforce staffing, IT solutions and digital growth.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return <About />;
}
