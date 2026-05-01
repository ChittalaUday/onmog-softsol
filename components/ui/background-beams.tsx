"use client";
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  const beamsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!beamsRef.current) return;
    // Basic interaction logic or just static beams if preferred
  }, []);

  return (
    <div
      ref={beamsRef}
      className={cn(
        "absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]",
        className
      )}
    >
      <svg
        className="absolute h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#D3F36B" stopOpacity="0" />
            <stop offset="50%" stopColor="#D3F36B" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#D3F36B" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M-100 100L1000 -100"
          stroke="url(#gradient)"
          strokeWidth="2"
          fill="none"
        />
        {/* Add more paths for actual "beams" effect */}
      </svg>
    </div>
  );
};
