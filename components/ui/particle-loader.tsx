"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { cn, getLightPrimaryVariants } from "@/lib/utils";
import gsap from "gsap";

interface Particle {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  finalX: number;
  finalY: number;
  vx: number;
  vy: number;
  size: number;
  colorType: "primary" | "secondary";
}

export const ParticleLoader = ({
  onComplete,
  isReady
}: {
  onComplete?: () => void;
  isReady: boolean;
}) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [phase, setPhase] = useState<"gathering" | "rotating" | "disperse">("gathering");
  const [isVisible, setIsVisible] = useState(true);
  const [minRotationDone, setMinRotationDone] = useState(false);
  const isDark = mounted && resolvedTheme === "dark";
  const lightVariants = React.useMemo(() => getLightPrimaryVariants(5), []);

  // Refs to prevent double initialization and keep animation smooth
  const particlesRef = useRef<Particle[]>([]);
  const isInitialized = useRef(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const particleCount = 300;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const radius = 110;
    const thickness = 14;
    let rotationAngle = 0;

    const colors = isDark
      ? { primary: "#0050D1", secondary: "#FFFFFF" }
      : { primary: "#002060", secondary: "#000000" };

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const newParticles: Particle[] = [];
      const arcRange = Math.PI * 1.5;

      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;

        const progress = i / particleCount;
        const currentThickness = thickness * (0.2 + progress * 0.8);
        const angle = progress * arcRange;
        const rOffset = (Math.random() - 0.5) * currentThickness;

        let targetX = centerX + Math.cos(angle) * (radius + rOffset);
        let targetY = centerY + Math.sin(angle) * (radius + rOffset);

        const capStart = 0.94; // where rounding begins

        if (progress > capStart) {
          const capProgress = (progress - capStart) / (1 - capStart);
          // Use a power function to concentrate particles more towards the very tip (PI/2)
          const adjustedProgress = capProgress < 0.5
            ? Math.pow(capProgress * 2, 0.8) * 0.5
            : 1 - Math.pow((1 - capProgress) * 2, 0.8) * 0.5;

          const capAngle = adjustedProgress * Math.PI;
          const capRadius = currentThickness / 2;
          const endAngle = arcRange;

          const baseX = centerX + Math.cos(endAngle) * radius;
          const baseY = centerY + Math.sin(endAngle) * radius;

          targetX = baseX + Math.cos(endAngle + capAngle) * capRadius;
          targetY = baseY + Math.sin(endAngle + capAngle) * capRadius;
        }

        const finalX = Math.random() * canvas.width;
        const finalY = Math.random() * canvas.height;

        newParticles.push({
          x,
          y,
          targetX,
          targetY,
          finalX,
          finalY,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: (0.35 + progress * 1.75) * (Math.random() * 0.4 + 0.6),
          colorType: i % 4 === 0 ? "primary" : "secondary",
        });
      }
      particlesRef.current = newParticles;
      isInitialized.current = true;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      rotationAngle += 0.032;

      particlesRef.current.forEach((p, i) => {
        const progress = i / particleCount;

        if (phase === "gathering") {
          const dx = p.targetX - p.x;
          const dy = p.targetY - p.y;
          p.x += dx * 0.04;
          p.y += dy * 0.04;
        } else if (phase === "rotating") {
          const arcRange = Math.PI * 1.5;
          const currentThickness = thickness * (0.2 + progress * 0.8);
          const capStart = 0.94;

          let tx, ty;

          if (progress > capStart) {
            const capProgress = (progress - capStart) / (1 - capStart);
            const adjustedProgress = capProgress < 0.5
              ? Math.pow(capProgress * 2, 0.8) * 0.5
              : 1 - Math.pow((1 - capProgress) * 2, 0.8) * 0.5;
            const capAngle = adjustedProgress * Math.PI;
            const capRadius = currentThickness / 2;
            const endAngle = arcRange + rotationAngle;

            const baseX = centerX + Math.cos(endAngle) * radius;
            const baseY = centerY + Math.sin(endAngle) * radius;

            tx = baseX + Math.cos(endAngle + capAngle) * capRadius;
            ty = baseY + Math.sin(endAngle + capAngle) * capRadius;
          } else {
            const angle = progress * arcRange + rotationAngle;
            const rOffset = (i % 10 - 5) * (currentThickness / 10);
            tx = centerX + Math.cos(angle) * (radius + rOffset);
            ty = centerY + Math.sin(angle) * (radius + rOffset);
          }

          p.x += (tx - p.x) * 0.12;
          p.y += (ty - p.y) * 0.12;
        } else if (phase === "disperse") {
          const dx = p.finalX - p.x;
          const dy = p.finalY - p.y;
          p.x += dx * 0.03;
          p.y += dy * 0.03;
          // Use ticker time or just decay
          ctx.globalAlpha = Math.max(0, 1 - (gsap.ticker.frame % 100) / 100);
        }

        const twinkle = Math.sin(Date.now() * 0.005 + i) * 0.5 + 0.5;
        const color = p.colorType === "primary" ? colors.primary : colors.secondary;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = color;

        const alpha = phase === "disperse" ? ctx.globalAlpha : (0.2 + progress * 0.8) * (twinkle * 0.4 + 0.6);
        ctx.globalAlpha = alpha;
        ctx.fill();
        ctx.globalAlpha = 1.0;

        if (p.colorType === "primary" && phase !== "disperse") {
          ctx.shadowBlur = (8 * progress) * twinkle;
          ctx.shadowColor = colors.primary;
        } else {
          ctx.shadowBlur = 0;
        }
      });
    };

    if (!isInitialized.current) {
      init();
    }
    gsap.ticker.add(animate);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // Re-center logic would go here if needed, but keeping it simple for now
    };
    window.addEventListener("resize", handleResize);

    return () => {
      gsap.ticker.remove(animate);
      window.removeEventListener("resize", handleResize);
    };
  }, [phase, isDark, mounted]);

  // Phase control logic
  useEffect(() => {
    if (!mounted) return;
    const gatheringTimer = setTimeout(() => setPhase("rotating"), 500);
    const rotatingTimer = setTimeout(() => setMinRotationDone(true), 1000);
    return () => {
      clearTimeout(gatheringTimer);
      clearTimeout(rotatingTimer);
    };
  }, [mounted]);

  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  // Handle actual app load completion
  useEffect(() => {
    if (minRotationDone && isReady) {
      setPhase("disperse");
      const timer = setTimeout(() => {
        setIsVisible(false);
        onCompleteRef.current?.();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [minRotationDone, isReady]);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "linear" }}
          className={cn(
            "fixed inset-0 z-[9999] flex items-center justify-center transition-colors duration-500 overflow-hidden",
            isDark ? "bg-black" : "bg-white"
          )}
        >
          {/* Theme Aligned Background Elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1500px] h-[1500px] opacity-[0.15] dark:opacity-[0.05]"
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

            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                x: [0, 50, 0],
                y: [0, 30, 0]
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 dark:bg-primary/8 blur-[160px] rounded-full"
            />

            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                x: [0, -40, 0],
                y: [0, 60, 0]
              }}
              transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-secondary/15 dark:bg-secondary/8 blur-[180px] rounded-full"
            />
          </div>

          <canvas
            ref={canvasRef}
            className="relative z-10 w-full h-full"
          />

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: phase === "disperse" ? 0 : 1, y: 0 }}
            className="absolute bottom-24 flex flex-col items-center gap-2 z-20"
          >
            <span className={cn(
              "text-[10px] font-black uppercase tracking-[0.5em]",
              isDark ? "text-white/40" : "text-black/40"
            )}>
              Initializing Experience
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
