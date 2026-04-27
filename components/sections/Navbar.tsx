import React from "react";

const Navbar = () => {
  return (
    <header className="fixed top-8 left-0 right-0 z-50 px-8">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20 transition-transform hover:scale-105 cursor-pointer">
            <div className="w-4 h-4 bg-white rounded-[2px] rotate-45" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-xl font-bold tracking-tight text-[#0E4D4D]">Onmog Softsol</span>
            <span className="text-[10px] font-bold text-[#0E4D4D]/50 uppercase tracking-widest">Prodigy HRM</span>
          </div>
        </div>
        
        {/* Links Capsule - Refined Pill Design */}
        <div className="hidden lg:flex items-center bg-white/40 backdrop-blur-xl border border-white/20 shadow-sm rounded-full px-8 py-3 gap-8 text-[13px] font-bold text-[#0E4D4D]/70">
          <a href="#" className="hover:text-primary transition-colors">Services</a>
          <a href="#" className="hover:text-primary transition-colors">Clients</a>
          <a href="#" className="hover:text-primary transition-colors">Digital</a>
          <a href="#" className="hover:text-primary transition-colors">Careers</a>
        </div>
        
        {/* Contact Button */}
        <button className="bg-primary text-white px-7 py-3 rounded-full text-[13px] font-bold hover:shadow-xl hover:shadow-primary/30 transition-all hover:scale-105 active:scale-95">
          Contact Us
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
