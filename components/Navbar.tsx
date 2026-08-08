'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingBag, User, Compass, Palmtree, Map, Globe, Menu, X, ShieldCheck } from 'lucide-react';
import { useBasket } from '@/lib/store/basket';
import { useLanguage, Language } from '@/lib/i18n';
import BasketDrawer from './BasketDrawer';

export default function Navbar() {
  const pathname = usePathname();
  const { items } = useBasket();
  const { language, setLanguage, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBasketOpen, setIsBasketOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const navLinks = [
    { name: t('nav_discover'), href: '/' },
    { name: t('nav_stays'), href: '/stays' },
    { name: t('nav_guides'), href: '/guides' },
    { name: t('nav_experiences'), href: '/experiences' },
    { name: t('nav_transfers'), href: '/transfers' },
    { name: t('nav_trip_planner'), href: '/trip-planner' },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-navy/95 backdrop-blur-md border-b border-white/10 text-white transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-ocean to-turquoise flex items-center justify-center text-navy shadow-md shadow-turquoise/20 group-hover:scale-105 transition-transform">
                <Palmtree className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-xl tracking-tight text-white flex items-center gap-1">
                  SEMPORNA <span className="text-turquoise">LOCAL</span>
                </span>
                <span className="text-[10px] tracking-widest uppercase font-semibold text-sand-light/80 -mt-1">
                  Discover Like a Local
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3.5 py-2 rounded-full text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-turquoise/15 text-turquoise font-semibold'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Action Items */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Language Switcher */}
              <div className="relative">
                <button
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-white/10 bg-white/5 text-xs text-gray-200 hover:border-turquoise/50 transition-colors"
                >
                  <Globe className="w-3.5 h-3.5 text-turquoise" />
                  <span className="uppercase font-semibold">{language}</span>
                </button>

                {isLangMenuOpen && (
                  <div className="absolute right-0 mt-2 w-36 bg-navy-dark border border-white/10 rounded-xl shadow-glass overflow-hidden z-50">
                    <button
                      onClick={() => { setLanguage('en'); setIsLangMenuOpen(false); }}
                      className={`w-full text-left px-4 py-2.5 text-xs font-medium ${language === 'en' ? 'bg-turquoise/20 text-turquoise' : 'text-gray-300 hover:bg-white/5'}`}
                    >
                      English (EN)
                    </button>
                    <button
                      onClick={() => { setLanguage('ms'); setIsLangMenuOpen(false); }}
                      className={`w-full text-left px-4 py-2.5 text-xs font-medium ${language === 'ms' ? 'bg-turquoise/20 text-turquoise' : 'text-gray-300 hover:bg-white/5'}`}
                    >
                      Bahasa Melayu (MS)
                    </button>
                    <button
                      onClick={() => { setLanguage('zh'); setIsLangMenuOpen(false); }}
                      className={`w-full text-left px-4 py-2.5 text-xs font-medium ${language === 'zh' ? 'bg-turquoise/20 text-turquoise' : 'text-gray-300 hover:bg-white/5'}`}
                    >
                      简体中文 (ZH)
                    </button>
                  </div>
                )}
              </div>

              {/* Basket Icon Button */}
              <button
                onClick={() => setIsBasketOpen(true)}
                className="relative p-2.5 rounded-full bg-white/5 hover:bg-turquoise/20 border border-white/10 text-white hover:text-turquoise transition-all"
                aria-label="Open Travel Basket"
              >
                <ShoppingBag className="w-5 h-5" />
                {items.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-turquoise text-navy font-bold text-xs rounded-full flex items-center justify-center animate-bounce shadow-md">
                    {items.length}
                  </span>
                )}
              </button>

              {/* My Trips Link */}
              <Link
                href="/my-trips"
                className="hidden sm:flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-white/10 hover:bg-white/20 rounded-lg transition-colors border border-white/10"
              >
                <Compass className="w-4 h-4 text-turquoise" />
                <span>{t('nav_my_trips')}</span>
              </Link>

              {/* User Profile / Login */}
              <Link
                href="/login"
                className="p-2.5 rounded-full bg-turquoise text-navy font-bold hover:bg-turquoise-light transition-colors shadow-md shadow-turquoise/20"
                aria-label="Profile"
              >
                <User className="w-5 h-5" />
              </Link>

              {/* Mobile Hamburger Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-gray-300 hover:text-white"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Expanded Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-white/10 bg-navy px-4 pt-3 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-2.5 rounded-xl text-base font-medium text-gray-200 hover:text-turquoise hover:bg-white/5"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <Link
                href="/my-trips"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-white/5 text-turquoise"
              >
                <Compass className="w-4 h-4" />
                <span>{t('nav_my_trips')}</span>
              </Link>
              <div className="flex items-center justify-between px-4 pt-2">
                <Link href="/partner" className="text-xs text-sand hover:underline">
                  {t('nav_partner')}
                </Link>
                <Link href="/admin" className="text-xs text-gray-400 hover:underline">
                  {t('nav_admin')}
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Universal Travel Basket Slideover Drawer */}
      <BasketDrawer isOpen={isBasketOpen} onClose={() => setIsBasketOpen(false)} />
    </>
  );
}
