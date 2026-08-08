'use client';

import React from 'react';
import Link from 'next/link';
import { User, Mail, Phone, Globe, Heart, ShoppingBag, Bell, Star, CreditCard } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

export default function ProfilePage() {
  const { t } = useLanguage();

  return (
    <div className="py-12 bg-navy min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header Profile Card */}
        <div className="bg-navy-dark border border-white/10 p-8 rounded-3xl flex flex-col sm:flex-row items-center gap-6 shadow-2xl">
          <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-ocean to-turquoise flex items-center justify-center text-navy font-heading font-extrabold text-3xl shadow-xl border-4 border-navy">
            HZ
          </div>
          <div className="space-y-1 text-center sm:text-left">
            <h1 className="text-2xl font-heading font-extrabold text-white">Hazriel Zakaria</h1>
            <p className="text-xs text-gray-400">hazriel@example.com • +6012-3456789</p>
            <div className="flex flex-wrap justify-center sm:justify-start gap-2 pt-2">
              <span className="text-[11px] bg-turquoise/20 text-turquoise px-3 py-0.5 rounded-full font-bold">Verified Traveler</span>
              <span className="text-[11px] bg-sand/20 text-sand px-3 py-0.5 rounded-full font-bold">Malaysia</span>
            </div>
          </div>
        </div>

        {/* Dashboard Grid Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/my-trips" className="bg-navy-dark border border-white/10 p-6 rounded-2xl space-y-3 hover:border-turquoise/50 transition-all">
            <ShoppingBag className="w-6 h-6 text-turquoise" />
            <h3 className="font-heading font-bold text-white text-base">My Bookings & Trips</h3>
            <p className="text-xs text-gray-400">View upcoming & past Semporna itineraries.</p>
          </Link>

          <Link href="/stays" className="bg-navy-dark border border-white/10 p-6 rounded-2xl space-y-3 hover:border-turquoise/50 transition-all">
            <Heart className="w-6 h-6 text-turquoise" />
            <h3 className="font-heading font-bold text-white text-base">Saved Wishlist</h3>
            <p className="text-xs text-gray-400">4 saved water chalets & island tours.</p>
          </Link>

          <div className="bg-navy-dark border border-white/10 p-6 rounded-2xl space-y-3">
            <Bell className="w-6 h-6 text-turquoise" />
            <h3 className="font-heading font-bold text-white text-base">Notifications</h3>
            <p className="text-xs text-gray-400">Trip reminders & WhatsApp alerts.</p>
          </div>
        </div>

        {/* Account Settings Detail Form */}
        <div className="bg-navy-dark border border-white/10 p-8 rounded-3xl space-y-6">
          <h3 className="font-heading font-bold text-lg text-white pb-4 border-b border-white/10">Personal Details</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="text-gray-400 uppercase font-semibold text-[10px] block mb-1">Full Name</label>
              <input type="text" readOnly value="Hazriel Zakaria" className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white" />
            </div>
            <div>
              <label className="text-gray-400 uppercase font-semibold text-[10px] block mb-1">Email</label>
              <input type="email" readOnly value="hazriel@example.com" className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white" />
            </div>
            <div>
              <label className="text-gray-400 uppercase font-semibold text-[10px] block mb-1">WhatsApp Number</label>
              <input type="text" readOnly value="+60123456789" className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white" />
            </div>
            <div>
              <label className="text-gray-400 uppercase font-semibold text-[10px] block mb-1">Country</label>
              <input type="text" readOnly value="Malaysia" className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
