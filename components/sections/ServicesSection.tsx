"use client";

import React from "react";
import { motion } from "framer-motion";
import { GlassContainer, GlassBadge } from "@/components/ui/glass";
import { TrainFront, Users, Laptop, BarChart3, Rocket, Shield, Zap, Globe } from "lucide-react";

const SERVICES = [
  {
    title: "Rail Signaling",
    description: "State-of-the-art safety and signaling systems for modern rail infrastructure.",
    icon: TrainFront,
    color: "text-blue-500",
  },
  {
    title: "Staffing Solutions",
    description: "Connecting excellence with opportunity across technical and corporate domains.",
    icon: Users,
    color: "text-purple-500",
  },
  {
    title: "Digital Innovation",
    description: "Transforming businesses through custom software and digital strategy.",
    icon: Laptop,
    color: "text-orange-500",
  },
  {
    title: "Business Strategy",
    description: "Driving growth and efficiency through data-backed strategic consulting.",
    icon: BarChart3,
    color: "text-green-500",
  },
];

const FEATURES = [
  { title: "Scalable Systems", icon: Zap },
  { title: "Global Reach", icon: Globe },
  { title: "Enterprise Security", icon: Shield },
  { title: "Rapid Deployment", icon: Rocket },
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
          <p className="text-muted-foreground max-w-2xl mx-auto font-medium">
            We combine deep industry knowledge with cutting-edge technology to deliver 
            impactful results across diverse sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, i) => (
            <GlassContainer
              key={i}
              variant="card"
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl flex flex-col items-start gap-4"
            >
              <div className={cn("p-3 rounded-2xl bg-background/50", service.color)}>
                <service.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </GlassContainer>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {FEATURES.map((feature, i) => (
            <div key={i} className="flex flex-col items-center gap-3 text-center">
              <feature.icon size={20} className="text-primary" />
              <span className="text-[12px] font-bold uppercase tracking-widest text-foreground/60">
                {feature.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Helper for cn (already imported from utils in actual file but I'll make sure it works)
import { cn } from "@/lib/utils";

export default ServicesSection;
