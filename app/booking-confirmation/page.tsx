'use client';

import React, { Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { CheckCircle2, Compass, MessageCircle, MapPin, Phone, Printer } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

function BookingContent() {
  const searchParams = useSearchParams();
  const bookingNumber = searchParams?.get('bookingNumber') || 'SMPR-2026-849201';
  const { t } = useLanguage();

  return (
    <div className="space-y-8">
      {/* Success Banner */}
      <div className="bg-navy-dark border border-turquoise/40 rounded-3xl p-8 text-center space-y-4 shadow-2xl relative overflow-hidden">
        <div className="w-16 h-16 rounded-full bg-turquoise/20 text-turquoise flex items-center justify-center mx-auto border border-turquoise/40 animate-pulse">
          <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
        </div>

        <div className="space-y-1">
          <span className="text-xs uppercase font-extrabold text-turquoise tracking-widest">
            BOOKING CONFIRMED & PAID
          </span>
          <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-white">
            You&apos;re All Set For Semporna!
          </h1>
          <p className="text-xs text-gray-300">
            Booking Reference: <strong className="text-turquoise font-mono text-sm">{bookingNumber}</strong>
          </p>
        </div>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/my-trips"
            className="px-6 py-3 rounded-full bg-turquoise text-navy font-heading font-extrabold text-xs flex items-center gap-2 shadow-lg"
          >
            <Compass className="w-4 h-4" />
            <span>View My Trip Itinerary</span>
          </Link>

          <button
            onClick={() => window.print()}
            className="px-5 py-3 rounded-full bg-white/10 text-white font-semibold text-xs border border-white/20 hover:bg-white/20 flex items-center gap-2"
          >
            <Printer className="w-4 h-4 text-turquoise" />
            <span>Print Voucher</span>
          </button>

          <a
            href="https://wa.me/60123456789"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-3 rounded-full bg-emerald-500/20 text-emerald-300 font-semibold text-xs border border-emerald-500/30 hover:bg-emerald-500/30 flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>WhatsApp Support</span>
          </a>
        </div>
      </div>

      {/* VOUCHER CARD DETAILS */}
      <div className="bg-navy-dark border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
        <div className="flex justify-between items-center pb-4 border-b border-white/10">
          <div>
            <h3 className="font-heading font-extrabold text-lg text-white">Semporna Local Travel Voucher</h3>
            <p className="text-xs text-gray-400">Payer: Hazriel Zakaria (hazriel@example.com)</p>
          </div>
          <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold px-3 py-1 rounded-full">
            Status: CONFIRMED
          </span>
        </div>

        {/* Reserved Services */}
        <div className="space-y-4">
          <h4 className="font-heading font-bold text-xs uppercase text-sand-light tracking-wider">Reserved Booking Items</h4>
          
          <div className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-2">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] bg-turquoise/20 text-turquoise font-bold uppercase px-2 py-0.5 rounded">STAY</span>
                <h5 className="font-heading font-bold text-base text-white mt-1">Sea Breeze Homestay & Water Chalets</h5>
                <p className="text-xs text-gray-300">Overwater Deluxe King Chalet • 12 Sep - 15 Sep 2026 (3 Nights)</p>
              </div>
              <span className="font-bold text-sm text-turquoise">RM840.00</span>
            </div>
            <div className="text-xs text-gray-400 pt-1 flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-turquoise" />
              <span>Jalan Causeway, Oceanfront Promenade, Semporna</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-2">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] bg-turquoise/20 text-turquoise font-bold uppercase px-2 py-0.5 rounded">GUIDE</span>
                <h5 className="font-heading font-bold text-base text-white mt-1">Local Guide: Amin Rahman</h5>
                <p className="text-xs text-gray-300">Full Day Island Expedition • 13 Sep 2026</p>
              </div>
              <span className="font-bold text-sm text-turquoise">RM180.00</span>
            </div>
            <div className="text-xs text-gray-400 pt-1 flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-turquoise" />
              <span>Guide Contact: +60 19-823 4192 (WhatsApp Unlocked)</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-2">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] bg-turquoise/20 text-turquoise font-bold uppercase px-2 py-0.5 rounded">TRANSFER</span>
                <h5 className="font-heading font-bold text-base text-white mt-1">Private MPV Airport Transfer</h5>
                <p className="text-xs text-gray-300">Tawau Airport (TWU) ↔ Semporna Homestay • Flight AK6260</p>
              </div>
              <span className="font-bold text-sm text-turquoise">RM120.00</span>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-white/10 flex justify-between text-xs text-gray-400">
          <span>Payment Method: Online Banking / Card</span>
          <span className="text-white font-bold">Total Paid: RM1,140.00</span>
        </div>
      </div>
    </div>
  );
}

export default function BookingConfirmationPage() {
  return (
    <div className="py-12 bg-navy min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Suspense fallback={<div className="text-white text-center py-10">Loading Confirmation Voucher...</div>}>
          <BookingContent />
        </Suspense>
      </div>
    </div>
  );
}
