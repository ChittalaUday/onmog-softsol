"use client";

import React from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/site-config";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Globe, Code, Send, Image } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-24 overflow-hidden border-t border-slate-200 dark:border-white/10 bg-white/40 dark:bg-black/40 backdrop-blur-3xl">
      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02] pointer-events-none" />
      
      {/* Decorative Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 relative z-10">
        
        {/* Top Section: Links and Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Logo className="w-10 h-10" />
              <span className="text-xl font-black uppercase tracking-tighter">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
              {siteConfig.description}
            </p>
            <div className="flex items-center gap-4">
              {[
                { icon: Globe, href: "#" },
                { icon: Send, href: "#" },
                { icon: Image, href: "#" },
                { icon: Code, href: "#" },
              ].map((social, i) => (
                <Link 
                  key={i} 
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-black/[0.03] dark:bg-white/[0.03] border border-black/5 dark:border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300 backdrop-blur-md"
                >
                  <social.icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-8">Navigation</h4>
            <ul className="space-y-4">
              {["Services", "About Us", "Our Process", "Testimonials", "Contact"].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-8">Services</h4>
            <ul className="space-y-4">
              {["Custom Software", "Digital Strategy", "Cloud Solutions", "AI Integration", "Product Design"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-8">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-6">Stay updated with our latest insights and innovations.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email"
                className="flex-1 px-4 py-3 rounded-xl bg-black/[0.03] dark:bg-white/[0.03] border border-black/5 dark:border-white/10 focus:border-primary/50 outline-none text-sm backdrop-blur-md"
              />
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-xl text-xs font-black uppercase tracking-widest hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)] transition-all">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-black/5 dark:border-white/5 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/40 space-y-4 md:space-y-0">
          <p>© {currentYear} {siteConfig.name}. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>

      {/* MASSIVE FOOTER TEXT: The Signature Piece */}
      <div className="relative w-full select-none pointer-events-none overflow-hidden pb-12">
        <motion.h2 
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-[25vw] font-black leading-[0.7] text-center uppercase tracking-[-0.05em] translate-y-[15%]"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-black/[0.05] via-black/[0.02] to-transparent dark:from-white/[0.1] dark:to-transparent">
            ONMOG
          </span>
        </motion.h2>
      </div>

      {/* Background Decorative Element */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150%] h-[500px] bg-primary/10 blur-[150px] rounded-[100%] -z-10 translate-y-1/2" />
    </footer>
  );
}
