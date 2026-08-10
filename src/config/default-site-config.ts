import { SiteConfig } from '@/types/site-config';

/**
 * NEUTRAL STARTER DEFAULT CONFIG
 * Removes any pre-baked single-client brand names (e.g. Aura Studio).
 * Serves as a neutral starting point for new sites.
 */
export const defaultSiteConfig: SiteConfig = {
  schemaVersion: 1,
  isWizardCompleted: false,

  business: {
    name: 'İşletme Adınız',
    shortName: 'Marka Adı',
    industry: 'Genel Hizmetler',
    tagline: 'Sloganınızı ve Ana Değer Önerinizi Buraya Yazın',
    description: 'İşletmenizin kalitesini, vizyonunu ve sunduğunuz değerli çözümleri müşterilerinize profesyonel biçimde tanıtın.',
  },

  brand: {
    logo: '/assets/client/logo.svg',
    favicon: '/assets/client/favicon.ico',
    logoAlt: 'İşletme Logosu',
    monogramText: 'İA',
  },

  theme: {
    preset: 'minimal',
    mode: 'auto',
    colors: {
      primary: '#3B82F6',
      secondary: '#06B6D4',
      accent: '#F59E0B',
      background: '#F8FAFC',
      surface: '#FFFFFF',
      textPrimary: '#0F172A',
      textMuted: '#64748B',
    },
    typography: {
      fontPair: 'modern',
      headingFont: 'Outfit',
      bodyFont: 'Inter',
      headingScale: 1.0,
      bodyScale: 1.0,
      letterSpacing: 'normal',
    },
    appearance: {
      borderRadius: 'md',
      buttonStyle: 'pill',
      shadow: 'md',
      containerWidth: 'normal',
      sectionSpacing: 'normal',
      animationLevel: 'normal',
    },
  },

  header: {
    sticky: true,
    transparent: false,
    ctaText: "WhatsApp'tan Yazın",
    ctaType: 'whatsapp',
    ctaHref: '',
    logoSize: 40,
  },

  navigation: [
    { id: 'about', label: 'Hakkımızda', href: '#about', visible: true },
    { id: 'services', label: 'Hizmetler', href: '#services', visible: true },
    { id: 'special', label: 'Süreç', href: '#special', visible: true },
    { id: 'gallery', label: 'Galeri', href: '#gallery', visible: true },
    { id: 'reviews', label: 'Yorumlar', href: '#reviews', visible: true },
    { id: 'contact', label: 'İletişim', href: '#contact', visible: true },
  ],

  hero: {
    layoutVariant: 'text_left_image_right',
    badge: '✨ Hoş Geldiniz',
    title: 'Müşterilerinize İlham Veren Profesyonel Çözümler',
    description: 'Hizmetlerinizi, uzmanlığınızı ve markanızın ayrıcalıklarını tek bir güçlü ve modern sayfada sunun.',
    image: '/assets/client/hero.jpg',
    imageFocalPoint: { x: 50, y: 50 },
    overlayOpacity: 10,
    minHeight: 'min-h-[600px]',
    primaryCta: {
      text: 'Bize Ulaşın',
      href: 'https://wa.me/905000000000',
      type: 'whatsapp',
    },
    secondaryCta: {
      text: 'Hizmetlerimizi İnceleyin',
      href: '#services',
      type: 'section',
    },
  },

  trustPoints: [
    {
      title: 'Müşteri Odaklı Yaklaşım',
      description: 'Her projede yüksek memnuniyet ve şeffaf iletişim.',
      iconName: 'ShieldCheck',
    },
    {
      title: 'Deneyimli Kadro',
      description: 'Sektörün gereksinimlerini bilen uzman ekip.',
      iconName: 'Award',
    },
    {
      title: 'Hızlı ve Güvenilir',
      description: 'Zamanında teslimat ve kesintisiz destek.',
      iconName: 'Zap',
    },
  ],

  about: {
    layoutVariant: 'image_left',
    badge: 'Hakkımızda',
    title: 'Sektördeki Tecrübemizle Değer Yaratıyoruz',
    subtitle: 'Yıllara dayanan birikimimiz ve tutkulu ekibimizle hizmetinizdeyiz.',
    text: [
      'İşletmemiz, müşteri memnuniyetini en üst düzeyde tutma hedefiyle kurulmuştur. Modern teknolojiyi ve sektör standardı kalite prensiplerini her adımda uyguluyoruz.',
      'Sizlere en konforlu ve güvenilir deneyimi sunmak için sürekli gelişiyor, kendimizi yeniliyoruz.',
    ],
    image: '/assets/client/about.jpg',
    imageFocalPoint: { x: 50, y: 50 },
    highlights: [
      'Kalite Garantisi ve Standartlara Tam Uyumluluk',
      'Şeffaf İletişim ve Süreç Takibi',
      'Kişiye Özel Esnek Bakım ve Çözüm Seçenekleri',
    ],
  },

  services: {
    layoutStyle: 'grid',
    columns: 3,
    showPrices: true,
    items: [
      {
        id: 'service-1',
        title: 'Örnek Hizmet Başlığı 1',
        description: 'Hizmetinizin kapsamı, sağladığı faydalar ve sunduğunuz ayrıcalıklar hakkında kısa açıklama.',
        price: '₺500',
        duration: '45 Dk',
        category: 'Temel Paket',
        image: '/assets/client/service-01.jpg',
        iconName: 'Sparkles',
        buttonText: 'Detaylı Bilgi Al',
      },
      {
        id: 'service-2',
        title: 'Örnek Hizmet Başlığı 2',
        description: 'Müşterilerinizin sıklıkla tercih ettiği popüler bir hizmet veya ürün kartı örneği.',
        price: '₺850',
        duration: '60 Dk',
        category: 'Popüler',
        image: '/assets/client/service-02.jpg',
        iconName: 'Zap',
        buttonText: 'Detaylı Bilgi Al',
      },
      {
        id: 'service-3',
        title: 'Örnek Hizmet Başlığı 3',
        description: 'Kapsamlı veya üst düzey paket tekliflerinizi öne çıkarabileceğiniz hizmet detay alanı.',
        price: '₺1.200',
        duration: '90 Dk',
        category: 'Premium',
        image: '/assets/client/service-03.jpg',
        iconName: 'Crown',
        buttonText: 'Detaylı Bilgi Al',
      },
    ],
  },

  specialSection: {
    enabled: true,
    title: 'Çalışma ve Hizmet Sürecimiz',
    subtitle: 'Müşteri talebinden başarıya ulaşana kadar 4 kolay adım',
    type: 'steps',
    steps: [
      {
        step: '01',
        title: 'İlk Görüşme & İhtiyaç Analizi',
        description: 'Taleplerinizi dinliyor, işletmeniz veya cildiniz için en uygun planı çıkarıyoruz.',
        iconName: 'MessageSquare',
      },
      {
        step: '02',
        title: 'Kişiselleştirilmiş Planlama',
        description: 'Size en uygun takvimi ve hizmet içeriğini netleştiriyoruz.',
        iconName: 'CalendarCheck',
      },
      {
        step: '03',
        title: 'Uygulama & Hizmet Sunumu',
        description: 'Steril, huzurlu ve profesyonel ortamda çalışmamızı gerçekleştiriyoruz.',
        iconName: 'HeartHandshake',
      },
      {
        step: '04',
        title: 'Takip & Destek',
        description: 'Hizmet sonrası memnuniyetinizi takip ediyor ve öneriler sunuyoruz.',
        iconName: 'Sparkles',
      },
    ],
  },

  gallery: {
    enabled: true,
    gridStyle: 'equal',
    columns: 4,
    enableLightbox: true,
    items: [
      {
        id: 'gal-1',
        title: 'Mekan ve Karşılama Alanımız',
        category: 'Ortam',
        image: '/assets/client/gallery-01.jpg',
        alt: 'İşletme ferah karşılama salonu',
      },
      {
        id: 'gal-2',
        title: 'Özel Hizmet Alanımız',
        category: 'Hizmet',
        image: '/assets/client/gallery-02.jpg',
        alt: 'Profesyonel uygulama odası',
      },
      {
        id: 'gal-3',
        title: 'Kullandığımız Kaliteli Ekipmanlar',
        category: 'Ekipman',
        image: '/assets/client/gallery-03.jpg',
        alt: 'Sertifikalı ve kaliteli ekipmanlar',
      },
      {
        id: 'gal-4',
        title: 'Tamamlanan Uygulama Kareleri',
        category: 'Sonuçlar',
        image: '/assets/client/gallery-04.jpg',
        alt: 'Hizmet sonu detay görseli',
      },
    ],
  },

  reviews: {
    enabled: true,
    layoutStyle: 'cards',
    items: [
      {
        id: 'rev-1',
        name: 'Ahmet Y.',
        role: 'Müşteri',
        comment: 'Çalışanların ilgisi ve ortamın temizliği çok iyiydi. Kesinlikle tekrar geleceğim.',
        rating: 5,
        date: 'Geçen hafta',
        source: 'Google',
      },
      {
        id: 'rev-2',
        name: 'Elif K.',
        role: 'Müşteri',
        comment: 'Hizmet kalitesi ve güler yüz harikaydı. Zamanında randevu takibi yapılıyor.',
        rating: 5,
        date: '2 hafta önce',
        source: 'Google',
      },
    ],
  },

  contact: {
    phone: '+90 500 000 00 00',
    phoneFormatted: '0500 000 00 00',
    whatsapp: '905000000000',
    whatsappDefaultMessage: 'Merhaba, web siteniz üzerinden bilgi ve randevu almak istiyorum.',
    email: 'info@isletmeniz.com',
    address: 'Atatürk Caddesi No: 123, Merkez / Şehir',
    mapsUrl: 'https://maps.google.com',
    mapsEmbedUrl: '',
    businessHours: [
      { days: 'Pazartesi - Cuma', hours: '09:00 - 19:00', isOpen: true },
      { days: 'Cumartesi', hours: '10:00 - 17:00', isOpen: true },
      { days: 'Pazar', hours: 'Kapalı', isOpen: false },
    ],
  },

  socialLinks: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
  },

  seo: {
    title: 'İşletme Adınız | Sektörel Profesyonel Hizmetler',
    description: 'Şehrinizin en güvenilir profesyonel işletmesinde kaliteli hizmetler ve randevu imkanı.',
    keywords: ['hizmetler', 'işletme', 'randevu'],
    ogImage: '/assets/client/og-image.jpg',
    domain: 'https://isletmeniz.com',
  },

  features: {
    showFloatingWhatsapp: true,
    showDemoButton: true,
    showAnnouncementBar: true,
    announcementText: '🎉 Yeni Müşterilerimize Özel Ön Danışmanlık Hediye!',
  },

  footerText: 'Sizlere en yüksek kalitede hizmet sunmak için buradayız.',
  copyrightText: 'Tüm hakları saklıdır.',

  sectionOrder: [
    'hero',
    'trust',
    'about',
    'services',
    'special',
    'gallery',
    'reviews',
    'contact',
  ],

  sectionVisibility: {
    hero: true,
    trust: true,
    about: true,
    services: true,
    special: true,
    gallery: true,
    reviews: true,
    contact: true,
  },
};
