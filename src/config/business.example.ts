import { BusinessConfig } from '@/types/business';

/**
 * ============================================================================
 * ÖRNEK MÜŞTERİ YAPILANDIRMA ŞABLONU (TEMPLATE EXAMPLE)
 * ============================================================================
 * Yeni bir müşteri için bu dosyayı kopyalayıp `src/config/business.ts`
 * adıyla kaydedin ve aşağıdaki alanları müşteri bilgilerine göre doldurun.
 */

export const businessConfigExample: BusinessConfig = {
  businessName: '[MÜŞTERİ FİRMA ADI]',
  shortName: '[KISA MARKA ADI]',
  industry: '[SEKTÖR - ÖRN: KAFE, KLİNİK, OTO YIKAMA, DANIŞMANLIK]',
  tagline: '[KISA VE ETKİLEYİCİ SLOGAN]',
  description: '[İŞLETME HAKKINDA 1-2 CÜMLELİK ÖZET AÇIKLAMA]',

  logo: '/assets/client/logo.svg', // logo yoksa undefined yapabilirsiniz
  favicon: '/assets/client/favicon.ico',
  logoAlt: '[FİRMA ADI] Logo',

  theme: {
    primary: '#8B5CF6', // Ana Kurumsal Renk (HEX)
    secondary: '#06B6D4',
    accent: '#F59E0B',
    mode: 'auto', // 'light' | 'dark' | 'auto'
    stylePreset: 'modern', // 'minimal' | 'luxury' | 'warm' | 'editorial' | 'modern'
  },

  navigation: [
    { label: 'Hakkımızda', href: '#about' },
    { label: 'Hizmetler', href: '#services' },
    { label: 'Özel Bölüm', href: '#special' },
    { label: 'Galeri', href: '#gallery' },
    { label: 'Yorumlar', href: '#reviews' },
    { label: 'İletişim', href: '#contact' },
  ],

  hero: {
    badge: '[ÖNE ÇIKAN DUYURU VEYA ROZET]',
    title: '[ANA MANŞET BAŞLIĞI H1]',
    description: '[MANŞET ALTI AÇIKLAMA PARAGRAFI]',
    image: '/assets/client/hero.jpg',
    primaryCta: {
      text: 'WhatsApp ile İletişim',
      href: 'https://wa.me/905000000000',
      type: 'whatsapp',
    },
    secondaryCta: {
      text: 'Hizmetlerimiz',
      href: '#services',
      type: 'link',
    },
  },

  trustPoints: [
    {
      title: 'Güvenilir Hizmet',
      description: 'Müşteri memnuniyeti odaklı çalışma prensibi.',
      iconName: 'ShieldCheck',
    },
    {
      title: 'Deneyimli Kadro',
      description: 'Sektörde uzmanlaşmış tecrübeli ekip.',
      iconName: 'Award',
    },
    {
      title: 'Hızlı & Şeffaf Süreç',
      description: 'Zamanında teslimat ve şeffaf bilgilendirme.',
      iconName: 'Clock',
    },
  ],

  about: {
    badge: 'Hakkımızda',
    title: '[HAKKIMIZDA BÖLÜM BAŞLIĞI]',
    subtitle: '[HAKKIMIZDA ALT BAŞLIK]',
    text: [
      '[Hakkımızda 1. Paragraf metni]',
      '[Hakkımızda 2. Paragraf metni]',
    ],
    image: '/assets/client/about.jpg',
    highlights: [
      '[Öne Çıkan Özellik 1]',
      '[Öne Çıkan Özellik 2]',
      '[Öne Çıkan Özellik 3]',
    ],
  },

  services: [
    {
      id: 'hizmet-1',
      title: '[Örnek Hizmet 1 Başlığı]',
      description: '[Hizmet detaylı açıklaması]',
      price: '₺500',
      duration: '45 Dk',
      category: 'Genel',
      image: '/assets/client/service-01.jpg',
      iconName: 'Sparkles',
      featured: true,
    },
  ],

  specialSection: {
    title: 'Çalışma Sürecimiz',
    subtitle: 'Adım adım hizmet akışımız',
    type: 'steps',
    steps: [
      {
        step: '01',
        title: 'İletişim & Talep',
        description: 'Talebinizi alıyor ve detayları görüşüyoruz.',
        iconName: 'PhoneCall',
      },
      {
        step: '02',
        title: 'Hizmet Sunumu',
        description: 'Planlanan hizmeti özenle gerçekleştiriyoruz.',
        iconName: 'CheckCircle2',
      },
    ],
  },

  gallery: [
    {
      id: 'galeri-1',
      title: '[Görsel Başlığı]',
      category: '[Kategori]',
      image: '/assets/client/gallery-01.jpg',
      alt: '[Görsel Açıklaması]',
    },
  ],

  reviews: [
    {
      id: 'yor-1',
      name: '[Müşteri Adı Soyadı]',
      role: '[Unvan / Müşteri]',
      comment: '[Gerçek Müşteri Yorum Metni]',
      rating: 5,
      date: 'Yakın zamanda',
      source: 'Google',
    },
  ],

  contact: {
    phone: '+90 500 000 00 00',
    phoneFormatted: '0500 000 00 00',
    whatsapp: '905000000000',
    whatsappDefaultMessage: 'Merhaba, web siteniz üzerinden bilgi almak istiyorum.',
    email: 'bilgi@musterifirma.com',
    address: '[Açık Adres Bilgisi]',
    mapsUrl: 'https://maps.google.com',
    mapsEmbedUrl: '',
  },

  businessHours: [
    { days: 'Pazartesi - Cuma', hours: '09:00 - 18:00', isOpen: true },
    { days: 'Cumartesi', hours: '09:00 - 14:00', isOpen: true },
    { days: 'Pazar', hours: 'Kapalı', isOpen: false },
  ],

  socialLinks: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
  },

  seo: {
    title: '[FİRMA ADI] | [ANA HİZMET ADI]',
    description: '[Arama motorlarında görünecek açıklama cümlesi]',
    keywords: ['hizmet1', 'hizmet2', 'şehir'],
    ogImage: '/assets/client/og-image.jpg',
    domain: 'https://musterifirma.com',
  },

  features: {
    showReviews: true,
    showGallery: true,
    showMap: true,
    showSpecialSection: true,
    showFloatingWhatsapp: true,
    showPricing: true,
    showPlaceholderBadges: false,
  },
};
