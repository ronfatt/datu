'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Star, Clock, MapPin, Sparkles, Filter } from 'lucide-react';
import { SAMPLE_EXPERIENCES } from '@/lib/mock-data';
import { useLanguage } from '@/lib/i18n';

export default function ExperiencesPage() {
  const { t } = useLanguage();
  const [selectedCat, setSelectedCat] = useState<string>('All');

  const categories = ['All', 'Island Hopping', 'Diving & Snorkelling', 'Food & Culture', 'Photography'];

  const filtered = selectedCat === 'All'
    ? SAMPLE_EXPERIENCES
    : SAMPLE_EXPERIENCES.filter((exp) => exp.category === selectedCat);

  return (
    <div className="py-12 bg-navy min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs uppercase font-extrabold text-turquoise tracking-widest flex items-center justify-center gap-1.5">
            <Sparkles className="w-4 h-4 text-turquoise" />
            UNFORGETTABLE SEMPORNA EXPERIENCES
          </span>
          <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white">
            Island Trips & Local Experiences
          </h1>
          <p className="text-sm text-gray-300">
            Handpicked tours, Sipadan dive permits, Bohey Dulang hikes, and private island picnics.
          </p>
        </div>

        {/* Category Pill Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold border transition-all ${
                selectedCat === cat
                  ? 'bg-turquoise text-navy border-turquoise font-bold shadow-md'
                  : 'bg-white/5 border-white/10 text-gray-300 hover:border-turquoise/40 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((exp) => (
            <Link
              key={exp.id}
              href={`/experiences/${exp.slug}`}
              className="group rounded-3xl overflow-hidden bg-navy-dark border border-white/10 flex flex-col justify-between hover:border-turquoise/50 transition-all duration-300 shadow-card hover:shadow-card-hover"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-navy">
                <Image
                  src={exp.images[0]}
                  alt={exp.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-navy/80 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-semibold text-turquoise border border-turquoise/30">
                  {exp.category}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-turquoise" />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1 font-semibold text-sand-light">
                      <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                      {exp.rating} ({exp.reviewCount})
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-white group-hover:text-turquoise transition-colors line-clamp-2">
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-1 text-xs text-gray-400">
                    <MapPin className="w-3.5 h-3.5 text-turquoise flex-shrink-0" />
                    <span className="truncate">{exp.location}</span>
                  </div>
                </div>

                <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
                  {exp.shortDescription}
                </p>

                <div className="flex items-end justify-between pt-4 border-t border-white/10">
                  <div>
                    <span className="text-[10px] text-gray-400 uppercase font-semibold">From</span>
                    <div className="text-xl font-bold text-turquoise">RM{exp.price}</div>
                  </div>
                  <span className="px-4 py-2 rounded-xl bg-turquoise text-navy text-xs font-bold group-hover:bg-turquoise-light transition-colors">
                    {t('explore')}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
