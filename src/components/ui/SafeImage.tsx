'use client';

import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image';
import { ImageOff } from 'lucide-react';

interface SafeImageProps extends Omit<ImageProps, 'src' | 'alt'> {
  src?: string | null;
  alt: string;
  placeholderLabel?: string;
  showDevBadge?: boolean;
  aspectRatio?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  placeholderLabel,
  showDevBadge = false,
  className = '',
  aspectRatio,
  priority = false,
  fill = false,
  sizes,
  ...props
}) => {
  const [error, setError] = useState(false);

  const isInvalidSrc = !src || src.trim() === '' || error;

  if (isInvalidSrc) {
    return (
      <div
        className={`relative overflow-hidden flex flex-col items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 dark:from-zinc-800 dark:to-zinc-900 border border-slate-200/60 dark:border-zinc-800 text-slate-400 dark:text-zinc-500 rounded-xl transition-all ${className}`}
        style={aspectRatio ? { aspectRatio } : undefined}
      >
        <div className="flex flex-col items-center justify-center p-4 text-center z-10">
          <ImageOff className="w-8 h-8 opacity-40 mb-2" />
          <span className="text-xs font-medium opacity-60 max-w-[80%] truncate">
            {placeholderLabel || alt || 'Görsel Alanı'}
          </span>
          {showDevBadge && (
            <span className="mt-2 inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
              TODO: client/{placeholderLabel || 'image'}
            </span>
          )}
        </div>
        {/* Subtle decorative background pattern */}
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${fill ? 'w-full h-full' : ''}`} style={aspectRatio ? { aspectRatio } : undefined}>
      <Image
        src={src}
        alt={alt}
        priority={priority}
        fill={fill}
        sizes={sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
        className={`transition-opacity duration-300 ${className}`}
        onError={() => setError(true)}
        {...props}
      />
      {showDevBadge && (
        <span className="absolute top-2 left-2 z-20 pointer-events-none inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900/80 text-white backdrop-blur-xs border border-white/20">
          {placeholderLabel || 'client-image'}
        </span>
      )}
    </div>
  );
};
