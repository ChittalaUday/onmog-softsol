"use client";

import React from "react";
import { motion } from "framer-motion";
import { GlassContainer } from "@/components/ui/glass";
import { useStaircaseParallax } from "@/hooks/use-staircase-parallax";

const ValuesSection = () => {
  const sectionRef = React.useRef<HTMLElement>(null);
  const { headingY, subTextY, contentY, opacity, scale } = useStaircaseParallax(sectionRef, "up");

  return (
    <section ref={sectionRef} className="py-24 px-6 relative overflow-hidden min-h-[80vh]">
      <div className="max-w-7xl mx-auto">
        <GlassContainer 
          variant="card"
          style={{ opacity, scale }}
          className="p-12 md:p-20 rounded-[3rem] relative overflow-hidden group"
        >
          {/* Decorative Gradient Background inside the glass */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.h2 
                style={{ y: headingY }}
                className="text-4xl md:text-6xl font-black text-foreground mb-8 leading-tight"
              >
                Engineering <span className="text-primary">Human</span> Excellence.
              </motion.h2>
              <motion.p 
                style={{ y: subTextY }}
                className="text-lg text-muted-foreground font-medium mb-10 leading-relaxed"
              >
                At Onmog Softsol, we believe that technology should empower, not complicate. 
                Our approach merges rigorous engineering standards with a human-centric design philosophy, 
                creating digital ecosystems that are as intuitive as they are powerful.
              </motion.p>
              
              <motion.div style={{ y: contentY }} className="flex flex-wrap gap-4">
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-primary">150+</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Projects Delivered</span>
                </div>
                <div className="w-[1px] h-12 bg-border/50 mx-4 hidden sm:block" />
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-primary">12+</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Global Markets</span>
                </div>
                <div className="w-[1px] h-12 bg-border/50 mx-4 hidden sm:block" />
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-primary">99%</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Client Satisfaction</span>
                </div>
              </motion.div>
            </div>
            
            <motion.div style={{ y: contentY }} className="relative aspect-square lg:aspect-auto h-full min-h-[400px]">
              <div className="absolute inset-0 bg-accent-lime/5 rounded-[2rem] blur-2xl" />
              <div className="absolute inset-8 border border-primary/20 rounded-[1.5rem] flex items-center justify-center backdrop-blur-sm">
                <div className="text-center p-8">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="w-10 h-10 bg-primary rounded-xl rotate-45 flex items-center justify-center">
                       <div className="w-4 h-4 bg-white rounded-sm" />
                    </div>
                  </div>
                  <span className="text-sm font-bold text-foreground block mb-2">Established in 2018</span>
                  <span className="text-xs text-muted-foreground">Hyderabad, India & Global</span>
                </div>
              </div>
            </motion.div>
          </div>
        </GlassContainer>
      </div>
    </section>
  );
};

export default ValuesSection;
