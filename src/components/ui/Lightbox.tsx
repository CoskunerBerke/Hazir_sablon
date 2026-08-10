'use client';

import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem } from '@/types/business';
import { SafeImage } from './SafeImage';

interface LightboxProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  items,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  const isOpen = currentIndex !== null && currentIndex >= 0 && currentIndex < items.length;

  const handleNext = useCallback(() => {
    if (currentIndex !== null) {
      onNavigate((currentIndex + 1) % items.length);
    }
  }, [currentIndex, items.length, onNavigate]);

  const handlePrev = useCallback(() => {
    if (currentIndex !== null) {
      onNavigate((currentIndex - 1 + items.length) % items.length);
    }
  }, [currentIndex, items.length, onNavigate]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, handleNext, handlePrev]);

  if (!isOpen || currentIndex === null) return null;

  const currentItem = items[currentIndex];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 transition-all duration-300 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-label="Görsel Detayı"
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label="Kapat"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Navigation Left */}
      {items.length > 1 && (
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
          aria-label="Önceki görsel"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Navigation Right */}
      {items.length > 1 && (
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
          aria-label="Sonraki görsel"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Main Image Container */}
      <div className="relative max-w-5xl max-h-[85vh] w-full h-full flex flex-col items-center justify-center p-2">
        <div className="relative w-full h-[70vh] rounded-2xl overflow-hidden shadow-2xl">
          <SafeImage
            src={currentItem.image}
            alt={currentItem.alt || currentItem.title || 'Galeri Görseli'}
            fill
            className="object-contain"
            sizes="100vw"
            priority
          />
        </div>

        {/* Caption */}
        <div className="mt-4 text-center text-white space-y-1 max-w-xl">
          {currentItem.title && <h4 className="text-lg font-semibold">{currentItem.title}</h4>}
          {currentItem.category && (
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/80">
              {currentItem.category}
            </span>
          )}
          <p className="text-xs text-white/50 pt-1">
            {currentIndex + 1} / {items.length}
          </p>
        </div>
      </div>
    </div>
  );
};
