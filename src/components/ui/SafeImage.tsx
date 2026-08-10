'use client';

import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image';
import { Upload } from 'lucide-react';

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
        className={`relative overflow-hidden flex flex-col items-center justify-center p-4 bg-slate-50/80 dark:bg-zinc-800/40 border-2 border-dashed border-slate-300 dark:border-zinc-700 text-slate-500 dark:text-zinc-400 rounded-2xl transition-all ${className}`}
        style={aspectRatio ? { aspectRatio } : undefined}
      >
        <div className="flex flex-col items-center justify-center text-center z-10 space-y-1.5 pointer-events-none">
          <div className="w-9 h-9 rounded-xl bg-slate-200/80 dark:bg-zinc-700/60 flex items-center justify-center text-slate-500 dark:text-zinc-300">
            <Upload className="w-4 h-4 opacity-70" />
          </div>
          <span className="text-xs font-bold text-slate-700 dark:text-zinc-200">
            Fotoğrafınızı yükleyin
          </span>
          {placeholderLabel && (
            <span className="text-[10px] text-muted max-w-[85%] truncate">
              ({placeholderLabel})
            </span>
          )}
        </div>
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
    </div>
  );
};
