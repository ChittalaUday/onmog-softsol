import React from "react";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Background from "@/components/sections/Background";
import TagsSection from "@/components/sections/TagsSection";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-transparent selection:bg-accent-lime selection:text-primary">
      <Background />
      <Navbar />
      <Hero />
      <Marquee />
      <TagsSection />
    </main>
  );
}
