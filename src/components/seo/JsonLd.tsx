import React from 'react';
import { BusinessConfig } from '@/types/business';

interface JsonLdProps {
  config: BusinessConfig;
}

export const JsonLd: React.FC<JsonLdProps> = ({ config }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: config.businessName,
    alternateName: config.shortName,
    description: config.description,
    url: config.seo.domain || 'https://example.com',
    telephone: config.contact.phone,
    email: config.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: config.contact.address,
      addressCountry: 'TR',
    },
    openingHoursSpecification: config.businessHours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.days,
      opens: h.isOpen ? h.hours.split('-')[0]?.trim() || '09:00' : '00:00',
      closes: h.isOpen ? h.hours.split('-')[1]?.trim() || '18:00' : '00:00',
    })),
    sameAs: [
      config.socialLinks.instagram,
      config.socialLinks.facebook,
      config.socialLinks.twitter,
      config.socialLinks.linkedin,
    ].filter(Boolean),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
