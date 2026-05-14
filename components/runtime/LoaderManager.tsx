"use client";

import React, { useEffect, useState } from "react";
import { ParticleLoader } from "@/components/ui/particle-loader";
import { useAppRuntimeStore } from "@/stores/app-runtime.store";

export const LoaderManager = () => {
  const { stage, markIntroComplete, setStage } = useAppRuntimeStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (stage === 'READY') {
      setMounted(true);
      return;
    }

    if (stage === 'BOOT') {
      const timer = setTimeout(() => setStage('INIT'), 100);
      return () => clearTimeout(timer);
    }

    if (stage === 'INIT' && !mounted) {
      const timer = setTimeout(() => setMounted(true), 800);
      return () => clearTimeout(timer);
    }
  }, [stage, setStage, mounted]);

  if (stage === 'READY') return null;

  return (
    <ParticleLoader 
      isReady={mounted} 
      onComplete={markIntroComplete} 
    />
  );
};
