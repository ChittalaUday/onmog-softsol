import React from "react";

const Background = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {/* Large Concentric Circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] opacity-[0.03]">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.1" />
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.1" />
          <circle cx="50" cy="50" r="32" fill="none" stroke="currentColor" strokeWidth="0.1" />
          <circle cx="50" cy="50" r="24" fill="none" stroke="currentColor" strokeWidth="0.1" />
        </svg>
      </div>
      
      {/* Blurred Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent-lime/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent-cyan/10 blur-[130px] rounded-full" />
    </div>
  );
};

export default Background;
