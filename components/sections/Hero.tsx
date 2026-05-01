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

/* ─── Marquee strip (self-contained, no overflow) ───────────────── */
function MarqueeStrip() {
  const prefersReduced = useReducedMotion();

  return (
    <div className="w-full overflow-hidden" aria-label="Trusted clients">
      {/* fade edges */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 z-10 bg-gradient-to-r from-[#F5F7F8] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 z-10 bg-gradient-to-l from-[#F5F7F8] to-transparent" />

        <div
          className="flex items-center gap-12 sm:gap-16"
          style={{
            width: "max-content",
            animation: prefersReduced ? "none" : "marquee 32s linear infinite",
          }}
        >
          {[...clients, ...clients].map((client, i) => (
            <div
              key={i}
              className="flex items-center gap-3 opacity-40 hover:opacity-90 grayscale hover:grayscale-0 hover:scale-105 transition-all duration-500 cursor-default shrink-0"
            >
              {client.logoUrl && (
                <div className="relative h-5 w-9 shrink-0">
                  <Image
                    src={client.logoUrl}
                    alt={`${client.name} logo`}
                    fill
                    sizes="36px"
                    className="object-contain"
                  />
                </div>
              )}
              <span className="text-base font-black text-[#0E4D4D] whitespace-nowrap">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
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
      className="relative z-10 pt-36 pb-0 px-4 sm:px-6 flex flex-col items-center"
      aria-label="Hero"
    >
      <div className="w-full max-w-5xl flex flex-col items-center text-center">

        {/* ── Badge ── */}
        <motion.div {...fadeUp(0)} className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-lime/30 border border-accent-lime/50 text-[11px] font-black uppercase tracking-[0.3em] text-[#0E4D4D]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0E4D4D] animate-pulse" />
            Multidisciplinary Technology Firm
          </span>
        </motion.div>

        {/* ── H1 ── */}
        <motion.h1
          {...fadeUp(0.1)}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.15] text-[#0E4D4D] w-full"
        >
          <span className="flex items-center justify-center gap-x-3 whitespace-nowrap text-center">
            <span>Driving Progress</span>

            <motion.span
              aria-label="Rocket"
              whileHover={{ rotate: 0, scale: 1.15 }}
              initial={{ rotate: -12 }}
              animate={{ rotate: -12 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="inline-flex items-center justify-center w-11 h-11 sm:w-14 sm:h-14 bg-accent-lime rounded-2xl shadow-xl shadow-accent-lime/30 border-4 border-white cursor-pointer shrink-0"
            >
              <Rocket className="text-primary w-5 h-5 sm:w-7 sm:h-7" />
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
          className="mt-6 text-base sm:text-lg md:text-xl text-[#0E4D4D]/60 max-w-2xl leading-relaxed font-medium"
        >
          Precision Engineering. Digital Innovation. Human Excellence.{" "}
          <span className="text-[#0E4D4D]/80">
            We bridge the gap between traditional infrastructure and modern digital ecosystems.
          </span>
        </motion.p>

        {/* ── CTAs ── */}
        <motion.div
          {...fadeUp(0.38)}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full"
        >
          <motion.button
            whileHover={{ y: -3, boxShadow: "0 20px 40px rgba(14,77,77,0.35)" }}
            whileTap={{ y: 0 }}
            className="w-full sm:w-auto bg-primary text-white px-10 py-4 rounded-full font-extrabold text-base sm:text-lg transition-colors"
          >
            Our Services
          </motion.button>
          <motion.button
            whileHover={{ y: -3 }}
            whileTap={{ y: 0 }}
            className="w-full sm:w-auto bg-white/50 backdrop-blur-md text-[#0E4D4D] px-10 py-4 rounded-full font-extrabold text-base sm:text-lg border border-white/60 hover:bg-white/80 transition-all shadow-sm"
          >
            Contact Us
          </motion.button>
        </motion.div>

        {/* ── Service capsules ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.52, ease: EASE }}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          {SERVICE_CAPSULES.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.06, y: -2 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="flex items-center gap-2 px-5 py-2.5 glass rounded-full border border-white/50 shadow-sm hover:bg-white/70 transition-colors cursor-default group"
            >
              <s.icon size={16} className={`${s.color} group-hover:scale-110 transition-transform`} />
              <span className="text-[12px] sm:text-[13px] font-black text-[#0E4D4D]/80 whitespace-nowrap">
                {s.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ── Marquee (inside Hero, full-width, no overflow) ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="w-full mt-14 pb-10"
      >
        <p className="text-center text-[10px] font-black uppercase tracking-[0.4em] text-[#0E4D4D]/40 mb-6">
          Trusted by category leaders
        </p>
        <MarqueeStrip />
      </motion.div>
    </section>
  );
};

export default Hero;
