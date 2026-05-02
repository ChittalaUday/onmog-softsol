"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/data/site-config";
import WorldMap from "@/components/ui/world-map";

export default function Contact() {
  return (
    <section className="py-24 lg:py-48 bg-transparent relative overflow-hidden" id="contact">
      {/* Global World Map Background */}
      <div className="absolute inset-0 opacity-100 pointer-events-none -z-5 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-7xl aspect-video relative">
            <WorldMap
              dots={[
                {
                  start: { lat: 17.3850, lng: 78.4867 },
                  end: { lat: 17.3850, lng: 78.4867 }
                }
              ]}
            />
            {/* Pulsing Marker at Hyderabad */}
            <div className="absolute top-[41%] left-[71.5%] -translate-x-1/2 -translate-y-1/2">
              <motion.div
                className="w-3 h-3 rounded-full bg-primary relative z-10 shadow-[0_0_30px_rgba(var(--primary-rgb),0.8)]"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute inset-0 rounded-full bg-primary/40"
                animate={{ scale: [1, 6], opacity: [0.6, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">

          {/* Left Column: Info */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-4 block text-center lg:text-left">
                Get In Touch
              </span>
              <h2 className="text-4xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.85] mb-8 text-center lg:text-left">
                Let&apos;s Build the <span className="text-muted-foreground/40">Future</span> Together
              </h2>
              <p className="text-lg lg:text-xl text-muted-foreground max-w-md mb-12 text-center lg:text-left mx-auto lg:mx-0">
                We are always looking for ambitious projects and partners. Reach out to us and let&apos;s discuss how we can help you scale.
              </p>

              <div className="space-y-8 max-w-md mx-auto lg:mx-0">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary transition-all duration-500">
                    <Mail className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/40 mb-1">Email Us</p>
                    <p className="text-lg lg:text-xl font-bold">{siteConfig.contact.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary transition-all duration-500">
                    <Phone className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/40 mb-1">Call Us</p>
                    <p className="text-lg lg:text-xl font-bold">{siteConfig.contact.phone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary transition-all duration-500">
                    <MapPin className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/40 mb-1">Location</p>
                    <p className="text-sm lg:text-base font-bold leading-relaxed">{siteConfig.contact.address}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative p-8 lg:p-16 rounded-[4rem] border border-glass-border bg-card/10 backdrop-blur-3xl overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />

              <form className="relative z-10 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/60 ml-1">Full Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-8 py-5 rounded-3xl bg-white/[0.03] border border-white/10 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all outline-none text-foreground placeholder:text-muted-foreground/20 font-medium"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/60 ml-1">Email Address</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-8 py-5 rounded-3xl bg-white/[0.03] border border-white/10 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all outline-none text-foreground placeholder:text-muted-foreground/20 font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/60 ml-1">Company</label>
                  <input
                    type="text"
                    placeholder="Acme Inc."
                    className="w-full px-8 py-5 rounded-3xl bg-white/[0.03] border border-white/10 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all outline-none text-foreground placeholder:text-muted-foreground/20 font-medium"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/60 ml-1">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="w-full px-8 py-5 rounded-3xl bg-white/[0.03] border border-white/10 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all outline-none text-foreground placeholder:text-muted-foreground/20 font-medium resize-none"
                  />
                </div>

                <button className="group relative w-full flex items-center justify-center px-8 py-6 bg-primary text-primary-foreground rounded-3xl font-black uppercase tracking-[0.3em] text-[10px] overflow-hidden transition-all hover:shadow-[0_0_50px_rgba(var(--primary-rgb),0.3)]">
                  <span className="relative z-10 flex items-center gap-4">
                    Send Message <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative Glows */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-primary/10 blur-[150px] rounded-full pointer-events-none -z-10 translate-x-1/2 translate-y-1/2" />
    </section>
  );
}
