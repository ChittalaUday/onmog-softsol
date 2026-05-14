"use client";

import React, { useRef } from "react";
import { TransitionRouter } from "next-transition-router";
import { useTransitionStore } from "@/stores/transition.store";
import gsap from "gsap";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export const TransitionOverlay = ({ children }: { children: React.ReactNode }) => {
  const { isTransitioning, setIsTransitioning, transitionLocked, setTransitionLocked, setStage } = useTransitionStore();
  const overlayRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();

  const onLeave = React.useCallback((next: () => void) => {
    if (transitionLocked || !overlayRef.current) {
      next();
      return;
    }
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
  }, [transitionLocked, setIsTransitioning, setStage, setTransitionLocked]);

  const onEnter = React.useCallback((next: () => void) => {
    setStage('ENTERING');
    
    if (!overlayRef.current) {
      setIsTransitioning(false);
      setTransitionLocked(false);
      setStage('COMPLETE');
      next();
      return;
    }

    gsap.to(overlayRef.current, {
      y: "-100%",
      duration: 0.6,
      ease: "power3.inOut",
      onComplete: () => {
        if (overlayRef.current) {
          gsap.set(overlayRef.current, { y: "100%" });
        }
        setIsTransitioning(false);
        setTransitionLocked(false);
        setStage('COMPLETE');
        next();
        // Reset to IDLE after a short frame
        setTimeout(() => setStage('IDLE'), 50);
      }
    });
  }, [setIsTransitioning, setStage, setTransitionLocked]);

  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  return (
    <>
      <div 
        ref={overlayRef}
        className={cn(
          "fixed inset-0 z-[100] flex items-center justify-center bg-background transition-colors duration-300",
          isTransitioning ? "pointer-events-auto" : "pointer-events-none"
        )}
        style={{
          backgroundColor: mounted ? (resolvedTheme === 'dark' ? '#0a0a0a' : '#ffffff') : '#ffffff',
          transform: "translateY(100%)",
          willChange: "transform"
        }}
      >
        <div className="w-12 h-12 rounded-full border-4 border-primary border-t-transparent animate-spin shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)]" />
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
