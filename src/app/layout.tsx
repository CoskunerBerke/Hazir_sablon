import type { Metadata } from 'next';
import './globals.css';
import { defaultSiteConfig } from '@/config/default-site-config';
import { generateThemeCssVariables } from '@/lib/theme';

const domainUrl = defaultSiteConfig.seo.domain && defaultSiteConfig.seo.domain.startsWith('http')
  ? defaultSiteConfig.seo.domain
  : 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(domainUrl),
  title: defaultSiteConfig.seo.title,
  description: defaultSiteConfig.seo.description,
  keywords: defaultSiteConfig.seo.keywords,
  openGraph: {
    title: defaultSiteConfig.seo.title,
    description: defaultSiteConfig.seo.description,
    images: defaultSiteConfig.seo.ogImage ? [{ url: defaultSiteConfig.seo.ogImage }] : [],
    type: 'website',
    locale: 'tr_TR',
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultSiteConfig.seo.title,
    description: defaultSiteConfig.seo.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const themeVars = generateThemeCssVariables(
    defaultSiteConfig.theme.colors.primary,
    defaultSiteConfig.theme.colors.secondary,
    defaultSiteConfig.theme.colors.accent
  );

  return (
    <html
      lang="tr"
      data-style-preset={defaultSiteConfig.theme.preset}
      className={defaultSiteConfig.theme.mode === 'dark' ? 'dark' : ''}
    >
      <head>
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
