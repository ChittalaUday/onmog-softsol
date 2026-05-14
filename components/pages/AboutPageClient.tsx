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

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden flex items-center pt-20"
    >
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-background/60 backdrop-blur-sm z-10" />
        <img 
          src="/Users/udaychittala/.gemini/antigravity/brain/560c1716-fa62-452a-a27b-ec097a15bc22/about_hero_abstract_engineering_1778743320577.png"
          alt="Abstract Engineering"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-10 px-6 max-w-7xl mx-auto w-full">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <SectionHeader 
              subtitle="01. About Us" 
              title={<>Safe Engineering <br /> <span className="text-primary italic">Simplified.</span></>} 
            />
            
            <div className="relative p-8 md:p-12 rounded-[3rem] bg-card/10 backdrop-blur-2xl border border-glass-border shadow-2xl mt-12 group overflow-hidden">
               {/* Decorative Gradient */}
               <div className="absolute -top-24 -left-24 w-48 h-48 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-colors" />
               
               <p className="relative z-10 text-2xl md:text-4xl text-foreground font-semibold leading-tight tracking-tight">
                 We are a global team of experts who help industries build better systems. From railways to software, we make sure your technology is safe, modern, and reliable.
               </p>
               
               <div className="mt-10 flex gap-4">
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-primary to-transparent self-center" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Onmog Softsol Identity</span>
               </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
      >
        <span className="text-[10px] uppercase font-bold tracking-widest">Explore</span>
        <ArrowDown className="w-4 h-4" />
      </motion.div>
    </section>
  );
};

const TheProblem = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section ref={ref} className="py-32 lg:py-64 px-6 relative">
      {/* Background large text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-black text-foreground/[0.02] select-none pointer-events-none uppercase tracking-tighter">
        Purpose
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader 
          subtitle="02. Why We Exist" 
          title={<>Don't Get <br /> <span className="opacity-40">Left Behind.</span></>} 
          centered
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="group"
          >
            <div className="h-full p-12 rounded-[4rem] bg-gradient-to-br from-destructive/5 to-transparent border border-glass-border backdrop-blur-sm group-hover:border-destructive/20 transition-all duration-700 relative overflow-hidden">
               <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-destructive/5 rounded-full blur-3xl group-hover:bg-destructive/10 transition-colors" />
               
               <div className="w-20 h-20 rounded-3xl bg-destructive/10 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500">
                  <AlertTriangle className="w-10 h-10 text-destructive" />
               </div>
               
               <h3 className="text-4xl font-black uppercase mb-6 tracking-tighter">Moving Beyond <br /> Old Tech</h3>
               <p className="text-muted-foreground font-medium text-xl leading-relaxed">
                 Using outdated systems can lead to high costs and safety risks. We help you replace old technology with modern solutions that work better for everyone.
               </p>
            </div>
          </motion.div>
 
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="group"
          >
            <div className="h-full p-12 rounded-[4rem] bg-gradient-to-br from-primary/5 to-transparent border border-glass-border backdrop-blur-sm group-hover:border-primary/20 transition-all duration-700 relative overflow-hidden lg:mt-24">
               <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />
               
               <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500">
                  <Lightbulb className="w-10 h-10 text-primary" />
               </div>
               
               <h3 className="text-4xl font-black uppercase mb-6 tracking-tighter">Safety <br /> First</h3>
               <p className="text-muted-foreground font-medium text-xl leading-relaxed">
                 In today's world, safety is the most important thing. We build systems that follow the highest standards to keep people and businesses safe.
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
