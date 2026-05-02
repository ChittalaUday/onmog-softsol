"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import StickyServices from "@/components/sections/StickyServices";
import About from "@/components/sections/About";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import { ParticleLoader } from "@/components/ui/particle-loader";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Detect when the window is fully loaded
    const handleLoad = () => setMounted(true);
    
    if (document.readyState === "complete") {
      setMounted(true);
    } else {
      window.addEventListener("load", handleLoad);
      // Fallback: don't wait forever if there's a slow resource
      const fallback = setTimeout(() => setMounted(true), 8000);
      return () => {
        window.removeEventListener("load", handleLoad);
        clearTimeout(fallback);
      };
    }
  }, []);

  useEffect(() => {
    if (!loading) {
      // Trigger a resize event to refresh Lenis, ScrollTrigger, and other layout engines
      window.dispatchEvent(new Event("resize"));
    }
  }, [loading]);

  return (
    <>
      <ParticleLoader 
        isReady={mounted} 
        onComplete={() => {
          setLoading(false);
          window.dispatchEvent(new CustomEvent("loaderComplete"));
        }} 
      />
      
      <main 
        className={cn(
          "relative min-h-screen w-full overflow-x-hidden bg-transparent selection:bg-secondary selection:text-secondary-foreground transition-opacity duration-1000",
          loading ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"
        )}
      >
        <Navbar />
        <Hero show={!loading} />
        <StickyServices />
        <About />
        <Process />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
