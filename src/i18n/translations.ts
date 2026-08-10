export type Locale = 'tr' | 'en';

export interface Translations {
  // Navigation & Header
  nav: {
    about: string;
    services: string;
    special: string;
    gallery: string;
    reviews: string;
    contact: string;
    customise: string;
    publishedView: string;
  };
  // Common UI & CTAs
  ui: {
    callUs: string;
    whatsappUs: string;
    learnMore: string;
    contactUs: string;
    exploreServices: string;
    hours: string;
    address: string;
    email: string;
    phone: string;
    closed: string;
    open: string;
    editingSection: string;
    uploadPhoto: string;
    uploadLogo: string;
    heroImage: string;
    aboutImage: string;
    galleryImage: string;
    serviceImage: string;
    placeholderBadge: string;
    popular: string;
    starter: string;
    premium: string;
    allRightsReserved: string;
    demoBanner: string;
  };
  // Section Headers
  sections: {
    heroBadge: string;
    trustTitle: string;
    aboutBadge: string;
    aboutTitle: string;
    aboutSubtitle: string;
    servicesBadge: string;
    servicesTitle: string;
    servicesSubtitle: string;
    specialBadge: string;
    specialTitle: string;
    specialSubtitle: string;
    galleryBadge: string;
    galleryTitle: string;
    gallerySubtitle: string;
    reviewsBadge: string;
    reviewsTitle: string;
    reviewsSubtitle: string;
    contactBadge: string;
    contactTitle: string;
    contactSubtitle: string;
    hoursTitle: string;
  };
}

export const TRANSLATIONS: Record<Locale, Translations> = {
  tr: {
    nav: {
      about: 'Hakkımızda',
      services: 'Hizmetler',
      special: 'Süreç',
      gallery: 'Galeri',
      reviews: 'Yorumlar',
      contact: 'İletişim',
      customise: 'Sitenizi Özelleştirin',
      publishedView: 'Yayın Görünümü',
    },
    ui: {
      callUs: 'Bizi Arayın',
      whatsappUs: "WhatsApp'tan Yazın",
      learnMore: 'Bilgi Al',
      contactUs: 'Bize Ulaşın',
      exploreServices: 'Hizmetlerimizi İnceleyin',
      hours: 'Çalışma Saatleri',
      address: 'Adres',
      email: 'E-posta',
      phone: 'Telefon',
      closed: 'Kapalı',
      open: 'Açık',
      editingSection: 'Düzenlenen Bölüm',
      uploadPhoto: 'Fotoğrafınızı yükleyin',
      uploadLogo: 'Logonuzu yükleyin',
      heroImage: 'Hero Görseli',
      aboutImage: 'Hakkımızda Görseli',
      galleryImage: 'Galeri Görseli',
      serviceImage: 'Hizmet Görseli',
      placeholderBadge: 'Görsel Yükleyin',
      popular: 'Popüler Paket',
      starter: 'Temel Paket',
      premium: 'Premium Paket',
      allRightsReserved: 'Tüm hakları saklıdır.',
      demoBanner: '🎉 Yeni Müşterilerimize Özel Ön Danışmanlık Hediye!',
    },
    sections: {
      heroBadge: '✨ Hoş Geldiniz',
      trustTitle: 'Güven Rozetleri',
      aboutBadge: 'Hakkımızda',
      aboutTitle: 'Sektördeki Tecrübemizle Değer Yaratıyoruz',
      aboutSubtitle: 'Yıllara dayanan birikimimiz ve tutkulu ekibimizle hizmetinizdeyiz.',
      servicesBadge: 'Hizmetler & Ürünler',
      servicesTitle: 'Sizler İçin Sunduğumuz Profesyonel Çözümler',
      servicesSubtitle: 'İhtiyacınıza uygun kaliteli ve özelleştirilebilir hizmet paketlerimiz.',
      specialBadge: 'Hizmet Süreci',
      specialTitle: 'Çalışma ve Hizmet Sürecimiz',
      specialSubtitle: 'Müşteri talebinden başarıya ulaşana kadar 4 kolay adım',
      galleryBadge: 'Galeri',
      galleryTitle: 'Atmosferimiz ve Çalışmalarımız',
      gallerySubtitle: 'İşletmemizden ve gerçekleştirdiğimiz çalışmalardan karelere göz atın.',
      reviewsBadge: 'Google Müşteri Yorumları',
      reviewsTitle: 'Bizi Tercih Edenlerin Gerçek Deneyimleri',
      reviewsSubtitle: 'Google Haritalar üzerinden paylaşılan doğrulanmış danışan ve müşteri geri bildirimleri.',
      contactBadge: 'İletişim & Harita',
      contactTitle: 'Bizimle İletişime Geçin',
      contactSubtitle: 'Sorularınız, randevularınız ve bilgi talepleriniz için bize ulaşın.',
      hoursTitle: 'Çalışma Saatlerimiz',
    },
  },

  en: {
    nav: {
      about: 'About Us',
      services: 'Services',
      special: 'Process',
      gallery: 'Gallery',
      reviews: 'Reviews',
      contact: 'Contact',
      customise: 'Customize Your Site',
      publishedView: 'Published View',
    },
    ui: {
      callUs: 'Call Us',
      whatsappUs: 'Chat on WhatsApp',
      learnMore: 'Learn More',
      contactUs: 'Contact Us',
      exploreServices: 'Explore Our Services',
      hours: 'Working Hours',
      address: 'Address',
      email: 'Email',
      phone: 'Phone',
      closed: 'Closed',
      open: 'Open',
      editingSection: 'Editing Section',
      uploadPhoto: 'Upload your photo',
      uploadLogo: 'Upload your logo',
      heroImage: 'Hero Image',
      aboutImage: 'About Image',
      galleryImage: 'Gallery Image',
      serviceImage: 'Service Image',
      placeholderBadge: 'Upload Image',
      popular: 'Popular Choice',
      starter: 'Starter Package',
      premium: 'Premium Package',
      allRightsReserved: 'All rights reserved.',
      demoBanner: '🎉 Special Complimentary Consultation for New Clients!',
    },
    sections: {
      heroBadge: '✨ Welcome to Our Studio',
      trustTitle: 'Trust Badges',
      aboutBadge: 'About Us',
      aboutTitle: 'Delivering Excellence & Creating Lasting Value',
      aboutSubtitle: 'Combining passion, expertise, and modern standards to serve you best.',
      servicesBadge: 'Services & Products',
      servicesTitle: 'Professional Solutions Tailored for You',
      servicesSubtitle: 'High quality offerings designed to exceed your expectations.',
      specialBadge: 'Our Process',
      specialTitle: 'Our Working & Service Process',
      specialSubtitle: '4 simple steps from initial consultation to complete satisfaction',
      galleryBadge: 'Gallery',
      galleryTitle: 'Our Atmosphere & Recent Work',
      gallerySubtitle: 'Take a look inside our facilities and showcased client results.',
      reviewsBadge: 'Google Customer Reviews',
      reviewsTitle: 'Real Experiences of Our Valued Clients',
      reviewsSubtitle: 'Verified feedback shared by clients on Google Maps.',
      contactBadge: 'Contact & Location',
      contactTitle: 'Get in Touch With Us',
      contactSubtitle: 'Reach out for inquiries, appointments, or consultation requests.',
      hoursTitle: 'Opening Hours',
    },
  },
};

/**
 * Type-safe translation getter
 */
export function t(keyPath: string, locale: Locale = 'tr'): string {
  const keys = keyPath.split('.');
  let current: any = TRANSLATIONS[locale] || TRANSLATIONS['tr'];

  for (const k of keys) {
    if (current && typeof current === 'object' && k in current) {
      current = current[k];
    } else {
      // Fallback to Turkish if key is missing in active locale
      let fallback: any = TRANSLATIONS['tr'];
      for (const fk of keys) {
        if (fallback && typeof fallback === 'object' && fk in fallback) {
          fallback = fallback[fk];
        } else {
          return keyPath;
        }
      }
      return typeof fallback === 'string' ? fallback : keyPath;
    }
  }

  return typeof current === 'string' ? current : keyPath;
}
