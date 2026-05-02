"use client";

import React from "react";
import { motion } from "framer-motion";
import { AnimatedTestimonials, Testimonial } from "@/components/ui/animated-testimonials";

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Onmog transformed our approach to urban planning. Their particle-driven simulations allowed us to visualize pedestrian flow in ways we never thought possible.",
    name: "Sarah Chen",
    designation: "Director of Urban Innovation",
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop",
  },
  {
    quote:
      "The engineering precision they bring to sustainable infrastructure is unmatched. Their methodology ensures every project is both a technical marvel and a social asset.",
    name: "Marcus Thorne",
    designation: "Chief Engineer, Thorne & Co",
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop",
  },
  {
    quote:
      "Working with Onmog felt like peering into the future. Their tech stack is lightyears ahead of the competition, yet they remain grounded in practical execution.",
    name: "Elena Rodriguez",
    designation: "Founder, GreenScale Systems",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=800&auto=format&fit=crop",
  },
  {
    quote:
      "Safety and scale are usually at odds, but Onmog's process bridges that gap seamlessly. They are the true pioneers of modern multidisciplinary technology.",
    name: "David Park",
    designation: "VP of Operations, Global Logistics",
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-transparent relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-[1400px] mx-auto px-6 lg:px-10"
      >
        <div className="flex flex-col items-center text-center mb-20">
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-4 block">
            Success Stories
          </span>
          <h2 className="text-4xl lg:text-7xl font-black tracking-tighter uppercase leading-[0.9]">
            What Our <span className="text-muted-foreground/40">Partners</span> Say
          </h2>
        </div>

        <AnimatedTestimonials testimonials={TESTIMONIALS} autoplay={true} />
      </motion.div>

      {/* Decorative Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10" />
    </section>
  );
}
