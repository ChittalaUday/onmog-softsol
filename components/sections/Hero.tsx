"use client";

import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import {
  Rocket,
} from "lucide-react";
import { clients } from "@/data/clients";
import { GlassButton } from "@/components/ui/glass";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
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

/* ─── Typewriter Component ────────────────────────────────────── */
const TypewriterText = ({ 
  text, 
  delay = 0, 
  onComplete, 
  className 
}: { 
  text: string; 
  delay?: number; 
  onComplete?: () => void;
  className?: string;
}) => {
  const characters = text.split("");
  
  return (
    <motion.span className={className}>
      {characters.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.01,
            delay: delay + i * 0.02,
            ease: "linear"
          }}
          onAnimationComplete={() => {
            if (i === characters.length - 1) onComplete?.();
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

const serviceVariants = {
  enter: { opacity: 0, y: 22, filter: "blur(8px)" },
  center: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.55, ease: EASE } },
  exit: { opacity: 0, y: -22, filter: "blur(8px)", transition: { duration: 0.35 } },
};

import { ClientMarquee } from "@/components/ui/ClientMarquee";

/* ─── Hero ──────────────────────────────────────────────────────── */
const Hero = ({ show = true }: { show?: boolean }) => {
  const [index, setIndex] = React.useState(0);
  const [mounted, setMounted] = React.useState(false);
  const [typingComplete, setTypingComplete] = React.useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 32 },
    animate: show ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 },
    transition: { duration: 0.75, delay, ease: EASE },
  });

  // Tighter ranges for faster exit
  const headingY = useTransform(scrollYProgress, [0, 0.2], [0, -400]);
  const subTextY = useTransform(scrollYProgress, [0, 0.18], [0, -300]);
  const ctaY = useTransform(scrollYProgress, [0, 0.15], [0, -200]);
  const marqueeY = useTransform(scrollYProgress, [0, 0.12], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 1.15]);

  useEffect(() => {
    if (!show || !typingComplete) return;

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
  }, [show, typingComplete]);

  const scrollStyles = mounted ? { opacity, scale } : {};
  const headingStyles = mounted ? { y: headingY, ...scrollStyles } : {};
  const subTextStyles = mounted ? { y: subTextY, ...scrollStyles } : {};
  const ctaStyles = mounted ? { y: ctaY, ...scrollStyles } : {};
  const footerStyles = mounted ? { y: marqueeY, opacity } : {};

  return (
    <section
      ref={sectionRef}
      className="relative z-10 flex flex-col items-center justify-center min-h-screen w-full px-4 sm:px-6 overflow-hidden pt-24 sm:pt-32 lg:pt-0"
      aria-label="Hero"
    >
      <div className="w-full max-w-7xl flex flex-col items-center text-center pb-24 sm:pb-32 lg:pb-48">
        {/* ── Badge ── */}
        <motion.div
          style={headingStyles}
          {...fadeUp(0)}
          className="mb-8"
        >
          <HoverBorderGradient
            as="div"
            containerClassName="rounded-full"
            className="flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF8A00] animate-pulse" />
            <span className="text-[11px] font-black uppercase tracking-[0.2em]">
              Multidisciplinary Technology Firm
            </span>
          </HoverBorderGradient>
        </motion.div>

        {/* ── H1 ── */}
        <motion.div
          style={headingStyles}
          className="w-full"
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.15] text-foreground w-full flex flex-col items-center"
          >
            <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-x-3 text-center">
              {show && (
                <div className="flex items-center gap-3">
                  <TypewriterText 
                    text="Driving Progress" 
                    delay={0.2}
                    className="inline-block"
                  />
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={show ? { opacity: 1, scale: 1 } : {}}
                    whileHover={{ scale: 1.15, rotate: -25 }}
                    transition={{ 
                      opacity: { delay: 0.6, duration: 0.3 },
                      scale: { delay: 0.6, duration: 0.4, type: "spring" },
                    }}
                    className="inline-flex items-center justify-center w-11 h-11 sm:w-14 sm:h-14 bg-[#FF8A00] rounded-2xl shadow-xl shadow-[#FF8A00]/20 border-4 border-border shrink-0 cursor-pointer"
                  >
                    <motion.div
                      animate={show ? { rotate: [-12, -8, -12] } : {}}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Rocket className="text-white w-5 h-5 sm:w-7 sm:h-7" />
                    </motion.div>
                  </motion.span>
                  <TypewriterText 
                    text=" Across Industries" 
                    delay={0.7}
                    onComplete={() => setTypingComplete(true)}
                    className="inline-block"
                  />
                </div>
              )}
            </div>

            <span className="flex items-center justify-center gap-3 mt-4 min-h-[1.3em]">
              <AnimatePresence mode="wait">
                {typingComplete && (
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
                )}
              </AnimatePresence>
            </span>
          </motion.h1>
        </motion.div>

        {/* ── Sub-copy ── */}
        <motion.div
          style={subTextStyles}
          className="mt-8"
        >
          <div className="overflow-hidden">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={typingComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, ease: EASE }}
              className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed font-medium"
            >
              Precision Engineering. Digital Innovation. Human Excellence.{" "}
              <span className="text-foreground/80">
                We bridge the gap between traditional infrastructure and modern digital ecosystems.
              </span>
            </motion.p>
          </div>
        </motion.div>

        {/* ── CTAs ── */}
        <motion.div
          style={ctaStyles}
          className="mt-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={typingComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.8, ease: EASE }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full"
          >
            <GlassButton variant="primary" className="px-10 py-4 text-base sm:text-lg">
              Our Services
            </GlassButton>
            <GlassButton variant="secondary" className="px-10 py-4 text-base sm:text-lg">
              Contact Us
            </GlassButton>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Marquee ── */}
      <motion.div
        style={footerStyles}
        className="absolute bottom-32 w-full"
      >
        <p className="text-center text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground/40 mb-6">
          Trusted by category leaders
        </p>
        <ClientMarquee />
      </motion.div>

      {/* ── Scroll Down ── */}
      <motion.div
        style={footerStyles}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3"
      >
        <div className="w-[22px] h-[36px] rounded-full border-2 border-foreground/20 flex justify-center p-1.5">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-1 rounded-full bg-primary"
          />
        </div>
        <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-foreground/40">
          Scroll Down
        </span>
      </motion.div>
    </section>
  );
};

export default Hero;
