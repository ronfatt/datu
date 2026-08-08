'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Star, ShieldCheck, ArrowRight } from 'lucide-react';
import { SAMPLE_GUIDES } from '@/lib/mock-data';

export default function MeetYourLocal() {
  const guides = SAMPLE_GUIDES.slice(0, 3);

  return (
    <section className="py-12 bg-navy border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-[10px] uppercase font-extrabold text-turquoise tracking-widest block mb-1">
              LOCAL HOSTS
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
              Meet Your Local Guide
            </h2>
          </div>

          <Link
            href="/guides"
            className="flex items-center gap-1 text-xs font-bold text-turquoise hover:underline"
          >
            <span>All Guides ({SAMPLE_GUIDES.length})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {guides.map((guide) => (
            <Link
              key={guide.id}
              href={`/guides/${guide.slug}`}
              className="group rounded-2xl overflow-hidden bg-navy-dark border border-white/10 p-4 flex gap-4 items-center hover:border-turquoise/50 transition-all duration-300 shadow-card"
            >
              {/* Authentic Photo Portrait */}
              <div className="relative w-20 h-24 rounded-xl overflow-hidden flex-shrink-0 bg-navy border border-turquoise/30">
                <Image
                  src={guide.avatarUrl}
                  alt={guide.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {guide.verified && (
                  <div className="absolute bottom-1 right-1 bg-turquoise text-navy p-0.5 rounded-full">
                    <ShieldCheck className="w-3 h-3" />
                  </div>
                )}
              </div>

              {/* Minimal Text Info */}
              <div className="flex-1 min-w-0 space-y-1">
                <div className="flex items-center gap-1 text-xs text-sand font-bold">
                  <Star className="w-3 h-3 fill-current text-yellow-400" />
                  <span>{guide.rating}</span>
                  <span className="text-gray-400 font-normal">({guide.reviewCount})</span>
                </div>
                <h3 className="font-heading font-bold text-base text-white group-hover:text-turquoise truncate">
                  {guide.name}
                </h3>
                <p className="text-[11px] text-gray-400 truncate">
                  {guide.languages.join(' • ')}
                </p>
                <div className="text-xs font-extrabold text-turquoise pt-1">
                  From RM{guide.dailyRate} <span className="text-[10px] text-gray-400 font-normal">/ day</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
