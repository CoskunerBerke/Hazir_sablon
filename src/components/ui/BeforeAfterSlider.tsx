'use client';

import React, { useState, useRef, useCallback } from 'react';
import { SafeImage } from './SafeImage';
import { Sparkles } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  title?: string;
  description?: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  title,
  description,
  beforeLabel = 'Öncesi',
  afterLabel = 'Sonrası',
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let position = (x / rect.width) * 100;
    if (position < 0) position = 0;
    if (position > 100) position = 100;
    setSliderPosition(position);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  }, [isDragging, handleMove]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  return (
    <div className="w-full space-y-3">
      {title && (
        <div className="flex items-center justify-between">
          <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-brand-primary" />
            {title}
          </h4>
          {description && <p className="text-xs text-muted">{description}</p>}
        </div>
      )}

      <div
        ref={containerRef}
        className="relative w-full h-[320px] md:h-[420px] rounded-2xl overflow-hidden shadow-xl select-none cursor-ew-resize touch-none border border-slate-200/80 dark:border-zinc-800"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
        onTouchMove={handleTouchMove}
      >
        {/* After Image (Background) */}
        <div className="absolute inset-0 w-full h-full">
          <SafeImage
            src={afterImage}
            alt="Sonrası Görseli"
            fill
            className="object-cover"
            placeholderLabel="Sonrası Görseli"
          />
          <span className="absolute bottom-4 right-4 z-10 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-black/60 text-white backdrop-blur-md border border-white/20">
            {afterLabel}
          </span>
        </div>

        {/* Before Image (Clipped overlay) */}
        <div
          className="absolute inset-0 h-full overflow-hidden z-10 transition-all duration-75"
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="absolute inset-0 w-full h-full" style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}>
            <SafeImage
              src={beforeImage}
              alt="Öncesi Görseli"
              fill
              className="object-cover"
              placeholderLabel="Öncesi Görseli"
            />
          </div>
          <span className="absolute bottom-4 left-4 z-10 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-black/60 text-white backdrop-blur-md border border-white/20">
            {beforeLabel}
          </span>
        </div>

        {/* Slider Handle Line */}
        <div
          className="absolute top-0 bottom-0 z-20 w-1 bg-white shadow-2xl cursor-ew-resize"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white text-slate-800 shadow-xl flex items-center justify-center border-2 border-brand-primary">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 7l-5 5 5 5M16 7l5 5-5 5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
