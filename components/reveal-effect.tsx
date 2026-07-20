"use client";

import { useReveal } from "@/lib/use-reveal";

// Drop into a server-rendered page to activate [data-reveal] animations.
export default function RevealEffect() {
  useReveal();
  return null;
}
