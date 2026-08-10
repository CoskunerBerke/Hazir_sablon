import { SiteConfig } from '@/types/site-config';

/**
 * NEUTRAL STARTER DEFAULT CONFIG
 * Clean starter template with infinite river Google reviews and neutral business content.
 */
export const defaultSiteConfig: SiteConfig = {
  schemaVersion: 2,
  isWizardCompleted: false,

  business: {
    name: 'İşletme Adınız',
    shortName: 'Marka Adı',
    industry: 'Genel Hizmetler',
    tagline: 'Sloganınızı ve Ana Değer Önerinizi Buraya Yazın',
    description: 'İşletmenizin kalitesini, vizyonunu ve sunduğunuz değerli çözümleri müşterilerinize profesyonel biçimde tanıtın.',
  },

  brand: {
    logo: '',
    favicon: '',
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
    image: '',
    imageFocalPoint: { x: 50, y: 50 },
    overlayOpacity: 10,
    minHeight: 'min-h-[600px]',
    primaryCta: {
      text: 'Bize Ulaşın',
      href: '#contact',
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
    image: '',
    imageFocalPoint: { x: 50, y: 50 },
    highlights: [
      'Kalite Garantisi ve Standartlara Tam Uyumluluk',
      'Şeffaf İletişim ve Süreç Takibi',
      'Kişiye Özel Esnek Çözüm Seçenekleri',
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
        description: 'Hizmetinizin kapsamı ve sunduğunuz ayrıcalıklar hakkında kısa açıklama.',
        price: '₺500',
        duration: '45 Dk',
        category: 'Temel Paket',
        image: '',
        iconName: 'Sparkles',
        buttonText: 'Bilgi Al',
      },
      {
        id: 'service-2',
        title: 'Örnek Hizmet Başlığı 2',
        description: 'Müşterilerinizin sıklıkla tercih ettiği popüler bir hizmet veya ürün kartı.',
        price: '₺850',
        duration: '60 Dk',
        category: 'Popüler',
        image: '',
        iconName: 'Zap',
        buttonText: 'Bilgi Al',
      },
      {
        id: 'service-3',
        title: 'Örnek Hizmet Başlığı 3',
        description: 'Kapsamlı veya üst düzey paket tekliflerinizi öne çıkarabileceğiniz alan.',
        price: '₺1.200',
        duration: '90 Dk',
        category: 'Premium',
        image: '',
        iconName: 'Crown',
        buttonText: 'Bilgi Al',
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
        title: 'İlk Görüşme & Analiz',
        description: 'Taleplerinizi dinliyor, en uygun planı çıkarıyoruz.',
        iconName: 'MessageSquare',
      },
      {
        step: '02',
        title: 'Planlama',
        description: 'Size en uygun takvimi ve içeriği netleştiriyoruz.',
        iconName: 'CalendarCheck',
      },
      {
        step: '03',
        title: 'Uygulama',
        description: 'Steril ve profesyonel ortamda çalışmamızı gerçekleştiriyoruz.',
        iconName: 'HeartHandshake',
      },
      {
        step: '04',
        title: 'Takip & Destek',
        description: 'Hizmet sonrası memnuniyetinizi takip ediyoruz.',
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
        title: 'Fotoğraf Başlığı 1',
        category: 'Ortam',
        image: '',
        alt: 'Galeri Görseli',
      },
      {
        id: 'gal-2',
        title: 'Fotoğraf Başlığı 2',
        category: 'Hizmet',
        image: '',
        alt: 'Galeri Görseli',
      },
      {
        id: 'gal-3',
        title: 'Fotoğraf Başlığı 3',
        category: 'Ekipman',
        image: '',
        alt: 'Galeri Görseli',
      },
      {
        id: 'gal-4',
        title: 'Fotoğraf Başlığı 4',
        category: 'Sonuçlar',
        image: '',
        alt: 'Galeri Görseli',
      },
    ],
  },

  reviews: {
    enabled: true,
    layoutStyle: 'marquee',
    items: [
      {
        id: 'rev-1',
        name: 'Ahmet Yılmaz',
        role: 'Yerel Rehber',
        comment: 'Hizmet kalitesi harikaydı, çalışanlar son derece güler yüzlü ve ilgiliydi. Kesinlikle tavsiye ediyorum!',
        rating: 5,
        date: '1 hafta önce',
        source: 'Google Haritalar',
      },
      {
        id: 'rev-2',
        name: 'Elif Kaya',
        role: 'Doğrulanmış Müşteri',
        comment: 'Randevu saatine tam uyuldu, ortam tertemiz ve çok ferahtı. İlgilerinden dolayı teşekkür ederim.',
        rating: 5,
        date: '2 hafta önce',
        source: 'Google Haritalar',
      },
      {
        id: 'rev-3',
        name: 'Mehmet Demir',
        role: 'Müşteri',
        comment: 'Tavsiye üzerine geldik ve beklentimizin çok üzerinde bir profesyonellik gördük. 5 yıldızı hak ediyorlar.',
        rating: 5,
        date: '1 ay önce',
        source: 'Google Haritalar',
      },
      {
        id: 'rev-4',
        name: 'Selin Öztürk',
        role: 'Yerel Rehber',
        comment: 'Fiyat/performans açısından şehirdeki en başarılı işletme. Süreç boyunca her soruya sabırla cevap verdiler.',
        rating: 5,
        date: '3 hafta önce',
        source: 'Google Haritalar',
      },
      {
        id: 'rev-5',
        name: 'Caner Şahin',
        role: 'Müşteri',
        comment: 'İşlerini büyük bir titizlikle yapıyorlar. İlk andan itibaren kendinizi güvende hissediyorsunuz.',
        rating: 5,
        date: '2 ay önce',
        source: 'Google Haritalar',
      },
    ],
  },

  contact: {
    phone: '',
    phoneFormatted: '',
    whatsapp: '',
    whatsappDefaultMessage: 'Merhaba, web siteniz üzerinden bilgi almak istiyorum.',
    email: '',
    address: '',
    mapsUrl: '',
    mapsEmbedUrl: '',
    businessHours: [],
  },

  socialLinks: {},

  seo: {
    title: 'İşletme Adınız | Sektörel Profesyonel Hizmetler',
    description: 'Şehrinizin en güvenilir profesyonel işletmesinde kaliteli hizmetler ve randevu imkanı.',
    keywords: ['hizmetler', 'işletme', 'randevu'],
    ogImage: '',
    domain: '',
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
