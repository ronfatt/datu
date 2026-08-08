'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Star, ShieldCheck, Languages, Award, ArrowRight } from 'lucide-react';
import { SAMPLE_GUIDES } from '@/lib/mock-data';
import { useLanguage } from '@/lib/i18n';

export default function MeetYourLocal() {
  const { t } = useLanguage();

  const guides = SAMPLE_GUIDES.slice(0, 3);

  return (
    <section className="py-20 bg-navy border-b border-white/5 relative overflow-hidden">
      {/* Background glow elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-turquoise/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs uppercase font-extrabold text-sand tracking-widest flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-turquoise" />
              {t('section_guides_title')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white mt-1 max-w-xl leading-tight">
              {t('section_guides_headline')}
            </h2>
          </div>

          <Link
            href="/guides"
            className="inline-flex items-center gap-2 text-sm font-bold text-turquoise hover:text-turquoise-light transition-colors group"
          >
            <span>Meet All Local Guides ({SAMPLE_GUIDES.length})</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {guides.map((guide) => (
            <Link
              key={guide.id}
              href={`/guides/${guide.slug}`}
              className="group rounded-2xl overflow-hidden bg-navy-dark border border-white/10 p-5 flex flex-col justify-between hover:border-turquoise/50 transition-all duration-300 shadow-card hover:shadow-card-hover"
            >
              <div className="space-y-4">
                {/* Profile Header */}
                <div className="flex items-center gap-4">
                  <div className="relative w-20 h-24 rounded-xl overflow-hidden flex-shrink-0 bg-navy border border-turquoise/30 shadow-md">
                    <Image
                      src={guide.avatarUrl}
                      alt={guide.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {guide.verified && (
                      <div className="absolute bottom-1 right-1 bg-turquoise text-navy p-0.5 rounded-full" title="Verified Local Guide">
                        <ShieldCheck className="w-3.5 h-3.5" />
                      </div>
                    )}
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-1 text-xs text-sand font-bold">
                      <Star className="w-3.5 h-3.5 fill-current text-yellow-400" />
                      <span>{guide.rating}</span>
                      <span className="text-gray-400 font-normal">({guide.reviewCount} reviews)</span>
                    </div>
                    <h3 className="font-heading font-extrabold text-lg text-white group-hover:text-turquoise transition-colors">
                      {guide.name}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-gray-400">
                      <Award className="w-3.5 h-3.5 text-turquoise" />
                      <span>{guide.experienceYears} Years Native Experience</span>
                    </div>
                  </div>
                </div>

                {/* Languages */}
                <div className="flex items-center gap-2 text-xs text-gray-300 pt-2 border-t border-white/5">
                  <Languages className="w-4 h-4 text-turquoise flex-shrink-0" />
                  <span className="truncate">{guide.languages.join(' • ')}</span>
                </div>

                {/* Bio snippet */}
                <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
                  {guide.bio}
                </p>

                {/* Specialties tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {guide.specialties.map((spec) => (
                    <span key={spec} className="text-[11px] bg-turquoise/10 text-turquoise px-2.5 py-1 rounded-full font-medium border border-turquoise/20">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Price & CTA */}
              <div className="flex items-center justify-between pt-5 mt-4 border-t border-white/10">
                <div>
                  <span className="text-[10px] text-gray-400 uppercase font-semibold">Day Rate</span>
                  <div className="text-lg font-bold text-turquoise">
                    From RM{guide.dailyRate} <span className="text-xs text-gray-400 font-normal">{t('per_day')}</span>
                  </div>
                </div>

                <span className="px-4 py-2 rounded-xl bg-turquoise text-navy font-extrabold text-xs group-hover:bg-turquoise-light transition-colors shadow-md">
                  {t('view_guide')}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
