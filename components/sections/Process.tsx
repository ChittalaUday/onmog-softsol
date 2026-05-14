"use client";

import React, { useRef, useLayoutEffect, useState } from "react";
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import {
  Search,
  Map,
  Rocket,
  ShieldCheck,
  Sparkles,
  MessageSquare,
  Cpu,
  BarChart3
} from "lucide-react";

const steps = [
  {
    title: "Consultation & Analysis",
    description: "We begin by deeply understanding your specific operational challenges and business goals. Through rigorous technical audits and stakeholder workshops, we identify the exact pain points that require intervention.",
    icon: MessageSquare,
    activeIcon: Search,
    color: "text-blue-500",
    bgColor: "bg-blue-500/20",
    features: ["Infrastructure Audits", "Gap Analysis", "Stakeholder Mapping"]
  },
  {
    title: "Strategy Development",
    description: "No two businesses are alike. We craft a bespoke digital and engineering roadmap that aligns with your long-term vision. This includes selecting the right tech stack and compliance frameworks (like SIL-4).",
    icon: Map,
    activeIcon: Sparkles,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/20",
    features: ["Tech Stack Selection", "Compliance Planning", "ROI Forecasting"]
  },
  {
    title: "Implementation",
    description: "Our multidisciplinary teams execute the strategy with surgical precision. Whether it's signaling logic or cloud-native applications, we ensure a seamless integration with minimal disruption to existing workflows.",
    icon: Cpu,
    activeIcon: Rocket,
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/20",
    features: ["Agile Development", "System Integration", "Rigorous Testing"]
  },
  {
    title: "Ongoing Support",
    description: "Growth doesn't end at deployment. We provide continuous optimization and 24/7 support to ensure your systems remain resilient, scalable, and ahead of the curve in a rapidly changing market.",
    icon: BarChart3,
    activeIcon: ShieldCheck,
    color: "text-amber-500",
    bgColor: "bg-amber-500/20",
    features: ["24/7 Monitoring", "Iterative Performance", "Security Patches"]
  }
];

const Process = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  // Vertical Timeline Progress (spanning the whole section)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Pinning the right side visual card - only during steps
      ScrollTrigger.create({
        trigger: stepsRef.current,
        start: "top 30%",
        end: "bottom bottom",
        pin: stickyRef.current,
        pinSpacing: false,
        invalidateOnRefresh: true,
      });

      steps.forEach((_, i) => {
        ScrollTrigger.create({
          trigger: `.step-container-${i}`,
          start: "top 50%",
          end: "bottom 70%",
          onEnter: () => setActiveStep(i),
          onEnterBack: () => setActiveStep(i),
          // Ensure the last step stays active at the very bottom
          ...(i === steps.length - 1 && {
            end: "bottom bottom"
          })
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-transparent pb-48"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header (Non-sticky) */}
        <div className="py-24 lg:py-32 text-center lg:text-left">
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-4 block">
            The Methodology
          </span>
          <h2 className="text-4xl lg:text-7xl font-black tracking-tighter uppercase leading-[0.9]">
            Our <span className="text-muted-foreground/40">Execution</span> Process
          </h2>
        </div>

        <div
          ref={contentRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 items-start relative"
        >
          {/* Methodology Container: Steps + Sticky Card */}
          <div ref={stepsRef} className="relative lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-x-24 items-start">
            {/* Left Column: Full-height Scrolling Timeline & Descriptions */}
            <div className="relative flex flex-col">

              {/* The Continuous Timeline Bar */}
              <div className="absolute left-[29px] top-0 bottom-0 w-[2px] bg-foreground/5 hidden lg:block" />
              <motion.div
                className="absolute left-[28px] top-0 bottom-0 w-[4px] bg-gradient-to-b from-primary via-primary to-transparent origin-top hidden lg:block z-10 shadow-[0_0_15px_rgba(var(--primary-rgb),0.5)]"
                style={{ scaleY, height: "100%" }}
              />

              {steps.map((step, i) => (
                <div
                  key={i}
                  className={cn(
                    `step-container-${i} relative z-10 flex gap-12 min-h-[60vh] py-12 transition-all duration-500`,
                    activeStep === i ? "opacity-100 scale-100" : "opacity-10 scale-95 blur-md"
                  )}
                >
                  {/* Timeline Point (Moves with step) */}
                  <div className="relative z-20 flex-shrink-0 hidden lg:flex items-start pt-1.5">
                    <div className={cn(
                      "w-14 h-14 rounded-2xl flex items-center justify-center font-black text-2xl transition-all duration-500 shadow-2xl",
                      activeStep === i ? "bg-primary text-primary-foreground scale-110 shadow-primary/30" : "bg-card border border-glass-border text-muted-foreground"
                    )}>
                      {i + 1}
                    </div>
                  </div>

                  {/* Description Text */}
                  <div className="flex flex-col justify-start">
                    {/* Mobile Step Badge */}
                    <div className="lg:hidden w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-black text-lg mb-6">
                      {i + 1}
                    </div>

                    <h3 className="text-3xl lg:text-4xl font-black uppercase tracking-tight mb-6">
                      {step.title}
                    </h3>
                    <p className="text-xl text-muted-foreground font-medium leading-relaxed max-w-xl mb-10">
                      {step.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {step.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="px-5 py-2 rounded-xl bg-foreground/5 border border-foreground/10 text-[11px] font-black uppercase tracking-wider text-muted-foreground"
                        >
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Side: Sticky Visual Card */}
            <div className="hidden lg:block relative h-full">
              <div
                ref={stickyRef}
                className="relative h-[500px] w-full flex items-center justify-center"
              >
                <div className="relative w-full aspect-square max-h-[500px] rounded-[5rem] border border-glass-border bg-card/20 backdrop-blur-md overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.15)] group">

                  {/* Dynamic Content Switching */}
                  <AnimatePresence>
                    <motion.div
                      key={`visual-${activeStep}`}
                      initial={{ opacity: 0, scale: 0.8, y: 50 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 1.2, y: -50 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 25,
                        duration: 0.4
                      }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      {/* Glowing Aura */}
                      <div className={cn(
                        "absolute inset-0 blur-[150px] opacity-40 transition-colors duration-1000",
                        steps[activeStep].bgColor
                      )} />

                      {/* Main Icon Plate */}
                      <div className="relative z-10 w-64 h-64 rounded-[4rem] border border-glass-border bg-card/50 flex items-center justify-center shadow-2xl backdrop-blur-sm group-hover:scale-105 transition-transform duration-700">
                        {React.createElement(steps[activeStep].activeIcon, {
                          className: cn("w-24 h-24", steps[activeStep].color)
                        })}
                      </div>

                      {/* Floating secondary icon */}
                      <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute top-1/4 right-1/4 w-32 h-32 rounded-[2.5rem] border border-glass-border bg-card/10 backdrop-blur-md flex items-center justify-center -rotate-12 opacity-40"
                      >
                        {React.createElement(steps[activeStep].icon, {
                          className: "w-12 h-12 text-foreground"
                        })}
                      </motion.div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Grid Overlay */}
                  <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />

                  {/* Active Step Indicator */}
                  <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-4">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground/60">
                      Step {activeStep + 1}
                    </span>
                    <div className="flex gap-1.5">
                      {steps.map((_, i) => (
                        <div
                          key={i}
                          className={cn(
                            "h-1 rounded-full transition-all duration-700",
                            activeStep === i ? "w-8 bg-primary" : "w-1.5 bg-foreground/10"
                          )}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>

        {/* Conclusion / Final CTA Area - Spans full width on desktop */}
        <div className="lg:col-span-2 px-6 lg:px-0">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12">
            <div className="max-w-2xl">
              <div className="flex items-center gap-6 mb-8 opacity-40">
                <div className="h-px w-12 bg-foreground" />
                <span className="text-xs font-black uppercase tracking-[0.4em]">The Result</span>
              </div>
              <h3 className="text-4xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
                Ready to <span className="text-primary">Transform?</span>
              </h3>
              <p className="text-lg lg:text-xl text-muted-foreground font-medium leading-relaxed">
                Our methodology is built for scale, speed, and absolute safety. Let&apos;s build the future of infrastructure together.
              </p>
            </div>

            <button className="group relative flex items-center justify-center px-12 py-6 bg-primary text-primary-foreground rounded-2xl font-black uppercase tracking-widest text-xs overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.3)] shrink-0">
              <span className="relative z-10">Start Your Project</span>
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section >
  );
};

export default Process;
