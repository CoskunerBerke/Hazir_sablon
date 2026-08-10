import type { Metadata } from 'next';
import './globals.css';
import { businessConfig } from '@/config/business';
import { generateThemeCssVariables } from '@/lib/theme';
import { JsonLd } from '@/components/seo/JsonLd';

const domainUrl = businessConfig.seo.domain && businessConfig.seo.domain.startsWith('http')
  ? businessConfig.seo.domain
  : 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(domainUrl),
  title: businessConfig.seo.title,
  description: businessConfig.seo.description,
  keywords: businessConfig.seo.keywords,
  openGraph: {
    title: businessConfig.seo.title,
    description: businessConfig.seo.description,
    images: businessConfig.seo.ogImage ? [{ url: businessConfig.seo.ogImage }] : [],
    type: 'website',
    locale: 'tr_TR',
  },
  twitter: {
    card: 'summary_large_image',
    title: businessConfig.seo.title,
    description: businessConfig.seo.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const themeVars = generateThemeCssVariables(
    businessConfig.theme.primary,
    businessConfig.theme.secondary,
    businessConfig.theme.accent
  );

  return (
    <html
      lang="tr"
      data-style-preset={businessConfig.theme.stylePreset}
      className={businessConfig.theme.mode === 'dark' ? 'dark' : ''}
    >
      <head>
        <JsonLd config={businessConfig} />
        <style dangerouslySetInnerHTML={{
          __html: `:root { ${Object.entries(themeVars).map(([k, v]) => `${k}:${v};`).join('')} }`
        }} />
      </head>
      <body className="antialiased selection:bg-brand-primary selection:text-white">
        {children}
      </body>
    </html>
  );
}
