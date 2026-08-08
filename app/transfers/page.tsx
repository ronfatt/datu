'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Bus, Check, Calendar, Clock, Plane, Users, MapPin, ShoppingBag, ShieldCheck } from 'lucide-react';
import { SAMPLE_TRANSFERS } from '@/lib/mock-data';
import { useBasket } from '@/lib/store/basket';

export default function TransfersPage() {
  const { addItem } = useBasket();
  const [selectedTransfer, setSelectedTransfer] = useState(SAMPLE_TRANSFERS[0]);
  const [arrivalDate, setArrivalDate] = useState('2026-09-12');
  const [arrivalTime, setArrivalTime] = useState('14:10');
  const [flightNumber, setFlightNumber] = useState('AK6260 (AirAsia)');
  const [passengers, setPassengers] = useState(2);
  const [destinationHotel, setDestinationHotel] = useState('Sea Breeze Homestay & Water Chalets');
  const [addedToast, setAddedToast] = useState(false);

  const handleAddTransfer = (e: React.FormEvent) => {
    e.preventDefault();
    addItem({
      type: 'TRANSFER',
      referenceId: selectedTransfer.id,
      title: `Airport Transfer: ${selectedTransfer.vehicleType}`,
      subtitle: `${selectedTransfer.route} • Flight ${flightNumber}`,
      imageUrl: selectedTransfer.imageUrl,
      startDate: arrivalDate,
      quantity: selectedTransfer.vehicleType === 'Shared Van' ? passengers : 1,
      unitPrice: selectedTransfer.price,
      partnerId: 'partner-transfer',
      commissionRate: 10.0,
      metadata: {
        arrivalTime,
        flightNumber,
        passengers,
        destinationHotel,
        vehicleType: selectedTransfer.vehicleType,
      },
    });

    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 4000);
  };

  return (
    <div className="py-12 bg-navy min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Toast */}
        {addedToast && (
          <div className="fixed top-20 right-6 z-50 bg-turquoise text-navy px-6 py-4 rounded-2xl shadow-2xl font-heading font-extrabold text-sm flex items-center gap-3 border border-white/20 animate-bounce">
            <Check className="w-5 h-5 stroke-[3]" />
            <span>Airport transfer added to your Trip Basket!</span>
            <Link href="/checkout" className="underline text-navy ml-2">Checkout Now</Link>
          </div>
        )}

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs uppercase font-extrabold text-turquoise tracking-widest flex items-center justify-center gap-1.5">
            <Bus className="w-4 h-4 text-turquoise" />
            TAWAU AIRPORT (TWU) ↔ SEMPORNA
          </span>
          <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white">
            Seamless Airport Transfer
          </h1>
          <p className="text-sm text-gray-300">
            Direct 1.5-hour comfortable shuttle from Tawau Airport (TWU) straight to your Semporna hotel or boat jetty.
          </p>
        </div>

        {/* Form & Selection Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Transfer Options */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-xl font-heading font-extrabold text-white">Select Vehicle Type</h2>
            <div className="space-y-4">
              {SAMPLE_TRANSFERS.map((tr) => (
                <div
                  key={tr.id}
                  onClick={() => setSelectedTransfer(tr)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col sm:flex-row justify-between gap-5 ${
                    selectedTransfer.id === tr.id
                      ? 'bg-turquoise/10 border-turquoise shadow-lg'
                      : 'bg-navy-dark border-white/10 hover:border-turquoise/40'
                  }`}
                >
                  <div className="flex gap-4">
                    <div className="relative w-24 h-20 rounded-xl overflow-hidden bg-navy flex-shrink-0">
                      <Image src={tr.imageUrl} alt={tr.title} fill className="object-cover" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] uppercase font-bold bg-turquoise/20 text-turquoise px-2 py-0.5 rounded">
                          {tr.vehicleType}
                        </span>
                        <span className="text-xs text-gray-400">Capacity: Up to {tr.capacity} Pax</span>
                      </div>
                      <h3 className="font-heading font-bold text-base text-white">{tr.title}</h3>
                      <p className="text-xs text-gray-300 leading-relaxed">{tr.description}</p>
                    </div>
                  </div>

                  <div className="sm:text-right flex-shrink-0 flex sm:flex-col justify-between items-end">
                    <div>
                      <span className="text-2xl font-extrabold text-turquoise">RM{tr.price}</span>
                      <span className="text-xs text-gray-400 block">
                        {tr.vehicleType === 'Shared Van' ? '/ person' : '/ vehicle'}
                      </span>
                    </div>
                    <button
                      className={`mt-2 px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        selectedTransfer.id === tr.id ? 'bg-turquoise text-navy' : 'bg-white/10 text-white hover:bg-white/20'
                      }`}
                    >
                      {selectedTransfer.id === tr.id ? 'Selected' : 'Select'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Transfer Booking Details Form */}
          <div>
            <form
              onSubmit={handleAddTransfer}
              className="bg-navy-dark border border-turquoise/30 p-6 rounded-3xl sticky top-24 shadow-2xl space-y-5"
            >
              <div className="pb-3 border-b border-white/10">
                <h3 className="font-heading font-bold text-lg text-white">Flight Details</h3>
                <p className="text-xs text-gray-400">Driver monitors flight delay status automatically.</p>
              </div>

              <div className="space-y-3">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-3">
                  <label className="text-[10px] uppercase font-bold text-sand-light block mb-1 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-turquoise" /> Arrival Date
                  </label>
                  <input
                    type="date"
                    required
                    value={arrivalDate}
                    onChange={(e) => setArrivalDate(e.target.value)}
                    className="w-full bg-transparent text-xs text-white font-bold focus:outline-none cursor-pointer"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-3">
                    <label className="text-[10px] uppercase font-bold text-sand-light block mb-1 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-turquoise" /> Arrival Time
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 14:10"
                      value={arrivalTime}
                      onChange={(e) => setArrivalTime(e.target.value)}
                      className="w-full bg-transparent text-xs text-white font-bold focus:outline-none"
                    />
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-2xl p-3">
                    <label className="text-[10px] uppercase font-bold text-sand-light block mb-1 flex items-center gap-1">
                      <Plane className="w-3.5 h-3.5 text-turquoise" /> Flight No.
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. AK6260"
                      value={flightNumber}
                      onChange={(e) => setFlightNumber(e.target.value)}
                      className="w-full bg-transparent text-xs text-white font-bold focus:outline-none uppercase"
                    />
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-3">
                  <label className="text-[10px] uppercase font-bold text-sand-light block mb-1 flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-turquoise" /> Passengers
                  </label>
                  <select
                    value={passengers}
                    onChange={(e) => setPassengers(Number(e.target.value))}
                    className="w-full bg-transparent text-xs font-bold text-white focus:outline-none cursor-pointer"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                      <option key={n} value={n} className="bg-navy-dark">{n} Passenger(s)</option>
                    ))}
                  </select>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-3">
                  <label className="text-[10px] uppercase font-bold text-sand-light block mb-1 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-turquoise" /> Dropoff Hotel / Jetty
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sea Breeze Homestay / Semporna Jetty"
                    value={destinationHotel}
                    onChange={(e) => setDestinationHotel(e.target.value)}
                    className="w-full bg-transparent text-xs text-white font-bold focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex justify-between font-bold text-base text-white pt-2 border-t border-white/10">
                <span>Transfer Subtotal</span>
                <span className="text-turquoise">
                  RM{selectedTransfer.vehicleType === 'Shared Van' ? selectedTransfer.price * passengers : selectedTransfer.price}
                </span>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-turquoise to-ocean text-navy font-heading font-extrabold text-sm tracking-wide hover:opacity-95 transition-all shadow-xl shadow-turquoise/20 flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4 stroke-[2.5]" />
                <span>Add Airport Transfer To Basket</span>
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-gray-400">
                <ShieldCheck className="w-3.5 h-3.5 text-turquoise" />
                <span>Driver wait board included upon arrival</span>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
