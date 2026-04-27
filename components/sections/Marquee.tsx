import React from "react";
import Image from "next/image";
import { clients } from "@/data/clients";

const Marquee = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 mt-28 relative z-20 pt-16 pb-20">
      <p className="text-center text-[10px] font-black uppercase tracking-[0.4em] text-[#0E4D4D]/40 mb-10">
        Trusted by category leaders
      </p>
      <div className="overflow-hidden">
        <div className="flex items-center gap-20 animate-marquee whitespace-nowrap transition-all duration-700">
          {clients.map((client, i) => (
            <div key={i} className="flex items-center gap-6 opacity-40 hover:opacity-100 grayscale hover:grayscale-0 hover:scale-105 transition-all duration-500 cursor-default">
              {client.logoUrl && (
                <div className="relative h-6 w-10 shrink-0">
                  <Image 
                    src={client.logoUrl} 
                    alt={`${client.name} logo`}
                    fill
                    sizes="40px"
                    className="object-contain"
                  />
                </div>
              )}
              <span className="text-xl font-black text-[#0E4D4D] whitespace-nowrap">
                {client.name}
              </span>
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {clients.map((client, i) => (
            <div key={i + "-dup"} className="flex items-center gap-6 opacity-40 hover:opacity-100 grayscale hover:grayscale-0 hover:scale-105 transition-all duration-500 cursor-default">
              {client.logoUrl && (
                <div className="relative h-6 w-10 shrink-0">
                  <Image 
                    src={client.logoUrl} 
                    alt={`${client.name} logo`}
                    fill
                    sizes="40px"
                    className="object-contain"
                  />
                </div>
              )}
              <span className="text-xl font-black text-[#0E4D4D] whitespace-nowrap">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
