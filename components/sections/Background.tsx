"use client";

import React from "react";
import { motion } from "framer-motion";
import { SparklesCore } from "@/components/ui/sparkles";
import { useTheme } from "next-themes";

const Background = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const particleColor = mounted && resolvedTheme === "dark" ? "#FFFFFF" : "#000000";

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-background">
      {/* Large Concentric Circles - Slow Rotation */}
      <motion.div 
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1500px] h-[1500px] opacity-[0.05]"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.05" />
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.05" />
          <circle cx="50" cy="50" r="32" fill="none" stroke="currentColor" strokeWidth="0.05" />
          <circle cx="50" cy="50" r="24" fill="none" stroke="currentColor" strokeWidth="0.05" />
          <circle cx="50" cy="50" r="16" fill="none" stroke="currentColor" strokeWidth="0.05" />
        </svg>
      </motion.div>
      
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
      
      {/* Sparkles Effect */}
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="global-sparkles"
          background="transparent"
          minSize={0.4}
          maxSize={1.2}
          particleDensity={100}
          className="w-full h-full"
          particleColor={particleColor}
        />
      </div>
    </div>
  );
};

export default Background;
