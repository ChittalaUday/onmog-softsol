"use client";

import React from "react";
import { TrainFront, Users, Globe, TrendingUp, Cpu, Network } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Common Stat Component for Service Cards
 */
const StatItem = ({ label, value, colorClass }: { label: string, value: string, colorClass: string }) => (
  <div className="flex flex-col gap-1">
    <span className={cn("text-3xl font-black tracking-tighter transition-colors duration-500", colorClass)}>{value}</span>
    <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 font-bold">{label}</span>
  </div>
);

/**
 * Common Tag Component
 */
const TechTag = ({ label, colorClass }: { label: string, colorClass: string }) => (
  <span className={cn("px-3 py-1 rounded-lg border text-[11px] font-bold tracking-wider uppercase backdrop-blur-md transition-all duration-300", colorClass)}>
    {label}
  </span>
);

// ─── Rail Signaling ─────────────────────────────────────────────────────────
export const RailSignalingContent = () => (
  <div className="relative w-full h-full flex flex-col items-center justify-center p-12">
    {/* Background Decorative Grid */}
    <div className="absolute inset-0 bg-grid-faint opacity-20" />
    
    <div className="w-full max-w-2xl aspect-[1.4/1] p-12 rounded-[2.5rem] bg-card/50 dark:bg-zinc-950 border border-border dark:border-white/10 flex flex-col justify-between relative overflow-hidden group shadow-2xl backdrop-blur-sm">
      {/* Animated Scan Line */}
      <motion.div 
        animate={{ top: ["0%", "100%", "0%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent z-20 opacity-50"
      />

      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_12px_rgba(59,130,246,0.8)]" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500">System Active</span>
          </div>
          <h3 className="text-5xl font-black tracking-tighter text-foreground leading-[0.9]">
            Precision <br /> 
            <span className="text-blue-500">Signaling</span>
          </h3>
        </div>
        
        <motion.div
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="p-6 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-500"
        >
          <TrainFront size={56} strokeWidth={1.5} />
        </motion.div>
      </div>

      <div className="space-y-8">
        <div className="flex gap-4">
          <TechTag label="SIL-4" colorClass="bg-blue-500/10 border-blue-500/20 text-blue-500" />
          <TechTag label="ETCS-2" colorClass="bg-blue-500/10 border-blue-500/20 text-blue-500" />
          <TechTag label="CBTC" colorClass="bg-blue-500/10 border-blue-500/20 text-blue-500" />
        </div>
        
        <div className="grid grid-cols-2 gap-12 pt-8 border-t border-border dark:border-white/5">
          <StatItem label="Response Time" value="< 2ms" colorClass="text-blue-500" />
          <StatItem label="Safety Integrity" value="99.99%" colorClass="text-blue-500" />
        </div>
      </div>

      {/* Background Icon Watermark */}
      <TrainFront className="absolute -bottom-16 -right-16 w-80 h-80 text-blue-500/10 dark:text-blue-500/5 -rotate-12 pointer-events-none" />
    </div>
  </div>
);

// ─── Staffing Solutions ──────────────────────────────────────────────────────
export const StaffingSolutionsContent = () => (
  <div className="relative w-full h-full flex flex-col items-center justify-center p-12">
    <div className="absolute inset-0 bg-grid-faint opacity-20 rotate-45" />
    
    <div className="w-full max-w-2xl aspect-[1.4/1] p-12 rounded-[2.5rem] bg-card/50 dark:bg-zinc-950 border border-border dark:border-white/10 flex flex-col justify-between relative overflow-hidden shadow-2xl backdrop-blur-sm">
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_12px_rgba(16,185,129,0.8)]" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-500">Talent Network</span>
          </div>
          <h3 className="text-5xl font-black tracking-tighter text-foreground leading-[0.9]">
            Elite <br /> 
            <span className="text-emerald-500">Workforce</span>
          </h3>
        </div>
        
        <div className="flex -space-x-6">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.2 }}
              className="w-16 h-16 rounded-full bg-emerald-500/10 border-2 border-emerald-500/30 flex items-center justify-center backdrop-blur-md"
            >
              <Users size={28} className="text-emerald-500" />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        <p className="text-base text-muted-foreground font-medium max-w-[360px] leading-relaxed">
          Connecting visionaries with high-stakes engineering opportunities worldwide through our global talent ecosystem.
        </p>
        
        <div className="grid grid-cols-2 gap-12 pt-8 border-t border-border dark:border-white/5">
          <StatItem label="Placements" value="12k+" colorClass="text-emerald-500" />
          <StatItem label="Client Retention" value="98%" colorClass="text-emerald-500" />
        </div>
      </div>

      <Users className="absolute -bottom-16 -right-16 w-80 h-80 text-emerald-500/10 dark:text-emerald-500/5 rotate-12 pointer-events-none" />
    </div>
  </div>
);

// ─── Digital Innovation ──────────────────────────────────────────────────────
export const DigitalInnovationContent = () => (
  <div className="relative w-full h-full flex flex-col items-center justify-center p-12">
    <div className="absolute inset-0 bg-grid-faint opacity-20" />
    
    <div className="w-full max-w-2xl aspect-[1.4/1] p-12 rounded-[2.5rem] bg-card/50 dark:bg-zinc-950 border border-border dark:border-white/10 flex flex-col justify-between relative overflow-hidden shadow-2xl backdrop-blur-sm">
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse shadow-[0_0_12px_rgba(99,102,241,0.8)]" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-500">Cloud Native</span>
          </div>
          <h3 className="text-5xl font-black tracking-tighter text-foreground leading-[0.9]">
            Future <br /> 
            <span className="text-indigo-500">Ecosystems</span>
          </h3>
        </div>
        
        <div className="relative w-20 h-20 flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-2 border-dashed border-indigo-500/30 rounded-full"
          />
          <Cpu size={40} className="text-indigo-500" />
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex gap-3 flex-wrap">
          <TechTag label="Next.js" colorClass="bg-indigo-500/10 border-indigo-500/20 text-indigo-500" />
          <TechTag label="AWS" colorClass="bg-indigo-500/10 border-indigo-500/20 text-indigo-500" />
          <TechTag label="Kubernetes" colorClass="bg-indigo-500/10 border-indigo-500/20 text-indigo-500" />
          <TechTag label="GraphQL" colorClass="bg-indigo-500/10 border-indigo-500/20 text-indigo-500" />
        </div>
        
        <div className="grid grid-cols-2 gap-12 pt-8 border-t border-border dark:border-white/5">
          <StatItem label="Uptime SLA" value="99.999%" colorClass="text-indigo-500" />
          <StatItem label="Deploy Speed" value="< 4min" colorClass="text-indigo-500" />
        </div>
      </div>

      <Network className="absolute -bottom-16 -right-16 w-80 h-80 text-indigo-500/10 dark:text-indigo-500/5 -rotate-6 pointer-events-none" />
    </div>
  </div>
);

// ─── Business Strategy ───────────────────────────────────────────────────────
export const BusinessStrategyContent = () => (
  <div className="relative w-full h-full flex flex-col items-center justify-center p-12">
    <div className="absolute inset-0 bg-grid-faint opacity-20" />
    
    <div className="w-full max-w-2xl aspect-[1.4/1] p-12 rounded-[2.5rem] bg-card/50 dark:bg-zinc-950 border border-border dark:border-white/10 flex flex-col justify-between relative overflow-hidden shadow-2xl backdrop-blur-sm">
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse shadow-[0_0_12px_rgba(245,158,11,0.8)]" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-500">Market Growth</span>
          </div>
          <h3 className="text-5xl font-black tracking-tighter text-foreground leading-[0.9]">
            Strategic <br /> 
            <span className="text-amber-500">Scaling</span>
          </h3>
        </div>
        
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-500"
        >
          <TrendingUp size={56} strokeWidth={1.5} />
        </motion.div>
      </div>

      <div className="space-y-8">
        <div className="flex items-end gap-3 h-20">
          {[40, 70, 50, 90, 60, 100].map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="flex-1 bg-amber-500/20 border-t-2 border-amber-500 rounded-t-sm"
            />
          ))}
        </div>
        
        <div className="grid grid-cols-2 gap-12 pt-8 border-t border-border dark:border-white/5">
          <StatItem label="Avg. ROI" value="320%" colorClass="text-amber-500" />
          <StatItem label="Efficiency" value="+45%" colorClass="text-amber-500" />
        </div>
      </div>

      <Globe className="absolute -bottom-16 -right-16 w-80 h-80 text-amber-500/10 dark:text-amber-500/5 rotate-45 pointer-events-none" />
    </div>
  </div>
);