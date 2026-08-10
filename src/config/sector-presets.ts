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
  reviews: Array<{
    name: string;
    role: string;
    comment: string;
    date: string;
    rating: number;
    source: string;
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
    reviews: [
      {
        name: 'Ayşe Korkmaz',
        role: 'Yerel Rehber',
        comment: 'Kahveleri gerçekten çok kaliteli, özellikle V60 demleme kahvelerini mutlaka deneyin. Tatlıları da günlük taze yapılıyor.',
        date: '2 hafta önce',
        rating: 5,
        source: 'Google Haritalar',
      },
      {
        name: 'Burak Çelik',
        role: 'Doğrulanmış Müşteri',
        comment: 'Çalışma ortamı olarak da harika, wifi hızlı ve prizler her masada mevcut. Kahvaltı tabağı leziz.',
        date: '1 hafta önce',
        rating: 5,
        source: 'Google Haritalar',
      },
      {
        name: 'Zeynep Aydın',
        role: 'Müşteri',
        comment: 'Kruvasan ve San Sebastian cheesecake için özellikle geliyoruz. Personel çok ilgili ve güler yüzlü.',
        date: '3 hafta önce',
        rating: 5,
        source: 'Google Haritalar',
      },
      {
        name: 'Murat Öztürk',
        role: 'Yerel Rehber',
        comment: 'Şehirdeki en iyi üçüncü dalga kahveci diyebilirim. Mekan temiz, atmosfer huzurlu.',
        date: '1 ay önce',
        rating: 5,
        source: 'Google Haritalar',
      },
      {
        name: 'Deniz Kara',
        role: 'Müşteri',
        comment: 'Her sabah işe gitmeden önce burada filtre kahvemi alıyorum. Kalite hiç düşmüyor, bravo!',
        date: '2 hafta önce',
        rating: 4,
        source: 'Google Haritalar',
      },
      {
        name: 'Selin Yıldız',
        role: 'Doğrulanmış Müşteri',
        comment: 'Arkadaşlarla buluşma noktamız oldu artık. Çay ve limonata çeşitleri de mükemmel.',
        date: '1 ay önce',
        rating: 5,
        source: 'Google Haritalar',
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
    reviews: [
      {
        name: 'Hakan Demir',
        role: 'Yerel Rehber',
        comment: 'Izgara tabağı ve risotto mükemmeldi. Etler mükemmel pişirilmiş, sunumu da çok şık.',
        date: '1 hafta önce',
        rating: 5,
        source: 'Google Haritalar',
      },
      {
        name: 'Elif Aksoy',
        role: 'Doğrulanmış Müşteri',
        comment: 'Yıldönümümüzü burada kutladık, mum ışığında akşam yemeği harikaydı. Şef bizzat gelip önerilerde bulundu.',
        date: '2 hafta önce',
        rating: 5,
        source: 'Google Haritalar',
      },
      {
        name: 'Ali Yılmaz',
        role: 'Müşteri',
        comment: 'Menü çeşitliliği ve fiyat-performans dengesi gayet iyi. Porsiyon boyutları da tatmin edici.',
        date: '3 hafta önce',
        rating: 5,
        source: 'Google Haritalar',
      },
      {
        name: 'Canan Türk',
        role: 'Yerel Rehber',
        comment: 'Tatlıları ev yapımı ve çok lezzetli. Garsonlar bilgili, şarap önerileri isabetli.',
        date: '1 ay önce',
        rating: 5,
        source: 'Google Haritalar',
      },
      {
        name: 'Emre Şahin',
        role: 'Doğrulanmış Müşteri',
        comment: 'İş yemekleri için ideal bir mekan. Sessiz, şık ve servis çok hızlı.',
        date: '2 hafta önce',
        rating: 4,
        source: 'Google Haritalar',
      },
      {
        name: 'Fatma Güneş',
        role: 'Müşteri',
        comment: 'Vejetaryen seçenekleri de düşünmeleri harika. Mantar risottosu favorim oldu.',
        date: '1 ay önce',
        rating: 5,
        source: 'Google Haritalar',
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
    reviews: [
      {
        name: 'Gamze Kılıç',
        role: 'Yerel Rehber',
        comment: 'Medikal cilt bakımı için geldim, sonuçlardan çok memnunum. Cildim 2 ton aydınlandı.',
        date: '1 hafta önce',
        rating: 5,
        source: 'Google Haritalar',
      },
      {
        name: 'Derya Aktaş',
        role: 'Doğrulanmış Müşteri',
        comment: 'Lazer epilasyon için 4. seansımdayım, ağrısız ve sonuç mükemmel. Çok profesyonel ekip.',
        date: '2 hafta önce',
        rating: 5,
        source: 'Google Haritalar',
      },
      {
        name: 'Büşra Yılmaz',
        role: 'Müşteri',
        comment: 'Kaş kontürü için geldim, çok doğal durdu. Uzmanlar gerçekten işini biliyor.',
        date: '3 hafta önce',
        rating: 5,
        source: 'Google Haritalar',
      },
      {
        name: 'Aylin Polat',
        role: 'Yerel Rehber',
        comment: 'Ortam steril ve konforlu. Kullandıkları ürünler kaliteli, markalarını da gösteriyorlar.',
        date: '1 ay önce',
        rating: 5,
        source: 'Google Haritalar',
      },
      {
        name: 'Merve Arslan',
        role: 'Doğrulanmış Müşteri',
        comment: 'Düğün öncesi bakım paketini aldım, harika bir deneyimdi. Gelin hamamı muhteşemdi.',
        date: '2 hafta önce',
        rating: 5,
        source: 'Google Haritalar',
      },
      {
        name: 'Nihan Koç',
        role: 'Müşteri',
        comment: 'Fiyatlar piyasaya göre makul ve sonuçlar gözle görülür. Tekrar geleceğim kesinlikle.',
        date: '1 ay önce',
        rating: 4,
        source: 'Google Haritalar',
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
    heroDescription: 'Steril klinik ortamımız, son teknoloji teşhis imkanlarımız ve tecrübeli hekim kadromuzla yanınızdayız.',
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
    reviews: [
      {
        name: 'Oğuz Kaya',
        role: 'Yerel Rehber',
        comment: 'Diş beyazlatma için geldim, sonuçlar harika. Acısız ve hızlı bir işlemdi.',
        date: '1 hafta önce',
        rating: 5,
        source: 'Google Haritalar',
      },
      {
        name: 'Sibel Erdem',
        role: 'Doğrulanmış Müşteri',
        comment: 'Korku ve endişemle geldim ama doktor çok sakinleştirici ve profesyoneldi. Artık düzenli geliyorum.',
        date: '2 hafta önce',
        rating: 5,
        source: 'Google Haritalar',
      },
      {
        name: 'Kemal Acar',
        role: 'Müşteri',
        comment: 'İmplant tedavisi için geldim, süreç baştan sona şeffaf anlatıldı. Sonuçtan çok memnunum.',
        date: '3 hafta önce',
        rating: 5,
        source: 'Google Haritalar',
      },
      {
        name: 'Zehra Bulut',
        role: 'Yerel Rehber',
        comment: 'Çocuğumu ilk diş kontrolüne getirdim, çocuk dostu yaklaşımları harikaydı. Korkusu geçti.',
        date: '1 ay önce',
        rating: 5,
        source: 'Google Haritalar',
      },
      {
        name: 'Volkan Çetin',
        role: 'Doğrulanmış Müşteri',
        comment: 'Zirkonyum kaplama yaptırdım, son derece doğal bir görünüm elde ettim. Teşekkürler!',
        date: '2 hafta önce',
        rating: 5,
        source: 'Google Haritalar',
      },
      {
        name: 'Esra Tan',
        role: 'Müşteri',
        comment: 'Randevu saatine birebir uyuldu, bekleme süresi sıfır. Modern ve hijyenik bir klinik.',
        date: '1 ay önce',
        rating: 4,
        source: 'Google Haritalar',
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
    reviews: [
      {
        name: 'Serkan Öz',
        role: 'Yerel Rehber',
        comment: 'Seramik kaplama yaptırdım, araç showroom gibi parladı. 3 aydır su itici özelliği devam ediyor.',
        date: '1 hafta önce',
        rating: 5,
        source: 'Google Haritalar',
      },
      {
        name: 'Tolga Demir',
        role: 'Doğrulanmış Müşteri',
        comment: 'İç temizlik çok detaylı yapıldı, yeni araç kokusu geri geldi. Beklentimi aştı.',
        date: '2 hafta önce',
        rating: 5,
        source: 'Google Haritalar',
      },
      {
        name: 'Cem Aydın',
        role: 'Müşteri',
        comment: 'Pasta cila uygulaması muhteşemdi, çizikler kayboldu. Profesyonel ekipman kullanıyorlar.',
        date: '3 hafta önce',
        rating: 5,
        source: 'Google Haritalar',
      },
      {
        name: 'Uğur Kılıç',
        role: 'Yerel Rehber',
        comment: 'Fiyat-performans olarak en iyisi. Cam filmi uygulaması da çok düzgün yapıldı.',
        date: '1 ay önce',
        rating: 5,
        source: 'Google Haritalar',
      },
      {
        name: 'Baran Avcı',
        role: 'Doğrulanmış Müşteri',
        comment: 'Motor yıkama dahil komple bakım aldım, her köşe tertemiz. Randevu sistemi de çok pratik.',
        date: '2 hafta önce',
        rating: 4,
        source: 'Google Haritalar',
      },
      {
        name: 'Yusuf Taş',
        role: 'Müşteri',
        comment: 'Jant temizliği ve lastik parlatma dahil her şey düşünülmüş. Kesinlikle tavsiye ederim.',
        date: '1 ay önce',
        rating: 5,
        source: 'Google Haritalar',
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
    reviews: [
      {
        name: 'Ahmet Sarı',
        role: 'Yerel Rehber',
        comment: 'Şirketimizin dijital dönüşüm sürecini yönettiler, sonuçlar somut ve ölçülebilir.',
        date: '1 hafta önce',
        rating: 5,
        source: 'Google Haritalar',
      },
      {
        name: 'Pelin Ak',
        role: 'Doğrulanmış Müşteri',
        comment: 'Vergi planlaması konusunda çok yardımcı oldular. Mali müşavirlik hizmetleri profesyonel.',
        date: '2 hafta önce',
        rating: 5,
        source: 'Google Haritalar',
      },
      {
        name: 'Arda Koç',
        role: 'Müşteri',
        comment: 'İş planı hazırlamada ve yatırımcı sunumlarında büyük destek aldık. Teşekkürler ekibe.',
        date: '3 hafta önce',
        rating: 5,
        source: 'Google Haritalar',
      },
      {
        name: 'Gülşen Polat',
        role: 'Yerel Rehber',
        comment: 'Hukuki danışmanlık için başvurduk, süreç çok şeffaf ve sonuç odaklı yürütüldü.',
        date: '1 ay önce',
        rating: 5,
        source: 'Google Haritalar',
      },
      {
        name: 'Barış Yıldız',
        role: 'Doğrulanmış Müşteri',
        comment: 'Marka tescili ve sözleşme hazırlığında kusursuz bir iş çıkardılar.',
        date: '2 hafta önce',
        rating: 4,
        source: 'Google Haritalar',
      },
      {
        name: 'Neslihan Aydoğdu',
        role: 'Müşteri',
        comment: 'Start-up danışmanlığı aldık, pazar analizi ve strateji haritası çok faydalı oldu.',
        date: '1 ay önce',
        rating: 5,
        source: 'Google Haritalar',
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
    reviews: [
      {
        name: 'İrem Çelik',
        role: 'Yerel Rehber',
        comment: 'Koleksiyon çok şık ve özgün, başka yerde bulamayacağınız parçalar var. Stil danışmanları harika.',
        date: '1 hafta önce',
        rating: 5,
        source: 'Google Haritalar',
      },
      {
        name: 'Tuğçe Demir',
        role: 'Doğrulanmış Müşteri',
        comment: 'Hediye almak için geldiğimde mükemmel önerilerde bulundular. Paketleme de çok özenli.',
        date: '2 hafta önce',
        rating: 5,
        source: 'Google Haritalar',
      },
      {
        name: 'Berk Aydın',
        role: 'Müşteri',
        comment: 'Erkek giyim bölümü için özel kombin önerisi aldım, alışverişim çok verimli geçti.',
        date: '3 hafta önce',
        rating: 5,
        source: 'Google Haritalar',
      },
      {
        name: 'Seda Korkmaz',
        role: 'Yerel Rehber',
        comment: 'Ürün kalitesi çok iyi, fiyatlar da markaya göre uygun. Denemeler rahat.',
        date: '1 ay önce',
        rating: 5,
        source: 'Google Haritalar',
      },
      {
        name: 'Kadir Şen',
        role: 'Doğrulanmış Müşteri',
        comment: 'Online sipariş verdim, kargo hızlıydı ve ürün tam beklediğim gibiydi.',
        date: '2 hafta önce',
        rating: 4,
        source: 'Google Haritalar',
      },
      {
        name: 'Aslı Tan',
        role: 'Müşteri',
        comment: 'Aksesuar çeşitliliği harika, küpelerden kolyeye kadar her şeyi burada buluyorum.',
        date: '1 ay önce',
        rating: 5,
        source: 'Google Haritalar',
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
    reviews: [
      {
        name: 'Duygu Aslan',
        role: 'Yerel Rehber',
        comment: "Seramik workshop'u inanılmaz keyifliydi! Eğitmen çok sabırlı ve ilham verici.",
        date: '1 hafta önce',
        rating: 5,
        source: 'Google Haritalar',
      },
      {
        name: 'Onur Kaya',
        role: 'Doğrulanmış Müşteri',
        comment: 'Yağlı boya dersine katıldım, hiç deneyimim yoktu ama harika bir tablo çıktı ortaya!',
        date: '2 hafta önce',
        rating: 5,
        source: 'Google Haritalar',
      },
      {
        name: 'Melis Yılmaz',
        role: 'Müşteri',
        comment: 'Çocukları da alabiliyorsunuz, küçük kızım seramik boyamayı çok sevdi. Aile dostu mekan.',
        date: '3 hafta önce',
        rating: 5,
        source: 'Google Haritalar',
      },
      {
        name: 'Kaan Çetin',
        role: 'Yerel Rehber',
        comment: 'Doğum günü etkinliği düzenledik, organizasyon mükemmeldi. Herkes çok eğlendi.',
        date: '1 ay önce',
        rating: 5,
        source: 'Google Haritalar',
      },
      {
        name: 'Burcu Öztürk',
        role: 'Doğrulanmış Müşteri',
        comment: 'Makrome workshop harika bir terapi gibi. Stres atıp yaratıcılığı keşfediyorsunuz.',
        date: '2 hafta önce',
        rating: 5,
        source: 'Google Haritalar',
      },
      {
        name: 'Cenk Demir',
        role: 'Müşteri',
        comment: 'Atölye ortamı çok ilham verici, duvarlar öğrenci eserleriyele dolu. Motivasyon kaynağı.',
        date: '1 ay önce',
        rating: 4,
        source: 'Google Haritalar',
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
    reviews: [
      {
        name: 'Hasan Yılmaz',
        role: 'Yerel Rehber',
        comment: 'Profesyonel ve güvenilir bir hizmet aldım. İletişimleri çok hızlı ve çözüm odaklı.',
        date: '1 hafta önce',
        rating: 5,
        source: 'Google Haritalar',
      },
      {
        name: 'Sevgi Aksoy',
        role: 'Doğrulanmış Müşteri',
        comment: 'Randevu sistemi çok pratik, bekleme süresi minimum. Hizmet kalitesi yüksek.',
        date: '2 hafta önce',
        rating: 5,
        source: 'Google Haritalar',
      },
      {
        name: 'Taner Kara',
        role: 'Müşteri',
        comment: 'Fiyatlar şeffaf ve sürpriz ek ücretler yok. Güvenle çalışabileceğiniz bir yer.',
        date: '3 hafta önce',
        rating: 5,
        source: 'Google Haritalar',
      },
      {
        name: 'Derya Polat',
        role: 'Yerel Rehber',
        comment: 'Uzun süredir aradığım kaliteyi burada buldum. Tekrar tekrar gelirim.',
        date: '1 ay önce',
        rating: 5,
        source: 'Google Haritalar',
      },
      {
        name: 'Erdem Şahin',
        role: 'Doğrulanmış Müşteri',
        comment: 'Evde tamir ve bakım için çağırdım, zamanında geldiler ve işi hızlıca çözdüler.',
        date: '2 hafta önce',
        rating: 4,
        source: 'Google Haritalar',
      },
      {
        name: 'Özge Turan',
        role: 'Müşteri',
        comment: 'Hem kaliteli hem uygun fiyatlı. Çevremdeki herkese tavsiye ediyorum.',
        date: '1 ay önce',
        rating: 5,
        source: 'Google Haritalar',
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
      image: '',
    },
    about: {
      ...config.about,
      image: '',
    },
    services: {
      ...config.services,
      items: preset.services.map((s, idx) => ({
        id: `service-preset-${idx + 1}`,
        title: s.title,
        description: s.description,
        price: s.price,
        category: s.category,
        image: '',
        iconName: 'Sparkles',
      })),
    },
    reviews: {
      ...config.reviews,
      items: preset.reviews.map((r, idx) => ({
        id: `rev-preset-${idx + 1}`,
        name: r.name,
        role: r.role,
        comment: r.comment,
        date: r.date,
        rating: r.rating,
        source: r.source,
      })),
    },
    specialSection: {
      ...config.specialSection,
      type: preset.specialSectionType,
    },
  };
}
