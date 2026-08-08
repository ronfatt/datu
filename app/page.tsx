'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Compass, Sparkles, MapPin, Bus, ShieldCheck } from 'lucide-react';
import HeroSearch from '@/components/HeroSearch';
import QuickCategories from '@/components/QuickCategories';
import FeaturedStays from '@/components/FeaturedStays';
import WhyChooseUs from '@/components/WhyChooseUs';
import UnforgettableExperiences from '@/components/UnforgettableExperiences';
import MeetYourLocal from '@/components/MeetYourLocal';
import BrandStory from '@/components/BrandStory';
import PartnerCta from '@/components/PartnerCta';
import { useLanguage } from '@/lib/i18n';

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <div className="space-y-0 overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] flex flex-col justify-between pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b border-white/10 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2000&q=80"
            alt="Semporna Ocean Hero"
            fill
            priority
            className="object-cover object-center scale-105 animate-pulse duration-[10000ms]"
          />
          {/* Dark Cinematic Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/65 to-navy/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-transparent to-navy/80" />
        </div>

        {/* Hero Main Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center mt-auto mb-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy/80 backdrop-blur-md border border-turquoise/40 text-turquoise text-xs sm:text-sm font-extrabold tracking-widest uppercase shadow-lg">
            <Sparkles className="w-4 h-4 text-turquoise" />
            <span>Semporna, Sabah, Malaysia</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-extrabold text-white tracking-tight leading-[1.1] uppercase">
            DISCOVER SEMPORNA <br />
            <span className="bg-gradient-to-r from-turquoise via-aqua to-sand bg-clip-text text-transparent">
              LIKE A LOCAL.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-gray-200 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-md">
            {t('hero_subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              href="/stays"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-turquoise hover:bg-turquoise-light text-navy font-heading font-extrabold text-sm sm:text-base tracking-wide transition-all shadow-xl shadow-turquoise/20 flex items-center justify-center gap-2 group"
            >
              <span>{t('explore_cta')}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform stroke-[2.5]" />
            </Link>
            <Link
              href="/trip-planner"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-heading font-bold text-sm sm:text-base border border-white/20 backdrop-blur-md transition-all flex items-center justify-center gap-2"
            >
              <Compass className="w-5 h-5 text-turquoise" />
              <span>{t('build_trip_cta')}</span>
            </Link>
          </div>
        </div>

        {/* Floating Hero Search Module */}
        <div className="relative z-20 w-full max-w-5xl mx-auto mt-4">
          <HeroSearch />
        </div>
      </section>

      {/* 2. QUICK CATEGORIES */}
      <QuickCategories />

      {/* 3. FEATURED STAYS */}
      <FeaturedStays />

      {/* 4. WHY CHOOSE US */}
      <WhyChooseUs />

      {/* 5. POPULAR EXPERIENCES */}
      <UnforgettableExperiences />

      {/* 6. MEET YOUR LOCAL */}
      <MeetYourLocal />

      {/* 7. BUILD MY SEMPORNA TRIP INTERACTIVE BANNER */}
      <section className="py-20 bg-gradient-to-br from-navy via-ocean/20 to-navy text-white relative border-b border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-navy-dark border border-turquoise/30 p-8 sm:p-14 relative overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="space-y-4 max-w-xl text-center lg:text-left z-10">
              <span className="text-xs uppercase font-extrabold text-turquoise tracking-widest flex items-center justify-center lg:justify-start gap-1.5">
                <Compass className="w-4 h-4" /> FLAGSHIP FEATURE
              </span>
              <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white leading-tight">
                Build My Semporna Trip
              </h2>
              <p className="text-sm sm:text-base text-gray-300">
                Tell us how you travel. We&apos;ll build your custom itinerary combining stays, native guides, island hopping, and airport transfers into 1 simple bundle.
              </p>
              <div className="pt-2 flex flex-wrap justify-center lg:justify-start gap-2 text-xs text-sand font-semibold">
                <span className="bg-white/5 px-3 py-1 rounded-full border border-white/10">Step 1: Duration</span>
                <span className="bg-white/5 px-3 py-1 rounded-full border border-white/10">Step 2: Companions</span>
                <span className="bg-white/5 px-3 py-1 rounded-full border border-white/10">Step 3: Interests</span>
                <span className="bg-white/5 px-3 py-1 rounded-full border border-white/10">Step 4: Budget</span>
              </div>
            </div>

            <div className="z-10 flex flex-col items-center sm:items-end gap-3 flex-shrink-0">
              <Link
                href="/trip-planner"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-turquoise to-ocean text-navy font-heading font-extrabold text-base tracking-wide hover:opacity-95 transition-all shadow-xl shadow-turquoise/20 flex items-center gap-2 group"
              >
                <span>Launch Trip Planner</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform stroke-[2.5]" />
              </Link>
              <span className="text-xs text-gray-400">100% Free & Customizable</span>
            </div>
          </div>
        </div>
      </section>

      {/* 8. AIRPORT TRANSFER DEDICATED BANNER */}
      <section className="py-16 bg-navy border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-white/5 border border-white/10 p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-turquoise/20 text-turquoise flex items-center justify-center flex-shrink-0 border border-turquoise/30">
                <Bus className="w-8 h-8 stroke-[2.5]" />
              </div>
              <div className="space-y-1">
                <h3 className="font-heading font-extrabold text-xl text-white">
                  Tawau Airport (TWU) ↔ Semporna Transfer
                </h3>
                <p className="text-xs text-gray-400 max-w-lg">
                  Shared shuttle van (RM35/pax), private sedan, or luxury Alphard transfers direct to your hotel or jetty.
                </p>
              </div>
            </div>
            <Link
              href="/transfers"
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-turquoise hover:text-navy text-white text-xs font-bold transition-all border border-white/10 flex-shrink-0"
            >
              Book Airport Transfer
            </Link>
          </div>
        </div>
      </section>

      {/* 9. BRAND STORY */}
      <BrandStory />

      {/* 10. PARTNER WITH US CTA */}
      <PartnerCta />
    </div>
  );
}
