'use client';

import React from 'react';
import Link from 'next/link';
import { Building2, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

export default function PartnerCta() {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-gradient-to-r from-navy via-navy-light to-navy border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-ocean/30 to-turquoise/20 border border-turquoise/30 p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-glass">
          <div className="space-y-3 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-turquoise/20 text-turquoise text-xs font-bold border border-turquoise/30">
              <Building2 className="w-4 h-4" />
              <span>PARTNER NETWORK</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
              {t('partner_cta_title')}
            </h2>
            <p className="text-sm text-gray-300 max-w-xl">
              {t('partner_cta_desc')} Join Semporna Local to list your stay, boat trips or tours with zero upfront listing fees.
            </p>
          </div>

          <Link
            href="/partner"
            className="px-6 py-4 rounded-xl bg-turquoise hover:bg-turquoise-light text-navy font-heading font-extrabold text-sm tracking-wide transition-all shadow-lg shadow-turquoise/20 flex items-center gap-2 group flex-shrink-0"
          >
            <span>{t('become_partner')}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform stroke-[2.5]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
