'use client';

import React from 'react';
import Link from 'next/link';
import { Building2, ShieldCheck, DollarSign, Calendar, ArrowRight, Check } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

export default function PartnerLandingPage() {
  const { t } = useLanguage();

  return (
    <div className="py-16 bg-navy min-h-screen space-y-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span className="text-xs uppercase font-extrabold text-turquoise tracking-widest flex items-center justify-center gap-1.5">
          <Building2 className="w-4 h-4" /> PARTNER WITH SEMPORNA LOCAL
        </span>
        <h1 className="text-4xl sm:text-6xl font-heading font-extrabold text-white leading-tight">
          Share Semporna With The World
        </h1>
        <p className="text-base text-gray-300 max-w-2xl mx-auto">
          Are you a homestay owner, local guide, boat operator, transfer company or experience provider? Join our local booking platform with zero listing fees.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <Link
            href="/partner/dashboard"
            className="px-8 py-4 rounded-full bg-turquoise hover:bg-turquoise-light text-navy font-heading font-extrabold text-sm shadow-xl flex items-center justify-center gap-2"
          >
            <span>Enter Partner Dashboard Demo</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Benefits */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-navy-dark border border-white/10 space-y-3">
            <DollarSign className="w-8 h-8 text-turquoise" />
            <h3 className="font-heading font-extrabold text-xl text-white">Transparent Commission</h3>
            <p className="text-xs text-gray-400">Keep 85%-90% of every booking. Automatic weekly payouts direct to your Malaysian bank account.</p>
          </div>
          <div className="p-8 rounded-3xl bg-navy-dark border border-white/10 space-y-3">
            <ShieldCheck className="w-8 h-8 text-turquoise" />
            <h3 className="font-heading font-extrabold text-xl text-white">Verified Native Badge</h3>
            <p className="text-xs text-gray-400">Earn the trusted local host badge to attract high-value domestic & international tourists.</p>
          </div>
          <div className="p-8 rounded-3xl bg-navy-dark border border-white/10 space-y-3">
            <Calendar className="w-8 h-8 text-turquoise" />
            <h3 className="font-heading font-extrabold text-xl text-white">Realtime Calendar Sync</h3>
            <p className="text-xs text-gray-400">Manage room inventory, block dates, set seasonal rates, and track passenger manifests easily.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
