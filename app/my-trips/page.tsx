'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Compass, Calendar, Clock, MapPin, CheckCircle, ArrowRight, Bus, Home, Users, Sparkles } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

export default function MyTripsPage() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'upcoming' | 'completed' | 'cancelled'>('upcoming');

  return (
    <div className="py-12 bg-navy min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs uppercase font-extrabold text-turquoise tracking-widest flex items-center gap-1.5">
              <Compass className="w-4 h-4" /> CUSTOMER DASHBOARD
            </span>
            <h1 className="text-3xl font-heading font-extrabold text-white mt-1">My Semporna Trips</h1>
          </div>

          <Link
            href="/trip-planner"
            className="px-5 py-2.5 rounded-full bg-turquoise text-navy font-bold text-xs hover:bg-turquoise-light transition-all shadow-md flex items-center gap-1.5 w-fit"
          >
            <Sparkles className="w-4 h-4" />
            <span>Plan New Trip</span>
          </Link>
        </div>

        {/* Status Tabs */}
        <div className="flex border-b border-white/10 gap-4 text-sm font-semibold">
          <button
            onClick={() => setActiveTab('upcoming')}
            className={`pb-3 transition-colors ${
              activeTab === 'upcoming' ? 'text-turquoise border-b-2 border-turquoise font-bold' : 'text-gray-400 hover:text-white'
            }`}
          >
            Upcoming Trips (1)
          </button>
          <button
            onClick={() => setActiveTab('completed')}
            className={`pb-3 transition-colors ${
              activeTab === 'completed' ? 'text-turquoise border-b-2 border-turquoise font-bold' : 'text-gray-400 hover:text-white'
            }`}
          >
            Completed (2)
          </button>
          <button
            onClick={() => setActiveTab('cancelled')}
            className={`pb-3 transition-colors ${
              activeTab === 'cancelled' ? 'text-turquoise border-b-2 border-turquoise font-bold' : 'text-gray-400 hover:text-white'
            }`}
          >
            Cancelled (0)
          </button>
        </div>

        {/* TRIP TIMELINE CARD */}
        {activeTab === 'upcoming' && (
          <div className="bg-navy-dark border border-turquoise/30 rounded-3xl p-6 sm:p-8 space-y-8 shadow-2xl">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div>
                <span className="text-[10px] uppercase font-bold text-sand-light">BOOKING ID: SMPR-2026-849201</span>
                <h2 className="text-2xl font-heading font-extrabold text-white mt-0.5">
                  MY SEMPORNA TRIP (4 DAYS)
                </h2>
                <p className="text-xs text-gray-400">12 SEP 2026 – 15 SEP 2026</p>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold rounded-full">
                  CONFIRMED
                </span>
                <Link
                  href="/booking-confirmation?bookingNumber=SMPR-2026-849201"
                  className="px-3 py-1 bg-white/10 text-white text-xs font-semibold rounded-full hover:bg-white/20"
                >
                  View Voucher
                </Link>
              </div>
            </div>

            {/* TIMELINE DAYS */}
            <div className="space-y-8 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-0.5 before:bg-turquoise/20">
              
              {/* DAY 1 */}
              <div className="relative pl-10 space-y-3">
                <div className="absolute left-2.5 top-1.5 w-3.5 h-3.5 rounded-full bg-turquoise border-4 border-navy" />
                <div className="flex items-center gap-2">
                  <span className="font-heading font-extrabold text-sm text-turquoise">12 SEP 2026</span>
                  <span className="text-xs text-gray-400 font-semibold">• Day 1 Arrival</span>
                </div>
                <div className="space-y-2 bg-white/5 border border-white/5 p-4 rounded-2xl">
                  <div className="flex items-center gap-3 text-xs text-gray-200">
                    <Clock className="w-4 h-4 text-turquoise" />
                    <span className="font-mono font-bold text-sand-light">14:10</span>
                    <span>Tawau Airport Arrival (Flight AK6260) — Private Transfer pickup</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-gray-200 pt-2 border-t border-white/5">
                    <Home className="w-4 h-4 text-turquoise" />
                    <span className="font-mono font-bold text-sand-light">16:00</span>
                    <span>Check-in Sea Breeze Homestay (Overwater Deluxe Chalet)</span>
                  </div>
                </div>
              </div>

              {/* DAY 2 */}
              <div className="relative pl-10 space-y-3">
                <div className="absolute left-2.5 top-1.5 w-3.5 h-3.5 rounded-full bg-turquoise border-4 border-navy" />
                <div className="flex items-center gap-2">
                  <span className="font-heading font-extrabold text-sm text-turquoise">13 SEP 2026</span>
                  <span className="text-xs text-gray-400 font-semibold">• Day 2 Island Hopping</span>
                </div>
                <div className="space-y-2 bg-white/5 border border-white/5 p-4 rounded-2xl">
                  <div className="flex items-center gap-3 text-xs text-gray-200">
                    <Sparkles className="w-4 h-4 text-turquoise" />
                    <span className="font-mono font-bold text-sand-light">08:00</span>
                    <span>Mabul & Kapalai Island Day Tour with Native Guide Amin Rahman</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-gray-200 pt-2 border-t border-white/5">
                    <Clock className="w-4 h-4 text-turquoise" />
                    <span className="font-mono font-bold text-sand-light">17:00</span>
                    <span>Return to Semporna Pier & Seafood Dinner</span>
                  </div>
                </div>
              </div>

              {/* DAY 3 */}
              <div className="relative pl-10 space-y-3">
                <div className="absolute left-2.5 top-1.5 w-3.5 h-3.5 rounded-full bg-turquoise border-4 border-navy" />
                <div className="flex items-center gap-2">
                  <span className="font-heading font-extrabold text-sm text-turquoise">14 SEP 2026</span>
                  <span className="text-xs text-gray-400 font-semibold">• Day 3 Marine Park</span>
                </div>
                <div className="space-y-2 bg-white/5 border border-white/5 p-4 rounded-2xl">
                  <div className="flex items-center gap-3 text-xs text-gray-200">
                    <Users className="w-4 h-4 text-turquoise" />
                    <span className="font-mono font-bold text-sand-light">07:45</span>
                    <span>Bohey Dulang Lagoon Hike & Sibuan Sandbar Snorkelling</span>
                  </div>
                </div>
              </div>

              {/* DAY 4 */}
              <div className="relative pl-10 space-y-3">
                <div className="absolute left-2.5 top-1.5 w-3.5 h-3.5 rounded-full bg-turquoise border-4 border-navy" />
                <div className="flex items-center gap-2">
                  <span className="font-heading font-extrabold text-sm text-turquoise">15 SEP 2026</span>
                  <span className="text-xs text-gray-400 font-semibold">• Day 4 Departure</span>
                </div>
                <div className="space-y-2 bg-white/5 border border-white/5 p-4 rounded-2xl">
                  <div className="flex items-center gap-3 text-xs text-gray-200">
                    <Home className="w-4 h-4 text-turquoise" />
                    <span className="font-mono font-bold text-sand-light">12:00</span>
                    <span>Check-out Sea Breeze Homestay</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-gray-200 pt-2 border-t border-white/5">
                    <Bus className="w-4 h-4 text-turquoise" />
                    <span className="font-mono font-bold text-sand-light">12:30</span>
                    <span>Airport Transfer back to Tawau Airport (TWU)</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
}
