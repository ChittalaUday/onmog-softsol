"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {  Mail, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const TEAM_MEMBERS = [
  {
    name: "Munagala Hari",
    role: "Founder & Director",
    description: "Munagala Hari brings over 8 years of industrial experience in finance, taxation, regulatory compliance, and business operations. A semi-qualified Chartered Accountant, he focuses on transforming recruitment intelligence and AI-driven HRMS solutions.",
    expertise: ["Finance", "Taxation", "AI-HRMS", "Business Strategy"],
    image: "/images/team/hari.jpg", // We'll use placeholders if images don't exist
    linkedin: "#",
    email: "hari@onmog.com"
  },
  {
    name: "Nageswar J",
    role: "Co-Founder & Director",
    description: "A Lead Engineer in the Rail Signalling industry with over a decade of experience. An IRSE licensed Designer and Verifier, he ensures engineering rigor and delivery excellence for mission-critical infrastructure projects.",
    expertise: ["Rail Signaling", "Project Management", "Engineering Design"],
    image: "/images/team/nageswar.jpg",
    linkedin: "#",
    email: "nageswar@onmog.com"
  },
  {
    name: "Venkat Krishna Y",
    role: "Chief Executive Officer (CEO)",
    description: "Seasoned executive leader with expertise in enterprise leadership, financial governance, and human capital strategy. Drives organizational vision, corporate strategy, and scalable growth across multiple industries.",
    expertise: ["Corporate Strategy", "Financial Governance", "Enterprise Leadership"],
    image: "/images/team/venkat.jpg",
    linkedin: "#",
    email: "venkat@onmog.com"
  },
  {
    name: "Sandeep V",
    role: "Chief Operating Officer (COO)",
    description: "Accomplished operations and HR leader specializing in IT talent acquisition and workforce operations. Oversees operational execution and recruitment excellence, ensuring seamless coordination between strategy and delivery.",
    expertise: ["Operations", "Workforce Management", "HR Governance"],
    image: "/images/team/sandeep.jpg",
    linkedin: "#",
    email: "sandeep@onmog.com"
  }
];

const TeamMemberCard = ({ member, index }: { member: typeof TEAM_MEMBERS[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group relative h-[500px] w-full rounded-[3rem] overflow-hidden border border-border bg-card shadow-2xl hover:shadow-primary/10 transition-all duration-700"
    >
      {/* Background Glow/Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700 z-0" />
      
      {/* Image Placeholder / Actual Image */}
      <div className="absolute inset-0 -z-10 bg-muted">
         {/* Since images might not exist, we use a styled placeholder */}
         <div className="w-full h-full bg-gradient-to-br from-muted to-accent flex items-center justify-center">
            <span className="text-foreground/5 text-9xl font-black select-none">{member.name.charAt(0)}</span>
         </div>
      </div>

      {/* Content Container */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end">
        {/* Expertise Tags (Visible on Hover) */}
        <div className="flex flex-wrap gap-2 mb-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
          {member.expertise.map((exp, i) => (
            <span key={i} className="text-[9px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary-foreground backdrop-blur-md">
              {exp}
            </span>
          ))}
        </div>

        <h3 className="text-3xl font-black text-foreground tracking-tighter uppercase leading-none mb-1">
          {member.name}
        </h3>
        <p className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-6">
          {member.role}
        </p>

        {/* Description (Reveal on Hover) */}
        <div className="max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-700 overflow-hidden">
          <p className="text-muted-foreground text-sm leading-relaxed mb-8">
            {member.description}
          </p>
        </div>

        <div className="flex items-center justify-between border-t border-border pt-6 mt-2">
           <div className="flex gap-4">
              <a href={member.linkedin} className="text-muted-foreground hover:text-primary transition-colors">
                <Mail size={20} />
              </a>
              <a href={`mailto:${member.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                <Mail size={20} />
              </a>
           </div>
           <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-500">
              <ArrowUpRight size={18} />
           </button>
        </div>
      </div>
    </motion.div>
  );
};

export const Team = () => {
  return (
    <section className="py-32 lg:py-64 px-6 relative overflow-hidden bg-muted/30" id="team">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-black uppercase text-[10px] mb-4 block tracking-[0.5em]"
          >
            The Minds
          </motion.span>
          <h2 className="text-5xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.9] mb-8">
            Our <span className="text-muted-foreground/40">Leadership</span> Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl font-medium leading-relaxed">
            A collective of strategic visionaries, engineering pioneers, and industry experts dedicated to building the future of sustainable technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member, i) => (
            <TeamMemberCard key={i} member={member} index={i} />
          ))}
        </div>

        {/* Leadership Vision Quote */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-32 p-12 lg:p-24 rounded-[4rem] border border-border bg-card/50 backdrop-blur-3xl relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-grid-primary/[0.02] pointer-events-none" />
          <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
             <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-8 opacity-60">Leadership Vision</span>
             <h3 className="text-3xl lg:text-5xl font-black tracking-tight leading-[1.1] mb-10 text-foreground">
               "We believe in a people-first philosophy, where talent is nurtured, ideas are scaled, and opportunities are created for both individuals and enterprises."
             </h3>
             <div className="h-1 w-20 bg-primary/30 rounded-full" />
             <p className="mt-10 text-muted-foreground text-lg font-medium italic">
               Creating a future where technology empowers people, compliance builds trust, and innovation drives sustainable growth.
             </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
