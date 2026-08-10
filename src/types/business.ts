export type ThemeMode = 'light' | 'dark' | 'auto';
export type StylePreset = 'minimal' | 'luxury' | 'warm' | 'editorial' | 'modern';
export type CtaType = 'whatsapp' | 'phone' | 'link';

export interface NavItem {
  label: string;
  href: string;
}

export interface CtaButton {
  text: string;
  href: string;
  type?: CtaType;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  price?: string;
  duration?: string;
  category?: string;
  image?: string;
  iconName?: string;
  featured?: boolean;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  badge?: string;
  image?: string;
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  description?: string;
  beforeImage: string;
  afterImage: string;
}

export interface StepItem {
  step: string;
  title: string;
  description: string;
  iconName?: string;
}

export interface PackageItem {
  id: string;
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  recommended?: boolean;
  ctaText?: string;
}

export type SpecialSectionType = 'menu' | 'before_after' | 'steps' | 'packages' | 'process';

export interface SpecialSectionConfig {
  title: string;
  subtitle?: string;
  type: SpecialSectionType;
  menuCategories?: string[];
  menuItems?: MenuItem[];
  beforeAfterItems?: BeforeAfterItem[];
  steps?: StepItem[];
  packages?: PackageItem[];
}

export interface GalleryItem {
  id: string;
  title?: string;
  category?: string;
  image: string;
  alt: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  role?: string;
  comment: string;
  rating: number;
  date?: string;
  source?: string;
  avatar?: string;
}

export interface BusinessHoursItem {
  days: string;
  hours: string;
  isOpen: boolean;
}

export interface SocialLinks {
  instagram?: string;
  facebook?: string;
  twitter?: string;
  linkedin?: string;
  youtube?: string;
  googleMaps?: string;
}

export interface SeoConfig {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  domain?: string;
}

export interface FeaturesConfig {
  showReviews: boolean;
  showGallery: boolean;
  showMap: boolean;
  showSpecialSection: boolean;
  showFloatingWhatsapp: boolean;
  showPricing: boolean;
  showPlaceholderBadges?: boolean;
}

export interface BusinessConfig {
  businessName: string;
  shortName: string;
  industry: string;
  tagline: string;
  description: string;

  logo?: string;
  favicon?: string;
  logoAlt?: string;

  theme: {
    primary: string; // HEX e.g. '#8B5CF6'
    secondary?: string; // HEX e.g. '#06B6D4'
    accent?: string; // HEX e.g. '#F59E0B'
    mode: ThemeMode;
    stylePreset: StylePreset;
  };

  navigation: NavItem[];

  hero: {
    badge?: string;
    title: string;
    description: string;
    image?: string;
    primaryCta: CtaButton;
    secondaryCta?: CtaButton;
  };

  about: {
    badge?: string;
    title: string;
    subtitle?: string;
    text: string[];
    image?: string;
    highlights: string[];
  };

  trustPoints?: Array<{
    title: string;
    description: string;
    iconName?: string;
  }>;

  services: ServiceItem[];

  specialSection?: SpecialSectionConfig;

  gallery: GalleryItem[];

  reviews: ReviewItem[];

  contact: {
    phone: string;
    phoneFormatted?: string;
    whatsapp: string;
    whatsappDefaultMessage?: string;
    email: string;
    address: string;
    mapsUrl?: string;
    mapsEmbedUrl?: string;
  };

  businessHours: BusinessHoursItem[];

  socialLinks: SocialLinks;

  seo: SeoConfig;

  features: FeaturesConfig;
}
