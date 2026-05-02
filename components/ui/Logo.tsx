import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const Logo = ({ className = "w-12 h-12" }: { className?: string }) => (
  <div className={cn("relative", className)}>
    <Image
      src="/image.png"
      alt="Onmog Logo"
      fill
      className="object-contain dark:brightness-0 dark:invert transition-all"
      priority
    />
  </div>
);

export const LogoFull = ({ className = "" }: { className?: string }) => (
  <div className={cn("flex flex-col items-center gap-2", className)}>
    <div className="relative w-24 h-24">
      <Image
        src="/image.png"
        alt="Onmog Logo"
        fill
        className="object-contain dark:brightness-0 dark:invert transition-all"
        priority
      />
    </div>
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-black tracking-[0.2em] text-secondary dark:text-foreground uppercase">
        ONMOG
      </h1>
      <div className="flex items-center gap-4 w-full">
        <div className="h-[2px] flex-1 bg-[#0050D1]/30" />
        <span className="text-[10px] font-bold tracking-[0.5em] text-[#0050D1] uppercase">
          SOFTSOL
        </span>
        <div className="h-[2px] flex-1 bg-[#0050D1]/30" />
      </div>
    </div>
    <p className="text-[8px] font-bold tracking-widest text-muted-foreground uppercase mt-2">
      Transforming Challenges into Sustainable Solutions
    </p>
  </div>
);
