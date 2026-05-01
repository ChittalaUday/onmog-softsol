"use client";

import { useEffect } from "react";
import Stats from "stats.js";
import { scan } from "react-scan";

export function DebugTools() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "development") return;

    // Initialize React Scan
    scan({
      enabled: true,
      log: true, // logs render reason to console
    });

    // Initialize Stats.js
    const stats = new Stats();
    stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
    
    // Position it at the bottom left to avoid overlapping with Navbar
    stats.dom.style.position = "fixed";
    stats.dom.style.left = "0px";
    stats.dom.style.top = "auto";
    stats.dom.style.bottom = "0px";
    stats.dom.style.zIndex = "10000";
    
    document.body.appendChild(stats.dom);

    const animate = () => {
      stats.begin();
      // monitored code goes here
      stats.end();
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    return () => {
      document.body.removeChild(stats.dom);
    };
  }, []);

  return null;
}
