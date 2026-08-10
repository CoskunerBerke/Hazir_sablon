import React from 'react';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  align = 'center',
  className = '',
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`space-y-3 mb-12 ${isCenter ? 'text-center mx-auto max-w-2xl' : 'max-w-2xl'} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-light text-brand-primary border border-brand-primary/20 ${isCenter ? 'mx-auto' : ''}`}>
          <span>{badge}</span>
        </div>
      )}

      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
        {title}
      </h2>

      {subtitle && (
        <p className="text-muted text-base md:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
