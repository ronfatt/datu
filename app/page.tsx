'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Compass, Sparkles, Bus, Anchor } from 'lucide-react';
import HeroSearch from '@/components/HeroSearch';
import QuickCategories from '@/components/QuickCategories';
import FeaturedStays from '@/components/FeaturedStays';
import UnforgettableExperiences from '@/components/UnforgettableExperiences';
import MeetYourLocal from '@/components/MeetYourLocal';
import PartnerCta from '@/components/PartnerCta';
import { useLanguage } from '@/lib/i18n';

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <div className="space-y-0 overflow-hidden">
      {/* 1. CINEMATIC PHOTO HERO */}
      <section className="relative min-h-[80vh] sm:min-h-[88vh] flex flex-col justify-between pt-10 pb-12 px-4 sm:px-6 lg:px-8 border-b border-white/10 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2000&q=80"
            alt="Semporna Ocean Hero"
            fill
            priority
            className="object-cover object-center scale-105"
          />
          {/* Dark Overlay gradient for contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/55 to-navy/20" />
        </div>

        {/* Minimal Hero Header */}
        <div className="relative z-10 max-w-4xl mx-auto text-center mt-auto mb-6 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-navy/80 backdrop-blur-md border border-turquoise/40 text-turquoise text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Semporna, Sabah</span>
          </div>

          <h1 className="text-3xl sm:text-6xl font-heading font-extrabold text-white tracking-tight uppercase leading-tight">
            DISCOVER SEMPORNA <br />
            <span className="text-turquoise">LIKE A LOCAL</span>
          </h1>

          <div className="flex flex-row items-center justify-center gap-3 pt-2">
            <Link
              href="/stays"
              className="px-6 py-3 rounded-full bg-turquoise hover:bg-turquoise-light text-navy font-heading font-extrabold text-xs sm:text-sm tracking-wide transition-all shadow-xl flex items-center justify-center gap-1.5"
            >
              <span>Explore Stays & Tours</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/trip-planner"
              className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-heading font-bold text-xs sm:text-sm border border-white/20 backdrop-blur-md transition-all flex items-center justify-center gap-1.5"
            >
              <Compass className="w-4 h-4 text-turquoise" />
              <span>Trip Planner</span>
            </Link>
          </div>
        </div>

        {/* Hero Search Module */}
        <div className="relative z-20 w-full max-w-4xl mx-auto">
          <HeroSearch />
        </div>
      </section>

      {/* 2. VISUAL CATEGORIES */}
      <QuickCategories />

      {/* 3. FEATURED STAYS */}
      <FeaturedStays />

      {/* 4. POPULAR EXPERIENCES */}
      <UnforgettableExperiences />

      {/* 5. MEET YOUR LOCAL */}
      <MeetYourLocal />

      {/* 6. BUILD MY SEMPORNA TRIP BANNER */}
      <section className="py-12 bg-navy border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-navy-dark border border-turquoise/30 p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-[10px] uppercase font-bold text-turquoise tracking-widest flex items-center justify-center md:justify-start gap-1">
                <Compass className="w-3.5 h-3.5" /> INTERACTIVE TOOL
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
                Build My Semporna Trip
              </h2>
              <p className="text-xs text-gray-300 max-w-lg">
                Answer 4 quick questions. We&apos;ll combine stays, native guides, island hopping & airport transfers into 1 custom bundle.
              </p>
            </div>

            <Link
              href="/trip-planner"
              className="px-6 py-3.5 rounded-full bg-turquoise text-navy font-heading font-extrabold text-xs tracking-wide shadow-lg flex items-center gap-1.5 flex-shrink-0"
            >
              <span>Build Trip Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. AIRPORT TRANSFER BANNER */}
      <section className="py-10 bg-navy-dark border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-turquoise/20 text-turquoise flex items-center justify-center flex-shrink-0">
                <Bus className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-sm text-white">Tawau Airport (TWU) ↔ Semporna Transfer</h3>
                <span className="text-[11px] text-gray-400">Shared Van (RM35) or Private Car (RM120)</span>
              </div>
            </div>
            <Link
              href="/transfers"
              className="px-4 py-2 rounded-xl bg-white/10 text-white text-xs font-bold hover:bg-turquoise hover:text-navy transition-all"
            >
              Book Transfer
            </Link>
          </div>
        </div>
      </section>

      {/* 8. BRAND STATEMENT */}
      <section className="py-16 bg-navy relative border-b border-white/5 text-center px-4">
        <div className="max-w-2xl mx-auto space-y-4">
          <Anchor className="w-8 h-8 text-turquoise mx-auto" />
          <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-white">
            WE DON’T JUST SHOW YOU SEMPORNA. <br />
            <span className="text-turquoise">WE CONNECT YOU WITH THE PEOPLE WHO CALL IT HOME.</span>
          </h2>
        </div>
      </section>

      {/* 9. PARTNER CTA */}
      <PartnerCta />
    </div>
  );
}
