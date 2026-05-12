"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { TransitionOverlay } from "@/components/runtime/TransitionOverlay";
import { cn } from "@/lib/utils";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  
  return (
    <div 
      className={cn(
        "relative min-h-screen w-full overflow-x-hidden bg-transparent",
        isHome ? "selection:bg-secondary selection:text-secondary-foreground" : "selection:bg-primary selection:text-primary-foreground"
      )}
    >
      <TransitionOverlay>
        {children}
      </TransitionOverlay>
    </div>
  );
}
