"use client";

import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import { clients } from "@/data/clients";

export function ClientMarquee() {
  const prefersReduced = useReducedMotion();

  return (
    <div className="w-full relative py-4" aria-label="Trusted clients">
      {/* 
          Sophisticated Masking for smooth edges in all directions 
          Using CSS mask-image for a true "feathered" effect 
      */}
      <div 
        className="overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
        }}
      >
        <Marquee
          gradient={false}
          speed={40}
          pauseOnHover={true}
          play={!prefersReduced}
          className="py-4"
        >
          {clients.map((client, i) => (
            <div
              key={i}
              className="flex items-center gap-4 mx-12 opacity-30 hover:opacity-100 grayscale hover:grayscale-0 hover:scale-110 transition-all duration-500 cursor-default"
            >
              {client.logoUrl && (
                <div className="relative h-8 w-14 shrink-0">
                  <Image
                    src={client.logoUrl}
                    alt={`${client.name} logo`}
                    fill
                    sizes="64px"
                    className="object-contain dark:invert"
                  />
                </div>
              )}
              <span className="text-xl font-black text-foreground/80 whitespace-nowrap tracking-tighter">
                {client.name}
              </span>
            </div>
          ))}
        </Marquee>
      </div>

      {/* Subtle top/bottom shadow to avoid sharp horizontal edges if any */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border/20 to-transparent" />
    </div>
  );
}
