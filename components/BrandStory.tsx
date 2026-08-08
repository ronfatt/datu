'use client';

import React from 'react';
import Image from 'next/image';
import { Palmtree, Anchor } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

export default function BrandStory() {
  const { t } = useLanguage();

  return (
    <section id="story" className="py-24 bg-navy-dark relative overflow-hidden border-b border-white/5">
      <div className="absolute inset-0 opacity-10">
        <Image
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80"
          alt="Semporna Ocean Background"
          fill
          className="object-cover"
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <div className="w-12 h-12 rounded-full bg-turquoise/20 text-turquoise flex items-center justify-center mx-auto border border-turquoise/30">
          <Anchor className="w-6 h-6 stroke-[2.5]" />
        </div>

        <span className="text-xs uppercase font-extrabold text-sand tracking-widest block">
          OUR MISSION & IDENTITY
        </span>

        <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-white leading-tight tracking-tight">
          {t('brand_story_title')} <br className="hidden sm:inline" />
          <span className="text-turquoise">{t('brand_story_subtitle')}</span>
        </h2>

        <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
          {t('brand_story_body')}
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-sand-light font-semibold">
          <span className="flex items-center gap-1.5"><Palmtree className="w-4 h-4 text-turquoise" /> 100% Native Owned & Operated</span>
          <span className="flex items-center gap-1.5"><Palmtree className="w-4 h-4 text-turquoise" /> Supporting Local Communities</span>
        </div>
      </div>
    </section>
  );
}
