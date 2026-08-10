import { BusinessConfig } from '@/types/business';

/**
 * ============================================================================
 * İŞLETME MERKEZİ APERATİF VE İÇERİK YAPILANDIRMASI (MAIN CONFIG)
 * ============================================================================
 * Bu dosya, web sitesinin TEK VERİ KAYNAĞIDIR.
 * Yeni bir müşteriye uyarlamak için yalnızca bu dosyayı ve public/assets/client/
 * klasöründeki görselleri güncelleyin. JSX bileşenlerine dokunmanıza gerek yoktur.
 */

export const businessConfig: BusinessConfig = {
  // 1. TEMEL İŞLETME BİLGİLERİ
  businessName: 'Aura Studio & Estetik Merkezi',
  shortName: 'Aura Studio',
  industry: 'Güzellik ve Klinik Estetik',
  tagline: 'Doğal Güzelliğinizi Yenilikçi Dokunuşlarla Öne Çıkarın',
  description:
    'Uzman kadromuz, modern teknolojik donanımımız ve kişiye özel bakım çözümlerimizle cildinize ve ruhunuza hak ettiği özeni sunuyoruz.',

  // 2. LOGO VE MARKA GÖRSELLERİ (public/assets/client/ altında)
  logo: '/assets/client/logo.svg', // Dosya yoksa otomatik Monogram gösterilir
  favicon: '/assets/client/favicon.ico',
  logoAlt: 'Aura Studio & Estetik Merkezi Logo',

  // 3. TEMA VE GÖRSEL STİL AYARLARI
  theme: {
    primary: '#7C3AED', // Ana Hex Rengi (Violet / Mor Tonu)
    secondary: '#06B6D4', // İkincil Renk (Turkuaz)
    accent: '#F59E0B', // Vurgu Rengi (Kehribar)
    mode: 'auto', // 'light' | 'dark' | 'auto'
    stylePreset: 'luxury', // 'minimal' | 'luxury' | 'warm' | 'editorial' | 'modern'
  },

  // 4. HEADER NAVİGASYON BAĞLANTILARI
  navigation: [
    { label: 'Hakkımızda', href: '#about' },
    { label: 'Hizmetlerimiz', href: '#services' },
    { label: 'Süreç & Deneyim', href: '#special' },
    { label: 'Galeri', href: '#gallery' },
    { label: 'Yorumlar', href: '#reviews' },
    { label: 'İletişim', href: '#contact' },
  ],

  // 5. HERO BÖLÜMÜ
  hero: {
    badge: '✨ Yeni Sezon Özel Cilt Bakım Paketleri',
    title: 'Işıltınızı Yeniden Keşfedin, Kendinize Hak Ettiğiniz Zamanı Ayırın',
    description:
      'Aura Studio’da profesyonel estetik dokunuşları, kişiselleştirilmiş cilt analizleri ve huzurlu bir atmosfer ile buluşturuyoruz.',
    image: '/assets/client/hero.jpg',
    primaryCta: {
      text: "WhatsApp'tan Randevu Al",
      href: 'https://wa.me/905551234567',
      type: 'whatsapp',
    },
    secondaryCta: {
      text: 'Hizmetlerimizi İnceleyin',
      href: '#services',
      type: 'link',
    },
  },

  // 6. GÜVEN UNSURLARI (3-4 KISA VE GERÇEKÇİ MADDE)
  trustPoints: [
    {
      title: 'Uzman & Sertifikalı Kadro',
      description: 'Alanında eğitimli ve deneyimli estetiysen uzmanları.',
      iconName: 'Award',
    },
    {
      title: 'Kişiye Özel Cilt Analizi',
      description: 'Cildinizin ihtiyacına göre hazırlanan bakım protokolleri.',
      iconName: 'Sparkles',
    },
    {
      title: 'FDA Onaylı Teknolojiler',
      description: 'Hijyenik ve hijyen standartlarına tam uygun ekipmanlar.',
      iconName: 'ShieldCheck',
    },
    {
      title: '%100 Orijinal Ürünler',
      description: 'Dermatolojik olarak test edilmiş birinci sınıf ürün kullanımı.',
      iconName: 'CheckCircle2',
    },
  ],

  // 7. HAKKIMIZDA BÖLÜMÜ
  about: {
    badge: 'Hakkımızda',
    title: 'Zarafet, Uzmanlık ve Yenilikçi Bakım Anlayışı',
    subtitle: 'Senelerdir süregelen tecrübemizle güzellik yolculuğunuzda yanınızdayız.',
    text: [
      'Aura Studio, kişisel bakımı sadece bir rutin değil, yenileyici bir deneyim olarak gören anlayışla kuruldu. En güncel cilt bakım teknolojilerini ve doğal estetik prensiplerini harmanlayarak danışanlarımıza en yüksek kalitede hizmet sunuyoruz.',
      'Sizlere özel hazırlanan bakım odalarımızda, hijyenik ve huzurlu bir ortamda kendinizi evinizde hissetmeniz bizim için önceliklidir.',
    ],
    image: '/assets/client/about.jpg',
    highlights: [
      'Gelişmiş Cilt ve Vücut Analiz Teknolojileri',
      'Steril ve Konforlu Özel Uygulama Odaları',
      'Dürüst, Şeffaf ve Güvenilir Danışmanlık',
    ],
  },

  // 8. HİZMETLER LİSTESİ
  services: [
    {
      id: 'medikal-cilt-bakimi',
      title: 'Medikal Cilt Bakımı',
      description: 'Derinlemesine gözenek temizliği, nem yüklemesi ve vitamin serum uygulamaları ile cildinize anında canlılık kazandırın.',
      price: '₺1.200’den başlayan fiyatlarla',
      duration: '60 Dk',
      category: 'Cilt Bakımı',
      image: '/assets/client/service-01.jpg',
      iconName: 'Sparkles',
      featured: true,
    },
    {
      id: 'lazer-epilasyon',
      title: 'Buz Başlıklı Lazer Epilasyon',
      description: 'Ağrısız ve konforlu yeni nesil buz başlık teknolojisi ile pürüzsüz bir cilt deneyimi yaşayın.',
      price: '₺800 / Seans',
      duration: '45 Dk',
      category: 'Epilasyon',
      image: '/assets/client/service-02.jpg',
      iconName: 'Zap',
      featured: true,
    },
    {
      id: 'anti-aging-prosedur',
      title: 'Anti-Aging & Kolajen Bakımı',
      description: 'İnce kırışıklıkların görünümünü azaltan, cilt elastikiyetini artıran yoğun kolajen ve hyaluronik asit bakımı.',
      price: '₺1.800',
      duration: '75 Dk',
      category: 'Yenilenme',
      image: '/assets/client/service-03.jpg',
      iconName: 'Smile',
      featured: true,
    },
    {
      id: 'regional-slimming',
      title: 'Bölgesel İncelme & Sıkılaşma',
      description: 'Radyofrekans ve kavitasyon teknolojisi ile inatçı yağlara veda edin ve vücut hatlarınızı şekillendirin.',
      price: 'İletişime Geçin',
      duration: '50 Dk',
      category: 'Vücut Şekillendirme',
      image: '/assets/client/service-04.jpg',
      iconName: 'Activity',
      featured: false,
    },
  ],

  // 9. SEKTÖRE ÖZEL İNTERAKTİF BÖLÜM (Klinik / Güzellik İşlem Adımları)
  specialSection: {
    title: 'Bakım & Randevu Sürecimiz',
    subtitle: 'İlk adımınızdan ışıl ışıl sonuçlara kadar 4 kolay adımda deneyiminiz',
    type: 'steps',
    steps: [
      {
        step: '01',
        title: 'Ücretsiz Ön Danışmanlık',
        description: 'İhtiyaçlarınızı anlamak ve cildinizi analiz etmek için uzmanımızla kısa bir görüşme gerçekleştiriyoruz.',
        iconName: 'MessageSquare',
      },
      {
        step: '02',
        title: 'Kişiselleştirilmiş Bakım Planı',
        description: 'Cilt tipinize ve hedeflerinize özel bakım protokolünü ve seans takvimini belirliyoruz.',
        iconName: 'CalendarCheck',
      },
      {
        step: '03',
        title: 'Konforlu Uygulama Seansı',
        description: 'Steril, huzurlu ve premium bakım odalarımızda uygulamanızı keyifle tamamlıyoruz.',
        iconName: 'HeartHandshake',
      },
      {
        step: '04',
        title: 'Ev Bakım Desteği & Takip',
        description: 'Bakım sonrası cildinizi korumanız için günlük ürün tavsiyeleri ve periyodik takiplerimizi sunuyoruz.',
        iconName: 'Sparkles',
      },
    ],
  },

  // 10. GALERİ GÖRSELLERİ
  gallery: [
    {
      id: 'galeri-1',
      title: 'Ferah ve Modern Karşılama Salonumuz',
      category: 'Mekan',
      image: '/assets/client/gallery-01.jpg',
      alt: 'Aura Studio modern ve ferah karşılama salonu',
    },
    {
      id: 'galeri-2',
      title: 'Özel Steril Uygulama Odası',
      category: 'Mekan',
      image: '/assets/client/gallery-02.jpg',
      alt: 'Hijyenik ve steril cilt bakım odası',
    },
    {
      id: 'galeri-3',
      title: 'Medikal Cilt Bakım Uygulaması',
      category: 'Bakım',
      image: '/assets/client/gallery-03.jpg',
      alt: 'Uzman tarafından gerçekleştirilen cilt bakımı seansı',
    },
    {
      id: 'galeri-4',
      title: 'Dermatolojik Test Edilmiş Ürün Grubu',
      category: 'Ürünler',
      image: '/assets/client/gallery-04.jpg',
      alt: 'Kaliteli ve dermatolojik kozmetik bakım ürünleri',
    },
  ],

  // 11. GERÇEK VEYA DOĞRULANMIŞ MÜŞTERİ YORUMLARI
  reviews: [
    {
      id: 'yor-1',
      name: 'Zeynep Y.',
      role: 'Düzenli Danışan',
      comment: 'Cilt bakım seansı sonrası cildimdeki tazeliği hemen hissettim. Çalışanların nezaketi ve ortamın temizliği gerçekten harikaydı.',
      rating: 5,
      date: 'Geçen hafta',
      source: 'Google Haritalar',
    },
    {
      id: 'yor-2',
      name: 'Merve K.',
      role: 'Danışan',
      comment: 'Lazer epilasyon için tercih etmiştim. İlk seanstan itibaren aldığım ilgiden ve sonuçtan çok memnun kaldım, kesinlikle tavsiye ederim.',
      rating: 5,
      date: '2 hafta önce',
      source: 'Google Haritalar',
    },
    {
      id: 'yor-3',
      name: 'Selin B.',
      role: 'Danışan',
      comment: 'Randevu saatlerine tam sadık kalıyorlar. İşini özenle ve güler yüzle yapan harika bir ekip var.',
      rating: 5,
      date: '1 ay önce',
      source: 'Google Haritalar',
    },
  ],

  // 12. İLETİŞİM BİLGİLERİ
  contact: {
    phone: '+90 212 555 00 11',
    phoneFormatted: '0212 555 00 11',
    whatsapp: '905551234567',
    whatsappDefaultMessage: 'Merhaba! Web siteniz üzerinden bilgi ve randevu almak istiyorum.',
    email: 'info@aurastudio.com.tr', // TODO: Gerçek müşteri e-posta adresi yazılacak
    address: 'Nişantaşı Mahallesi, Abdi İpekçi Caddesi No: 42 D: 5, Şişli / İstanbul',
    mapsUrl: 'https://maps.google.com/?q=Nisantasi+Istanbul',
    mapsEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.977926779435!2d28.99042!3d41.04948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab765942478ef%3A0x28637fbbf54d7e98!2zTmnFn2FudGHFn8EsIMWeacWfbGkvxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str',
  },

  // 13. ÇALIŞMA SAATLERİ
  businessHours: [
    { days: 'Pazartesi - Cuma', hours: '09:00 - 19:30', isOpen: true },
    { days: 'Cumartesi', hours: '10:00 - 18:00', isOpen: true },
    { days: 'Pazar', hours: 'Kapalı', isOpen: false },
  ],

  // 14. SOSYAL MEDYA BAĞLANTILARI
  socialLinks: {
    instagram: 'https://instagram.com/aurastudio_example',
    facebook: 'https://facebook.com/aurastudio_example',
    googleMaps: 'https://maps.google.com/?q=Nisantasi+Istanbul',
  },

  // 15. SEO VE PAYLAŞIM AYARLARI
  seo: {
    title: 'Aura Studio & Estetik Merkezi | Premium Cilt Bakımı & Epilasyon',
    description:
      'İstanbul Nişantaşı’nda medikal cilt bakımı, buz başlıklı lazer epilasyon ve anti-aging uygulamaları ile kişiye özel profesyonel güzellik çözümleri.',
    keywords: [
      'cilt bakımı',
      'estetik merkezi',
      'lazer epilasyon',
      'anti aging',
      'güzellik salonu',
      'nişantaşı cilt bakımı',
    ],
    ogImage: '/assets/client/og-image.jpg',
    domain: 'https://aurastudio.com.tr', // TODO: Gerçek domain adı yazılacak
  },

  // 16. ÖZELLİK VE BÖLÜM GÖRÜNÜRLÜK ANAHTARLARI
  features: {
    showReviews: true,
    showGallery: true,
    showMap: true,
    showSpecialSection: true,
    showFloatingWhatsapp: true,
    showPricing: true,
    showPlaceholderBadges: false, // Gelistirme sirasinda placeholder etiketlerini gostermek icin true yapin
  },
};
