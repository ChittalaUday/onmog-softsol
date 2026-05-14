// components/pages/ServiceDetailClient.tsx
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { 
  ArrowLeft, 
  CheckCircle2, 
  Clock, 
  BarChart3, 
  ShieldCheck, 
  Zap, 
  Target,
  Users,
  Briefcase,
  ExternalLink,
  ChevronRight
} from "lucide-react";
import { ServiceItem } from "@/data/all-services";

import ServiceTimeline from "@/components/sections/ServiceTimeline";

interface ServiceDetailClientProps {
  service: ServiceItem;
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Rail Engineering": return <Zap className="w-5 h-5" />;
    case "Workforce & Staffing": return <Users className="w-5 h-5" />;
    case "IT Solutions": return <Briefcase className="w-5 h-5" />;
    case "Digital Growth": return <Target className="w-5 h-5" />;
    default: return <CheckCircle2 className="w-5 h-5" />;
  }
};

export default function ServiceDetailClient({ service }: ServiceDetailClientProps) {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] opacity-20" />
      <div className="absolute top-40 left-0 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[100px] opacity-20" />

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-32 relative">
        {/* Breadcrumb */}
        <motion.div {...fadeInUp} className="mb-12">
          <Link 
            href="/services" 
            className="group flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:border-primary/30 group-hover:bg-primary/5 transition-all">
              <ArrowLeft className="w-4 h-4" />
            </div>
            Back to All Services
          </Link>
        </motion.div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          <motion.div 
            className="lg:col-span-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                {getCategoryIcon(service.category)}
                {service.category}
              </span>
              {service.duration !== "Ongoing" && (
                <>
                  <span className="w-1.5 h-1.5 rounded-full bg-border" />
                  <span className="text-sm font-medium text-muted-foreground">{service.duration}</span>
                </>
              )}
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-foreground mb-8 leading-[1.1]">
              {service.title.split(' ').map((word, i) => (
                <span key={i} className={i === service.title.split(' ').length - 1 ? "text-primary block sm:inline" : ""}>
                  {word}{" "}
                </span>
              ))}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl">
              {service.longDescription || service.description}
            </p>
          </motion.div>

          <motion.div 
            className="lg:col-span-4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="card-glass p-8 rounded-3xl sticky top-24">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-primary" /> Service Overview
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <BarChart3 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">Complexity</p>
                    <p className="font-bold text-foreground">{service.complexity}</p>
                  </div>
                </div>
                {service.duration !== "Ongoing" && (
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">Timeline</p>
                      <p className="font-bold text-foreground">{service.duration}</p>
                    </div>
                  </div>
                )}
              </div>
              <div className="mt-8 pt-8 border-t border-border/50">
                <button className="w-full bg-primary text-primary-foreground font-bold py-4 rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20">
                  Contact Us <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Process Section */}
        {service.process && <ServiceTimeline steps={service.process} />}

        {/* Detailed Sections */}
        {service.sections && (
          <div className="space-y-12 mb-20">
            {service.sections.map((section, idx) => {
              const isProcess = section.title.toLowerCase().includes("process") || section.title.toLowerCase().includes("approach") || section.title.toLowerCase().includes("include");
              const isBenefits = section.title.toLowerCase().includes("benefit") || section.title.toLowerCase().includes("advantage");
              const isIndustries = section.title.toLowerCase().includes("industry") || section.title.toLowerCase().includes("type") || section.title.toLowerCase().includes("capabilit");

              if (isProcess) {
                return (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-8 md:p-12 rounded-[2.5rem] bg-secondary/5 border border-primary/10 relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <h3 className="text-3xl font-black mb-10 flex items-center gap-4">
                      <span className="text-primary/20 text-5xl font-outline-2 select-none">0{idx + 1}</span>
                      {section.title}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                      {section.items.map((item, i) => (
                        <div key={i} className="flex gap-4 p-5 rounded-2xl bg-background border border-border/50 hover:border-primary/30 transition-all group">
                          <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                            {i + 1}
                          </div>
                          <span className="font-medium text-muted-foreground group-hover:text-foreground transition-colors">{item}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              }

              if (isBenefits) {
                return (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="p-8 md:p-12 rounded-[2.5rem] bg-emerald-500/5 border border-emerald-500/10"
                  >
                    <h3 className="text-3xl font-black mb-10 text-emerald-600 flex items-center gap-3">
                      <ShieldCheck className="w-8 h-8" />
                      {section.title}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {section.items.map((item, i) => (
                        <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-emerald-950/20 border border-emerald-500/10 shadow-sm">
                          <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
                            <CheckCircle2 className="w-4 h-4 text-white" />
                          </div>
                          <span className="font-semibold text-emerald-900 dark:text-emerald-100">{item}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              }

              if (isIndustries) {
                return (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="p-8 md:p-12 rounded-[2.5rem] bg-card/50 border border-border/50"
                  >
                    <h3 className="text-3xl font-black mb-8 flex items-center gap-3">
                      <Target className="w-8 h-8 text-primary" />
                      {section.title}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {section.items.map((item, i) => (
                        <span key={i} className="px-6 py-3 rounded-2xl bg-primary/5 text-primary font-bold border border-primary/10 hover:bg-primary hover:text-white transition-all cursor-default">
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              }

              // Default Style
              return (
                <motion.div 
                  key={idx}
                  variants={fadeInUp}
                  className="p-8 md:p-12 rounded-[2.5rem] bg-card/30 border border-border/50 backdrop-blur-sm"
                >
                  <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
                    <div className="w-2 h-8 bg-primary rounded-full" />
                    {section.title}
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 p-4 rounded-xl hover:bg-primary/5 transition-colors group">
                        <div className="mt-1 w-2 h-2 rounded-full bg-primary shrink-0 group-hover:scale-125 transition-transform" />
                        <span className="font-medium text-muted-foreground group-hover:text-foreground transition-colors">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        )}



        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[3rem] overflow-hidden bg-secondary p-12 md:p-20 text-center"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
              Ready to elevate your <span className="text-primary italic">business operations?</span>
            </h2>
            <p className="text-xl text-white/70 mb-12">
              Our experts are ready to help you implement {service.title} for your organization. Let's discuss your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-primary text-white font-bold px-10 py-5 rounded-2xl hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
              >
                Get Started Now <ChevronRight className="w-5 h-5" />
              </Link>
              <Link 
                href="/about" 
                className="bg-white/10 text-white backdrop-blur-md border border-white/20 font-bold px-10 py-5 rounded-2xl hover:bg-white/20 transition-all flex items-center justify-center gap-2"
              >
                Learn About Onmog
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
