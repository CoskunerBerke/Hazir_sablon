import { MetadataRoute } from 'next';
import { businessConfig } from '@/config/business';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = businessConfig.seo.domain || 'https://example.com';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
