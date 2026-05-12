"use client";

import React, { useEffect, useState } from "react";
import { ParticleLoader } from "@/components/ui/particle-loader";
import { useAppRuntimeStore } from "@/stores/app-runtime.store";

export const LoaderManager = () => {
  const { stage, markIntroComplete, setStage } = useAppRuntimeStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (stage !== 'BOOT' && stage !== 'INIT') {
      setMounted(true);
      return;
    }

    const initTimer = setTimeout(() => {
      setStage('INIT');
    }, 100);
    
    const readyTimer = setTimeout(() => {
      setMounted(true);
    }, 1000);

    return () => {
      clearTimeout(initTimer);
      clearTimeout(readyTimer);
    };
  }, [stage, setStage]);

  if (stage === 'READY') return null;

  return (
    <ParticleLoader 
      isReady={mounted} 
      onComplete={markIntroComplete} 
    />
  );
};
