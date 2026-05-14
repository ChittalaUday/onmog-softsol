"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Mail, ArrowUpRight } from "lucide-react";
import { IconBrandLinkedin } from "@tabler/icons-react";
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
      className="group relative h-[550px] w-full rounded-[3.5rem] overflow-hidden border border-border bg-card/40 backdrop-blur-2xl shadow-2xl hover:shadow-primary/20 hover:border-primary/20 transition-all duration-700"
    >
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-700 z-0" />
      
      {/* Image Placeholder / Actual Image */}
      <div className="absolute inset-0 -z-10 bg-muted/20">
         {/* Since images might not exist, we use a more sophisticated placeholder */}
         <div className="w-full h-full bg-gradient-to-br from-muted to-background flex items-center justify-center opacity-40 group-hover:scale-110 transition-transform duration-1000">
            <span className="text-foreground/5 text-[12rem] font-black select-none tracking-tighter">{member.name.charAt(0)}</span>
         </div>
      </div>

      {/* Content Container */}
      <div className="absolute inset-0 p-10 flex flex-col justify-end z-10">
        {/* Expertise Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {member.expertise.map((exp, i) => (
            <span key={i} className="text-[8px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full bg-foreground/5 border border-foreground/10 text-muted-foreground backdrop-blur-md group-hover:border-primary/30 group-hover:text-primary transition-colors">
              {exp}
            </span>
          ))}
        </div>

        <h3 className="text-4xl font-black text-foreground tracking-tighter uppercase leading-[0.9] mb-2 group-hover:text-primary transition-colors">
          {member.name}
        </h3>
        <p className="text-primary/80 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
          {member.role}
        </p>

        {/* Description (Reveal on Hover) */}
        <div className="max-h-0 opacity-0 group-hover:max-h-32 group-hover:opacity-100 transition-all duration-700 ease-out overflow-hidden">
          <p className="text-muted-foreground text-sm leading-relaxed mb-8 line-clamp-3">
            {member.description}
          </p>
        </div>

        <div className="flex items-center justify-between border-t border-border pt-8 mt-4">
           <div className="flex gap-5">
              <a href={member.linkedin} className="text-muted-foreground/60 hover:text-primary transition-colors">
                <IconBrandLinkedin size={18} />
              </a>
              <a href={`mailto:${member.email}`} className="text-muted-foreground/60 hover:text-primary transition-colors">
                <Mail size={18} />
              </a>
           </div>
           <button className="w-12 h-12 rounded-2xl border border-border flex items-center justify-center text-foreground group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-500">
              <ArrowUpRight size={20} />
           </button>
        </div>
      </div>
    </motion.div>
  );
};

export const Team = () => {
  return (
    <section className="py-32 lg:py-64 px-6 relative overflow-hidden" id="team">

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
          className="mt-32 p-12 lg:p-24 rounded-[4rem] border border-border bg-card/30 backdrop-blur-3xl relative overflow-hidden group shadow-2xl"
        >
          <div className="absolute inset-0 bg-grid-primary/[0.03] pointer-events-none" />
          <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
             <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-8 opacity-60">Leadership Vision</span>
             <h3 className="text-3xl lg:text-5xl font-black tracking-tight leading-[1.1] mb-10 text-foreground">
               "We believe in a people-first philosophy, where talent is nurtured, ideas are scaled, and opportunities are created for both individuals and enterprises."
             </h3>
             <div className="h-1.5 w-24 bg-primary/20 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ x: "-100%" }}
                  whileInView={{ x: "100%" }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="h-full w-full bg-primary"
                />
             </div>
             <p className="mt-10 text-muted-foreground/60 text-lg font-medium italic">
               Creating a future where technology empowers people, compliance builds trust, and innovation drives sustainable growth.
             </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
