'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Star, Heart, MapPin, ArrowRight } from 'lucide-react';
import { SAMPLE_PROPERTIES } from '@/lib/mock-data';

export default function FeaturedStays() {
  const [wishlist, setWishlist] = useState<Record<string, boolean>>({});

  const toggleWishlist = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setWishlist((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const featured = SAMPLE_PROPERTIES.slice(0, 4);

  return (
    <section className="py-12 bg-navy-dark border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-[10px] uppercase font-extrabold text-turquoise tracking-widest block mb-1">
              HANDPICKED STAYS
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
              Stay Somewhere Special
            </h2>
          </div>

          <Link
            href="/stays"
            className="flex items-center gap-1 text-xs font-bold text-turquoise hover:underline"
          >
            <span>All Stays ({SAMPLE_PROPERTIES.length})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {featured.map((stay) => (
            <Link
              key={stay.id}
              href={`/stays/${stay.slug}`}
              className="group relative rounded-2xl overflow-hidden bg-navy border border-white/10 flex flex-col justify-between hover:border-turquoise/50 transition-all duration-300 shadow-card hover:shadow-card-hover"
            >
              {/* Photo First Focus */}
              <div className="relative aspect-[16/11] overflow-hidden bg-navy-dark">
                <Image
                  src={stay.images[0]}
                  alt={stay.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2.5 left-2.5 bg-navy/85 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] font-bold text-turquoise border border-turquoise/30">
                  {stay.type}
                </div>
                <button
                  onClick={(e) => toggleWishlist(stay.id, e)}
                  className={`absolute top-2.5 right-2.5 p-2 rounded-full backdrop-blur-md transition-colors ${
                    wishlist[stay.id] ? 'bg-red-500 text-white' : 'bg-navy/60 text-white/80 hover:text-white'
                  }`}
                >
                  <Heart className={`w-3.5 h-3.5 ${wishlist[stay.id] ? 'fill-current' : ''}`} />
                </button>
                <div className="absolute bottom-2.5 left-2.5 bg-navy/85 backdrop-blur-md px-2 py-0.5 rounded-md text-[10px] font-bold text-sand-light flex items-center gap-1">
                  <Star className="w-3 h-3 text-yellow-400 fill-current" />
                  {stay.rating}
                </div>
              </div>

              {/* Minimal Text Content */}
              <div className="p-3.5 flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <span className="text-[10px] text-gray-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-turquoise" />
                    {stay.locationName}
                  </span>
                  <h3 className="font-heading font-bold text-sm text-white group-hover:text-turquoise transition-colors line-clamp-1 mt-0.5">
                    {stay.name}
                  </h3>
                </div>

                <div className="flex items-baseline justify-between pt-2 border-t border-white/5">
                  <div className="flex items-baseline gap-1">
                    <span className="text-base font-extrabold text-turquoise">RM{stay.pricePerNight}</span>
                    <span className="text-[10px] text-gray-400">/night</span>
                  </div>
                  <span className="text-[10px] font-bold text-turquoise bg-turquoise/10 px-2 py-1 rounded">
                    View
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
