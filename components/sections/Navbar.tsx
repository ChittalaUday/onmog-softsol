import React from "react";
import { ModeToggle } from "@/components/mode-toggle";
import { GlassContainer, GlassButton } from "@/components/ui/glass";

const Navbar = () => {
  return (
    <header className="fixed top-8 left-0 right-0 z-50 px-8">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20 transition-transform hover:scale-105 cursor-pointer">
            <div className="w-4 h-4 bg-white dark:bg-black rounded-[2px] rotate-45" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-xl font-bold tracking-tight text-foreground">Onmog Softsol</span>
            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Prodigy HRM</span>
          </div>
        </div>
        
        {/* Links Capsule - Refined Pill Design */}
        <GlassContainer className="hidden lg:flex items-center rounded-full px-8 py-3 gap-8 text-[13px] font-bold text-foreground/70">
          <a href="#" className="hover:text-primary transition-colors">Services</a>
          <a href="#" className="hover:text-primary transition-colors">Clients</a>
          <a href="#" className="hover:text-primary transition-colors">Digital</a>
          <a href="#" className="hover:text-primary transition-colors">Careers</a>
        </GlassContainer>
        
        {/* Actions */}
        <div className="flex items-center gap-4">
          <ModeToggle />
          {/* Contact Button */}
          <GlassButton variant="primary" className="px-7 py-3">
            Contact Us
          </GlassButton>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
