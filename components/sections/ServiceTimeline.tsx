"use client";

import React from "react";
import { motion } from "framer-motion";
import { ProcessStep } from "@/data/all-services";
import { ArrowRight, ChevronRight, Check } from "lucide-react";

interface ServiceTimelineProps {
  steps: ProcessStep[];
}

export default function ServiceTimeline({ steps }: ServiceTimelineProps) {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4"
          >
            Workflow
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-black text-center tracking-tight">
            Our <span className="text-primary italic">Procedure</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative"
            >
              <div className="h-full p-8 rounded-[2.5rem] bg-card/40 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all hover:shadow-2xl hover:shadow-primary/5 flex flex-col relative z-10">
                {/* Step Number Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center text-xl font-black shadow-lg shadow-primary/20 group-hover:rotate-[360deg] transition-transform duration-700">
                    {idx + 1}
                  </div>
                  {idx < steps.length - 1 && (
                    <div className="hidden lg:block">
                      <ArrowRight className="w-6 h-6 text-primary/30 group-hover:text-primary group-hover:translate-x-2 transition-all" />
                    </div>
                  )}
                  {/* Mobile/Tablet Arrow */}
                  {idx < steps.length - 1 && (
                    <div className="lg:hidden absolute -bottom-6 left-1/2 -translate-x-1/2 z-20 w-8 h-8 rounded-full bg-background border border-primary/20 flex items-center justify-center shadow-sm">
                      <ChevronRight className="w-4 h-4 text-primary rotate-90" />
                    </div>
                  )}
                </div>

                <h3 className="text-2xl font-black mb-4 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed font-medium">
                  {step.description}
                </p>

                <div className="mt-auto pt-6 flex items-center gap-2">
                   <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                     <Check className="w-3 h-3 text-primary" />
                   </div>
                   <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Quality Assured</span>
                </div>
              </div>

              {/* Connecting Background Path (Subtle) */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-[2.5rem] left-[calc(100%-1rem)] w-12 h-px bg-gradient-to-r from-primary/40 to-transparent z-0" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
