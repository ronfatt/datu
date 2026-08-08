'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Compass, Calendar, Users, Heart, Wallet, ArrowRight, Check, Sparkles, RefreshCw, ShoppingBag } from 'lucide-react';
import { useBasket } from '@/lib/store/basket';
import { SAMPLE_PROPERTIES, SAMPLE_GUIDES, SAMPLE_EXPERIENCES, SAMPLE_TRANSFERS } from '@/lib/mock-data';

export default function TripPlannerPage() {
  const router = useRouter();
  const { addItem } = useBasket();

  // Step state
  const [step, setStep] = useState<number>(1);

  // Form selections
  const [days, setDays] = useState<number>(4);
  const [companion, setCompanion] = useState<string>('Couple');
  const [selectedInterests, setSelectedInterests] = useState<string[]>(['Island', 'Snorkelling', 'Food']);
  const [budgetLevel, setBudgetLevel] = useState<string>('Comfort');

  const [isGenerated, setIsGenerated] = useState<boolean>(false);
  const [addedToast, setAddedToast] = useState<boolean>(false);

  const toggleInterest = (interest: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]
    );
  };

  const generateItinerary = () => {
    setIsGenerated(true);
  };

  // Rule-based Trip Builder Output Engine (Extensible for future AI API integration)
  const generatedItinerary = {
    title: `${days}-Day Ultimate Semporna ${companion} Journey`,
    totalEstimatedPrice: days * (budgetLevel === 'Budget' ? 220 : budgetLevel === 'Comfort' ? 320 : budgetLevel === 'Premium' ? 480 : 650),
    days: [
      {
        dayNumber: 1,
        title: 'Tawau Arrival & Seafront Check-in',
        activities: [
          { time: '14:10', title: 'Tawau Airport Pickup', desc: 'Private MPV transfer to Semporna town', price: 120 },
          { time: '16:00', title: 'Check-in Sea Breeze Homestay', desc: 'Overwater Deluxe King Chalet', price: 280 },
          { time: '18:30', title: 'Semporna Seafood Dinner Market', desc: 'Fresh lobster & butter prawns feast', price: 130 }
        ]
      },
      {
        dayNumber: 2,
        title: 'Mabul & Kapalai Island Hopping',
        activities: [
          { time: '08:00', title: 'Speedboat Departure to Mabul', desc: 'Guarded by local master guide Amin Rahman', price: 180 },
          { time: '10:30', title: 'Turtle Reef Snorkelling & Mabul Village', desc: 'Swim alongside wild green turtles', price: 260 },
          { time: '17:00', title: 'Sunset Cocktails on Water Deck', desc: 'Relaxation time facing ocean breeze', price: 0 }
        ]
      },
      {
        dayNumber: 3,
        title: 'Tun Sakaran Marine Park & Bohey Dulang Hike',
        activities: [
          { time: '07:30', title: 'Bohey Dulang Peak Hike (600m)', desc: 'Panoroma volcanic lagoon view', price: 280 },
          { time: '13:00', title: 'Sibuan Island White Sandspit', desc: 'Crystal clear swimming & lunch box', price: 0 }
        ]
      },
      {
        dayNumber: 4,
        title: 'Culture Walk & Departure Transfer',
        activities: [
          { time: '09:00', title: 'Semporna Local Market & Souvenirs', desc: 'Guided by native cultural guide', price: 0 },
          { time: '12:00', title: 'Check-out & Airport Return Shuttle', desc: 'Comfortable transfer back to Tawau Airport', price: 120 }
        ]
      }
    ]
  };

  const handleBookWholeTrip = () => {
    // Add Stay
    addItem({
      type: 'STAY',
      referenceId: SAMPLE_PROPERTIES[0].id,
      title: SAMPLE_PROPERTIES[0].name,
      subtitle: 'Water Chalet King',
      imageUrl: SAMPLE_PROPERTIES[0].images[0],
      startDate: '2026-09-12',
      endDate: '2026-09-15',
      quantity: 1,
      unitPrice: 280,
      partnerId: SAMPLE_PROPERTIES[0].partnerId,
      commissionRate: 12.0,
    });

    // Add Guide
    addItem({
      type: 'GUIDE',
      referenceId: SAMPLE_GUIDES[0].id,
      title: `Guide: ${SAMPLE_GUIDES[0].name}`,
      subtitle: 'Full Day Private Island Expedition',
      imageUrl: SAMPLE_GUIDES[0].avatarUrl,
      startDate: '2026-09-13',
      quantity: 1,
      unitPrice: 180,
      partnerId: SAMPLE_GUIDES[0].partnerId,
      commissionRate: 15.0,
    });

    // Add Experience
    addItem({
      type: 'EXPERIENCE',
      referenceId: SAMPLE_EXPERIENCES[0].id,
      title: SAMPLE_EXPERIENCES[0].title,
      subtitle: 'Mabul & Kapalai Day Tour',
      imageUrl: SAMPLE_EXPERIENCES[0].images[0],
      startDate: '2026-09-13',
      quantity: 2,
      unitPrice: 260,
      partnerId: SAMPLE_EXPERIENCES[0].partnerId,
      commissionRate: 18.0,
    });

    // Add Airport Transfer
    addItem({
      type: 'TRANSFER',
      referenceId: SAMPLE_TRANSFERS[1].id,
      title: `Transfer: ${SAMPLE_TRANSFERS[1].vehicleType}`,
      subtitle: 'Tawau Airport ↔ Semporna',
      imageUrl: SAMPLE_TRANSFERS[1].imageUrl,
      startDate: '2026-09-12',
      quantity: 1,
      unitPrice: 120,
      partnerId: 'partner-transfer',
      commissionRate: 10.0,
    });

    setAddedToast(true);
    setTimeout(() => {
      setAddedToast(false);
      router.push('/checkout');
    }, 1500);
  };

  const interestOptions = [
    'Island', 'Snorkelling', 'Diving', 'Photography', 'Food', 'Culture', 'Adventure', 'Relaxation', 'Romantic', 'Family'
  ];

  return (
    <div className="py-12 bg-navy min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Toast */}
        {addedToast && (
          <div className="fixed top-20 right-6 z-50 bg-turquoise text-navy px-6 py-4 rounded-2xl shadow-2xl font-heading font-extrabold text-sm flex items-center gap-3 border border-white/20 animate-bounce">
            <Check className="w-5 h-5 stroke-[3]" />
            <span>Adding all trip items to your basket... Redirecting to Checkout!</span>
          </div>
        )}

        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-turquoise/20 text-turquoise text-xs font-bold border border-turquoise/30">
            <Sparkles className="w-4 h-4" />
            <span>FLAGSHIP TRIP GENERATOR</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white">
            Build My Semporna Trip
          </h1>
          <p className="text-sm text-gray-300 max-w-xl mx-auto">
            Tell us how you travel. We&apos;ll build the ultimate Semporna journey combining stays, native guides, island hopping, and airport transfers into 1 simple bundle.
          </p>
        </div>

        {!isGenerated ? (
          /* WIZARD QUESTION STEPS */
          <div className="bg-navy-dark border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8">
            
            {/* Step Indicators */}
            <div className="flex items-center justify-between border-b border-white/10 pb-6 text-xs text-gray-400 font-semibold">
              <span className={`flex items-center gap-2 ${step >= 1 ? 'text-turquoise' : ''}`}>
                <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center font-bold">1</span> Duration
              </span>
              <span className={`flex items-center gap-2 ${step >= 2 ? 'text-turquoise' : ''}`}>
                <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center font-bold">2</span> Companions
              </span>
              <span className={`flex items-center gap-2 ${step >= 3 ? 'text-turquoise' : ''}`}>
                <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center font-bold">3</span> Interests
              </span>
              <span className={`flex items-center gap-2 ${step >= 4 ? 'text-turquoise' : ''}`}>
                <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center font-bold">4</span> Budget
              </span>
            </div>

            {/* STEP 1: DAYS */}
            {step === 1 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="space-y-1">
                  <h3 className="text-xl font-heading font-extrabold text-white">Step 1: How many days in Semporna?</h3>
                  <p className="text-xs text-gray-400">Most travelers spend 3 to 4 days exploring islands.</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                  {[2, 3, 4, 5, 6].map((d) => (
                    <button
                      key={d}
                      type="button"
                      onClick={() => setDays(d)}
                      className={`p-4 rounded-2xl border text-center transition-all ${
                        days === d
                          ? 'bg-turquoise text-navy border-turquoise font-extrabold shadow-lg'
                          : 'bg-white/5 border-white/10 text-white hover:border-turquoise/40'
                      }`}
                    >
                      <span className="text-2xl block font-heading">{d}</span>
                      <span className="text-xs">{d === 6 ? '6+ Days' : 'Days'}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 2: COMPANIONS */}
            {step === 2 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="space-y-1">
                  <h3 className="text-xl font-heading font-extrabold text-white">Step 2: Who are you travelling with?</h3>
                  <p className="text-xs text-gray-400">Helps us select the right rooms & boat atmosphere.</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                  {['Solo', 'Couple', 'Family', 'Friends', 'Group'].map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setCompanion(c)}
                      className={`p-4 rounded-2xl border text-center transition-all ${
                        companion === c
                          ? 'bg-turquoise text-navy border-turquoise font-extrabold shadow-lg'
                          : 'bg-white/5 border-white/10 text-white hover:border-turquoise/40'
                      }`}
                    >
                      <Users className="w-5 h-5 mx-auto mb-2 opacity-80" />
                      <span className="text-sm font-semibold">{c}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 3: INTERESTS */}
            {step === 3 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="space-y-1">
                  <h3 className="text-xl font-heading font-extrabold text-white">Step 3: What do you love?</h3>
                  <p className="text-xs text-gray-400">Select multiple items to personalize your itinerary.</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                  {interestOptions.map((interest) => {
                    const isSelected = selectedInterests.includes(interest);
                    return (
                      <button
                        key={interest}
                        type="button"
                        onClick={() => toggleInterest(interest)}
                        className={`p-3.5 rounded-2xl border text-center transition-all flex items-center justify-between ${
                          isSelected
                            ? 'bg-turquoise/20 text-turquoise border-turquoise font-bold'
                            : 'bg-white/5 border-white/10 text-gray-300 hover:border-white/20'
                        }`}
                      >
                        <span className="text-xs">{interest}</span>
                        {isSelected && <Check className="w-4 h-4 stroke-[3]" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* STEP 4: BUDGET */}
            {step === 4 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="space-y-1">
                  <h3 className="text-xl font-heading font-extrabold text-white">Step 4: Budget tier per person?</h3>
                  <p className="text-xs text-gray-400">We balance homestays, private guides & transfers accordingly.</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    { label: 'Budget', est: 'RM220/day', desc: 'Shared shuttle & cozy homestay' },
                    { label: 'Comfort', est: 'RM320/day', desc: 'Overwater chalet & group tours' },
                    { label: 'Premium', est: 'RM480/day', desc: 'Private guide & luxury boat' },
                    { label: 'Luxury', est: 'RM650+/day', desc: 'Sipadan dives & Alphard transfers' },
                  ].map((b) => (
                    <button
                      key={b.label}
                      type="button"
                      onClick={() => setBudgetLevel(b.label)}
                      className={`p-5 rounded-2xl border text-left space-y-2 transition-all ${
                        budgetLevel === b.label
                          ? 'bg-turquoise text-navy border-turquoise shadow-lg'
                          : 'bg-white/5 border-white/10 text-white hover:border-turquoise/40'
                      }`}
                    >
                      <Wallet className="w-5 h-5 text-turquoise" />
                      <div className="font-heading font-extrabold text-base">{b.label}</div>
                      <div className="text-xs font-bold text-sand-light">{b.est}</div>
                      <div className="text-[11px] text-gray-400 line-clamp-2">{b.desc}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step Navigation Controls */}
            <div className="flex items-center justify-between pt-6 border-t border-white/10">
              <button
                type="button"
                disabled={step === 1}
                onClick={() => setStep((s) => Math.max(1, s - 1))}
                className="px-5 py-2.5 rounded-xl border border-white/10 text-xs font-bold text-gray-300 hover:text-white disabled:opacity-30"
              >
                Back
              </button>

              {step < 4 ? (
                <button
                  type="button"
                  onClick={() => setStep((s) => Math.min(4, s + 1))}
                  className="px-6 py-3 rounded-xl bg-turquoise text-navy font-extrabold text-xs flex items-center gap-2"
                >
                  <span>Next Step</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={generateItinerary}
                  className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-turquoise to-ocean text-navy font-heading font-extrabold text-sm flex items-center gap-2 shadow-xl shadow-turquoise/20"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Generate My Journey</span>
                </button>
              )}
            </div>

          </div>
        ) : (
          /* GENERATED SUGGESTED ITINERARY DISPLAY */
          <div className="space-y-8 animate-fadeIn">
            
            <div className="bg-navy-dark border border-turquoise/30 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div>
                  <span className="text-xs font-bold uppercase text-turquoise tracking-widest">
                    YOUR CUSTOM SEMPORNA JOURNEY
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-white mt-1">
                    {generatedItinerary.title}
                  </h2>
                  <p className="text-xs text-gray-400 mt-1">
                    Curated for {companion} • {days} Days • {selectedInterests.join(', ')}
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 p-4 rounded-2xl text-right">
                  <span className="text-[10px] text-gray-400 uppercase font-semibold">Estimated Bundle Total</span>
                  <div className="text-3xl font-heading font-extrabold text-turquoise">
                    RM{generatedItinerary.totalEstimatedPrice}
                  </div>
                </div>
              </div>

              {/* Day-by-day Itinerary Timeline */}
              <div className="space-y-6">
                {generatedItinerary.days.map((day) => (
                  <div key={day.dayNumber} className="space-y-3 bg-white/5 border border-white/5 p-5 rounded-2xl">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 bg-turquoise text-navy font-extrabold text-xs rounded-full">
                        DAY {day.dayNumber}
                      </span>
                      <h4 className="font-heading font-bold text-white text-sm">{day.title}</h4>
                    </div>

                    <div className="space-y-2 pl-2 border-l-2 border-turquoise/30">
                      {day.activities.map((act, idx) => (
                        <div key={idx} className="flex justify-between items-start text-xs text-gray-300">
                          <div className="flex gap-2">
                            <span className="font-mono text-turquoise font-bold">{act.time}</span>
                            <div>
                              <span className="font-bold text-white block">{act.title}</span>
                              <span className="text-gray-400">{act.desc}</span>
                            </div>
                          </div>
                          {act.price > 0 && <span className="font-semibold text-sand-light">RM{act.price}</span>}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
                <button
                  onClick={() => setIsGenerated(false)}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl border border-white/10 text-xs font-bold text-gray-300 hover:text-white flex items-center justify-center gap-2"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>Customize Trip Settings</span>
                </button>

                <button
                  onClick={handleBookWholeTrip}
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-turquoise to-ocean text-navy font-heading font-extrabold text-base shadow-xl shadow-turquoise/20 flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-5 h-5 stroke-[2.5]" />
                  <span>BOOK THIS TRIP (1-CLICK)</span>
                </button>
              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
}
