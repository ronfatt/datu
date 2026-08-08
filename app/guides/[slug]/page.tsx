'use client';

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Star, ShieldCheck, Languages, Award, Check, Calendar, Users, ShoppingBag } from 'lucide-react';
import { SAMPLE_GUIDES } from '@/lib/mock-data';
import { useBasket } from '@/lib/store/basket';

export default function GuideDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { addItem } = useBasket();
  const slug = params?.slug as string;

  const guide = SAMPLE_GUIDES.find((g) => g.slug === slug) || SAMPLE_GUIDES[0];

  const [selectedPkg, setSelectedPkg] = useState(guide.packages[0] || null);
  const [date, setDate] = useState('2026-09-13');
  const [travellers, setTravellers] = useState(2);
  const [addedToast, setAddedToast] = useState(false);

  const pkgPrice = selectedPkg?.price || guide.dailyRate;

  const handleBookGuide = () => {
    addItem({
      type: 'GUIDE',
      referenceId: guide.id,
      title: `Local Guide: ${guide.name}`,
      subtitle: selectedPkg?.name || 'Full Day Private Guide',
      imageUrl: guide.avatarUrl,
      startDate: date,
      quantity: 1,
      unitPrice: pkgPrice,
      partnerId: guide.partnerId,
      commissionRate: 15.0,
      metadata: {
        guideName: guide.name,
        package: selectedPkg?.name,
        travellers,
      },
    });

    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 4000);
  };

  return (
    <div className="py-10 bg-navy min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Toast */}
        {addedToast && (
          <div className="fixed top-20 right-6 z-50 bg-turquoise text-navy px-6 py-4 rounded-2xl shadow-2xl font-heading font-extrabold text-sm flex items-center gap-3 border border-white/20 animate-bounce">
            <Check className="w-5 h-5 stroke-[3]" />
            <span>Guide added to your Trip Basket!</span>
            <Link href="/checkout" className="underline text-navy ml-2">Checkout Now</Link>
          </div>
        )}

        {/* Header Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <Link href="/" className="hover:text-turquoise">Home</Link>
          <span>/</span>
          <Link href="/guides" className="hover:text-turquoise">Local Guides</Link>
          <span>/</span>
          <span className="text-turquoise font-semibold">{guide.name}</span>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Left Guide Profile */}
          <div className="lg:col-span-2 space-y-8">
            
            <div className="p-8 rounded-3xl bg-navy-dark border border-white/10 flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <div className="relative w-32 h-40 rounded-2xl overflow-hidden flex-shrink-0 bg-navy border-2 border-turquoise/40 shadow-xl">
                <Image
                  src={guide.avatarUrl}
                  alt={guide.name}
                  fill
                  className="object-cover"
                />
                {guide.verified && (
                  <div className="absolute bottom-2 right-2 bg-turquoise text-navy p-1 rounded-full shadow">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                )}
              </div>

              <div className="space-y-3 text-center sm:text-left flex-1">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 text-xs">
                  <span className="flex items-center gap-1 font-bold text-sand-light">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    {guide.rating} ({guide.reviewCount} verified reviews)
                  </span>
                  <span className="flex items-center gap-1 text-gray-400">
                    <Award className="w-4 h-4 text-turquoise" />
                    {guide.experienceYears} Years Experience
                  </span>
                </div>

                <h1 className="text-3xl font-heading font-extrabold text-white">
                  {guide.name}
                </h1>

                <div className="flex items-center justify-center sm:justify-start gap-2 text-xs text-gray-300">
                  <Languages className="w-4 h-4 text-turquoise" />
                  <span>Speaks: {guide.languages.join(', ')}</span>
                </div>

                <div className="flex flex-wrap justify-center sm:justify-start gap-1.5 pt-2">
                  {guide.specialties.map((spec) => (
                    <span key={spec} className="text-xs bg-turquoise/15 text-turquoise px-3 py-1 rounded-full font-semibold border border-turquoise/20">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* About Guide */}
            <div className="space-y-3">
              <h2 className="text-2xl font-heading font-extrabold text-white">About {guide.name}</h2>
              <p className="text-sm text-gray-300 leading-relaxed">{guide.bio}</p>
            </div>

            {/* Guide Packages */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              <h2 className="text-xl font-heading font-extrabold text-white">Guide Packages & Rates</h2>
              <div className="space-y-3">
                {guide.packages.map((pkg) => (
                  <div
                    key={pkg.id}
                    onClick={() => setSelectedPkg(pkg)}
                    className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 ${
                      selectedPkg?.id === pkg.id
                        ? 'bg-turquoise/10 border-turquoise shadow-lg'
                        : 'bg-navy-dark border-white/10 hover:border-turquoise/40'
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-heading font-bold text-base text-white">{pkg.name}</h4>
                        <span className="text-[10px] bg-white/10 text-sand-light px-2 py-0.5 rounded">{pkg.duration}</span>
                      </div>
                      <p className="text-xs text-gray-300">{pkg.description}</p>
                    </div>
                    <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto">
                      <div className="text-xl font-extrabold text-turquoise">RM{pkg.price}</div>
                      <button
                        className={`mt-1 px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${
                          selectedPkg?.id === pkg.id ? 'bg-turquoise text-navy' : 'bg-white/10 text-white hover:bg-white/20'
                        }`}
                      >
                        {selectedPkg?.id === pkg.id ? 'Selected' : 'Select'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Booking Card */}
          <div>
            <div className="bg-navy-dark border border-turquoise/30 p-6 rounded-3xl sticky top-24 shadow-2xl space-y-6">
              <div className="pb-4 border-b border-white/10">
                <span className="text-[10px] uppercase font-bold text-gray-400">Package Rate</span>
                <div className="text-3xl font-heading font-extrabold text-turquoise">
                  RM{pkgPrice}
                </div>
                <span className="text-xs text-sand-light font-semibold mt-1 block">
                  {selectedPkg?.name}
                </span>
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
                  <label className="text-[10px] uppercase font-bold text-sand-light block mb-1">Number of Travellers</label>
                  <select
                    value={travellers}
                    onChange={(e) => setTravellers(Number(e.target.value))}
                    className="w-full bg-transparent text-xs font-bold text-white focus:outline-none cursor-pointer"
                  >
                    <option value={1} className="bg-navy-dark">1 Traveller</option>
                    <option value={2} className="bg-navy-dark">2 Travellers</option>
                    <option value={3} className="bg-navy-dark">3-4 Travellers</option>
                    <option value={5} className="bg-navy-dark">5+ Group</option>
                  </select>
                </div>
              </div>

              <button
                onClick={handleBookGuide}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-turquoise to-ocean text-navy font-heading font-extrabold text-sm tracking-wide hover:opacity-95 transition-all shadow-xl shadow-turquoise/20 flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4 stroke-[2.5]" />
                <span>Book Local Guide</span>
              </button>

              <div className="text-center text-xs text-gray-400">
                Direct WhatsApp contact unlocked upon booking confirmation.
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
