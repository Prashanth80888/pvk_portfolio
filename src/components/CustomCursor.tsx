import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check touch device
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check if target has data-cursor attribute
      const target = e.target as HTMLElement;
      const interactiveEl = target.closest('[data-cursor], button, a, [role="button"], input');

      if (interactiveEl) {
        setIsHovered(true);
        const text = interactiveEl.getAttribute('data-cursor');
        setCursorText(text || '');
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[9999] transition-transform duration-100 ease-out"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
    >
      <div
        className={`-translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center transition-all duration-300 ease-out ${
          cursorText
            ? 'w-16 h-16 bg-[#111111] text-white text-[10px] font-bold tracking-widest uppercase shadow-xl scale-100'
            : isHovered
            ? 'w-10 h-10 bg-[#FF6A2A]/80 backdrop-blur-xs scale-125 border border-white/20'
            : 'w-3.5 h-3.5 bg-[#111111]'
        }`}
      >
        {cursorText && (
          <span className="text-center font-display leading-none select-none px-1">
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
};
