import type { Metadata } from 'next';
import './globals.css';
import { defaultSiteConfig } from '@/config/default-site-config';

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
  other: {
    'color-scheme': 'light',
    'supported-color-schemes': 'light',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" data-theme="light" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="light" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="supported-color-schemes" content="light" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  document.documentElement.dataset.theme = 'light';
                  document.documentElement.classList.remove('dark');
                  document.documentElement.style.colorScheme = 'light';
                  var saved = localStorage.getItem('site_builder_config_v1');
                  if (saved) {
                    var parsed = JSON.parse(saved);
                    if (parsed?.language) document.documentElement.lang = parsed.language;
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased selection:bg-brand-primary selection:text-white bg-background text-foreground transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
