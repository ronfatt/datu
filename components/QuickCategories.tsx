'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Home, Compass, Users, Waves, Bus, Sparkles, Camera, Utensils } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

export default function QuickCategories() {
  const { t } = useLanguage();

  const categories = [
    {
      id: 'stay',
      name: t('cat_stay'),
      desc: 'Boutique homestays & water chalets',
      icon: Home,
      href: '/stays',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'island',
      name: t('cat_island'),
      desc: 'Mabul, Bohey Dulang & Sibuan',
      icon: Compass,
      href: '/experiences?category=Island%20Hopping',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'guides',
      name: t('cat_guides'),
      desc: 'Licensed native hosts & captains',
      icon: Users,
      href: '/guides',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'diving',
      name: t('cat_diving'),
      desc: 'Sipadan permits & Discover Scuba',
      icon: Waves,
      href: '/experiences?category=Diving%20%26%20Snorkelling',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'transfers',
      name: t('cat_transfers'),
      desc: 'Tawau Airport ↔ Semporna shuttle',
      icon: Bus,
      href: '/transfers',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'experiences',
      name: t('cat_experiences'),
      desc: 'Private island picnics & cruises',
      icon: Sparkles,
      href: '/experiences',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'photography',
      name: t('cat_photography'),
      desc: '4K Drone reels & GoPro videos',
      icon: Camera,
      href: '/experiences?category=Photography',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'food',
      name: t('cat_food'),
      desc: 'Live seafood market & Bajau feasts',
      icon: Utensils,
      href: '/experiences?category=Food%20%26%20Culture',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80',
    },
  ];

  return (
    <section className="py-16 bg-navy border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs uppercase font-extrabold text-turquoise tracking-widest">
              DISCOVER BY CATEGORY
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-white mt-1">
              {t('cat_explore')}
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link
                key={cat.id}
                href={cat.href}
                className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 p-3 sm:p-4 flex flex-col justify-between min-h-[140px] hover:border-turquoise/50 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 shadow-card"
              >
                {/* Category Image Overlay */}
                <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-40 transition-opacity">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-transparent" />
                </div>

                <div className="relative z-10 w-9 h-9 rounded-xl bg-turquoise/20 text-turquoise flex items-center justify-center group-hover:bg-turquoise group-hover:text-navy transition-colors">
                  <Icon className="w-5 h-5 stroke-[2.5]" />
                </div>

                <div className="relative z-10 mt-4">
                  <h3 className="font-heading font-bold text-sm text-white group-hover:text-turquoise transition-colors leading-tight">
                    {cat.name}
                  </h3>
                  <p className="text-[11px] text-gray-400 mt-0.5 line-clamp-1">
                    {cat.desc}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
