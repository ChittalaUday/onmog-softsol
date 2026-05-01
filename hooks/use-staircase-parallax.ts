"use client";

import { useScroll, useTransform, MotionValue } from "framer-motion";
import { RefObject } from "react";

export interface StaircaseParallax {
  headingY: MotionValue<number>;
  subTextY: MotionValue<number>;
  contentY: MotionValue<number>;
  footerY: MotionValue<number>;
  opacity: MotionValue<number>;
  scale: MotionValue<number>;
  scrollYProgress: MotionValue<number>;
}

export const useStaircaseParallax = (
  target: RefObject<HTMLElement | null>,
  direction: "up" | "down" = "up"
): StaircaseParallax => {
  const { scrollYProgress } = useScroll({
    target: target,
    offset: ["start start", "end start"],
  });

  const isUp = direction === "up";
  const mult = isUp ? -1 : 1;

  
  const headingY = useTransform(
    scrollYProgress, 
    [0, 0.25], 
    [0, (isUp ? 400 : 60) * mult]
  );
  
  const subTextY = useTransform(
    scrollYProgress, 
    [0, 0.22], 
    [0, (isUp ? 280 : 120) * mult]
  );
  
  const contentY = useTransform(
    scrollYProgress, 
    [0, 0.2], 
    [0, (isUp ? 200 : 180) * mult]
  );
  
  const footerY = useTransform(
    scrollYProgress, 
    [0, 0.18], 
    [0, (isUp ? 120 : 250) * mult]
  );

  const opacity = useTransform(scrollYProgress, [0, 0.22], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.22], [1, isUp ? 1.15 : 0.9]);

  return { headingY, subTextY, contentY, footerY, opacity, scale, scrollYProgress };
};
