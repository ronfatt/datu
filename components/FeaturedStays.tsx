'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Star, Heart, MapPin, ArrowRight } from 'lucide-react';
import { Property } from '@/lib/types';
import { SAMPLE_PROPERTIES } from '@/lib/mock-data';
import { useLanguage } from '@/lib/i18n';

export default function FeaturedStays() {
  const { t } = useLanguage();
  const [wishlist, setWishlist] = useState<Record<string, boolean>>({});

  const toggleWishlist = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setWishlist((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const featured = SAMPLE_PROPERTIES.slice(0, 4);

  return (
    <section className="py-16 bg-navy-dark text-white border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs uppercase font-extrabold text-turquoise tracking-widest">
              HANDPICKED HOMESTAYS & RESORTS
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white mt-1">
              {t('section_stays_title')}
            </h2>
            <p className="text-sm text-gray-400 mt-1">
              {t('section_stays_subtitle')}
            </p>
          </div>

          <Link
            href="/stays"
            className="inline-flex items-center gap-2 text-sm font-bold text-turquoise hover:text-turquoise-light transition-colors group"
          >
            <span>View All Stays ({SAMPLE_PROPERTIES.length})</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((stay) => (
            <Link
              key={stay.id}
              href={`/stays/${stay.slug}`}
              className="group rounded-2xl overflow-hidden bg-navy border border-white/10 flex flex-col justify-between hover:border-turquoise/50 transition-all duration-300 shadow-card hover:shadow-card-hover"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-navy-dark">
                <Image
                  src={stay.images[0]}
                  alt={stay.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-navy/80 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-semibold text-turquoise border border-turquoise/30">
                  {stay.type}
                </div>
                <button
                  onClick={(e) => toggleWishlist(stay.id, e)}
                  className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-colors ${
                    wishlist[stay.id] ? 'bg-red-500 text-white' : 'bg-navy/60 text-white/80 hover:text-white'
                  }`}
                  aria-label="Wishlist"
                >
                  <Heart className={`w-4 h-4 ${wishlist[stay.id] ? 'fill-current' : ''}`} />
                </button>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-turquoise" />
                      {stay.locationName}
                    </span>
                    <span className="flex items-center gap-1 font-semibold text-sand-light">
                      <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                      {stay.rating} ({stay.reviewCount})
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-base text-white group-hover:text-turquoise transition-colors line-clamp-1">
                    {stay.name}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {stay.facilities.slice(0, 3).map((f) => (
                    <span key={f} className="text-[10px] bg-white/5 text-gray-300 px-2 py-0.5 rounded-md border border-white/5">
                      {f}
                    </span>
                  ))}
                </div>

                <div className="flex items-end justify-between pt-3 border-t border-white/10">
                  <div>
                    <span className="text-[11px] text-gray-400 uppercase font-semibold">Starting</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-lg font-bold text-turquoise">RM{stay.pricePerNight}</span>
                      <span className="text-xs text-gray-400">{t('per_night')}</span>
                    </div>
                  </div>
                  <span className="px-3 py-1.5 rounded-lg bg-turquoise/15 text-turquoise text-xs font-semibold group-hover:bg-turquoise group-hover:text-navy transition-colors">
                    {t('view_stay')}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
