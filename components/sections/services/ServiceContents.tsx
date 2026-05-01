"use client";

import React from "react";
import { TrainFront } from "lucide-react";
import { GlassContainer } from "@/components/ui/glass";
import { motion } from "framer-motion";

export const RailSignalingContent = () => (
  <GlassContainer className="w-full h-full p-8 flex flex-col items-center justify-center gap-6 overflow-hidden">
    <motion.div 
      animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
      transition={{ duration: 5, repeat: Infinity }}
      className="p-6 rounded-3xl bg-blue-500/20 text-blue-400"
    >
      <TrainFront size={80} strokeWidth={1} />
    </motion.div>
    <div className="text-center">
      <h4 className="text-2xl font-black text-foreground mb-2">Modern Rail Systems</h4>
      <div className="flex gap-2 justify-center">
        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
        <span className="w-2 h-2 rounded-full bg-blue-500/50" />
        <span className="w-2 h-2 rounded-full bg-blue-500/30" />
      </div>
    </div>
  </GlassContainer>
);

export const StaffingSolutionsContent = () => (
  <GlassContainer className="w-full h-full p-8 flex flex-col items-center justify-center gap-6 overflow-hidden">
    <motion.div 
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="flex -space-x-4"
    >
      {[1, 2, 3].map((i) => (
        <div key={i} className="w-16 h-16 rounded-full border-4 border-glass-border bg-emerald-500/20 flex items-center justify-center backdrop-blur-md">
          <div className="w-8 h-8 rounded-full bg-emerald-500/40" />
        </div>
      ))}
    </motion.div>
    <div className="text-center">
      <h4 className="text-2xl font-black text-foreground mb-2">Technical Talent</h4>
      <p className="text-[10px] uppercase tracking-widest text-emerald-500 font-bold">Expert Placement</p>
    </div>
  </GlassContainer>
);

export const DigitalInnovationContent = () => (
  <GlassContainer className="w-full h-full p-8 flex flex-col items-center justify-center gap-6 overflow-hidden">
    <div className="grid grid-cols-3 gap-3">
      {[...Array(9)].map((_, i) => (
        <motion.div 
          key={i}
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 2, delay: i * 0.1, repeat: Infinity }}
          className="w-8 h-8 rounded-lg bg-orange-500/20 border border-orange-500/30" 
        />
      ))}
    </div>
    <div className="text-center">
      <h4 className="text-2xl font-black text-foreground mb-2">Digital Ecosystems</h4>
      <p className="text-[10px] uppercase tracking-widest text-orange-500 font-bold">Cloud & Web</p>
    </div>
  </GlassContainer>
);

export const BusinessStrategyContent = () => (
  <GlassContainer className="w-full h-full p-8 flex flex-col items-center justify-center gap-6 overflow-hidden">
    <div className="flex items-end gap-2 h-24">
      {[40, 70, 50, 90, 60].map((h, i) => (
        <motion.div 
          key={i}
          initial={{ height: 0 }}
          animate={{ height: `${h}%` }}
          transition={{ duration: 1, delay: i * 0.1 }}
          className="w-6 bg-green-500/30 border-t-2 border-green-500 rounded-t-sm" 
        />
      ))}
    </div>
    <div className="text-center">
      <h4 className="text-2xl font-black text-foreground mb-2">Growth Analytics</h4>
      <p className="text-[10px] uppercase tracking-widest text-green-500 font-bold">Data Driven</p>
    </div>
  </GlassContainer>
);
