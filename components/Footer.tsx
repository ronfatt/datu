'use client';

import React from 'react';
import Link from 'next/link';
import { Palmtree, Globe, ShieldCheck, Heart, MessageCircle, Share2, Compass } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-navy-dark text-gray-300 border-t border-white/10 pt-16 pb-24 lg:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-ocean to-turquoise flex items-center justify-center text-navy shadow-md">
                <Palmtree className="w-6 h-6 stroke-[2.5]" />
              </div>
              <span className="font-heading font-extrabold text-xl tracking-tight text-white">
                SEMPORNA <span className="text-turquoise">LOCAL</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 max-w-sm">
              Handpicked local stays, trusted guides, authentic island experiences, and airport transfers — all in one local booking platform.
            </p>
            <p className="text-xs text-sand font-medium">
              &ldquo;WE DON’T JUST SHOW YOU SEMPORNA. WE CONNECT YOU WITH THE PEOPLE WHO CALL IT HOME.&rdquo;
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://wa.me/60123456789"
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-1.5 rounded-full bg-turquoise/10 border border-turquoise/30 flex items-center gap-1.5 text-xs text-turquoise hover:bg-turquoise hover:text-navy transition-colors font-bold"
                aria-label="WhatsApp Support"
              >
                <MessageCircle className="w-4 h-4" />
                <span>24/7 WhatsApp Support</span>
              </a>
            </div>
          </div>

          {/* Explore Links */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/stays" className="hover:text-turquoise transition-colors">Stays & Homestays</Link></li>
              <li><Link href="/experiences" className="hover:text-turquoise transition-colors">Island Experiences</Link></li>
              <li><Link href="/guides" className="hover:text-turquoise transition-colors">Local Guides</Link></li>
              <li><Link href="/transfers" className="hover:text-turquoise transition-colors">Airport Transfers</Link></li>
              <li><Link href="/trip-planner" className="hover:text-turquoise transition-colors">Interactive Trip Planner</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/#story" className="hover:text-turquoise transition-colors">About Semporna Local</Link></li>
              <li><Link href="/partner" className="text-sand font-semibold hover:underline">Become A Partner</Link></li>
              <li><Link href="/partner/dashboard" className="hover:text-turquoise transition-colors">Partner Portal</Link></li>
              <li><Link href="/admin" className="hover:text-turquoise transition-colors">Admin Portal</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://wa.me/60123456789" target="_blank" rel="noreferrer" className="text-turquoise hover:underline">Help Centre & WhatsApp Support</a></li>
              <li><Link href="#" className="hover:text-turquoise transition-colors">Cancellation Policy</Link></li>
              <li><Link href="#" className="hover:text-turquoise transition-colors">Booking Guarantee</Link></li>
              <li><Link href="#" className="hover:text-turquoise transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-turquoise transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© 2026 Semporna Local. All rights reserved. Semporna, Sabah, Malaysia.</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1"><Globe className="w-3.5 h-3.5 text-turquoise" /> MYR (RM)</span>
            <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-turquoise" /> Verified Sabah Tourism Platform</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
