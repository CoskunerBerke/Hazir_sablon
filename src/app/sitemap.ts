import { MetadataRoute } from 'next';
import { businessConfig } from '@/config/business';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = businessConfig.seo.domain || 'https://example.com';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ];
}
