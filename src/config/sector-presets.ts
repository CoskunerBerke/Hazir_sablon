import { SiteConfig } from '@/types/site-config';

export interface SectorPreset {
  id: string;
  name: string;
  description: string;
  iconName: string;
  primaryColor: string;
  presetStyle: 'minimal' | 'luxury' | 'warm' | 'editorial' | 'bold' | 'corporate';
  specialSectionType: 'steps' | 'menu' | 'before_after' | 'packages' | 'faq';
  heroTitle: string;
  heroDescription: string;
  services: Array<{
    title: string;
    description: string;
    price: string;
    category: string;
  }>;
}

export const SECTOR_PRESETS: SectorPreset[] = [
  {
    id: 'cafe',
    name: 'Kafe & Fırın',
    description: 'Kahve çeşitleri, tatlılar ve taze kahvaltılık sunan mekanlar için',
    iconName: 'Coffee',
    primaryColor: '#D97706', // Warm Amber
    presetStyle: 'warm',
    specialSectionType: 'menu',
    heroTitle: 'Taze Çekilmiş Kahve Kokusu ve Nefis Lezzetler',
    heroDescription: 'Özel nitelikli kahve çekirdeklerimiz, günlük taze tatlılarımız ve huzurlu atmosferimizle güne keyifli bir mola verin.',
    services: [
      {
        title: 'Nitelikli Espresso & Filtre Kahve',
        description: 'Taze kavrulmuş yöresel çekirdeklerden hazırlanan özel demleme kahveler.',
        price: '₺90',
        category: 'Kahveler',
      },
      {
        title: 'El Yapımı Sanat Tatlıları',
        description: 'San Sebastian cheesecake, kruvasan ve günlük taze pastalar.',
        price: '₺160',
        category: 'Tatlılar',
      },
      {
        title: 'Serpme Kahvaltı & Sandviçler',
        description: 'Taze fırın ekmekleri ve doğal kahvaltılık çeşitleri.',
        price: '₺240',
        category: 'Kahvaltı',
      },
    ],
  },
  {
    id: 'restaurant',
    name: 'Restoran & Yemek',
    description: 'Leziz menüler, akşam yemeği ve gurme lezzet sunan restoranlar',
    iconName: 'Utensils',
    primaryColor: '#DC2626', // Crimson Red
    presetStyle: 'editorial',
    specialSectionType: 'menu',
    heroTitle: 'Unutulmaz Bir Mutfak Deneyimi ve Şef Restoranı',
    heroDescription: 'Özenle seçilmiş taze malzemeler, lezzet ustası şeflerimiz ve nezih bir atmosferde gurme akşam yemekleri.',
    services: [
      {
        title: 'Şefin Özel Izgara Tabağı',
        description: 'Dinlendirilmiş etler, özel soslar ve fırınlanmış sebzeler eşliğinde.',
        price: '₺450',
        category: 'Ana Yemekler',
      },
      {
        title: 'Deniz Ürünleri Risotto',
        description: 'Taze karides, kalamar ve parmesan peynirli kremsi İtalyan risottosu.',
        price: '₺390',
        category: 'Deniz Ürünleri',
      },
    ],
  },
  {
    id: 'beauty',
    name: 'Güzellik & Estetik',
    description: 'Cilt bakımı, lazer epilasyon ve kişisel bakım merkezleri',
    iconName: 'Sparkles',
    primaryColor: '#7C3AED', // Violet / Purple
    presetStyle: 'luxury',
    specialSectionType: 'steps',
    heroTitle: 'Doğal Güzelliğinizi Yenilikçi Dokunuşlarla Öne Çıkarın',
    heroDescription: 'Uzman kadromuz, modern cihazlarımız ve kişiye özel cilt bakım çözümlerimizle cildinize özen gösteriyoruz.',
    services: [
      {
        title: 'Medikal Cilt Bakımı',
        description: 'Derinlemesine gözenek temizliği, nem yüklemesi ve vitamin serum uygulaması.',
        price: '₺1.200',
        category: 'Cilt Bakımı',
      },
      {
        title: 'Buz Başlıklı Lazer Epilasyon',
        description: 'Ağrısız, konforlu ve yeni nesil buz başlık teknolojisi.',
        price: '₺800',
        category: 'Epilasyon',
      },
    ],
  },
  {
    id: 'clinic',
    name: 'Klinik & Sağlık',
    description: 'Diş klinikleri, uzman doktor muayenehaneleri ve danışmanlık',
    iconName: 'Stethoscope',
    primaryColor: '#0284C7', // Medical Blue
    presetStyle: 'corporate',
    specialSectionType: 'steps',
    heroTitle: 'Gülüşünüz ve Sağlığınız İçin Uzman Dokunuşlar',
    heroDescription: 'Steril clinic ortamımız, son teknoloji teşhis imkanlarımız ve tecrübeli hekim kadromuzla yanınızdayız.',
    services: [
      {
        title: 'Ağız ve Diş Muayenesi',
        description: 'Detaylı dijital röntgen ve kişiye özel tedavi planlaması.',
        price: '₺600',
        category: 'Teşhis',
      },
      {
        title: 'Estetik Diş Beyazlatma',
        description: 'Güvenli, hızlı ve uzun süre kalıcı beyazlatma seansı.',
        price: '₺2.500',
        category: 'Estetik',
      },
    ],
  },
  {
    id: 'detailing',
    name: 'Oto Yıkama & Detailing',
    description: 'Seramik kaplama, araç yıkama ve pasta cila merkezleri',
    iconName: 'Car',
    primaryColor: '#2563EB', // Electric Blue
    presetStyle: 'bold',
    specialSectionType: 'before_after',
    heroTitle: 'Aracınız İçin İlk Günkü Parlaklık ve Üstün Koruma',
    heroDescription: 'Profesyonel seramik kaplama, boya koruma, detaylı iç temizlik ve pasta cila uygulamaları.',
    services: [
      {
        title: '9H Sertlikte Seramik Kaplama',
        description: 'Çizilmelere ve güneş ışınlarına karşı 3 yıl garantili araç koruması.',
        price: '₺4.500',
        category: 'Koruma',
      },
      {
        title: 'Detaylı İç Antibakteriyel Temizlik',
        description: 'Koltuk, tavan ve taban halılarının buharlı hijyenik yıkanması.',
        price: '₺1.500',
        category: 'Temizlik',
      },
    ],
  },
  {
    id: 'consulting',
    name: 'Danışmanlık & Ajans',
    description: 'Kurumsal danışmanlık, dijital ajanslar, avukat ve mali müşavirler',
    iconName: 'Briefcase',
    primaryColor: '#0F172A', // Slate / Dark Corporate
    presetStyle: 'corporate',
    specialSectionType: 'packages',
    heroTitle: 'İşletmenizi Büyütecek Stratejik ve Güvenilir Danışmanlık',
    heroDescription: 'Sektörel tecrübemiz ve veriye dayalı stratejilerimizle işinizi geleceğe emin adımlarla taşıyın.',
    services: [
      {
        title: 'Kurumsal Strateji Danışmanlığı',
        description: 'Büyüme hedefleri, operasyonel verimlilik ve finansal analiz desteği.',
        price: 'İletişime Geçin',
        category: 'Strateji',
      },
    ],
  },
  {
    id: 'shop',
    name: 'Mağaza & Butik',
    description: 'Giyim, aksesuar, hediye ve yerel konsept butikler',
    iconName: 'ShoppingBag',
    primaryColor: '#EC4899', // Pink Accent
    presetStyle: 'minimal',
    specialSectionType: 'steps',
    heroTitle: 'Tarzınızı Yansıtan Özel Tasarım Koleksiyonlar',
    heroDescription: 'Özenle seçilmiş yeni sezon kıyafetler, benzersiz aksesuarlar ve kişisel stil önerileri.',
    services: [
      {
        title: 'Kişisel Stil Danışmanlığı',
        description: 'Vücut tipinize ve kombin ihtiyacınıza uygun mağaza içi stil desteği.',
        price: 'Ücretsiz',
        category: 'Stil',
      },
    ],
  },
  {
    id: 'art',
    name: 'Sanat & Atölye',
    description: 'Seramik, resim, müzik ve hobi workshop alanları',
    iconName: 'Palette',
    primaryColor: '#EAB308', // Warm Yellow
    presetStyle: 'editorial',
    specialSectionType: 'steps',
    heroTitle: 'Yaratıcılığınızı Keşfedeceğiniz İlham Dolu Atölyeler',
    heroDescription: 'Seramik yapımı, yağlı boya ve el sanatları haftalık grup veya birebir özel dersleri.',
    services: [
      {
        title: 'Hafta Sonu Seramik Workshop',
        description: 'Çamur şekillendirme, fırınlama ve renklendirme temelleri (Tüm malzemeler dahil).',
        price: '₺750',
        category: 'Atölye',
      },
    ],
  },
  {
    id: 'other',
    name: 'Diğer Hizmet Sektörleri',
    description: 'Genel hizmetler, usta, özel ders ve serbest meslek sahipleri',
    iconName: 'Building',
    primaryColor: '#3B82F6',
    presetStyle: 'minimal',
    specialSectionType: 'steps',
    heroTitle: 'İşletmenizi Müşterilerinize Etkili Biçimde Tanıtın',
    heroDescription: 'Sunduğunuz hizmetleri, iletişim bilgilerinizi ve referanslarınızı tek tıkla paylaşın.',
    services: [
      {
        title: 'Özel Danışmanlık ve Hizmet',
        description: 'İhtiyacınıza uygun kişiselleştirilmiş profesyonel destek.',
        price: '₺500',
        category: 'Genel',
      },
    ],
  },
];

export function applySectorPreset(config: SiteConfig, sectorId: string): SiteConfig {
  const preset = SECTOR_PRESETS.find((p) => p.id === sectorId);
  if (!preset) return config;

  return {
    ...config,
    business: {
      ...config.business,
      industry: preset.name,
      tagline: preset.heroTitle,
      description: preset.heroDescription,
    },
    theme: {
      ...config.theme,
      preset: preset.presetStyle,
      colors: {
        ...config.theme.colors,
        primary: preset.primaryColor,
      },
    },
    hero: {
      ...config.hero,
      title: preset.heroTitle,
      description: preset.heroDescription,
    },
    services: {
      ...config.services,
      items: preset.services.map((s, idx) => ({
        id: `service-preset-${idx + 1}`,
        title: s.title,
        description: s.description,
        price: s.price,
        category: s.category,
        iconName: 'Sparkles',
      })),
    },
    specialSection: {
      ...config.specialSection,
      type: preset.specialSectionType,
    },
  };
}
