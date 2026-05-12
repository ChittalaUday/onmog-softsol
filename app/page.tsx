"use client";

import { cn } from "@/lib/utils";
import dynamic from 'next/dynamic';
import Hero from "@/components/sections/Hero";
import { useAppRuntimeStore } from "@/stores/app-runtime.store";
import { useTransitionStore } from "@/stores/transition.store";

const StickyServices = dynamic(() => import("@/components/sections/StickyServices"), { ssr: false });
const About = dynamic(() => import("@/components/sections/About"), { ssr: false });
const Process = dynamic(() => import("@/components/sections/Process"), { ssr: false });
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"), { ssr: false });

export default function Home() {
  const { stage } = useAppRuntimeStore();
  const { isTransitioning } = useTransitionStore();
  const loading = stage !== 'READY' || isTransitioning;

  return (
    <div className={cn(
      "transition-opacity duration-500",
      loading ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"
    )}>
      <Hero show={!loading} />
      <StickyServices />
      <About />
      <Process />
      <Testimonials />
    </div>
  );
}
