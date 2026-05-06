import { Metadata } from "next";
import { AboutPageClient } from "@/components/pages/AboutPageClient";

export const metadata: Metadata = {
  title: "About Us | Onmog Softsol",
  description: "Discover how Onmog Softsol bridges the gap between traditional infrastructure and digital innovation with uncompromising precision.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
