"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Rocket,
  Zap,
  TrainFront,
  Users,
  Laptop,
  BarChart3
} from "lucide-react";

const Hero = () => {
  const [index, setIndex] = React.useState(0);
  const services = [
    { text: "Rail Signaling", icon: TrainFront, color: "text-blue-600", bg: "bg-blue-600", iconColor: "text-white", rotate: 12 },
    { text: "Staffing Solutions", icon: Users, color: "text-emerald-500", bg: "bg-emerald-500", iconColor: "text-white", rotate: -12 },
    { text: "Digital Innovation", icon: Laptop, color: "text-indigo-600", bg: "bg-indigo-600", iconColor: "text-white", rotate: 12 },
    { text: "Business Strategy", icon: BarChart3, color: "text-amber-600", bg: "bg-amber-600", iconColor: "text-white", rotate: -12 },
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % services.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  const CurrentIcon = services[index].icon;

  return (
    <section className="relative z-10 pt-44 pb-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Main Content */}
        <div className="max-w-5xl text-center space-y-8 relative z-20">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-black tracking-tight leading-[1.2] text-[#0E4D4D]"
          >
            Driving Progress
            <span
              aria-label="Rocket icon"
              className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-accent-lime rounded-2xl mx-3 rotate-[-12deg] shadow-xl shadow-accent-lime/20 border-4 border-white transition-transform hover:rotate-0 cursor-pointer"
            >
              <Rocket className="text-primary w-6 h-6 md:w-8 md:h-8" />
            </span>
            Across Industries<br />
            <div className="h-[1.4em] flex items-center justify-center gap-4 mt-2">
              <div className="flex items-center gap-6">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                  transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                  className="flex items-center gap-6"
                >
                  <span className={services[index].color}>
                    {services[index].text}
                  </span>
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 ${services[index].bg} rounded-2xl shadow-xl border-4 border-white transform transition-transform hover:rotate-0 cursor-pointer`}
                    style={{ transform: `rotate(${services[index].rotate}deg)` }}
                  >
                    <CurrentIcon className={`${services[index].iconColor} w-6 h-6 md:w-8 md:h-8`} />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-[21px] text-[#0E4D4D]/60 max-w-2xl mx-auto leading-relaxed font-medium"
          >
            Precision Engineering. Digital Innovation. Human Excellence. We bridge the gap between traditional infrastructure and modern digital ecosystems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6"
          >
            <button className="w-full sm:w-auto bg-primary text-white px-12 py-5 rounded-full font-extrabold text-lg hover:shadow-2xl hover:shadow-primary/40 transition-all hover:-translate-y-1 active:translate-y-0">
              Our Services
            </button>
            <button className="w-full sm:w-auto bg-white/50 backdrop-blur-md text-[#0E4D4D] px-12 py-5 rounded-full font-extrabold text-lg border border-white/60 hover:bg-white/80 transition-all hover:border-white hover:-translate-y-1 active:translate-y-0 shadow-sm">
              Contact Us
            </button>
          </motion.div>
        </div>

        {/* Services Capsule */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 flex flex-wrap justify-center gap-4"
        >
          {[
            { label: "Rail Signaling", icon: TrainFront, color: "text-blue-500" },
            { label: "Staffing Solutions", icon: Users, color: "text-purple-500" },
            { label: "Web & Digital", icon: Laptop, color: "text-orange-500" },
            { label: "Growth Services", icon: BarChart3, color: "text-green-500" },
          ].map((service, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 px-6 py-3.5 glass rounded-full border border-white/50 shadow-sm hover:bg-white/70 transition-all hover:scale-105 cursor-default group"
            >
              <service.icon size={18} className={`${service.color} group-hover:scale-110 transition-transform`} />
              <span className="text-[13px] font-black text-[#0E4D4D]/80">{service.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
