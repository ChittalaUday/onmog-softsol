"use client";

import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import {
  Rocket,
} from "lucide-react";
import { clients } from "@/data/clients";
import {  GlassButton, GlassBadge } from "@/components/ui/glass";
import { SERVICES_CONFIG } from "@/data/services";

/* ─── Service cycling data ─────────────────────────────────────── */
const SERVICES = SERVICES_CONFIG.map((s, i) => ({
  text: s.shortTitle,
  icon: s.icon,
  color: s.theme.color,
  bg: s.theme.bg,
  rotate: i % 2 === 0 ? 12 : -12,
}));


/* ─── Animation variants ────────────────────────────────────────── */
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: EASE },
});

const serviceVariants = {
  enter: { opacity: 0, y: 22, filter: "blur(8px)" },
  center: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.55, ease: EASE } },
  exit: { opacity: 0, y: -22, filter: "blur(8px)", transition: { duration: 0.35 } },
};

import Marquee from "react-fast-marquee";

/* ─── Marquee strip (self-contained, no overflow) ───────────────── */
function MarqueeStrip() {
  const prefersReduced = useReducedMotion();

  return (
    <div className="w-full relative py-2" aria-label="Trusted clients">
      {/* fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-background via-background/80 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-background via-background/80 to-transparent" />

      <Marquee
        gradient={false}
        speed={40}
        pauseOnHover={true}
        play={!prefersReduced}
        className="overflow-hidden"
      >
        {clients.map((client, i) => (
          <div
            key={i}
            className="flex items-center gap-4 mx-12 opacity-40 hover:opacity-100 grayscale hover:grayscale-0 hover:scale-110 transition-all duration-500 cursor-default"
          >
            {client.logoUrl && (
              <div className="relative h-7 w-12 shrink-0">
                <Image
                  src={client.logoUrl}
                  alt={`${client.name} logo`}
                  fill
                  sizes="48px"
                  className="object-contain dark:invert"
                />
              </div>
            )}
            <span className="text-lg font-black text-foreground whitespace-nowrap">
              {client.name}
            </span>
          </div>
        ))}
      </Marquee>
    </div>
  );
}

/* ─── Hero ──────────────────────────────────────────────────────── */
const Hero = () => {
  const [index, setIndex] = React.useState(0);
  const [mounted, setMounted] = React.useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Tighter ranges for faster exit
  const headingY = useTransform(scrollYProgress, [0, 0.2], [0, -400]);
  const subTextY = useTransform(scrollYProgress, [0, 0.18], [0, -300]);
  const ctaY = useTransform(scrollYProgress, [0, 0.15], [0, -200]);
  const marqueeY = useTransform(scrollYProgress, [0, 0.12], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 1.15]);

  useEffect(() => {
    const mTimer = setTimeout(() => {
      setMounted(true);
    }, 0);
    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % SERVICES.length);
    }, 3200);
    return () => {
      clearTimeout(mTimer);
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const scrollStyles = mounted ? { opacity, scale } : {};
  const headingStyles = mounted ? { y: headingY, ...scrollStyles } : {};
  const subTextStyles = mounted ? { y: subTextY, ...scrollStyles } : {};
  const ctaStyles = mounted ? { y: ctaY, ...scrollStyles } : {};
  const footerStyles = mounted ? { y: marqueeY, opacity } : {};

  return (
    <section
      ref={sectionRef}
      className="relative z-10 flex flex-col items-center justify-center h-screen w-full px-4 sm:px-6 overflow-hidden"
      aria-label="Hero"
    >
      <div className="w-full max-w-5xl flex flex-col items-center text-center mb-24">
        {/* ── Badge ── */}
        <motion.div 
          style={headingStyles}
          {...fadeUp(0)} 
          className="mb-6"
        >
          <GlassBadge className="bg-accent-lime/40 border-accent-lime/60 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Multidisciplinary Technology Firm
          </GlassBadge>
        </motion.div>

        {/* ── H1 ── */}
        <motion.h1
          style={headingStyles}
          {...fadeUp(0.1)}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.15] text-foreground w-full"
        >
          <span className="flex items-center justify-center gap-x-3 whitespace-nowrap text-center">
            <span>Driving Progress</span>
            <motion.span
              animate={{ rotate: [-12, -8, -12] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex items-center justify-center w-11 h-11 sm:w-14 sm:h-14 bg-accent-lime rounded-2xl shadow-xl shadow-accent-lime/20 border-4 border-border shrink-0"
            >
              <Rocket className="text-black w-5 h-5 sm:w-7 sm:h-7" />
            </motion.span>
            <span>Across Industries</span>
          </span>

          <span className="flex items-center justify-center gap-3 mt-3 min-h-[1.3em]">
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                variants={serviceVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className={`${SERVICES[index].color} inline-block`}
              >
                {SERVICES[index].text}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.h1>

        {/* ── Sub-copy ── */}
        <motion.p
          style={subTextStyles}
          {...fadeUp(0.25)}
          className="mt-6 text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed font-medium"
        >
          Precision Engineering. Digital Innovation. Human Excellence.{" "}
          <span className="text-foreground/80">
            We bridge the gap between traditional infrastructure and modern digital ecosystems.
          </span>
        </motion.p>

        {/* ── CTAs ── */}
        <motion.div
          style={ctaStyles}
          {...fadeUp(0.38)}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full"
        >
          <GlassButton variant="primary" className="px-10 py-4 text-base sm:text-lg">
            Our Services
          </GlassButton>
          <GlassButton variant="secondary" className="px-10 py-4 text-base sm:text-lg">
            Contact Us
          </GlassButton>
        </motion.div>
      </div>

      {/* ── Marquee ── */}
      <motion.div
        style={footerStyles}
        className="absolute bottom-24 w-full"
      >
        <p className="text-center text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground/40 mb-6">
          Trusted by category leaders
        </p>
        <MarqueeStrip />
      </motion.div>

      {/* ── Scroll Down ── */}
      <motion.div
        style={footerStyles}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[20px] h-[32px] rounded-full border-2 border-foreground/20 flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-1 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
