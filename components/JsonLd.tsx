'use client';

import React from 'react';

export default function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: 'Mahligai Semporna by Datu.H',
    alternateName: 'Datu.H — Your Local Way to Semporna',
    url: 'https://sempornalocal.com',
    logo: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=512&q=80',
    image: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=1200&q=80',
    description: 'Handpicked local stays, overwater chalets, trusted native guides, island hopping & airport transfers in Semporna, Sabah, Malaysia.',
    telephone: '+60123456789',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Oceanfront Promenade',
      addressLocality: 'Semporna',
      addressRegion: 'Sabah',
      postalCode: '91308',
      addressCountry: 'MY',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 4.4818,
      longitude: 118.6112,
    },
    priceRange: 'RM35 - RM1280',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
