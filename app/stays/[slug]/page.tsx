'use client';

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Star, MapPin, Check, Heart, Share2, ShieldCheck, Calendar, Users, ShoppingBag, ArrowRight } from 'lucide-react';
import { SAMPLE_PROPERTIES, SAMPLE_EXPERIENCES } from '@/lib/mock-data';
import { useBasket } from '@/lib/store/basket';

export default function PropertyDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { addItem } = useBasket();
  const slug = params?.slug as string;

  const property = SAMPLE_PROPERTIES.find((p) => p.slug === slug) || SAMPLE_PROPERTIES[0];

  const [selectedRoom, setSelectedRoom] = useState(property.rooms[0] || null);
  const [checkIn, setCheckIn] = useState('2026-09-12');
  const [checkOut, setCheckOut] = useState('2026-09-15');
  const [guests, setGuests] = useState(2);
  const [isWishlist, setIsWishlist] = useState(false);
  const [addedBanner, setAddedBanner] = useState(false);

  const nights = 3;
  const roomPrice = selectedRoom?.discountPrice || selectedRoom?.price || property.pricePerNight;
  const roomSubtotal = roomPrice * nights;
  const cleaningFee = 40;
  const totalStayPrice = roomSubtotal + cleaningFee;

  const handleAddToCart = () => {
    addItem({
      type: 'STAY',
      referenceId: property.id,
      title: property.name,
      subtitle: selectedRoom?.name || property.type,
      imageUrl: property.images[0],
      startDate: checkIn,
      endDate: checkOut,
      quantity: 1,
      unitPrice: roomPrice,
      partnerId: property.partnerId,
      commissionRate: 12.0,
      metadata: {
        roomName: selectedRoom?.name,
        nights,
        guests,
      },
    });

    setAddedBanner(true);
    setTimeout(() => setAddedBanner(false), 4000);
  };

  return (
    <div className="py-8 bg-navy min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Added Notification Toast */}
        {addedBanner && (
          <div className="fixed top-20 right-6 z-50 bg-turquoise text-navy px-6 py-4 rounded-2xl shadow-2xl font-heading font-extrabold text-sm flex items-center gap-3 border border-white/20 animate-bounce">
            <Check className="w-5 h-5 stroke-[3]" />
            <span>Stay added to your Trip Basket!</span>
            <Link href="/checkout" className="underline text-navy ml-2">Checkout Now</Link>
          </div>
        )}

        {/* Breadcrumb & Title Bar */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <Link href="/" className="hover:text-turquoise">Home</Link>
            <span>/</span>
            <Link href="/stays" className="hover:text-turquoise">Stays</Link>
            <span>/</span>
            <span className="text-turquoise font-semibold">{property.name}</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase font-extrabold text-turquoise tracking-widest">
                {property.type} • {property.locationName}
              </span>
              <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-white mt-1">
                {property.name}
              </h1>
              <div className="flex items-center gap-4 text-xs text-gray-300 mt-2">
                <span className="flex items-center gap-1 font-bold text-sand-light">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  {property.rating} ({property.reviewCount} verified reviews)
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-turquoise" />
                  {property.address}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsWishlist(!isWishlist)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
                  isWishlist ? 'bg-red-500/20 text-red-400 border-red-500/40' : 'bg-white/5 border-white/10 text-gray-300 hover:text-white'
                }`}
              >
                <Heart className={`w-4 h-4 ${isWishlist ? 'fill-current' : ''}`} />
                <span>Save</span>
              </button>
              <button className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-white/5 border border-white/10 text-gray-300 hover:text-white transition-all">
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>

        {/* AIRBNB STYLE IMAGE GALLERY */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 rounded-3xl overflow-hidden aspect-[16/9] max-h-[480px]">
          <div className="md:col-span-2 relative h-full bg-navy-dark">
            <Image
              src={property.images[0]}
              alt={property.name}
              fill
              priority
              className="object-cover"
            />
          </div>
          <div className="hidden md:grid grid-cols-1 gap-3 h-full">
            <div className="relative h-full bg-navy-dark">
              <Image
                src={property.images[1] || property.images[0]}
                alt="Property View 2"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-full bg-navy-dark">
              <Image
                src={property.images[2] || property.images[0]}
                alt="Property View 3"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="hidden md:block relative h-full bg-navy-dark">
            <Image
              src={property.images[3] || property.images[0]}
              alt="Property View 4"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-navy/60 flex items-center justify-center">
              <span className="text-xs font-bold text-white uppercase tracking-wider border border-white/30 px-3 py-1.5 rounded-full backdrop-blur-md">
                + View 8 Photos
              </span>
            </div>
          </div>
        </div>

        {/* TWO COLUMN CONTENT & STICKY BOOKING PANEL */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* LEFT DETAILS COLUMN */}
          <div className="lg:col-span-2 space-y-10">
            
            {/* Host Banner */}
            <div className="p-6 rounded-2xl bg-navy-dark border border-white/10 flex items-center justify-between">
              <div className="space-y-1">
                <span className="text-xs text-turquoise uppercase font-bold tracking-wider">Hosted by</span>
                <h3 className="font-heading font-extrabold text-xl text-white">{property.partnerName}</h3>
                <p className="text-xs text-gray-400">Verified Semporna Native Host • Speaks Malay & English</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-turquoise/20 text-turquoise flex items-center justify-center font-bold text-lg border border-turquoise/30">
                {property.partnerName.charAt(0)}
              </div>
            </div>

            {/* Introduction */}
            <div className="space-y-3">
              <h2 className="text-2xl font-heading font-extrabold text-white">About this stay</h2>
              <p className="text-sm text-gray-300 leading-relaxed">{property.description}</p>
            </div>

            {/* Facilities / Amenities */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              <h2 className="text-xl font-heading font-extrabold text-white">Property Amenities</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {property.facilities.map((fac) => (
                  <div key={fac} className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5 text-xs text-gray-200">
                    <Check className="w-4 h-4 text-turquoise" />
                    <span>{fac}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ROOM INVENTORY SECTION */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              <h2 className="text-xl font-heading font-extrabold text-white">Available Room Types</h2>
              <div className="space-y-4">
                {property.rooms.map((rm) => (
                  <div
                    key={rm.id}
                    onClick={() => setSelectedRoom(rm)}
                    className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col sm:flex-row justify-between gap-4 ${
                      selectedRoom?.id === rm.id
                        ? 'bg-turquoise/10 border-turquoise shadow-lg'
                        : 'bg-navy-dark border-white/10 hover:border-turquoise/40'
                    }`}
                  >
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <h4 className="font-heading font-bold text-lg text-white">{rm.name}</h4>
                        {selectedRoom?.id === rm.id && (
                          <span className="text-[10px] bg-turquoise text-navy font-bold px-2 py-0.5 rounded">Selected</span>
                        )}
                      </div>
                      <p className="text-xs text-gray-300">{rm.description}</p>
                      <div className="flex items-center gap-4 text-xs text-sand-light pt-1">
                        <span>Capacity: {rm.capacity} Guests</span>
                        <span>Bed: {rm.bedType}</span>
                        <span>Available: {rm.totalInventory} Rooms</span>
                      </div>
                    </div>
                    <div className="sm:text-right flex-shrink-0 flex sm:flex-col justify-between sm:justify-center items-end">
                      <div>
                        {rm.discountPrice ? (
                          <div className="space-y-0.5">
                            <span className="text-xs text-gray-400 line-through">RM{rm.price}</span>
                            <div className="text-xl font-extrabold text-turquoise">RM{rm.discountPrice} <span className="text-xs font-normal text-gray-400">/ night</span></div>
                          </div>
                        ) : (
                          <div className="text-xl font-extrabold text-turquoise">RM{rm.price} <span className="text-xs font-normal text-gray-400">/ night</span></div>
                        )}
                      </div>
                      <button
                        className={`mt-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                          selectedRoom?.id === rm.id ? 'bg-turquoise text-navy' : 'bg-white/10 text-white hover:bg-white/20'
                        }`}
                      >
                        {selectedRoom?.id === rm.id ? 'Selected' : 'Select Room'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Policies */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-white/10">
              <div className="space-y-2">
                <h3 className="font-heading font-bold text-white text-base">House Rules</h3>
                <ul className="space-y-1.5 text-xs text-gray-300">
                  {property.houseRules.map((rule) => (
                    <li key={rule} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-turquoise" />
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-heading font-bold text-white text-base">Cancellation Policy</h3>
                <p className="text-xs text-gray-300 leading-relaxed">{property.cancellationPolicy}</p>
              </div>
            </div>

          </div>

          {/* RIGHT STICKY BOOKING PANEL */}
          <div className="space-y-6">
            <div className="bg-navy-dark border border-turquoise/30 p-6 rounded-3xl sticky top-24 shadow-2xl space-y-6">
              
              {/* Header Price */}
              <div className="flex items-baseline justify-between pb-4 border-b border-white/10">
                <div>
                  <span className="text-[10px] uppercase font-bold text-gray-400">Price Per Night</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-heading font-extrabold text-turquoise">RM{roomPrice}</span>
                    <span className="text-xs text-gray-400">/ night</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="flex items-center gap-1 text-xs font-bold text-sand">
                    <Star className="w-3.5 h-3.5 text-yellow-400 fill-current" />
                    {property.rating} ({property.reviewCount})
                  </span>
                </div>
              </div>

              {/* Date & Guest Inputs */}
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-2 bg-white/5 border border-white/10 rounded-2xl p-2">
                  <div className="px-2 py-1">
                    <label className="text-[10px] uppercase font-bold text-sand-light block">Check-in</label>
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="bg-transparent text-xs text-white font-semibold focus:outline-none w-full cursor-pointer"
                    />
                  </div>
                  <div className="px-2 py-1 border-l border-white/10">
                    <label className="text-[10px] uppercase font-bold text-sand-light block">Check-out</label>
                    <input
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="bg-transparent text-xs text-white font-semibold focus:outline-none w-full cursor-pointer"
                    />
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-3">
                  <label className="text-[10px] uppercase font-bold text-sand-light block mb-1">Guests</label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className="w-full bg-transparent text-xs font-bold text-white focus:outline-none cursor-pointer"
                  >
                    <option value={1} className="bg-navy-dark">1 Guest</option>
                    <option value={2} className="bg-navy-dark">2 Guests</option>
                    <option value={3} className="bg-navy-dark">3 Guests</option>
                    <option value={4} className="bg-navy-dark">4 Guests</option>
                  </select>
                </div>
              </div>

              {/* Room Selected Summary */}
              <div className="bg-white/5 p-3 rounded-xl border border-white/5 text-xs space-y-1">
                <div className="text-gray-400 font-medium">Selected Room:</div>
                <div className="font-bold text-white">{selectedRoom?.name}</div>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-2 text-xs text-gray-300 pt-2 border-t border-white/10">
                <div className="flex justify-between">
                  <span>RM{roomPrice} x {nights} nights</span>
                  <span>RM{roomSubtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Cleaning & Service fee</span>
                  <span>RM{cleaningFee}</span>
                </div>
                <div className="flex justify-between font-bold text-base text-white pt-2 border-t border-white/10">
                  <span>Total</span>
                  <span className="text-turquoise">RM{totalStayPrice}</span>
                </div>
              </div>

              {/* Action CTA */}
              <button
                onClick={handleAddToCart}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-turquoise to-ocean text-navy font-heading font-extrabold text-sm tracking-wide hover:opacity-95 transition-all shadow-xl shadow-turquoise/20 flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4 stroke-[2.5]" />
                <span>Add Stay To Trip Basket</span>
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-gray-400">
                <ShieldCheck className="w-3.5 h-3.5 text-turquoise" />
                <span>Instant Confirmation • No booking fees</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
