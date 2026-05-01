"use client";

import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Image from "next/image";
import {
  Rocket,
  TrainFront,
  Users,
  Laptop,
  BarChart3,
} from "lucide-react";
import { clients } from "@/data/clients";
import { GlassContainer, GlassButton, GlassBadge } from "@/components/ui/glass";

/* ─── Service cycling data ─────────────────────────────────────── */
const SERVICES = [
  { text: "Rail Signaling", icon: TrainFront, color: "text-blue-600", bg: "bg-blue-600", rotate: 12 },
  { text: "Staffing Solutions", icon: Users, color: "text-emerald-500", bg: "bg-emerald-500", rotate: -12 },
  { text: "Digital Innovation", icon: Laptop, color: "text-indigo-600", bg: "bg-indigo-600", rotate: 12 },
  { text: "Business Strategy", icon: BarChart3, color: "text-amber-600", bg: "bg-amber-600", rotate: -12 },
] as const;

const SERVICE_CAPSULES = [
  { label: "Rail Signaling", icon: TrainFront, color: "text-blue-500" },
  { label: "Staffing Solutions", icon: Users, color: "text-purple-500" },
  { label: "Web & Digital", icon: Laptop, color: "text-orange-500" },
  { label: "Growth Services", icon: BarChart3, color: "text-green-500" },
];

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
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % SERVICES.length);
    }, 3200);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const CurrentIcon = SERVICES[index].icon;

  return (
    <section
      className="relative z-10 pt-36 pb-32 px-4 sm:px-6 flex flex-col items-center"
      aria-label="Hero"
    >
      <div className="w-full max-w-5xl flex flex-col items-center text-center">

        {/* ── Badge ── */}
        <motion.div {...fadeUp(0)} className="mb-6">
          <GlassBadge className="bg-accent-lime/30 border-accent-lime/50">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Multidisciplinary Technology Firm
          </GlassBadge>
        </motion.div>

        {/* ── H1 ── */}
        <motion.h1
          {...fadeUp(0.1)}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.15] text-foreground w-full"
        >
          <span className="flex items-center justify-center gap-x-3 whitespace-nowrap text-center">
            <span>Driving Progress</span>

            <motion.span
              aria-label="Rocket"
              whileHover={{ rotate: 0, scale: 1.15 }}
              initial={{ rotate: -12 }}
              animate={{ rotate: -12 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="inline-flex items-center justify-center w-11 h-11 sm:w-14 sm:h-14 bg-accent-lime rounded-2xl shadow-xl shadow-accent-lime/20 dark:shadow-accent-lime/50 dark:shadow-[0_0_25px_-5px_rgba(211,243,107,0.4)] border-4 border-border cursor-pointer shrink-0"
            >
              <Rocket className="text-black w-5 h-5 sm:w-7 sm:h-7" />
            </motion.span>

            <span>Across Industries</span>
          </span>

          {/* Line 2 — animated service name */}
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
          {...fadeUp(0.38)}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full"
        >
          <GlassButton variant="primary" className="w-full sm:w-auto px-10 py-4 text-base sm:text-lg">
            Our Services
          </GlassButton>
          <GlassButton variant="secondary" className="w-full sm:w-auto px-10 py-4 text-base sm:text-lg">
            Contact Us
          </GlassButton>
        </motion.div>

      </div>

      {/* ── Marquee (inside Hero, full-width, no overflow) ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="w-full mt-6 pb-10"
      >
        <p className="text-center text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground/40 mb-6">
          Trusted by category leaders
        </p>
        <MarqueeStrip />
      </motion.div>

      {/* ── Scroll Down Mouse ── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <div className="w-[22px] h-[36px] rounded-full border-2 border-foreground/20 flex justify-center p-1.5">
          <motion.div
            animate={{
              y: [0, 12, 0],
              opacity: [1, 0.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1.5 h-1.5 rounded-full bg-primary"
          />
        </div>
        <span className="text-[9px] font-black uppercase tracking-[0.3em] text-muted-foreground/50">
          Scroll
        </span>
      </motion.div>
    </section>
  );
};

export default Hero;
