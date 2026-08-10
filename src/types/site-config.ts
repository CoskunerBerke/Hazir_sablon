export type ThemeMode = 'light' | 'dark' | 'auto';
export type StylePresetId = 'minimal' | 'luxury' | 'warm' | 'editorial' | 'bold' | 'corporate';
export type CtaType = 'whatsapp' | 'phone' | 'section' | 'custom';

export type HeroLayoutVariant =
  | 'text_left_image_right'
  | 'image_left_text_right'
  | 'full_background'
  | 'centered_minimal'
  | 'editorial_split';

export type AboutLayoutVariant = 'image_left' | 'image_right' | 'centered';
export type GalleryGridStyle = 'equal' | 'masonry' | 'editorial' | 'slider';
export type SpecialSectionType = 'steps' | 'menu' | 'before_after' | 'packages' | 'faq';
export type ReviewLayoutStyle = 'cards' | 'slider' | 'marquee';
export type BorderRadiusOption = 'sharp' | 'sm' | 'md' | 'lg' | 'full';
export type ButtonStyleOption = 'solid' | 'outline' | 'soft' | 'pill';
export type ShadowOption = 'none' | 'sm' | 'md' | 'lg';
export type ContainerWidthOption = 'narrow' | 'normal' | 'wide';
export type SectionSpacingOption = 'compact' | 'normal' | 'spacious';

export interface FocalPoint {
  x: number; // 0 to 100 percentage
  y: number; // 0 to 100 percentage
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
  visible: boolean;
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
  imageFocalPoint?: FocalPoint;
  iconName?: string;
  buttonText?: string;
  buttonHref?: string;
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

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface GalleryItem {
  id: string;
  title?: string;
  description?: string;
  category?: string;
  image: string;
  imageFocalPoint?: FocalPoint;
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

export interface TrustPoint {
  title: string;
  description: string;
  iconName?: string;
}

export interface SocialLinks {
  instagram?: string;
  facebook?: string;
  twitter?: string;
  linkedin?: string;
  youtube?: string;
  tiktok?: string;
  googleMaps?: string;
}

export interface ColorPalette {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  textPrimary: string;
  textMuted: string;
  headerBg?: string;
  footerBg?: string;
}

export interface TypographyConfig {
  fontPair: 'sans' | 'modern' | 'editorial' | 'warm' | 'bold' | 'playful';
  headingFont: string;
  bodyFont: string;
  headingScale: number; // 0.8 to 1.4
  bodyScale: number; // 0.8 to 1.2
  letterSpacing: string;
}

export interface AppearanceConfig {
  borderRadius: BorderRadiusOption;
  buttonStyle: ButtonStyleOption;
  shadow: ShadowOption;
  containerWidth: ContainerWidthOption;
  sectionSpacing: SectionSpacingOption;
  animationLevel: 'none' | 'subtle' | 'normal';
}

export interface ThemeConfig {
  preset: StylePresetId;
  mode: ThemeMode;
  colors: ColorPalette;
  typography: TypographyConfig;
  appearance: AppearanceConfig;
}

export interface HeaderConfig {
  sticky: boolean;
  transparent: boolean;
  ctaText: string;
  ctaType: CtaType;
  ctaHref: string;
  logoSize: number; // in pixels height
}

export interface HeroConfig {
  layoutVariant: HeroLayoutVariant;
  badge?: string;
  title: string;
  description: string;
  primaryCta: CtaButton;
  secondaryCta?: CtaButton;
  image?: string;
  imageFocalPoint?: FocalPoint;
  overlayOpacity: number; // 0 to 100
  minHeight: string;
}

export interface AboutConfig {
  layoutVariant: AboutLayoutVariant;
  badge?: string;
  title: string;
  subtitle?: string;
  text: string[];
  image?: string;
  imageFocalPoint?: FocalPoint;
  highlights: string[];
}

export interface ServicesConfig {
  layoutStyle: 'grid' | 'cards' | 'list';
  columns: number;
  showPrices: boolean;
  items: ServiceItem[];
}

export interface SpecialSectionConfig {
  enabled: boolean;
  title: string;
  subtitle?: string;
  type: SpecialSectionType;
  menuCategories?: string[];
  menuItems?: MenuItem[];
  beforeAfterItems?: BeforeAfterItem[];
  steps?: StepItem[];
  packages?: PackageItem[];
  faqs?: FaqItem[];
}

export interface GalleryConfig {
  enabled: boolean;
  gridStyle: GalleryGridStyle;
  columns: number;
  enableLightbox: boolean;
  items: GalleryItem[];
}

export interface ReviewsConfig {
  enabled: boolean;
  layoutStyle: ReviewLayoutStyle;
  items: ReviewItem[];
}

export interface ContactConfig {
  phone: string;
  phoneFormatted?: string;
  whatsapp: string;
  whatsappDefaultMessage?: string;
  email: string;
  address: string;
  mapsUrl?: string;
  mapsEmbedUrl?: string;
  businessHours: BusinessHoursItem[];
}

export interface SeoConfig {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  domain?: string;
}

export interface FeaturesConfig {
  showFloatingWhatsapp: boolean;
  showDemoButton: boolean;
  showAnnouncementBar?: boolean;
  announcementText?: string;
}

export interface SiteConfig {
  schemaVersion: number;
  isWizardCompleted: boolean;

  business: {
    name: string;
    shortName: string;
    industry: string;
    tagline: string;
    description: string;
  };

  brand: {
    logo?: string;
    favicon?: string;
    logoAlt?: string;
    monogramText?: string;
  };

  theme: ThemeConfig;
  header: HeaderConfig;
  navigation: NavItem[];
  hero: HeroConfig;
  trustPoints: TrustPoint[];
  about: AboutConfig;
  services: ServicesConfig;
  specialSection: SpecialSectionConfig;
  gallery: GalleryConfig;
  reviews: ReviewsConfig;
  contact: ContactConfig;
  socialLinks: SocialLinks;
  seo: SeoConfig;
  features: FeaturesConfig;

  footerText?: string;
  copyrightText?: string;

  sectionOrder: string[]; // e.g. ['hero', 'trust', 'about', 'services', 'special', 'gallery', 'reviews', 'contact']
  sectionVisibility: Record<string, boolean>;
}
