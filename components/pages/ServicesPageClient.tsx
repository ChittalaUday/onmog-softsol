"use client";

import Link from "next/link";
import React, { useState, useMemo, useRef } from "react";
import { 
  motion, 
  AnimatePresence, 
  useScroll, 
  useTransform 
} from "framer-motion";
import { allServices, ServiceItem } from "@/data/all-services";
import { cn } from "@/lib/utils";
import { 
  Search, 
  CheckCircle2, 
  Clock, 
  Layers, 
  Zap,
  Cpu,
  Globe,
  Users,
  TrainFront,
  ArrowRight
} from "lucide-react";

// --- Components ---

const CategoryIcon = ({ category }: { category: string }) => {
  switch (category) {
    case "Rail Engineering": return <TrainFront className="w-5 h-5" />;
    case "IT Solutions": return <Cpu className="w-5 h-5" />;
    case "Workforce & Staffing": return <Users className="w-5 h-5" />;
    case "Digital Growth": return <Globe className="w-5 h-5" />;
    default: return <Zap className="w-5 h-5" />;
  }
};

const ServiceCard = ({ service, index }: { service: ServiceItem, index: number }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.02 }}
      className="group relative p-8 rounded-[2rem] bg-card/20 border border-glass-border backdrop-blur-xl hover:bg-card/40 transition-all duration-500 flex flex-col h-full overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-all" />
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
            <CategoryIcon category={service.category} />
          </div>
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60">
            {service.category}
          </span>
        </div>

        <h3 className="text-2xl font-black uppercase tracking-tight mb-4 group-hover:text-primary transition-colors leading-none">
          {service.title}
        </h3>
        
        <p className="text-sm text-muted-foreground font-medium leading-relaxed mb-8 line-clamp-3">
          {service.description}
        </p>

        <div className="mt-auto space-y-4">
          <div className="flex flex-wrap gap-2">
            {service.features.map((feature, i) => (
              <span key={i} className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-widest text-foreground/70 bg-foreground/5 px-2 py-1 rounded-md">
                <CheckCircle2 className="w-2.5 h-2.5 text-primary" />
                {feature}
              </span>
            ))}
          </div>

          <div className="pt-6 border-t border-glass-border flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-muted-foreground/40" />
                <span className={cn(
                  "text-[10px] font-bold uppercase tracking-widest",
                  service.complexity === "Enterprise" ? "text-primary" : "text-muted-foreground"
                )}>
                  {service.complexity}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-muted-foreground/40" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                  {service.duration}
                </span>
              </div>
            </div>
            
            <Link href={`/services/${service.id}`} className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all group/btn">
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export function ServicesPageClient() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  
  const categories = useMemo(() => ["All", ...Array.from(new Set(allServices.map(s => s.category)))], []);
  
  const filteredServices = useMemo(() => {
    let results = allServices.filter(s => 
      (s.title.toLowerCase().includes(search.toLowerCase()) || s.description.toLowerCase().includes(search.toLowerCase())) &&
      (activeCategory === "All" || s.category === activeCategory)
    );

    // No sorting applied; retain original order
    
    return results;
  }, [search, activeCategory]);

  return (
    <div className="relative min-h-screen w-full bg-transparent pt-32 lg:pt-48 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 lg:mb-24">
          <motion.span 
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            animate={{ opacity: 1, letterSpacing: "0.5em" }}
            className="text-primary font-black uppercase text-[10px] mb-4 block"
          >
            Our Capabilities
          </motion.span>
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase leading-[0.85]">
            Service <br /> <span className="text-primary italic">Catalog.</span>
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 mb-16 items-start lg:items-center justify-between">
          <div className="relative w-full lg:max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/40" />
            <input 
              type="text" 
              placeholder="Search services..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-card/20 border border-glass-border rounded-2xl py-4 pl-12 pr-6 text-sm font-medium focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all backdrop-blur-xl"
            />
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 mr-4 overflow-x-auto pb-2 lg:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all",
                    activeCategory === cat 
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-105" 
                      : "bg-card/20 text-muted-foreground border border-glass-border hover:bg-card/40"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>

          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </AnimatePresence>
        </div>

        {filteredServices.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-40 text-center"
          >
            <div className="inline-flex p-8 rounded-[3rem] bg-card/20 border border-glass-border mb-8">
               <Search className="w-16 h-16 text-muted-foreground/20" />
            </div>
            <h2 className="text-4xl font-black uppercase tracking-tight mb-4">No matching services</h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              We couldn't find any services matching your current search or filters. Try adjusting your criteria.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
