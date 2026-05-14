"use client";

import React, { useRef, useLayoutEffect } from "react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import {
  RailSignalingContent,
  StaffingSolutionsContent,
  DigitalInnovationContent,
  BusinessStrategyContent
} from "./services/ServiceContents";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { SERVICES_CONFIG } from "@/data/services";

const CONTENT_MAP = [
  <RailSignalingContent key="c1" />,
  <StaffingSolutionsContent key="c2" />,
  <DigitalInnovationContent key="c3" />,
  <BusinessStrategyContent key="c4" />,
];

const SERVICES = SERVICES_CONFIG.map((s, i) => ({
  id: s.id,
  title: s.title,
  description: s.description,
  content: CONTENT_MAP[i],
  color: s.theme.color,
  bgGlow: s.theme.bgGlow,
}));

const StickyServices = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  const visualRefs = useRef<(HTMLDivElement | null)[]>([]);
  const countRef = useRef<HTMLDivElement>(null);
  const sectionTitleRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // SECTION TITLE ENTRANCE
      gsap.fromTo(sectionTitleRef.current,
        { autoAlpha: 0, y: 50 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // MASTER PINNING
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: pinRef.current,
        pinSpacing: true,
        scrub: true,
        invalidateOnRefresh: true,
        anticipatePin: 1,
      });

      // MASTER ANIMATION TIMELINE
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
          invalidateOnRefresh: true,
        }
      });

      SERVICES.forEach((service, i) => {
        const text = textRefs.current[i];
        const visual = visualRefs.current[i];
        if (!text || !visual) return;

        // Initialize ALL to off-screen state
        gsap.set([text, visual], {
          autoAlpha: 0,
          x: 800,
          scale: 0.9,
          y: 0
        });

        const label = `service-${i}`;
        tl.add(label);

        // Entrance
        tl.to(text, { autoAlpha: 1, x: 0, duration: 1 }, label);
        tl.to(visual, { autoAlpha: 1, x: 0, scale: 1, duration: 1 }, label);

        // Count & Glow update
        if (countRef.current) {
          tl.to(countRef.current, {
            innerText: service.id,
            duration: 0.1,
            snap: { innerText: 1 }
          }, label);
        }

        // Dwell
        tl.to({}, { duration: 1.5 }); // Reduced from 3 to speed up progression

        // Exit (except for last one)
        if (i < SERVICES.length - 1) {
          tl.to(text, { autoAlpha: 0, y: -40, duration: 1 });
          tl.to(visual, { autoAlpha: 0, x: -800, scale: 0.9, duration: 1 }, "<");
        }
      });
    }, containerRef);

    // Force a refresh after a short delay to ensure DOM is fully settled
    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(refreshTimer);
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-transparent"
      style={{
        height: "500vh", // Adjusted for 4 services
        position: "relative"
      }}
    >
      <div
        ref={pinRef}
        className="relative min-h-screen w-full flex flex-col items-center overflow-hidden pt-32 lg:pt-0"
        style={{
          willChange: "transform"
        }}
      >
        {/* Background Dynamic Glow */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-transparent opacity-30 blur-[120px] pointer-events-none transition-all duration-1000"
        />

        {/* Section Title Header */}
        <div
          ref={sectionTitleRef}
          className="relative lg:absolute lg:top-28 lg:left-1/2 lg:-translate-x-1/2 z-30 text-center pointer-events-none w-full px-6 mb-4 lg:mb-0"
        >
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-muted-foreground/60 mb-1 block">
            Capabilities
          </span>
          <h2 className="text-2xl md:text-6xl font-black tracking-tighter uppercase">
            What We <span className="text-primary">Provide</span>
          </h2>
        </div>

        {/* Vertical Progress Indicator (Left Side) */}
        <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-8 z-20">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-muted-foreground vertical-text mb-4">
              Service
            </span>
            <div className="relative h-16 w-16 flex items-center justify-center">
              <div className="absolute inset-0 border border-glass-border rounded-full animate-spin-slow" />
              <div ref={countRef} className="text-2xl font-black font-mono tracking-tighter">
                01
              </div>
            </div>
            <div className="h-20 w-px bg-gradient-to-b from-foreground/20 to-transparent mt-4" />
          </div>
          <div className="text-[10px] font-bold text-muted-foreground/40 rotate-90 mt-8">
            0{SERVICES.length}
          </div>
        </div>

        <div className="flex-1 w-full max-w-[1400px] mx-auto px-6 lg:px-10 relative flex items-center justify-center">
          {SERVICES.map((service, i) => (
            <div
              key={i}
              className="absolute inset-0 flex items-center justify-center pt-12 lg:pt-20"
            >
              <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-center">
                {/* Left Column: Text */}
                <div
                  ref={(el) => { textRefs.current[i] = el; }}
                  className="relative flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-4 lg:pr-12"
                  style={{ willChange: "transform, opacity" }}
                >
                  <HoverBorderGradient
                    as="div"
                    containerClassName="mb-4 lg:mb-8 rounded-full"
                    className="flex items-center"
                  >
                    <span className="text-[10px] font-black uppercase tracking-[0.3em]">
                      {service.title}
                    </span>
                  </HoverBorderGradient>

                  <h2 className="text-3xl md:text-8xl font-black text-foreground mb-4 lg:mb-8 leading-[0.9] tracking-tighter">
                    <span className="opacity-40">{service.title.split(" ")[0]}</span> <br className="hidden lg:block" />
                    <span className={cn("drop-shadow-2xl", service.color)}>
                      {service.title.split(" ").slice(1).join(" ")}
                    </span>
                  </h2>

                  <div className="relative pl-0 lg:pl-8 border-l-0 lg:border-l border-glass-border py-2">
                    <p className="text-sm lg:text-lg text-muted-foreground/80 font-medium max-w-md leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <button className="mt-6 lg:mt-12 group flex items-center gap-4 text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors">
                    <span className="h-px w-6 lg:w-8 bg-foreground/20 group-hover:w-12 group-hover:bg-primary transition-all" />
                    Explore Deep-Dive
                  </button>
                </div>

                {/* Right Column: Visuals */}
                <div
                  ref={(el) => { visualRefs.current[i] = el; }}
                  className="relative group h-[300px] lg:h-[700px] w-full flex items-center justify-center scale-75 lg:scale-100"
                  style={{ willChange: "transform, opacity" }}
                >
                  {/* Dynamic background glow */}
                  <div className={cn(
                    "absolute w-[90%] h-[90%] bg-gradient-to-br opacity-20 blur-[120px] rounded-full transition-all duration-1000",
                    service.bgGlow
                  )} />

                  <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
                    <div className="w-full max-w-2xl transform transition-all duration-700 hover:scale-[1.02]">
                      {service.content}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default StickyServices;
