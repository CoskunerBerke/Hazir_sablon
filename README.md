# 🚀 Premium & Reusable Single-Page Business Website Template

Farklı sektörlerdeki işletmeler (Kafe, Restoran, Klinik, Güzellik Merkezi, Oto Bakım, Danışmanlık, Ajans vb.) için geliştiren modern, premium, tamamen responsive ve SEO uyumlu tek sayfalık web sitesi şablonu.

---

## ⚡ Yeni Müşteriye 10 Dakikada Uyarlama Rehberi

Bu kod tabanındaki hiçbir işletme bilgisi bileşenlerin (JSX) içine gömülü değildir. Yeni bir müşteri için siteyi hazırlarken **sadece 2 adım** uygulamanız yeterlidir:

### 1. Dosyaları Hazırlayın
`public/assets/client/` klasörüne müşterinizin görsellerini ekleyin:
- `logo.svg` veya `logo.png` (Logo yoksa sistem otomatik şık bir Monogram üretir)
- `hero.jpg` (Manşet görseli)
- `about.jpg` (Hakkımızda görseli)
- `service-01.jpg`, `service-02.jpg`, ... (Hizmet görselleri)
- `gallery-01.jpg`, `gallery-02.jpg`, ... (Galeri fotoğrafları)
- `og-image.jpg` (Sosyal medya paylaşım kartı görseli)

### 2. Tek Konfigürasyon Dosyasını Düzenleyin (`src/config/business.ts`)
Aşağıdaki 8 adımı `src/config/business.ts` dosyasında sırasıyla gerçekleştirin:

1. **Logo Dosyasını Değiştirin**: `logo`, `favicon` ve `logoAlt` yollarını doğrulayın.
2. **Marka Renklerini Girin**: `theme.primary` (Örn: `#7C3AED`), `theme.secondary` ve `theme.stylePreset` (`minimal`, `luxury`, `warm`, `editorial`, `modern`) seçin. Renk uyumu ve buton yazı kontrastı (WCAG AA) otomatik hesaplanır.
3. **İşletme Bilgilerini Düzenleyin**: `businessName`, `shortName`, `industry`, `tagline` ve `description` alanlarını doldurun.
4. **Hizmetleri ve Metinleri Değiştirin**: `services[]` dizisine müşterinin hizmetlerini, açıklamalarını ve isteğe bağlı fiyatlarını ekleyin.
5. **Hero ve Hakkımızda Metinlerini Düzenleyin**: `hero.title`, `hero.description`, `about.text[]` ve `trustPoints[]` alanlarını güncelleyin.
6. **WhatsApp ve Google Maps Bağlantılarını Kontrol Edin**: `contact.phone`, `contact.whatsapp`, `contact.address`, `contact.mapsUrl` ve `contact.mapsEmbedUrl` bilgilerini girin.
7. **SEO Bilgilerini Doldurun**: `seo.title`, `seo.description`, `seo.keywords` ve `seo.domain` alanlarını güncelleyin.
8. **Test ve Build Komutlarını Çalıştırın**:
   ```bash
   npm run lint
   npx tsc --noEmit
   npm run build
   ```

---

## 🛠️ İnteraktif Özel Sektör Bölümleri (`specialSection`)

`industry` ve `specialSection.type` ayarına göre web sitesi dinamik interaktif bir bölüm görüntüler:

- **`type: 'steps'`** (Klinik, Güzellik, Danışmanlık): Adım adım randevu ve hizmet süreci.
- **`type: 'menu'`** (Kafe, Restoran): Kategori sekmeli dinamik menü ve lezzet kartları.
- **`type: 'before_after'`** (Oto Detailing, Estetik, Tadilat): Dokunmatik & fare ile sürüklenebilir Önce/Sonra slider bileşeni.
- **`type: 'packages'`** (Danışmanlık, Ajans, Yazılım): Paket karşılaştırma kartları.

---

## 🚀 Proje Komutları

- **Geliştirme Sunucusu**: `npm run dev`
- **Tip Kontrolü**: `npx tsc --noEmit`
- **Linting**: `npm run lint`
- **Production Build**: `npm run build`
- **Production Sunucusu**: `npm run start`

---

## 📁 Klasör Mimarisi

```text
src/
  app/
    globals.css        # CSS değişkenleri, tema presetleri & animasyonlar
    layout.tsx         # Kök layout, SEO metadata & HSL tema motoru
    page.tsx           # Ana sayfa akışı ve bölüm sıralaması
  components/
    layout/            # Header, Footer, Mobile Floating CTA
    sections/          # Hero, Trust, About, Services, Special, Gallery, Reviews, Contact
    ui/                # SafeImage, Lightbox, BeforeAfterSlider, DynamicIcon
    seo/               # LocalBusiness JSON-LD Yapılandırılmış Veri
  config/
    business.ts        # TEK MERKEZİ AKTİF MÜŞTERİ CONFIG DOSYASI
    business.example.ts# Örnek referans yapılandırma dosyası
  lib/
    theme.ts           # HSL renk dönüşümü & WCAG AA kontrast hesaplayıcı
  types/
    business.ts        # Strict TypeScript arayüz tanımları
public/
  assets/client/       # Müşteriye özel görseller
```
