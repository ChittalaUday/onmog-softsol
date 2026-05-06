"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Hero from "@/components/sections/Hero";
import StickyServices from "@/components/sections/StickyServices";
import About from "@/components/sections/About";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import { ParticleLoader } from "@/components/ui/particle-loader";

export default function Home() {
  const [isInitialLoad, setIsInitialLoad] = useState(() => {
    if (typeof window !== "undefined") {
      return !sessionStorage.getItem("appLoaded");
    }
    return true;
  });

  const [mounted, setMounted] = useState(!isInitialLoad);
  const [loading, setLoading] = useState(isInitialLoad);

  useEffect(() => {
    if (loading && isInitialLoad) {
      document.body.classList.add("is-loading");
    } else {
      document.body.classList.remove("is-loading");
    }
    return () => document.body.classList.remove("is-loading");
  }, [loading, isInitialLoad]);

  useEffect(() => {
    if (!isInitialLoad) return;

    const handleLoad = () => setMounted(true);
    
    if (document.readyState === "complete") {
      setMounted(true);
    } else {
      window.addEventListener("load", handleLoad);
      const fallback = setTimeout(() => setMounted(true), 3000);
      return () => {
        window.removeEventListener("load", handleLoad);
        clearTimeout(fallback);
      };
    }
  }, [isInitialLoad]);

  return (
    <>
      {isInitialLoad && (
        <ParticleLoader 
          isReady={mounted} 
          onComplete={() => {
            setLoading(false);
            sessionStorage.setItem("appLoaded", "true");
            window.dispatchEvent(new CustomEvent("loaderComplete"));
          }} 
        />
      )}
      
      <div className={cn(
        "transition-opacity duration-500",
        loading && isInitialLoad ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"
      )}>
        <Hero show={!loading} />
        <StickyServices />
        <About />
        <Process />
        <Testimonials />
      </div>
    </>
  );
}
