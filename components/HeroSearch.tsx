'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, MapPin, Calendar, Users } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

export default function HeroSearch() {
  const router = useRouter();
  const { t } = useLanguage();
  const [location, setLocation] = useState('Semporna');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2 Guests');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/stays?location=${encodeURIComponent(location)}&guests=${encodeURIComponent(guests)}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="w-full max-w-4xl mx-auto bg-navy/80 backdrop-blur-xl border border-gold/40 rounded-2xl sm:rounded-full p-3 sm:p-2 shadow-2xl flex flex-col sm:flex-row items-stretch sm:items-center gap-2 transition-all hover:border-gold shadow-gold-glow"
    >
      {/* Destination */}
      <div className="flex-1 flex items-center gap-3 px-4 py-2.5 sm:py-2 rounded-xl sm:rounded-full hover:bg-white/5 transition-colors cursor-pointer border-b sm:border-b-0 sm:border-r border-gold/20">
        <MapPin className="w-5 h-5 text-gold flex-shrink-0" />
        <div className="flex flex-col text-left">
          <span className="text-[10px] uppercase font-bold tracking-wider text-gold-medium">{t('search_destination')}</span>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="bg-transparent text-sm font-bold text-white focus:outline-none cursor-pointer pr-2"
          >
            <option value="Semporna" className="bg-navy-dark text-white">Semporna (All Areas)</option>
            <option value="Semporna Town" className="bg-navy-dark text-white">Semporna Town</option>
            <option value="Seafront" className="bg-navy-dark text-white">Seafront Promenade</option>
            <option value="Mabul Island" className="bg-navy-dark text-white">Mabul Island</option>
            <option value="Kapalai" className="bg-navy-dark text-white">Kapalai Water Village</option>
            <option value="Bohey Dulang" className="bg-navy-dark text-white">Bohey Dulang Marine Park</option>
          </select>
        </div>
      </div>

      {/* Check In */}
      <div className="flex-1 flex items-center gap-3 px-4 py-2.5 sm:py-2 rounded-xl sm:rounded-full hover:bg-white/5 transition-colors border-b sm:border-b-0 sm:border-r border-gold/20">
        <Calendar className="w-5 h-5 text-gold flex-shrink-0" />
        <div className="flex flex-col text-left">
          <span className="text-[10px] uppercase font-bold tracking-wider text-gold-medium">{t('search_checkin')}</span>
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="bg-transparent text-xs sm:text-sm font-semibold text-white focus:outline-none cursor-pointer"
          />
        </div>
      </div>

      {/* Check Out */}
      <div className="flex-1 flex items-center gap-3 px-4 py-2.5 sm:py-2 rounded-xl sm:rounded-full hover:bg-white/5 transition-colors border-b sm:border-b-0 sm:border-r border-gold/20">
        <Calendar className="w-5 h-5 text-gold flex-shrink-0" />
        <div className="flex flex-col text-left">
          <span className="text-[10px] uppercase font-bold tracking-wider text-gold-medium">{t('search_checkout')}</span>
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="bg-transparent text-xs sm:text-sm font-semibold text-white focus:outline-none cursor-pointer"
          />
        </div>
      </div>

      {/* Guests */}
      <div className="flex-1 flex items-center gap-3 px-4 py-2.5 sm:py-2 rounded-xl sm:rounded-full hover:bg-white/5 transition-colors">
        <Users className="w-5 h-5 text-gold flex-shrink-0" />
        <div className="flex flex-col text-left">
          <span className="text-[10px] uppercase font-bold tracking-wider text-gold-medium">{t('search_guests')}</span>
          <select
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="bg-transparent text-sm font-bold text-white focus:outline-none cursor-pointer pr-2"
          >
            <option value="1 Guest" className="bg-navy-dark text-white">1 Guest (Solo)</option>
            <option value="2 Guests" className="bg-navy-dark text-white">2 Guests (Couple)</option>
            <option value="3-4 Guests" className="bg-navy-dark text-white">3-4 Guests (Small Group)</option>
            <option value="5+ Guests" className="bg-navy-dark text-white">5+ Guests (Family)</option>
          </select>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full sm:w-auto px-6 py-3.5 sm:py-4 rounded-xl sm:rounded-full bg-gold-gradient text-navy font-heading font-extrabold text-sm tracking-wide transition-all shadow-lg shadow-gold/20 flex items-center justify-center gap-2 group flex-shrink-0 hover:opacity-95"
      >
        <Search className="w-4 h-4 stroke-[2.5]" />
        <span>{t('search_button')}</span>
      </button>
    </form>
  );
}
