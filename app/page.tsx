import React from "react";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import StickyServices from "@/components/sections/StickyServices";
import About from "@/components/sections/About";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-transparent selection:bg-accent-lime selection:text-primary">
      <Navbar />
      <Hero />
      <StickyServices />
      <About />
    </main>
  );
}
