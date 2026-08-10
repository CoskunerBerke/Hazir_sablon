'use client';

import React from 'react';
import * as Icons from 'lucide-react';
import { LucideProps } from 'lucide-react';

interface DynamicIconProps extends Omit<LucideProps, 'ref'> {
  name?: string;
  fallback?: string;
}

export const DynamicIcon: React.FC<DynamicIconProps> = ({
  name,
  fallback = 'Sparkles',
  className = 'w-5 h-5',
  ...props
}) => {
  const iconKey = (name || fallback) as keyof typeof Icons;
  const IconComponent = (Icons[iconKey] || Icons[fallback as keyof typeof Icons] || Icons.Sparkles) as React.ComponentType<LucideProps>;

  return <IconComponent className={className} {...props} />;
};
