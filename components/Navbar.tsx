'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingBag, User, Compass, Globe, Menu, X } from 'lucide-react';
import { useBasket } from '@/lib/store/basket';
import { useLanguage } from '@/lib/i18n';
import BasketDrawer from './BasketDrawer';
import MahligaiLogo from './MahligaiLogo';

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
      <header className="sticky top-0 z-40 w-full bg-navy/95 backdrop-blur-md border-b border-gold-medium/25 text-white transition-all shadow-glass">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-22 py-2">
            
            {/* Mahligai Semporna Brand Logo - Perfect Mobile Optical Alignment */}
            <Link href="/" className="flex items-center group py-1">
              <MahligaiLogo size="sm" showSubtitle={true} />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3.5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                      isActive
                        ? 'bg-gold/20 text-gold border border-gold/40'
                        : 'text-gray-300 hover:text-gold-light hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Action Items - Perfectly Centered Grid on Mobile */}
            <div className="flex items-center gap-1.5 sm:gap-3">
              {/* Language Switcher */}
              <div className="relative">
                <button
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  className="flex items-center gap-1 px-2 py-1.5 rounded-lg border border-gold/30 bg-white/5 text-[11px] sm:text-xs text-gray-200 hover:border-gold transition-colors"
                >
                  <Globe className="w-3.5 h-3.5 text-gold" />
                  <span className="uppercase font-semibold text-gold-light">{language}</span>
                </button>

                {isLangMenuOpen && (
                  <div className="absolute right-0 mt-2 w-36 bg-navy-dark border border-gold/30 rounded-xl shadow-glass overflow-hidden z-50">
                    <button
                      onClick={() => { setLanguage('en'); setIsLangMenuOpen(false); }}
                      className={`w-full text-left px-4 py-2.5 text-xs font-medium ${language === 'en' ? 'bg-gold/20 text-gold' : 'text-gray-300 hover:bg-white/5'}`}
                    >
                      English (EN)
                    </button>
                    <button
                      onClick={() => { setLanguage('ms'); setIsLangMenuOpen(false); }}
                      className={`w-full text-left px-4 py-2.5 text-xs font-medium ${language === 'ms' ? 'bg-gold/20 text-gold' : 'text-gray-300 hover:bg-white/5'}`}
                    >
                      Bahasa Melayu (MS)
                    </button>
                    <button
                      onClick={() => { setLanguage('zh'); setIsLangMenuOpen(false); }}
                      className={`w-full text-left px-4 py-2.5 text-xs font-medium ${language === 'zh' ? 'bg-gold/20 text-gold' : 'text-gray-300 hover:bg-white/5'}`}
                    >
                      简体中文 (ZH)
                    </button>
                  </div>
                )}
              </div>

              {/* Basket Icon Button */}
              <button
                onClick={() => setIsBasketOpen(true)}
                className="relative p-2 sm:p-2.5 rounded-full bg-white/5 hover:bg-gold/20 border border-gold/30 text-white hover:text-gold transition-all"
                aria-label="Open Travel Basket"
              >
                <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 text-gold" />
                {items.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-gold text-navy font-extrabold text-[10px] sm:text-xs rounded-full flex items-center justify-center animate-bounce shadow-md">
                    {items.length}
                  </span>
                )}
              </button>

              {/* My Trips Link */}
              <Link
                href="/my-trips"
                className="hidden sm:flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-gold-light bg-gold/15 hover:bg-gold/30 rounded-lg transition-colors border border-gold/40"
              >
                <Compass className="w-4 h-4 text-gold" />
                <span>{t('nav_my_trips')}</span>
              </Link>

              {/* User Profile / Login */}
              <Link
                href="/login"
                className="p-2 sm:p-2.5 rounded-full bg-gold-gradient text-navy font-bold hover:opacity-90 transition-opacity shadow-md shadow-gold/20"
                aria-label="Profile"
              >
                <User className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>

              {/* Mobile Hamburger Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-1.5 text-gray-300 hover:text-gold"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Expanded Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gold/20 bg-navy px-4 pt-3 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-2.5 rounded-xl text-base font-medium text-gray-200 hover:text-gold hover:bg-white/5"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <Link
                href="/my-trips"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-gold/10 text-gold border border-gold/30"
              >
                <Compass className="w-4 h-4" />
                <span>{t('nav_my_trips')}</span>
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Universal Travel Basket Slideover Drawer */}
      <BasketDrawer isOpen={isBasketOpen} onClose={() => setIsBasketOpen(false)} />
    </>
  );
}
