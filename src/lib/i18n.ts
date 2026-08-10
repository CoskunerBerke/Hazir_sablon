import { SiteConfig, LanguageCode } from '@/types/site-config';

export const ENGLISH_PRESET = {
  navigation: [
    { id: 'about', label: 'About Us', href: '#about', visible: true },
    { id: 'services', label: 'Services', href: '#services', visible: true },
    { id: 'special', label: 'Process', href: '#special', visible: true },
    { id: 'gallery', label: 'Gallery', href: '#gallery', visible: true },
    { id: 'reviews', label: 'Reviews', href: '#reviews', visible: true },
    { id: 'contact', label: 'Contact', href: '#contact', visible: true },
  ],
  business: {
    name: 'Your Business Name',
    shortName: 'Brand Name',
    industry: 'Professional Services',
    tagline: 'Write Your Tagline and Value Proposition Here',
    description: 'Introduce your expertise, high standards, and value to your clients in a professional manner.',
  },
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
    badge: 'Services & Products',
    title: 'Professional Solutions Tailored for You',
    subtitle: 'High quality offerings designed to exceed your expectations.',
    items: [
      {
        id: 'service-1',
        title: 'Essential Care Package',
        description: 'Comprehensive baseline service designed for complete satisfaction and immediate results.',
        price: '$50',
        duration: '45 Min',
        category: 'Starter',
        buttonText: 'Learn More',
      },
      {
        id: 'service-2',
        title: 'Signature Premium Service',
        description: 'Our most popular offering, crafted for maximum comfort and superior quality.',
        price: '$85',
        duration: '60 Min',
        category: 'Popular',
        buttonText: 'Learn More',
      },
      {
        id: 'service-3',
        title: 'Exclusive VIP Experience',
        description: 'All-inclusive top-tier package featuring personalized consultation and luxury details.',
        price: '$120',
        duration: '90 Min',
        category: 'VIP',
        buttonText: 'Learn More',
      },
    ],
  },
  specialSection: {
    badge: 'Our Process',
    title: 'Our Service & Working Process',
    subtitle: '4 simple steps from initial consultation to complete satisfaction',
    steps: [
      { step: '01', title: 'Consultation & Discovery', description: 'We listen to your requirements and map out the ideal plan.', iconName: 'MessageSquare' },
      { step: '02', title: 'Custom Planning', description: 'We refine the details and schedule at your convenience.', iconName: 'CalendarCheck' },
      { step: '03', title: 'Execution', description: 'We deliver expert service using premium standards.', iconName: 'HeartHandshake' },
      { step: '04', title: 'Aftercare & Support', description: 'We ensure long-term satisfaction and follow-up care.', iconName: 'Sparkles' },
    ],
  },
  gallery: {
    badge: 'Gallery',
    title: 'Our Atmosphere & Recent Work',
    subtitle: 'Take a look inside our facilities and showcased client results.',
  },
  reviews: {
    badge: 'Google Reviews',
    title: 'Real Experiences of Our Valued Clients',
    subtitle: 'Verified feedback shared by clients on Google Maps.',
    items: [
      {
        id: 'rev-1',
        name: 'Alexander Wright',
        role: 'Local Guide',
        comment: 'Outstanding service and incredibly welcoming staff! Highly recommended for anyone seeking top quality.',
        date: '1 week ago',
        source: 'Google Maps',
      },
      {
        id: 'rev-2',
        name: 'Sophia Martinez',
        role: 'Verified Guest',
        comment: 'Punctual, spotless environment, and remarkable attention to detail. I am thoroughly impressed!',
        date: '2 weeks ago',
        source: 'Google Maps',
      },
      {
        id: 'rev-3',
        name: 'David Chen',
        role: 'Regular Client',
        comment: 'Exceeded all my expectations. Professionalism at its finest—definitely worth 5 stars!',
        date: '1 month ago',
        source: 'Google Maps',
      },
    ],
  },
  contact: {
    badge: 'Contact & Location',
    title: 'Get in Touch With Us',
    subtitle: 'Reach out for inquiries, appointments, or consultation requests.',
    address: '123 Business Avenue, Suite 400',
  },
  features: {
    announcementText: '🎉 Special Welcome Offer for New Customers!',
  },
  footerText: 'We are dedicated to providing you with the highest quality of service.',
  copyrightText: 'All rights reserved.',
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
  business: {
    name: 'İşletme Adınız',
    shortName: 'Marka Adı',
    industry: 'Genel Hizmetler',
    tagline: 'Sloganınızı ve Ana Değer Önerinizi Buraya Yazın',
    description: 'İşletmenizin kalitesini, vizyonunu ve sunduğunuz değerli çözümleri müşterilerinize profesyonel biçimde tanıtın.',
  },
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
    badge: 'Hizmetler & Ürünler',
    title: 'Size Özel Sunulan Profesyonel Bakım ve Çözümler',
    subtitle: 'İhtiyacınıza en uygun hizmet paketini seçin veya uzman ekibimizden özel tavsiye alın.',
    items: [
      {
        id: 'service-1',
        title: 'Örnek Hizmet 1',
        description: 'Hizmetinizin kapsamı ve sunduğunuz ayrıcalıklar hakkında kısa açıklama.',
        price: '₺500',
        duration: '45 Dk',
        category: 'Temel',
        buttonText: 'Bilgi Al',
      },
      {
        id: 'service-2',
        title: 'Örnek Hizmet 2',
        description: 'Müşterilerinizin sıklıkla tercih ettiği popüler bir hizmet veya ürün kartı.',
        price: '₺850',
        duration: '60 Dk',
        category: 'Popüler',
        buttonText: 'Bilgi Al',
      },
      {
        id: 'service-3',
        title: 'Örnek Hizmet 3',
        description: 'Kapsamlı veya üst düzey paket tekliflerinizi öne çıkarabileceğiniz alan.',
        price: '₺1.200',
        duration: '90 Dk',
        category: 'Premium',
        buttonText: 'Bilgi Al',
      },
    ],
  },
  specialSection: {
    badge: 'Hizmet Süreci',
    title: 'Çalışma ve Hizmet Sürecimiz',
    subtitle: 'Müşteri talebinden başarıya ulaşana kadar 4 kolay adım',
    steps: [
      { step: '01', title: 'İlk Görüşme & Analiz', description: 'Taleplerinizi dinliyor, en uygun planı çıkarıyoruz.', iconName: 'MessageSquare' },
      { step: '02', title: 'Planlama', description: 'Size en uygun takvimi ve içeriği netleştiriyoruz.', iconName: 'CalendarCheck' },
      { step: '03', title: 'Uygulama', description: 'Steril ve profesyonel ortamda çalışmamızı gerçekleştiriyoruz.', iconName: 'HeartHandshake' },
      { step: '04', title: 'Takip & Destek', description: 'Hizmet sonrası memnuniyetinizi takip ediyoruz.', iconName: 'Sparkles' },
    ],
  },
  gallery: {
    badge: 'Galeri',
    title: 'Atmosferimiz ve Çalışmalarımız',
    subtitle: 'İşletmemizden ve gerçekleştirdiğimiz çalışmalardan karelere göz atın.',
  },
  reviews: {
    badge: 'Google Müşteri Yorumları',
    title: 'Bizi Tercih Edenlerin Gerçek Deneyimleri',
    subtitle: 'Google Haritalar üzerinden paylaşılan doğrulanmış danışan ve müşteri geri bildirimleri.',
    items: [
      {
        id: 'rev-1',
        name: 'Ahmet Yılmaz',
        role: 'Yerel Rehber',
        comment: 'Hizmet kalitesi harikaydı, çalışanlar son derece güler yüzlü ve ilgiliydi. Kesinlikle tavsiye ediyorum!',
        date: '1 hafta önce',
        source: 'Google Haritalar',
      },
      {
        id: 'rev-2',
        name: 'Elif Kaya',
        role: 'Doğrulanmış Müşteri',
        comment: 'Randevu saatine tam uyuldu, ortam tertemiz ve çok ferahtı. İlgilerinden dolayı teşekkür ederim.',
        date: '2 hafta önce',
        source: 'Google Haritalar',
      },
      {
        id: 'rev-3',
        name: 'Mehmet Demir',
        role: 'Müşteri',
        comment: 'Tavsiye üzerine geldik ve beklentimizin çok üzerinde bir profesyonellik gördük. 5 yıldızı hak ediyorlar.',
        date: '1 ay önce',
        source: 'Google Haritalar',
      },
    ],
  },
  contact: {
    badge: 'İletişim & Konum',
    title: 'Bizimle İletişime Geçin veya Ziyaret Edin',
    subtitle: 'Sorularınız, randevu talepleriniz veya bilgi almak için tek tıkla ulaşın.',
    address: 'Atatürk Caddesi, No: 100, Çankaya / Ankara',
  },
  features: {
    announcementText: '🎉 Yeni Müşterilerimize Özel Ön Danışmanlık Hediye!',
  },
  footerText: 'Sizlere en yüksek kalitede hizmet sunmak için buradayız.',
  copyrightText: 'Tüm hakları saklıdır.',
};

/**
 * Extracts a locale content object from a SiteConfig or returns default preset
 */
export function extractContent(config: SiteConfig, lang: LanguageCode) {
  const preset = lang === 'en' ? ENGLISH_PRESET : TURKISH_PRESET;
  const existing = (config as any).i18nContent?.[lang];

  if (existing) {
    return existing;
  }

  // Clone preset directly to ensure TR always gets Turkish preset and EN gets English preset initially
  return JSON.parse(JSON.stringify(preset));
}

/**
 * Mutates draft in place with effective localized content without object replacement
 */
export function syncEffectiveConfig(draft: SiteConfig, lang: LanguageCode) {
  if (!(draft as any).i18nContent) {
    (draft as any).i18nContent = {
      tr: extractContent(draft, 'tr'),
      en: extractContent(draft, 'en'),
    };
  }

  const content = (draft as any).i18nContent[lang];
  if (!content) return;

  if (content.navigation && Array.isArray(content.navigation) && Array.isArray(draft.navigation)) {
    content.navigation.forEach((nav: any, idx: number) => {
      if (draft.navigation[idx]) {
        draft.navigation[idx].label = nav.label || draft.navigation[idx].label;
      }
    });
  }

  if (content.business) {
    if (content.business.name !== undefined) draft.business.name = content.business.name;
    if (content.business.shortName !== undefined) draft.business.shortName = content.business.shortName;
    if (content.business.industry !== undefined) draft.business.industry = content.business.industry;
    if (content.business.tagline !== undefined) draft.business.tagline = content.business.tagline;
    if (content.business.description !== undefined) draft.business.description = content.business.description;
  }

  if (content.hero) {
    if (content.hero.badge !== undefined) draft.hero.badge = content.hero.badge;
    if (content.hero.title !== undefined) draft.hero.title = content.hero.title;
    if (content.hero.description !== undefined) draft.hero.description = content.hero.description;
    if (content.hero.primaryCtaText !== undefined && draft.hero.primaryCta) draft.hero.primaryCta.text = content.hero.primaryCtaText;
    if (content.hero.secondaryCtaText !== undefined && draft.hero.secondaryCta) draft.hero.secondaryCta.text = content.hero.secondaryCtaText;
  }

  if (Array.isArray(content.trustPoints) && Array.isArray(draft.trustPoints)) {
    content.trustPoints.forEach((tp: any, idx: number) => {
      if (draft.trustPoints[idx]) {
        draft.trustPoints[idx].title = tp.title || '';
        draft.trustPoints[idx].description = tp.description || '';
      }
    });
  }

  if (content.about) {
    if (content.about.badge !== undefined) draft.about.badge = content.about.badge;
    if (content.about.title !== undefined) draft.about.title = content.about.title;
    if (content.about.subtitle !== undefined) draft.about.subtitle = content.about.subtitle;
    if (Array.isArray(content.about.text)) draft.about.text = [...content.about.text];
    if (Array.isArray(content.about.highlights)) draft.about.highlights = [...content.about.highlights];
  }

  if (content.services) {
    if (content.services.badge !== undefined) (draft.services as any).badge = content.services.badge;
    if (content.services.title !== undefined) (draft.services as any).title = content.services.title;
    if (content.services.subtitle !== undefined) (draft.services as any).subtitle = content.services.subtitle;

    if (Array.isArray(content.services.items) && Array.isArray(draft.services.items)) {
      content.services.items.forEach((item: any, idx: number) => {
        if (draft.services.items[idx]) {
          draft.services.items[idx].title = item.title || '';
          draft.services.items[idx].description = item.description || '';
          if (item.price !== undefined) draft.services.items[idx].price = item.price;
          if (item.category !== undefined) draft.services.items[idx].category = item.category;
          if (item.buttonText !== undefined) draft.services.items[idx].buttonText = item.buttonText;
        }
      });
    }
  }

  if (content.specialSection) {
    if (content.specialSection.badge !== undefined) (draft.specialSection as any).badge = content.specialSection.badge;
    if (content.specialSection.title !== undefined) draft.specialSection.title = content.specialSection.title;
    if (content.specialSection.subtitle !== undefined) draft.specialSection.subtitle = content.specialSection.subtitle;

    const steps = draft.specialSection?.steps;
    if (Array.isArray(content.specialSection.steps) && Array.isArray(steps)) {
      content.specialSection.steps.forEach((st: any, idx: number) => {
        if (steps[idx]) {
          steps[idx].title = st.title || '';
          steps[idx].description = st.description || '';
        }
      });
    }
  }

  if (content.gallery) {
    if (content.gallery.badge !== undefined) (draft.gallery as any).badge = content.gallery.badge;
    if (content.gallery.title !== undefined) (draft.gallery as any).title = content.gallery.title;
    if (content.gallery.subtitle !== undefined) (draft.gallery as any).subtitle = content.gallery.subtitle;
  }

  if (content.reviews) {
    if (content.reviews.badge !== undefined) (draft.reviews as any).badge = content.reviews.badge;
    if (content.reviews.title !== undefined) (draft.reviews as any).title = content.reviews.title;
    if (content.reviews.subtitle !== undefined) (draft.reviews as any).subtitle = content.reviews.subtitle;

    const revItems = draft.reviews?.items;
    if (Array.isArray(content.reviews.items) && Array.isArray(revItems)) {
      content.reviews.items.forEach((rev: any, idx: number) => {
        if (revItems[idx]) {
          revItems[idx].name = rev.name || '';
          revItems[idx].role = rev.role || '';
          revItems[idx].comment = rev.comment || '';
        }
      });
    }
  }

  if (content.contact) {
    if (content.contact.badge !== undefined) (draft.contact as any).badge = content.contact.badge;
    if (content.contact.title !== undefined) (draft.contact as any).title = content.contact.title;
    if (content.contact.subtitle !== undefined) (draft.contact as any).subtitle = content.contact.subtitle;
    if (content.contact.address !== undefined) draft.contact.address = content.contact.address;
  }

  if (content.features?.announcementText && draft.features) {
    draft.features.announcementText = content.features.announcementText;
  }
}

/**
 * Returns a cloned SiteConfig with effective localized texts for the given language
 */
export function getEffectiveConfig(config: SiteConfig, lang: LanguageCode = 'tr'): SiteConfig {
  const effective = JSON.parse(JSON.stringify(config)) as SiteConfig;
  effective.language = lang;
  syncEffectiveConfig(effective, lang);
  return effective;
}

/**
 * Switches full site language between Turkish ('tr') and English ('en')
 */
export function translateConfigToLanguage(draft: SiteConfig, lang: 'tr' | 'en') {
  draft.language = lang;
  syncEffectiveConfig(draft, lang);
  return draft;
}
