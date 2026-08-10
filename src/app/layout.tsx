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
    'color-scheme': 'light dark',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="light dark" />
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#ffffff" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#09090b" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
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
