"use client";

import React, { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ParallaxProvider } from "react-scroll-parallax";
import { useAnimationLifecycle } from "@/hooks/use-animation-lifecycle";
import { useTransitionStore } from "@/stores/transition.store";

gsap.registerPlugin(ScrollTrigger);

export const SmoothScrollProvider = ({ children }: { children: React.ReactNode }) => {
  const lenisRef = useRef<Lenis | null>(null);
  const { isTransitioning } = useTransitionStore();
  const initLocked = useRef(false);
  
  useAnimationLifecycle();

  useEffect(() => {
    if (initLocked.current) return;
    initLocked.current = true;

    const lenis = new Lenis({
      duration: 2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 2, // Increased for more distance per scroll
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    // Connect Lenis to GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Global resize handler for Lenis
    const handleResize = () => {
      lenis.resize();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
      initLocked.current = false;
    };
  }, []);

  useEffect(() => {
    if (!lenisRef.current) return;
    if (isTransitioning) {
      lenisRef.current.stop();
    } else {
      lenisRef.current.start();
    }
  }, [isTransitioning]);

  return (
    <ParallaxProvider>
      {children}
    </ParallaxProvider>
  );
};
