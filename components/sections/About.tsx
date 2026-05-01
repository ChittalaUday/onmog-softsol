"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { Shield, Target, Eye, ArrowUpRight } from "lucide-react";


const About = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full py-32 lg:py-48 overflow-hidden bg-black/5"
    >
      {/* Parallax Background Elements */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10"
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-lime/5 rounded-full blur-[100px] -z-10"
      />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end mb-32">
          <div className="flex flex-col">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-4 block">
              The Onmog Story
            </span>
            <h2 className="text-5xl lg:text-8xl font-black tracking-tighter leading-[0.9] uppercase flex flex-col">
              <ScrollRevealText 
                text="PRECISION" 
                progress={scrollYProgress} 
                range={[0.0, 0.15]} 
                className="overflow-hidden inline-block"
              />
              <ScrollRevealText 
                text="MEETS" 
                progress={scrollYProgress} 
                range={[0.15, 0.25]} 
                className="opacity-40 italic overflow-hidden inline-block py-2"
              />
              <ScrollRevealText 
                text="INNOVATION" 
                progress={scrollYProgress} 
                range={[0.25, 0.3]} 
                className="text-primary overflow-hidden inline-block"
              />
            </h2>
          </div>

          <div className="flex flex-col gap-6">
            <div className="text-xl text-muted-foreground font-medium leading-relaxed max-w-xl">
              <ScrollRevealWords 
                text="Onmog Softsol is a premier technology and engineering firm dedicated to delivering excellence across both physical and digital landscapes."
                progress={scrollYProgress}
                range={[0.05, 0.2]}
              />
            </div>
            <div className="text-lg text-muted-foreground/60 leading-relaxed max-w-xl">
              <ScrollRevealWords 
                text="We serve as a strategic partner for modern enterprises, bridging the critical gap between traditional infrastructure and digital innovation for government, transport, and IT sectors."
                progress={scrollYProgress}
                range={[0.15, 0.3]}
              />
            </div>
          </div>
        </div>

        {/* Core Pillars (Mission/Vision) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          <PillarCard 
            icon={<Shield className="w-8 h-8" />}
            title="Our Identity"
            description="Built on a foundation of reliability and scalability, transforming complex challenges into competitive advantages."
            progress={scrollYProgress}
            range={[0.12, 0.28]}
          />
          <PillarCard 
            icon={<Target className="w-8 h-8" />}
            title="Our Mission"
            description="Integrating human talent with technical precision, from safety-critical rail to agile software development."
            progress={scrollYProgress}
            range={[0.18, 0.35]}
          />
          <PillarCard 
            icon={<Eye className="w-8 h-8" />}
            title="Our Vision"
            description="To be a global leader in cross-industry innovation, empowering enterprises through engineering mastery."
            progress={scrollYProgress}
            range={[0.25, 0.45]}
          />
        </div>

      </div>
    </section>
  );
};

const ScrollRevealText = ({ text, progress, range, className }: { text: string, progress: any, range: [number, number], className?: string }) => {
  const characters = text.split("");
  const amount = range[1] - range[0];
  const step = amount / characters.length;

  return (
    <span className={className}>
      {characters.map((char, i) => {
        const start = range[0] + (i * step);
        const end = start + step;
        return (
          <Char key={i} progress={progress} range={[start, end]}>
            {char}
          </Char>
        );
      })}
    </span>
  );
};

const Char = ({ children, progress, range }: { children: string, progress: any, range: [number, number] }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  const y = useTransform(progress, range, [20, 0]);
  
  return (
    <motion.span style={{ opacity, y }} className="inline-block">
      {children === " " ? "\u00A0" : children}
    </motion.span>
  );
};

const ScrollRevealWords = ({ text, progress, range }: { text: string, progress: any, range: [number, number] }) => {
  const words = text.split(" ");
  const amount = range[1] - range[0];
  const step = amount / words.length;

  return (
    <span className="flex flex-wrap gap-x-1.5">
      {words.map((word, i) => {
        const start = range[0] + (i * step);
        const end = start + step;
        return (
          <Word key={i} progress={progress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </span>
  );
};

const Word = ({ children, progress, range }: { children: string, progress: any, range: [number, number] }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  const filter = useTransform(progress, range, ["blur(4px)", "blur(0px)"]);
  
  return (
    <motion.span style={{ opacity, filter }} className="inline-block">
      {children}
    </motion.span>
  );
};

const PillarCard = ({ icon, title, description, progress, range }: { icon: React.ReactNode, title: string, description: string, progress: any, range: [number, number] }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  const scale = useTransform(progress, range, [0.8, 1]);
  const x = useTransform(progress, range, [-50, 0]);

  return (
      <motion.div 
        style={{ opacity, scale, x }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="p-8 rounded-[2rem] border border-glass-border bg-card/20 hover:bg-card/40 transition-all duration-500 group relative overflow-hidden"
      >
        <motion.div 
          initial={{ rotate: 0 }}
          whileHover={{ rotate: 45 }}
          className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.1] transition-all duration-700"
        >
          {icon}
        </motion.div>
        <div className="mb-6 p-4 rounded-xl bg-primary/10 w-fit text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
          {icon}
        </div>
        <h3 className="text-2xl font-black uppercase tracking-tight mb-4 group-hover:translate-x-2 transition-transform duration-500">{title}</h3>
        <p className="text-muted-foreground leading-relaxed font-medium group-hover:text-foreground/80 transition-colors duration-500">
          {description}
        </p>
      </motion.div>
  );
};

export default About;
