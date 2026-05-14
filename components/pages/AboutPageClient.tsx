"use client";

import React, { useRef } from "react";
import { 
  motion, 
  useScroll, 
  useTransform, 
  useInView,
} from "framer-motion";
import { Shield, Target, ArrowDown, Zap, Globe, Cpu, AlertTriangle, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";
import Team from "@/components/sections/Team";

// --- Components ---

const SectionHeader = ({ subtitle, title, centered = false }: { subtitle: string, title: string | React.ReactNode, centered?: boolean }) => (
  <div className={cn("mb-16 lg:mb-24", centered && "text-center")}>
    <motion.span 
      initial={{ opacity: 0, letterSpacing: "0.2em" }}
      whileInView={{ opacity: 1, letterSpacing: "0.5em" }}
      className="text-primary font-black uppercase text-[10px] mb-4 block"
    >
      {subtitle}
    </motion.span>
    <h2 className="text-4xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.9]">
      {title}
    </h2>
  </div>
);

const WhoWeAre = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[90vh] w-full overflow-hidden flex items-center justify-center pt-32 lg:pt-48"
    >
      <div className="relative z-10 px-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <SectionHeader 
              subtitle="01. Identity" 
              title={<>Precision <br /> <span className="text-primary italic">Redefined.</span></>} 
            />
            <p className="text-xl md:text-3xl text-muted-foreground font-medium leading-tight max-w-xl">
              Onmog Softsol is a premier engineering and technology powerhouse bridging the gap between <span className="text-foreground underline decoration-primary underline-offset-4">traditional infrastructure</span> and <span className="text-foreground underline decoration-primary underline-offset-4">digital innovation.</span>
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:flex justify-end"
          >
            <div className="relative w-96 h-96 rounded-[4rem] border border-primary/10 flex items-center justify-center overflow-hidden bg-primary/5 backdrop-blur-3xl shadow-2xl">
               <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
               <Cpu className="w-40 h-40 text-primary opacity-30 animate-pulse-slow" />
               
               {/* Decorative bits */}
               <div className="absolute top-10 right-10 w-2 h-2 rounded-full bg-primary" />
               <div className="absolute bottom-10 left-10 w-2 h-2 rounded-full bg-primary" />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
      >
        <span className="text-[10px] uppercase font-bold tracking-widest">Scroll</span>
        <ArrowDown className="w-4 h-4" />
      </motion.div>
    </section>
  );
};

const TheProblem = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const xLeft = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const xRight = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={ref} className="py-32 lg:py-64 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          subtitle="02. The Challenge" 
          title={<>Stagnation is <br /> <span className="opacity-40">The Enemy.</span></>} 
          centered
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <motion.div style={{ x: xLeft }} className="space-y-8">
            <div className="p-10 rounded-[3rem] bg-destructive/5 border border-destructive/10 backdrop-blur-xl group hover:bg-destructive/10 transition-colors duration-500">
               <AlertTriangle className="w-12 h-12 text-destructive mb-6 group-hover:scale-110 transition-transform" />
               <h3 className="text-3xl font-black uppercase mb-4">The Legacy Trap</h3>
               <p className="text-muted-foreground font-medium text-lg leading-relaxed">
                 Traditional infrastructure often suffers from technological stagnation and safety-critical gaps. Relying on legacy systems without modernization leads to inefficiency, risk, and missed opportunities for millions.
               </p>
            </div>
          </motion.div>

          <motion.div style={{ x: xRight }} className="space-y-8">
            <div className="p-10 rounded-[3rem] bg-primary/5 border border-primary/10 backdrop-blur-xl group hover:bg-primary/10 transition-colors duration-500">
               <Lightbulb className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
               <h3 className="text-3xl font-black uppercase mb-4">The Critical Need</h3>
               <p className="text-muted-foreground font-medium text-lg leading-relaxed">
                 In an era of rapid digital shift, safety-critical systems require more than just updates; they require a fundamental reimagining through the lens of zero-error engineering and SIL standards.
               </p> 
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const TheSolution = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);

  return (
    <section ref={containerRef} className="py-32 lg:py-64 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
           <motion.div style={{ scale }} className="relative h-[400px] lg:h-[600px] rounded-[4rem] border border-glass-border flex items-center justify-center bg-card/20 backdrop-blur-2xl group overflow-hidden">
             {/* Abstract Circuit Pattern */}
             <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] group-hover:scale-110 transition-transform duration-1000" />
             <div className="relative z-10 flex flex-col items-center gap-6">
                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center animate-pulse">
                   <Shield className="w-12 h-12 text-primary" />
                </div>
                <div className="text-center">
                   <div className="text-6xl font-black text-primary">SIL 4</div>
                   <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mt-2">Safety Integrity Level</div>
                </div>
             </div>
             
             {/* Corners */}
             <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-primary/30" />
             <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-primary/30" />
           </motion.div>

           <div>
              <SectionHeader 
                subtitle="03. The Build" 
                title={<>Zero-Error <br /> <span className="text-primary italic">Engineering.</span></>} 
              />
              <div className="space-y-6 text-xl text-muted-foreground font-medium leading-relaxed">
                <p>
                  We build safety-critical rail signaling systems, agile enterprise software, and high-performance workforce solutions. 
                </p>
                <p>
                  By integrating human expertise with technical mastery and <span className="text-foreground font-bold underline underline-offset-8 decoration-primary/30">absolute precision</span>, we deliver infrastructure that powers the future of transport.
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10">
                  {['Rail Signaling Design', 'Testing & Commissioning', 'IT Staffing Solutions', 'Enterprise Software'].map(item => (
                    <li key={item} className="flex items-center gap-4 text-xs font-black uppercase tracking-[0.2em] text-foreground/80 group">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-150 transition-transform" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

const TheVision = () => {
  return (
    <section className="py-32 lg:py-64 px-6 relative overflow-hidden border-t border-glass-border">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-primary font-black uppercase text-[10px] mb-8 block tracking-[0.8em]"
        >
          04. The Horizon
        </motion.span>
        <h2 className="text-5xl md:text-9xl font-black tracking-tighter uppercase leading-[0.8] mb-12">
          Global architect <br /> of <span className="italic opacity-50">Innovation.</span>
        </h2>
        <p className="text-xl md:text-3xl font-medium max-w-3xl mx-auto text-muted-foreground leading-relaxed">
          Our goal is to make advanced engineering invisible and seamless, serving as the rock-solid foundation for every human interaction.
        </p>
        
        <div className="mt-20 lg:mt-32 flex flex-wrap justify-center gap-12 lg:gap-32">
           <div className="text-center group">
             <div className="text-5xl lg:text-8xl font-black group-hover:text-primary transition-colors">2030</div>
             <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground mt-4">Global Milestone</div>
           </div>
           <div className="text-center group">
             <div className="text-5xl lg:text-8xl font-black group-hover:text-primary transition-colors">100%</div>
             <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground mt-4">Digital Safety</div>
           </div>
           <div className="text-center group">
             <div className="text-5xl lg:text-8xl font-black group-hover:text-primary transition-colors">∞</div>
             <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground mt-4">Potential</div>
           </div>
        </div>
      </div>
    </section>
  );
};

export function AboutPageClient() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-transparent">
      <WhoWeAre />
      <TheProblem />
      <TheSolution />
      <Team />
      <TheVision />
    </div>
  );
}
