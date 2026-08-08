'use client';

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Star, Clock, MapPin, Check, X, ShieldCheck, Calendar, Users, ShoppingBag, AlertCircle } from 'lucide-react';
import { SAMPLE_EXPERIENCES } from '@/lib/mock-data';
import { useBasket } from '@/lib/store/basket';

export default function ExperienceDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { addItem } = useBasket();
  const slug = params?.slug as string;

  const exp = SAMPLE_EXPERIENCES.find((e) => e.slug === slug) || SAMPLE_EXPERIENCES[0];

  const [date, setDate] = useState('2026-09-14');
  const [selectedSlot, setSelectedSlot] = useState(exp.timeSlots[0] || '08:00 AM');
  const [pax, setPax] = useState(2);
  const [addedToast, setAddedToast] = useState(false);

  const subtotal = exp.price * pax;

  const handleBookExperience = () => {
    addItem({
      type: 'EXPERIENCE',
      referenceId: exp.id,
      title: exp.title,
      subtitle: `${exp.location} • ${selectedSlot}`,
      imageUrl: exp.images[0],
      startDate: date,
      quantity: pax,
      unitPrice: exp.price,
      partnerId: exp.partnerId,
      commissionRate: 18.0,
      metadata: {
        timeSlot: selectedSlot,
        pax,
        meetingPoint: exp.meetingPoint,
      },
    });

    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 4000);
  };

  return (
    <div className="py-8 bg-navy min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Toast */}
        {addedToast && (
          <div className="fixed top-20 right-6 z-50 bg-turquoise text-navy px-6 py-4 rounded-2xl shadow-2xl font-heading font-extrabold text-sm flex items-center gap-3 border border-white/20 animate-bounce">
            <Check className="w-5 h-5 stroke-[3]" />
            <span>Experience added to your Trip Basket!</span>
            <Link href="/checkout" className="underline text-navy ml-2">Checkout Now</Link>
          </div>
        )}

        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <Link href="/" className="hover:text-turquoise">Home</Link>
          <span>/</span>
          <Link href="/experiences" className="hover:text-turquoise">Experiences</Link>
          <span>/</span>
          <span className="text-turquoise font-semibold">{exp.title}</span>
        </div>

        {/* Hero Header */}
        <div className="relative rounded-3xl overflow-hidden aspect-[16/8] max-h-[420px] bg-navy-dark border border-white/10 shadow-2xl">
          <Image
            src={exp.images[0]}
            alt={exp.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 space-y-2">
            <span className="px-3 py-1 bg-turquoise text-navy font-bold text-xs rounded-full">
              {exp.category}
            </span>
            <h1 className="text-2xl sm:text-4xl font-heading font-extrabold text-white">
              {exp.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-xs text-gray-200">
              <span className="flex items-center gap-1 font-bold text-sand-light">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                {exp.rating} ({exp.reviewCount} reviews)
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4 text-turquoise" />
                {exp.duration}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4 text-turquoise" />
                {exp.location}
              </span>
            </div>
          </div>
        </div>

        {/* Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div className="space-y-3">
              <h2 className="text-2xl font-heading font-extrabold text-white">Overview</h2>
              <p className="text-sm text-gray-300 leading-relaxed">{exp.description}</p>
            </div>

            {/* Highlights */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              <h2 className="text-xl font-heading font-extrabold text-white">Tour Highlights</h2>
              <div className="space-y-2">
                {exp.highlights.map((h) => (
                  <div key={h} className="flex items-start gap-2.5 text-xs text-gray-200">
                    <Check className="w-4 h-4 text-turquoise flex-shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Included & Excluded */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-white/10">
              <div className="space-y-3 bg-white/5 p-5 rounded-2xl border border-white/5">
                <h3 className="font-heading font-bold text-turquoise text-sm uppercase tracking-wider">What&apos;s Included</h3>
                <ul className="space-y-2 text-xs text-gray-300">
                  {exp.included.map((inc) => (
                    <li key={inc} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-turquoise" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3 bg-white/5 p-5 rounded-2xl border border-white/5">
                <h3 className="font-heading font-bold text-red-400 text-sm uppercase tracking-wider">What&apos;s Not Included</h3>
                <ul className="space-y-2 text-xs text-gray-300">
                  {exp.notIncluded.map((not) => (
                    <li key={not} className="flex items-center gap-2">
                      <X className="w-3.5 h-3.5 text-red-400" />
                      <span>{not}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Meeting Point & Info */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              <div className="p-4 rounded-2xl bg-ocean/15 border border-ocean/30 flex items-start gap-3">
                <MapPin className="w-5 h-5 text-turquoise flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-xs uppercase tracking-wider">Meeting Point</h4>
                  <p className="text-xs text-aqua mt-0.5">{exp.meetingPoint}</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-sand/10 border border-sand/20 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-sand flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sand text-xs uppercase tracking-wider">Important Information</h4>
                  <p className="text-xs text-sand-light mt-0.5">{exp.importantInfo}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Booking Card */}
          <div>
            <div className="bg-navy-dark border border-turquoise/30 p-6 rounded-3xl sticky top-24 shadow-2xl space-y-6">
              <div className="pb-4 border-b border-white/10">
                <span className="text-[10px] uppercase font-bold text-gray-400">Price Per Person</span>
                <div className="text-3xl font-heading font-extrabold text-turquoise">
                  RM{exp.price}
                </div>
              </div>

              <div className="space-y-3">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-3">
                  <label className="text-[10px] uppercase font-bold text-sand-light block mb-1">Select Date</label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-transparent text-xs text-white font-bold focus:outline-none cursor-pointer"
                  />
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-3">
                  <label className="text-[10px] uppercase font-bold text-sand-light block mb-1">Time Slot</label>
                  <select
                    value={selectedSlot}
                    onChange={(e) => setSelectedSlot(e.target.value)}
                    className="w-full bg-transparent text-xs font-bold text-white focus:outline-none cursor-pointer"
                  >
                    {exp.timeSlots.map((slot) => (
                      <option key={slot} value={slot} className="bg-navy-dark">{slot}</option>
                    ))}
                  </select>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-3">
                  <label className="text-[10px] uppercase font-bold text-sand-light block mb-1">Number of Pax</label>
                  <select
                    value={pax}
                    onChange={(e) => setPax(Number(e.target.value))}
                    className="w-full bg-transparent text-xs font-bold text-white focus:outline-none cursor-pointer"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                      <option key={n} value={n} className="bg-navy-dark">{n} Person(s)</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex justify-between font-bold text-base text-white pt-2 border-t border-white/10">
                <span>Subtotal</span>
                <span className="text-turquoise">RM{subtotal}</span>
              </div>

              <button
                onClick={handleBookExperience}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-turquoise to-ocean text-navy font-heading font-extrabold text-sm tracking-wide hover:opacity-95 transition-all shadow-xl shadow-turquoise/20 flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4 stroke-[2.5]" />
                <span>Add Experience To Basket</span>
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-gray-400">
                <ShieldCheck className="w-3.5 h-3.5 text-turquoise" />
                <span>Instant Voucher Confirmation</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
