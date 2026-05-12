"use client";

import React, { useEffect } from "react";
import { useAppRuntimeStore } from "@/stores/app-runtime.store";

export const ExperienceRoot = ({ children }: { children: React.ReactNode }) => {
  const { stage } = useAppRuntimeStore();

  useEffect(() => {
    if (stage === 'BOOT' || stage === 'INIT' || stage === 'INTRO') {
      document.body.classList.add("is-loading");
    } else {
      document.body.classList.remove("is-loading");
    }
  }, [stage]);

  return (
    <>
      {children}
    </>
  );
};
