'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Star, Clock, MapPin, ArrowRight, Sparkles } from 'lucide-react';
import { SAMPLE_EXPERIENCES } from '@/lib/mock-data';
import { useLanguage } from '@/lib/i18n';

export default function UnforgettableExperiences() {
  const { t } = useLanguage();

  const experiences = SAMPLE_EXPERIENCES.slice(0, 4);

  return (
    <section className="py-16 bg-navy-dark border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs uppercase font-extrabold text-turquoise tracking-widest flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-turquoise" />
              AUTHENTIC LOCAL TOURS
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white mt-1">
              {t('section_exp_title')}
            </h2>
            <p className="text-sm text-gray-400 mt-1">
              Top rated island hopping, sunset cruises, seafood night tours, and diving permits.
            </p>
          </div>

          <Link
            href="/experiences"
            className="inline-flex items-center gap-2 text-sm font-bold text-turquoise hover:text-turquoise-light transition-colors group"
          >
            <span>Explore All Experiences ({SAMPLE_EXPERIENCES.length})</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((exp) => (
            <Link
              key={exp.id}
              href={`/experiences/${exp.slug}`}
              className="group rounded-2xl overflow-hidden bg-navy border border-white/10 flex flex-col justify-between hover:border-turquoise/50 transition-all duration-300 shadow-card hover:shadow-card-hover"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-navy-dark">
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

              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
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
                  <h3 className="font-heading font-bold text-base text-white group-hover:text-turquoise transition-colors line-clamp-2">
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-1 text-xs text-gray-400 pt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-turquoise flex-shrink-0" />
                    <span className="truncate">{exp.location}</span>
                  </div>
                </div>

                <p className="text-xs text-gray-400 line-clamp-2">
                  {exp.shortDescription}
                </p>

                <div className="flex items-end justify-between pt-3 border-t border-white/10">
                  <div>
                    <span className="text-[10px] text-gray-400 uppercase font-semibold">From</span>
                    <div className="text-lg font-bold text-turquoise">RM{exp.price}</div>
                  </div>
                  <span className="px-3.5 py-1.5 rounded-lg bg-turquoise text-navy text-xs font-bold group-hover:bg-turquoise-light transition-colors">
                    {t('explore')}
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
