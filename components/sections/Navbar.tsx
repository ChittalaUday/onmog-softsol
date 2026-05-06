"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Navbar as ResizableNavbar, 
  NavBody, 
  NavItems, 
  MobileNav, 
  MobileNavHeader, 
  MobileNavToggle, 
  MobileNavMenu,
  NavbarButton
} from "@/components/ui/resizable-navbar";
import { Logo } from "@/components/ui/Logo";
import { ModeToggle } from "@/components/mode-toggle";
import { GlassButton } from "@/components/ui/glass";
import { siteConfig } from "@/data/site-config";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    {name:"About", link:"/about"},
    { name: "Services", link: "/services" },
    { name: "Clients", link: "/clients" },
    { name: "Careers", link: "#careers" },
  ];

  return (
    <ResizableNavbar>
      {/* Desktop Navigation */}
      <NavBody>
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3">
          <Logo className="w-10 h-10 transition-transform hover:scale-105 cursor-pointer" />
          <div className="flex flex-col leading-none">
            <span className="text-xl font-black tracking-tight text-foreground uppercase">{siteConfig.name}</span>
            <span className="text-[9px] font-bold text-primary uppercase tracking-[0.2em]">Sustainable Solutions</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <NavItems items={navItems} />

        {/* Actions */}
        <div className="flex items-center gap-4">
          <ModeToggle />
          <GlassButton variant="primary" className="px-7 py-3">
            Contact Us
          </GlassButton>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <Link href="/" className="flex items-center gap-3" onClick={() => setIsMobileMenuOpen(false)}>
            <Logo className="w-8 h-8" />
            <span className="text-lg font-black tracking-tight text-foreground uppercase">{siteConfig.name}</span>
          </Link>
          
          <div className="flex items-center gap-4">
            <ModeToggle />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </div>
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          <div className="flex flex-col gap-6 w-full">
            {navItems.map((item, idx) => (
              <Link
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl font-bold text-foreground/80 hover:text-primary transition-colors uppercase tracking-tight"
              >
                {item.name}
              </Link>
            ))}
            <hr className="border-glass-border" />
            <GlassButton 
              variant="primary" 
              className="w-full py-4 text-base"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </GlassButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </ResizableNavbar>
  );
};

export default Navbar;

