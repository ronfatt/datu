'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/60123456789?text=Hello%20Semporna%20Local!%20I%20have%20a%20question%20about%20booking."
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-20 lg:bottom-6 right-5 z-40 flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white font-semibold text-xs shadow-2xl transition-all duration-300 transform hover:scale-105 group border border-emerald-400/50"
      aria-label="Contact WhatsApp Support"
    >
      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
        <MessageCircle className="w-4 h-4 text-white fill-current" />
      </div>
      <span className="hidden sm:inline font-bold">Need Help? Chat With Our Local Team</span>
      <span className="sm:hidden font-bold">WhatsApp</span>
    </a>
  );
}
