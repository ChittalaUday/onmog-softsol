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
        <div className="flex items-center gap-20 animate-marquee whitespace-nowrap opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700">
          {clients.map((client, i) => (
            <div key={i} className="flex items-center justify-center min-w-[150px] h-12">
              {client.logoUrl ? (
                <div className="relative h-8 w-32">
                  <Image 
                    src={client.logoUrl} 
                    alt={client.name} 
                    fill
                    className="object-contain"
                  />
                </div>
              ) : (
                <span className="text-xl font-black text-[#0E4D4D] cursor-default">
                  {client.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
