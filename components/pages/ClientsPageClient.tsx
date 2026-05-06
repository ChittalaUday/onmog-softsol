"use client";

import React, { useState, useMemo, useRef } from "react";
import { 
  motion, 
  AnimatePresence, 
  useScroll, 
  useTransform 
} from "motion/react";
import { clients, Client } from "@/data/clients";
import { cn } from "@/lib/utils";
import { Building2, Cpu, Globe, Rocket, Shield, Users } from "lucide-react";

const SectionHeader = ({ subtitle, title, centered = false }: { subtitle: string, title: string | React.ReactNode, centered?: boolean }) => (
  <div className={cn("mb-16 lg:mb-24", centered && "text-center")}>
    <motion.span 
      initial={{ opacity: 0, letterSpacing: "0.2em" }}
      whileInView={{ opacity: 1, letterSpacing: "0.5em" }}
      className="text-primary font-black uppercase text-[10px] mb-4 block"
    >
      {subtitle}
    </motion.span>
    <h2 className="text-4xl md:text-7xl lg:text-9xl font-black tracking-tighter uppercase leading-[0.85]">
      {title}
    </h2>
  </div>
);

const IndustryIcon = ({ industry }: { industry: string }) => {
  switch (industry) {
    case "Rail & Infrastructure": return <Rocket className="w-5 h-5" />;
    case "IT & Digital Solutions": return <Cpu className="w-5 h-5" />;
    case "Workforce Solutions": return <Users className="w-5 h-5" />;
    case "Life Sciences": return <Globe className="w-5 h-5" />;
    default: return <Building2 className="w-5 h-5" />;
  }
};

const ClientCard = ({ client, index }: { client: Client, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -10 }}
      className="group relative p-8 rounded-[2.5rem] bg-card/20 border border-glass-border backdrop-blur-xl hover:bg-card/40 transition-all duration-500 overflow-hidden"
    >
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/20 transition-all duration-700" />
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
            <IndustryIcon industry={client.industry || ""} />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">
            {client.industry}
          </span>
        </div>
        
        <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 group-hover:text-primary transition-colors">
          {client.name}
        </h3>
        
        {client.description && (
          <p className="text-sm text-muted-foreground font-medium leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
            {client.description}
          </p>
        )}
      </div>

      <div className="absolute bottom-6 right-8 opacity-0 group-hover:opacity-20 transition-opacity">
        <Shield className="w-12 h-12" />
      </div>
    </motion.div>
  );
};

export function ClientsPageClient() {
  const [activeFilter, setActiveFilter] = useState("All");
  const containerRef = useRef<HTMLDivElement>(null);
  
  const industries = useMemo(() => {
    const set = new Set(clients.map(c => c.industry).filter(Boolean));
    return ["All", ...Array.from(set)];
  }, []);

  const filteredClients = useMemo(() => {
    if (activeFilter === "All") return clients;
    return clients.filter(c => c.industry === activeFilter);
  }, [activeFilter]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const headerY = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.3]);

  return (
    <div ref={containerRef} className="relative min-h-screen w-full bg-transparent pt-32 lg:pt-48 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div style={{ y: headerY, opacity }}>
          <SectionHeader 
            subtitle="Partnerships" 
            title={<>Global <br /> <span className="text-primary italic">Alliances.</span></>} 
          />
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-20">
          {industries.map((industry) => (
            <button
              key={industry}
              onClick={() => setActiveFilter(industry!)}
              className={cn(
                "px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 border",
                activeFilter === industry 
                  ? "bg-primary border-primary text-primary-foreground shadow-xl shadow-primary/20 scale-105" 
                  : "bg-card/20 border-glass-border text-muted-foreground hover:bg-card/40 hover:border-primary/50"
              )}
            >
              {industry}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredClients.map((client, i) => (
              <ClientCard key={client.name} client={client} index={i} />
            ))}
          </AnimatePresence>
        </div>

        {/* Scale Section */}
        <div className="mt-48 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-glass-border pt-32">
           <div className="text-center">
             <div className="text-5xl lg:text-8xl font-black text-primary">50+</div>
             <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground mt-4">Active Projects</div>
           </div>
           <div className="text-center">
             <div className="text-5xl lg:text-8xl font-black italic">15+</div>
             <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground mt-4">Industry Segments</div>
           </div>
           <div className="text-center">
             <div className="text-5xl lg:text-8xl font-black text-primary">100%</div>
             <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground mt-4">Client Retention</div>
           </div>
        </div>
      </div>
    </div>
  );
}
