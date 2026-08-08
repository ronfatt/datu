'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Compass, Sparkles, Bus, Crown } from 'lucide-react';
import HeroSearch from '@/components/HeroSearch';
import QuickCategories from '@/components/QuickCategories';
import FeaturedStays from '@/components/FeaturedStays';
import UnforgettableExperiences from '@/components/UnforgettableExperiences';
import MeetYourLocal from '@/components/MeetYourLocal';
import PartnerCta from '@/components/PartnerCta';
import MahligaiLogo from '@/components/MahligaiLogo';
import { useLanguage } from '@/lib/i18n';

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <div className="space-y-0 overflow-hidden bg-navy">
      
      {/* 1. CINEMATIC AERIAL HERO - PERFECT MOBILE ALIGNMENT */}
      <section className="relative min-h-[82vh] sm:min-h-[90vh] flex flex-col justify-between pt-6 sm:pt-10 pb-10 sm:pb-12 px-3 sm:px-6 lg:px-8 border-b border-gold-medium/20 overflow-hidden">
        
        {/* Background Drone Motion Layer */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="relative w-full h-full animate-drone-hero">
            <Image
              src="https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=2000&q=80"
              alt="Semporna Islands Aerial Drone Live Motion"
              fill
              priority
              className="object-cover object-center"
            />
          </div>

          {/* Water Shimmer & Dark Onyx Mask */}
          <div className="absolute inset-0 bg-gradient-to-tr from-turquoise/10 via-transparent to-gold/10 animate-water-shimmer mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/65 to-navy/35" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-transparent to-navy/80" />
        </div>

        {/* Hero Content Block - Centered Mobile Optics */}
        <div className="relative z-10 max-w-4xl mx-auto text-center mt-auto mb-6 space-y-4 sm:space-y-5 px-2">
          
          {/* Mahligai Royal Badge */}
          <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-full bg-navy/90 backdrop-blur-md border border-gold/40 text-gold text-[11px] sm:text-xs font-extrabold uppercase tracking-widest shadow-gold-glow">
            <Crown className="w-3.5 h-3.5 text-gold flex-shrink-0" />
            <span>MAHLIGAI SEMPORNA</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-6xl font-heading font-extrabold text-white tracking-tight uppercase leading-[1.15] text-center">
            DISCOVER SEMPORNA <br />
            <span className="text-gold-gradient">LIKE A LOCAL</span>
          </h1>

          {/* Slogan */}
          <p className="text-xs sm:text-sm text-gold-light max-w-md mx-auto font-medium tracking-wide text-center">
            Datu.H — Your Local Way to Semporna
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3 pt-2 w-full max-w-xs sm:max-w-none mx-auto">
            <Link
              href="/stays"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-gold-gradient text-navy font-heading font-extrabold text-xs sm:text-sm tracking-wide transition-all shadow-xl shadow-gold/20 flex items-center justify-center gap-1.5 hover:opacity-95"
            >
              <span>Explore Stays & Tours</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/trip-planner"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-heading font-bold text-xs sm:text-sm border border-gold/30 backdrop-blur-md transition-all flex items-center justify-center gap-1.5"
            >
              <Compass className="w-4 h-4 text-gold" />
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

      {/* 6. BUILD MY TRIP BANNER */}
      <section className="py-10 sm:py-12 bg-navy border-b border-gold-medium/15">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-navy-dark border border-gold/30 p-5 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl text-center md:text-left">
            <div className="space-y-2">
              <span className="text-[10px] uppercase font-bold text-gold tracking-widest flex items-center justify-center md:justify-start gap-1">
                <Compass className="w-3.5 h-3.5" /> FLAGSHIP TRIP BUILDER
              </span>
              <h2 className="text-xl sm:text-3xl font-heading font-extrabold text-white">
                Build My Semporna Trip
              </h2>
              <p className="text-xs text-gray-300 max-w-lg mx-auto md:mx-0">
                Answer 4 quick questions. We&apos;ll combine stays, native guides, island hopping & airport transfers into 1 custom bundle.
              </p>
            </div>

            <Link
              href="/trip-planner"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-gold-gradient text-navy font-heading font-extrabold text-xs tracking-wide shadow-lg flex items-center justify-center gap-1.5 flex-shrink-0 hover:opacity-95"
            >
              <span>Build Trip Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. AIRPORT TRANSFER BANNER */}
      <section className="py-8 sm:py-10 bg-navy-dark border-b border-gold-medium/15">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-white/5 border border-gold/20 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gold/20 text-gold flex items-center justify-center flex-shrink-0">
                <Bus className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-sm text-white">Tawau Airport (TWU) ↔ Semporna Transfer</h3>
                <span className="text-[11px] text-gray-400">Shared Van (RM35) or Private Car (RM120)</span>
              </div>
            </div>
            <Link
              href="/transfers"
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-white/10 text-white text-xs font-bold hover:bg-gold hover:text-navy transition-all border border-gold/30 text-center"
            >
              Book Transfer
            </Link>
          </div>
        </div>
      </section>

      {/* 8. MAHLIGAI BRAND EMBLEM STATEMENT */}
      <section className="py-12 sm:py-16 bg-navy relative border-b border-gold-medium/15 text-center px-4">
        <div className="max-w-2xl mx-auto space-y-3">
          <MahligaiLogo size="lg" className="justify-center" showSubtitle={false} />
          <h2 className="text-lg sm:text-2xl font-heading font-extrabold text-white">
            MAHLIGAI SEMPORNA <br />
            <span className="text-gold-gradient">WE CONNECT YOU WITH THE PEOPLE WHO CALL IT HOME</span>
          </h2>
          <p className="text-xs text-gold-light">Datu.H — Your Local Way to Semporna</p>
        </div>
      </section>

      {/* 9. PARTNER CTA */}
      <PartnerCta />
    </div>
  );
}
