"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Reusable Glass Container
 * Used for Navbars, Cards, and sections that need a glassmorphic background
 */
interface GlassContainerProps extends HTMLMotionProps<"div"> {
  variant?: "default" | "card";
  children: React.ReactNode;
}

export const GlassContainer = React.forwardRef<HTMLDivElement, GlassContainerProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          "backdrop-blur-xl border transition-all duration-300",
          variant === "default" 
            ? "bg-glass-bg border-glass-border" 
            : "bg-card-bg border-white/20 dark:border-white/10 shadow-xl",
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);
GlassContainer.displayName = "GlassContainer";

/**
 * Reusable Glass Button
 */
interface GlassButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline";
  children: React.ReactNode;
}

export const GlassButton = React.forwardRef<HTMLButtonElement, GlassButtonProps>(
  ({ className, variant = "primary", children, ...props }, ref) => {
    const variants = {
      primary: "bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/20",
      secondary: "bg-background/40 backdrop-blur-md border-border/50 text-foreground hover:bg-background/60",
      outline: "bg-transparent border-border/50 text-foreground hover:bg-white/10 dark:hover:bg-white/5",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-200 border border-transparent",
          variants[variant],
          className
        )}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);
GlassButton.displayName = "GlassButton";

/**
 * Reusable Glass Badge
 */
interface GlassBadgeProps extends HTMLMotionProps<"span"> {
  children: React.ReactNode;
}

export const GlassBadge = React.forwardRef<HTMLSpanElement, GlassBadgeProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <motion.span
        ref={ref}
        className={cn(
          "inline-flex items-center gap-2 px-4 py-1.5 rounded-full",
          "bg-background/30 backdrop-blur-md border border-border/50",
          "text-[10px] font-black uppercase tracking-[0.2em] text-foreground/80",
          className
        )}
        {...props}
      >
        {children}
      </motion.span>
    );
  }
);
GlassBadge.displayName = "GlassBadge";
