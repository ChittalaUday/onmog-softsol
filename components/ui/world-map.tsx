"use client";

import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import DottedMap from "dotted-map";

interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string };
    end: { lat: number; lng: number; label?: string };
  }>;
  lineColor?: string;
}

export default function WorldMap({
  dots = [],
  lineColor = "#0ea5e9",
}: MapProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const svgMapHtml = useMemo(() => {
    const map = new DottedMap({ height: 100, grid: "diagonal" });
    
    dots.forEach((dot) => {
      try {
        (map as any).addPin({
          lat: dot.start.lat,
          lng: dot.start.lng,
          svgOptions: { color: "#ffffff", radius: 0.5 }
        });
      } catch (e) {}
    });

    const svg = map.getSVG({
      radius: 0.25,
      color: "#FFFFFF40", 
      shape: "circle",
      backgroundColor: "transparent",
    });

    // Inject width/height 100% to ensure it scales to the parent
    return svg.replace('<svg', '<svg width="100%" height="100%" preserveAspectRatio="xMidYMid meet"');
  }, [dots]);

  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  return (
    <div className="w-full h-full relative overflow-visible flex items-center justify-center">
      {/* The Dotted Map Layer */}
      <div 
        className="absolute inset-0 w-full h-full opacity-40 select-none pointer-events-none"
        dangerouslySetInnerHTML={{ __html: svgMapHtml }}
      />

      {/* The Interactive Overlay Layer */}
      {mounted && (
        <svg
          viewBox="0 0 800 400"
          className="absolute inset-0 w-full h-full pointer-events-none z-10"
        >
          <defs>
            <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="5%" stopColor={lineColor} />
              <stop offset="95%" stopColor={lineColor} />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>

          {dots.map((dot, i) => {
            const startPoint = projectPoint(dot.start.lat, dot.start.lng);
            const endPoint = projectPoint(dot.end.lat, dot.end.lng);
            if (dot.start.lat === dot.end.lat && dot.start.lng === dot.end.lng) return null;

            return (
              <g key={`path-group-${i}`}>
                <motion.path
                  d={createCurvedPath(startPoint, endPoint)}
                  fill="none"
                  stroke="url(#path-gradient)"
                  strokeWidth="1.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 0.5 * i }}
                />
              </g>
            );
          })}

          {dots.map((dot, i) => (
            <g key={`points-group-${i}`}>
              <circle
                cx={projectPoint(dot.start.lat, dot.start.lng).x}
                cy={projectPoint(dot.start.lat, dot.start.lng).y}
                r="3"
                fill={lineColor}
              />
              <circle
                cx={projectPoint(dot.start.lat, dot.start.lng).x}
                cy={projectPoint(dot.start.lat, dot.start.lng).y}
                r="3"
                fill={lineColor}
                opacity="0.5"
              >
                <animate attributeName="r" from="3" to="10" dur="1.5s" repeatCount="indefinite" />
                <animate attributeName="opacity" from="0.5" to="0" dur="1.5s" repeatCount="indefinite" />
              </circle>
            </g>
          ))}
        </svg>
      )}
    </div>
  );
}
