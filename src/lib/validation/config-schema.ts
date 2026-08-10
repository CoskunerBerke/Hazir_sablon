import { z } from 'zod';

const CtaButtonSchema = z.object({
  text: z.string().default(''),
  href: z.string().default(''),
  type: z.string().optional(),
});

const FocalPointSchema = z.object({
  x: z.number().min(0).max(100).default(50),
  y: z.number().min(0).max(100).default(50),
});

export const SiteConfigSchema = z.object({
  schemaVersion: z.number().default(1),
  isWizardCompleted: z.boolean().default(true),

  business: z.object({
    name: z.string().min(1, 'İşletme adı zorunludur'),
    shortName: z.string().default(''),
    industry: z.string().default('Genel'),
    tagline: z.string().default(''),
    description: z.string().default(''),
  }),

  brand: z.object({
    logo: z.string().optional(),
    favicon: z.string().optional(),
    logoAlt: z.string().optional(),
    monogramText: z.string().optional(),
  }).default({
    logo: '',
    favicon: '',
    logoAlt: '',
    monogramText: '',
  }),

  theme: z.object({
    preset: z.string().default('minimal'),
    mode: z.string().default('auto'),
    colors: z.object({
      primary: z.string().default('#3B82F6'),
      secondary: z.string().default('#06B6D4'),
      accent: z.string().default('#F59E0B'),
      background: z.string().default('#F8FAFC'),
      surface: z.string().default('#FFFFFF'),
      textPrimary: z.string().default('#0F172A'),
      textMuted: z.string().default('#64748B'),
      headerBg: z.string().optional(),
      footerBg: z.string().optional(),
    }),
    typography: z.object({
      fontPair: z.string().default('modern'),
      headingFont: z.string().default('Outfit'),
      bodyFont: z.string().default('Inter'),
      headingScale: z.number().default(1.0),
      bodyScale: z.number().default(1.0),
      letterSpacing: z.string().default('normal'),
    }),
    appearance: z.object({
      borderRadius: z.string().default('md'),
      buttonStyle: z.string().default('pill'),
      shadow: z.string().default('md'),
      containerWidth: z.string().default('normal'),
      sectionSpacing: z.string().default('normal'),
      animationLevel: z.string().default('normal'),
    }),
  }),

  header: z.object({
    sticky: z.boolean().default(true),
    transparent: z.boolean().default(false),
    ctaText: z.string().default("WhatsApp'tan Yazın"),
    ctaType: z.string().default('whatsapp'),
    ctaHref: z.string().default(''),
    logoSize: z.number().default(40),
  }).default({
    sticky: true,
    transparent: false,
    ctaText: "WhatsApp'tan Yazın",
    ctaType: 'whatsapp',
    ctaHref: '',
    logoSize: 40,
  }),

  navigation: z.array(
    z.object({
      id: z.string(),
      label: z.string(),
      href: z.string(),
      visible: z.boolean().default(true),
    })
  ).default([]),

  hero: z.object({
    layoutVariant: z.string().default('text_left_image_right'),
    badge: z.string().optional(),
    title: z.string().default(''),
    description: z.string().default(''),
    primaryCta: CtaButtonSchema.default({ text: 'Bize Ulaşın', href: '' }),
    secondaryCta: CtaButtonSchema.optional(),
    image: z.string().optional(),
    imageFocalPoint: FocalPointSchema.optional(),
    overlayOpacity: z.number().default(10),
    minHeight: z.string().default('min-h-[600px]'),
  }),

  trustPoints: z.array(
    z.object({
      title: z.string(),
      description: z.string(),
      iconName: z.string().optional(),
    })
  ).default([]),

  about: z.object({
    layoutVariant: z.string().default('image_left'),
    badge: z.string().optional(),
    title: z.string().default(''),
    subtitle: z.string().optional(),
    text: z.array(z.string()).default([]),
    image: z.string().optional(),
    imageFocalPoint: FocalPointSchema.optional(),
    highlights: z.array(z.string()).default([]),
  }),

  services: z.object({
    layoutStyle: z.string().default('grid'),
    columns: z.number().default(3),
    showPrices: z.boolean().default(true),
    items: z.array(
      z.object({
        id: z.string(),
        title: z.string(),
        description: z.string(),
        price: z.string().optional(),
        duration: z.string().optional(),
        category: z.string().optional(),
        image: z.string().optional(),
        iconName: z.string().optional(),
        buttonText: z.string().optional(),
        buttonHref: z.string().optional(),
      })
    ).default([]),
  }),

  specialSection: z.object({
    enabled: z.boolean().default(true),
    title: z.string().default(''),
    subtitle: z.string().optional(),
    type: z.string().default('steps'),
    menuCategories: z.array(z.string()).optional(),
    menuItems: z.array(z.any()).optional(),
    beforeAfterItems: z.array(z.any()).optional(),
    steps: z.array(z.any()).optional(),
    packages: z.array(z.any()).optional(),
    faqs: z.array(z.any()).optional(),
  }),

  gallery: z.object({
    enabled: z.boolean().default(true),
    gridStyle: z.string().default('equal'),
    columns: z.number().default(4),
    enableLightbox: z.boolean().default(true),
    items: z.array(
      z.object({
        id: z.string(),
        title: z.string().optional(),
        description: z.string().optional(),
        category: z.string().optional(),
        image: z.string(),
        alt: z.string().default(''),
      })
    ).default([]),
  }),

  reviews: z.object({
    enabled: z.boolean().default(true),
    layoutStyle: z.string().default('cards'),
    items: z.array(
      z.object({
        id: z.string(),
        name: z.string(),
        role: z.string().optional(),
        comment: z.string(),
        rating: z.number().default(5),
        date: z.string().optional(),
        source: z.string().optional(),
      })
    ).default([]),
  }),

  contact: z.object({
    phone: z.string().default(''),
    phoneFormatted: z.string().optional(),
    whatsapp: z.string().default(''),
    whatsappDefaultMessage: z.string().optional(),
    email: z.string().default(''),
    address: z.string().default(''),
    mapsUrl: z.string().optional(),
    mapsEmbedUrl: z.string().optional(),
    businessHours: z.array(
      z.object({
        days: z.string(),
        hours: z.string(),
        isOpen: z.boolean().default(true),
      })
    ).default([]),
  }),

  socialLinks: z.object({
    instagram: z.string().optional(),
    facebook: z.string().optional(),
    twitter: z.string().optional(),
    linkedin: z.string().optional(),
    youtube: z.string().optional(),
    tiktok: z.string().optional(),
    googleMaps: z.string().optional(),
  }).default({
    instagram: '',
    facebook: '',
    twitter: '',
    linkedin: '',
    youtube: '',
    tiktok: '',
    googleMaps: '',
  }),

  seo: z.object({
    title: z.string().default(''),
    description: z.string().default(''),
    keywords: z.array(z.string()).default([]),
    ogImage: z.string().optional(),
    domain: z.string().optional(),
  }),

  features: z.object({
    showFloatingWhatsapp: z.boolean().default(true),
    showDemoButton: z.boolean().default(true),
    showAnnouncementBar: z.boolean().default(true),
    announcementText: z.string().optional(),
  }).default({
    showFloatingWhatsapp: true,
    showDemoButton: true,
    showAnnouncementBar: true,
    announcementText: '',
  }),

  sectionOrder: z.array(z.string()).default([
    'hero',
    'trust',
    'about',
    'services',
    'special',
    'gallery',
    'reviews',
    'contact',
  ]),

  sectionVisibility: z.record(z.string(), z.boolean()).default({
    hero: true,
    trust: true,
    about: true,
    services: true,
    special: true,
    gallery: true,
    reviews: true,
    contact: true,
  }),
});
