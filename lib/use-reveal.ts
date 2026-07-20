"use client";

import { useEffect } from "react";

// Fades/slides in every [data-reveal] element as it enters the viewport.
export function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          const el = en.target as HTMLElement;
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          io.unobserve(el);
        }),
      { threshold: 0.12 }
    );
    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(34px)";
      el.style.transition =
        "opacity .9s cubic-bezier(.22,1,.36,1), transform .9s cubic-bezier(.22,1,.36,1)";
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);
}
