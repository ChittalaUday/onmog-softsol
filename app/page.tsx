import type { Metadata } from "next";
import Home from "@/components/home";

export const metadata: Metadata = {
  title: "Onmog Softsol — IT Staffing, Software, Rail Engineering & Digital Marketing",
  description:
    "End-to-end technology partner: IT staffing, web & mobile development, rail signaling engineering, digital marketing, cloud, AI, and consulting.",
  alternates: { canonical: "/" },
};

export default function Page() {
  return <Home />;
}
