import { SiteConfig } from '@/types/site-config';

/**
 * English Content Preset Translator
 * When the user switches language to English ('en'), this function converts
 * all built-in sections, titles, navigation items, trust points, and sample text
 * to professional English while preserving custom images and links.
 */
export const ENGLISH_PRESET = {
  navigation: [
    { id: 'about', label: 'About Us', href: '#about', visible: true },
    { id: 'services', label: 'Services', href: '#services', visible: true },
    { id: 'special', label: 'Process', href: '#special', visible: true },
    { id: 'gallery', label: 'Gallery', href: '#gallery', visible: true },
    { id: 'reviews', label: 'Reviews', href: '#reviews', visible: true },
    { id: 'contact', label: 'Contact', href: '#contact', visible: true },
  ],
  hero: {
    badge: '✨ Welcome to Our Studio',
    title: 'Unforgettable Experience & Premium Services',
    description: 'Discover exceptional quality, skilled expertise, and an inviting atmosphere tailored for your utmost satisfaction.',
    primaryCtaText: 'Get in Touch',
    secondaryCtaText: 'Explore Our Services',
  },
  trustPoints: [
    { title: 'Customer-Centric', description: 'Uncompromising satisfaction and transparent communication.', iconName: 'ShieldCheck' },
    { title: 'Experienced Team', description: 'Certified professionals with years of industry expertise.', iconName: 'Award' },
    { title: 'Fast & Reliable', description: 'On-time delivery with dedicated support at every step.', iconName: 'Zap' },
  ],
  about: {
    badge: 'About Us',
    title: 'Delivering Excellence & Creating Lasting Value',
    subtitle: 'Combining passion, expertise, and modern standards to serve you best.',
    text: [
      'Our business was established with a singular mission: to deliver unmatched quality and exceptional customer care.',
      'We continuously innovate and refine our craft to ensure a seamless, luxurious, and comfortable experience for every guest.',
    ],
    highlights: [
      'Guaranteed Quality & Full Industry Compliance',
      'Transparent Pricing & Dedicated Personal Support',
      'Tailored Solutions Designed for Your Needs',
    ],
  },
  services: {
    items: [
      {
        title: 'Essential Care Package',
        description: 'Comprehensive baseline service designed for complete satisfaction and immediate results.',
        price: '$50',
        duration: '45 Min',
        category: 'Starter',
      },
      {
        title: 'Signature Premium Service',
        description: 'Our most popular offering, crafted for maximum comfort and superior quality.',
        price: '$85',
        duration: '60 Min',
        category: 'Popular',
      },
      {
        title: 'Exclusive VIP Experience',
        description: 'All-inclusive top-tier package featuring personalized consultation and luxury details.',
        price: '$120',
        duration: '90 Min',
        category: 'VIP',
      },
    ],
  },
  specialSection: {
    title: 'Our Service & Working Process',
    subtitle: '4 simple steps from initial consultation to complete satisfaction',
    steps: [
      { step: '01', title: 'Consultation & Discovery', description: 'We listen to your requirements and map out the ideal plan.', iconName: 'MessageSquare' },
      { step: '02', title: 'Custom Planning', description: 'We refine the details and schedule at your convenience.', iconName: 'CalendarCheck' },
      { step: '03', title: 'Execution', description: 'We deliver expert service using premium standards.', iconName: 'HeartHandshake' },
      { step: '04', title: 'Aftercare & Support', description: 'We ensure long-term satisfaction and follow-up care.', iconName: 'Sparkles' },
    ],
  },
  reviews: {
    items: [
      {
        name: 'Alexander Wright',
        role: 'Local Guide',
        comment: 'Outstanding service and incredibly welcoming staff! Highly recommended for anyone seeking top quality.',
        date: '1 week ago',
        source: 'Google Maps',
      },
      {
        name: 'Sophia Martinez',
        role: 'Verified Guest',
        comment: 'Punctual, spotless environment, and remarkable attention to detail. I am thoroughly impressed!',
        date: '2 weeks ago',
        source: 'Google Maps',
      },
      {
        name: 'David Chen',
        role: 'Regular Client',
        comment: 'Exceeded all my expectations. Professionalism at its finest—definitely worth 5 stars!',
        date: '1 month ago',
        source: 'Google Maps',
      },
      {
        name: 'Emma Johnson',
        role: 'Local Guide',
        comment: 'The best value and quality in town. Friendly, skilled, and incredibly accommodating.',
        date: '3 weeks ago',
        source: 'Google Maps',
      },
    ],
  },
  announcementText: '🎉 Special Welcome Offer for New Customers!',
  ctaText: 'Chat on WhatsApp',
};

export const TURKISH_PRESET = {
  navigation: [
    { id: 'about', label: 'Hakkımızda', href: '#about', visible: true },
    { id: 'services', label: 'Hizmetler', href: '#services', visible: true },
    { id: 'special', label: 'Süreç', href: '#special', visible: true },
    { id: 'gallery', label: 'Galeri', href: '#gallery', visible: true },
    { id: 'reviews', label: 'Yorumlar', href: '#reviews', visible: true },
    { id: 'contact', label: 'İletişim', href: '#contact', visible: true },
  ],
  hero: {
    badge: '✨ Hoş Geldiniz',
    title: 'Unutulmaz Bir Deneyim ve Profesyonel Hizmetler',
    description: 'Hizmetlerinizi, uzmanlığınızı ve markanızın ayrıcalıklarını tek bir güçlü ve modern sayfada sunun.',
    primaryCtaText: 'Bize Ulaşın',
    secondaryCtaText: 'Hizmetlerimizi İnceleyin',
  },
  trustPoints: [
    { title: 'Müşteri Odaklı', description: 'Yüksek memnuniyet ve şeffaf iletişim.', iconName: 'ShieldCheck' },
    { title: 'Deneyimli Kadro', description: 'Sektörün gereksinimlerini bilen uzman ekip.', iconName: 'Award' },
    { title: 'Hızlı ve Güvenilir', description: 'Zamanında teslimat ve kesintisiz destek.', iconName: 'Zap' },
  ],
  about: {
    badge: 'Hakkımızda',
    title: 'Sektördeki Tecrübemizle Değer Yaratıyoruz',
    subtitle: 'Yıllara dayanan birikimimiz ve tutkulu ekibimizle hizmetinizdeyiz.',
    text: [
      'İşletmemiz, müşteri memnuniyetini en üst düzeyde tutma hedefiyle kurulmuştur.',
      'Sizlere en konforlu ve güvenilir deneyimi sunmak için sürekli gelişiyor, kendimizi yeniliyoruz.',
    ],
    highlights: [
      'Kalite Garantisi ve Standartlara Tam Uyumluluk',
      'Şeffaf İletişim ve Süreç Takibi',
      'Kişiye Özel Esnek Çözüm Seçenekleri',
    ],
  },
  services: {
    items: [
      {
        title: 'Örnek Hizmet 1',
        description: 'Hizmetinizin kapsamı ve sunduğunuz ayrıcalıklar hakkında kısa açıklama.',
        price: '₺500',
        duration: '45 Dk',
        category: 'Temel',
      },
      {
        title: 'Örnek Hizmet 2',
        description: 'Müşterilerinizin sıklıkla tercih ettiği popüler bir hizmet veya ürün kartı.',
        price: '₺850',
        duration: '60 Dk',
        category: 'Popüler',
      },
      {
        title: 'Örnek Hizmet 3',
        description: 'Kapsamlı veya üst düzey paket tekliflerinizi öne çıkarabileceğiniz alan.',
        price: '₺1.200',
        duration: '90 Dk',
        category: 'Premium',
      },
    ],
  },
  specialSection: {
    title: 'Çalışma ve Hizmet Sürecimiz',
    subtitle: 'Müşteri talebinden başarıya ulaşana kadar 4 kolay adım',
    steps: [
      { step: '01', title: 'İlk Görüşme & Analiz', description: 'Taleplerinizi dinliyor, en uygun planı çıkarıyoruz.', iconName: 'MessageSquare' },
      { step: '02', title: 'Planlama', description: 'Size en uygun takvimi ve içeriği netleştiriyoruz.', iconName: 'CalendarCheck' },
      { step: '03', title: 'Uygulama', description: 'Steril ve profesyonel ortamda çalışmamızı gerçekleştiriyoruz.', iconName: 'HeartHandshake' },
      { step: '04', title: 'Takip & Destek', description: 'Hizmet sonrası memnuniyetinizi takip ediyoruz.', iconName: 'Sparkles' },
    ],
  },
  reviews: {
    items: [
      {
        name: 'Ahmet Yılmaz',
        role: 'Yerel Rehber',
        comment: 'Hizmet kalitesi harikaydı, çalışanlar son derece güler yüzlü ve ilgiliydi. Kesinlikle tavsiye ediyorum!',
        date: '1 hafta önce',
        source: 'Google Haritalar',
      },
      {
        name: 'Elif Kaya',
        role: 'Doğrulanmış Müşteri',
        comment: 'Randevu saatine tam uyuldu, ortam tertemiz ve çok ferahtı. İlgilerinden dolayı teşekkür ederim.',
        date: '2 hafta önce',
        source: 'Google Haritalar',
      },
      {
        name: 'Mehmet Demir',
        role: 'Müşteri',
        comment: 'Tavsiye üzerine geldik ve beklentimizin çok üzerinde bir profesyonellik gördük. 5 yıldızı hak ediyorlar.',
        date: '1 ay önce',
        source: 'Google Haritalar',
      },
    ],
  },
  announcementText: '🎉 Yeni Müşterilerimize Özel Ön Danışmanlık Hediye!',
  ctaText: "WhatsApp'tan Yazın",
};

/**
 * Switches full site language between Turkish ('tr') and English ('en')
 */
export function translateConfigToLanguage(draft: SiteConfig, lang: 'tr' | 'en') {
  draft.language = lang;

  const preset = lang === 'en' ? ENGLISH_PRESET : TURKISH_PRESET;

  // 1. Navigation
  draft.navigation = preset.navigation;

  // 2. Hero
  draft.hero.badge = preset.hero.badge;
  draft.hero.title = preset.hero.title;
  draft.hero.description = preset.hero.description;
  draft.hero.primaryCta.text = preset.hero.primaryCtaText;
  if (draft.hero.secondaryCta) draft.hero.secondaryCta.text = preset.hero.secondaryCtaText;

  // 3. Trust Points
  draft.trustPoints = preset.trustPoints;

  // 4. About
  draft.about.badge = preset.about.badge;
  draft.about.title = preset.about.title;
  draft.about.subtitle = preset.about.subtitle;
  draft.about.text = preset.about.text;
  draft.about.highlights = preset.about.highlights;

  // 5. Services
  if (Array.isArray(draft.services?.items)) {
    draft.services.items.forEach((item, idx) => {
      const p = preset.services.items[idx] || preset.services.items[0];
      item.title = p.title;
      item.description = p.description;
      item.price = p.price;
      item.duration = p.duration;
      item.category = p.category;
    });
  }

  // 6. Special Section
  draft.specialSection.title = preset.specialSection.title;
  draft.specialSection.subtitle = preset.specialSection.subtitle;
  if (Array.isArray(draft.specialSection.steps)) {
    draft.specialSection.steps.forEach((step, idx) => {
      const p = preset.specialSection.steps[idx] || preset.specialSection.steps[0];
      step.title = p.title;
      step.description = p.description;
    });
  }

  // 7. Reviews
  if (Array.isArray(draft.reviews?.items)) {
    draft.reviews.items.forEach((item, idx) => {
      const p = preset.reviews.items[idx] || preset.reviews.items[0];
      item.name = p.name;
      item.role = p.role;
      item.comment = p.comment;
      item.date = p.date;
    });
  }

  // 8. Announcement & Header
  if (draft.features) draft.features.announcementText = preset.announcementText;
  if (draft.header) draft.header.ctaText = preset.ctaText;

  return draft;
}
