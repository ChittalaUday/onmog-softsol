"use client";

import React from "react";
import { motion, useMotionValue,AnimatePresence, useSpring, useTransform } from "framer-motion";
import { SparklesCore } from "@/components/ui/sparkles";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { getLightPrimaryVariants } from "@/lib/utils";
import { useAppRuntimeStore } from "@/stores/app-runtime.store";

const Background = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [showCircles, setShowCircles] = React.useState(false);
  const sectionRef = React.useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  // Smooth spring with a deliberate trailing lag (approx 120ms)
  const springY = useSpring(mouseY, { stiffness: 70, damping: 26 });

  const { introComplete } = useAppRuntimeStore();
  const pathname = usePathname();

  React.useEffect(() => {
    setMounted(true);
    
    // Show circles if loader finished, or if we are not on home
    if (pathname !== "/" || introComplete) {
      setShowCircles(true);
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);  
    };
  }, [mouseX, mouseY, pathname, introComplete]);

  const isDark = mounted && resolvedTheme === "dark";
  const lightVariants = React.useMemo(() => getLightPrimaryVariants(5), []);
  
  // Create significantly darker variants for a stronger hover effect
  const hoverVariants = React.useMemo(() => {
    return lightVariants.map(v => v.replace(/oklch\(([\d.]+)%/, (_, l) => `oklch(${parseFloat(l) - 30}%`));
  }, [lightVariants]);

  // Transform snappy spring values into a refined spotlight with a sharp core
  const maskImage = useTransform(
    [mouseX, mouseY],
    ([x, y]) => `radial-gradient(circle 150px at ${x}px ${y}px, black, transparent)`
  );

  return (
    <div ref={sectionRef} className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-background">
      <AnimatePresence>
        {showCircles && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0"
          >
            {/* Base Layer: Concentric Circles */}
            <motion.div 
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1500px] h-[1500px] opacity-[0.12] dark:opacity-[0.05]"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {[48, 40, 32, 24, 16].map((r, i) => (
                  <circle 
                    key={r} 
                    cx="50" 
                    cy="50" 
                    r={r} 
                    fill={!isDark ? lightVariants[i] : "none"}
                    stroke={isDark ? "currentColor" : "none"}
                    strokeWidth="0.05" 
                  />
                ))}
              </svg>
            </motion.div>

            {/* Hover Spotlight Layer (Light Mode Only) */}
            {!isDark && (
              <motion.div 
                style={{ maskImage, WebkitMaskImage: maskImage }}
                className="absolute inset-0 z-[1]"
              >
                <motion.div 
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1500px] h-[1500px] opacity-[0.25]"
                >
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    {[48, 40, 32, 24, 16].map((r, i) => (
                      <circle 
                        key={`hover-${r}`} 
                        cx="50" 
                        cy="50" 
                        r={r} 
                        fill={hoverVariants[i]}
                        stroke="none"
                      />
                    ))}
                  </svg>
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Blurred Blobs - Breathing & Moving */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0]
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 dark:bg-primary/8 blur-[160px] rounded-full" 
      />

      <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          x: [0, -40, 0],
          y: [0, 60, 0]
        }}
        transition={{ 
          duration: 25, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-secondary/15 dark:bg-secondary/8 blur-[180px] rounded-full" 
      />

      {/* Subtle Grid Accent */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
      
      {/* Sparkles Effect - Only in Dark Theme */}
      {isDark && (
        <div className="absolute inset-0 w-full h-full">
          <SparklesCore
            id="global-sparkles"
            background="transparent"
            minSize={0.4}
            maxSize={1.2}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>
      )}
    </div>
  );
};

export default Background;
