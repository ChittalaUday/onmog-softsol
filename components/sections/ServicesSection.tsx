"use client";

import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { GlassBadge } from "@/components/ui/glass";
import { 
  RailSignalingContent, 
  StaffingSolutionsContent, 
  DigitalInnovationContent, 
  BusinessStrategyContent 
} from "./services/ServiceContents";

const content = [
  {
    title: "Rail Signaling",
    description:
      "Precision-engineered safety systems and signaling solutions for modern rail networks. We provide end-to-end integration of automatic train protection and interlocking systems.",
    content: <RailSignalingContent />,
  },
  {
    title: "Staffing Solutions",
    description:
      "Strategic talent acquisition for high-stakes industries. We connect organizations with elite technical talent, specialized engineers, and visionary leaders.",
    content: <StaffingSolutionsContent />,
  },
  {
    title: "Digital Innovation",
    description:
      "Accelerating digital transformation through custom software ecosystems, cloud-native architectures, and robust web applications designed for scale.",
    content: <DigitalInnovationContent />,
  },
  {
    title: "Business Strategy",
    description:
      "Data-driven strategic consulting that bridges the gap between traditional operations and future-ready business models. Optimize, scale, and lead.",
    content: <BusinessStrategyContent />,
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <GlassBadge className="mb-4">Our Expertise</GlassBadge>
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6">
            Solutions for a <span className="text-primary">Connected World</span>
          </h2>
        </div>

        <div className="w-full">
          <StickyScroll content={content} />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
