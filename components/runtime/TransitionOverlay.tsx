"use client";

import React, { useRef } from "react";
import { TransitionRouter } from "next-transition-router";
import { useTransitionStore } from "@/stores/transition.store";
import gsap from "gsap";
import { useTheme } from "next-themes";

export const TransitionOverlay = ({ children }: { children: React.ReactNode }) => {
  const { setIsTransitioning, transitionLocked, setTransitionLocked, setStage } = useTransitionStore();
  const overlayRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();

  const onLeave = (next: () => void) => {
    if (transitionLocked) return;
    setTransitionLocked(true);
    setIsTransitioning(true);
    setStage('EXITING');
    
    gsap.to(overlayRef.current, {
      y: "0%",
      duration: 0.6,
      ease: "power3.inOut",
      onComplete: () => {
        setStage('SWAPPING');
        next();
      }
    });
  };

  const onEnter = (next: () => void) => {
    setStage('ENTERING');
    gsap.to(overlayRef.current, {
      y: "-100%",
      duration: 0.6,
      ease: "power3.inOut",
      onComplete: () => {
        gsap.set(overlayRef.current, { y: "100%" });
        setIsTransitioning(false);
        setTransitionLocked(false);
        setStage('COMPLETE');
        next();
        // Reset to IDLE after a short frame
        setTimeout(() => setStage('IDLE'), 50);
      }
    });
  };

  return (
    <>
      <div 
        ref={overlayRef}
        className="fixed inset-0 z-[999] flex flex-col items-center justify-center pointer-events-none translate-y-full transition-colors duration-300"
        style={{ backgroundColor: resolvedTheme === 'dark' ? '#0a0a0a' : '#ffffff' }}
      >
        <div className="w-12 h-12 rounded-full border-4 border-primary border-t-transparent animate-spin" />
      </div>

      <TransitionRouter
        auto={true}
        leave={onLeave}
        enter={onEnter}
      >
        <main>{children}</main>
      </TransitionRouter>
    </>
  );
};
