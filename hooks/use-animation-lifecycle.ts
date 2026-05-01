"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Hook to handle Next.js App Router animation lifecycle.
 * Fixes issues with:
 * - Browser back/forward navigation (BFCache)
 * - Scroll restoration conflicts
 * - GSAP ScrollTrigger re-calculation on route changes
 */
export function useAnimationLifecycle() {
  const pathname = usePathname();

  useEffect(() => {
    // 1. Force Manual Scroll Restoration
    // This prevents the browser from jumping to a position before our JS is ready
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // 2. Handle Browser Back/Forward (BFCache Restore)
    const handlePageShow = (event: PageTransitionEvent) => {
      if (event.persisted) {
        // Page was restored from cache - GSAP triggers need a hard refresh
        ScrollTrigger.refresh(true);
        // Trigger a resize event to nudge other libraries (like Lenis)
        window.dispatchEvent(new Event("resize"));
      }
    };

    window.addEventListener("pageshow", handlePageShow);

    return () => {
      window.removeEventListener("pageshow", handlePageShow);
    };
  }, []);

  useEffect(() => {
    // 3. Re-initialize on Route Change
    // We wait for a short delay to ensure the DOM has settled and Next.js has finished its work
    const timer = setTimeout(() => {
      // Optional: If you want to force scroll to top on every navigation
      // window.scrollTo(0, 0); 
      ScrollTrigger.refresh(true);
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, [pathname]);

  return null;
}
