'use client';

import React from 'react';
import { Compass, ShieldCheck, Heart, Headphones } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

export default function WhyChooseUs() {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: Compass,
      title: t('benefit_1_title'),
      desc: t('benefit_1_desc'),
    },
    {
      icon: ShieldCheck,
      title: t('benefit_2_title'),
      desc: t('benefit_2_desc'),
    },
    {
      icon: Heart,
      title: t('benefit_3_title'),
      desc: t('benefit_3_desc'),
    },
    {
      icon: Headphones,
      title: t('benefit_4_title'),
      desc: t('benefit_4_desc'),
    },
  ];

  return (
    <section className="py-20 bg-navy border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <span className="text-xs uppercase font-extrabold text-turquoise tracking-widest">
            THE SEMPORNA LOCAL DIFFERENCE
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white">
            {t('why_title')}
          </h2>
          <p className="text-sm sm:text-base text-gray-400">
            {t('why_subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-turquoise/40 hover:bg-white/10 transition-all duration-300 space-y-4"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-ocean to-turquoise flex items-center justify-center text-navy shadow-md">
                  <Icon className="w-6 h-6 stroke-[2.5]" />
                </div>
                <h3 className="font-heading font-bold text-lg text-white">
                  {b.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {b.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
