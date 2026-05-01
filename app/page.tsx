import React from "react";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import ServicesSection from "@/components/sections/ServicesSection";
import ValuesSection from "@/components/sections/ValuesSection";
import TagsSection from "@/components/sections/TagsSection";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-transparent selection:bg-accent-lime selection:text-primary">
      <Navbar />
      <Hero />
      <ServicesSection />
      <ValuesSection />
      <TagsSection />
    </main>
  );
}
