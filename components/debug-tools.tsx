"use client";

import { useEffect, useState } from "react";
import Stats from "stats.js";
import { scan } from "react-scan";
import { useAppRuntimeStore } from "@/stores/app-runtime.store";
import { useTransitionStore } from "@/stores/transition.store";

export function DebugTools() {
  const { stage, introComplete } = useAppRuntimeStore();
  const { isTransitioning, transitionLocked, stage: transStage } = useTransitionStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (process.env.NODE_ENV !== "development") return;

    scan({
      enabled: true,
      log: true,
    });

    const stats = new Stats();
    stats.showPanel(0);
    
    stats.dom.style.position = "fixed";
    stats.dom.style.left = "0px";
    stats.dom.style.top = "auto";
    stats.dom.style.bottom = "0px";
    stats.dom.style.zIndex = "10000";
    
    document.body.appendChild(stats.dom);

    let frameId: number;
    const animate = () => {
      stats.begin();
      stats.end();
      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameId);
      document.body.removeChild(stats.dom);
    };
  }, []);

  if (process.env.NODE_ENV !== "development" || !mounted) return null;

  return (
    <div className="fixed bottom-16 left-4 z-[10000] bg-black/80 backdrop-blur text-white text-[10px] font-mono p-3 rounded-md border border-white/10 shadow-xl pointer-events-none w-64">
      <div className="font-bold border-b border-white/20 pb-1 mb-2">RUNTIME DEBUG</div>
      <div className="flex justify-between"><span>App Stage:</span> <span className="text-green-400">{stage}</span></div>
      <div className="flex justify-between"><span>Intro Done:</span> <span className={introComplete ? "text-green-400" : "text-yellow-400"}>{introComplete.toString()}</span></div>
      <div className="flex justify-between"><span>Trans Stage:</span> <span className="text-blue-400">{transStage}</span></div>
      <div className="flex justify-between"><span>Transitioning:</span> <span className={isTransitioning ? "text-yellow-400" : "text-green-400"}>{isTransitioning.toString()}</span></div>
      <div className="flex justify-between"><span>TransLocked:</span> <span className={transitionLocked ? "text-red-400" : "text-green-400"}>{transitionLocked.toString()}</span></div>
    </div>
  );
}
