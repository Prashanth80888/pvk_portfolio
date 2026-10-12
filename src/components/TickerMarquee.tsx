import React from 'react';

export const TickerMarquee: React.FC = () => {
  const items = [
    "PRASHANTH GOUDA",
    "FULL-STACK DEVELOPER",
    "AI/ML ENTUSIAST",
    "CREATIVE DEVELOPMENT",
    "REACT.JS",
    "NODE.JS",
    "PYTHON",
    "AWS",
    "MONGODB"
  ];

  return (
    <div className="w-full bg-[#111111] py-4 sm:py-6 overflow-hidden select-none border-y border-[#111111] my-8 sm:my-16">
      <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
        {[...items, ...items, ...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center gap-8 shrink-0">
            <span className="font-display font-black text-2xl sm:text-4xl md:text-5xl tracking-tighter text-white">
              {text}
            </span>
            <span className="w-3 h-3 rounded-full bg-[#FF6A2A]" />
          </div>
        ))}
      </div>
    </div>
  );
};
