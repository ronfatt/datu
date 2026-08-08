'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, CreditCard, Building, Lock, Trash2, ArrowRight, Tag } from 'lucide-react';
import { useBasket } from '@/lib/store/basket';
import { useLanguage } from '@/lib/i18n';
import { createCheckoutSession } from '@/lib/stripe';

export default function CheckoutPage() {
  const router = useRouter();
  const { items, removeItem, subtotal, discountAmount, serviceFee, total, couponCode, clearBasket } = useBasket();
  const { t } = useLanguage();

  const [fullName, setFullName] = useState('Hazriel Zakaria');
  const [email, setEmail] = useState('hazriel@example.com');
  const [phone, setPhone] = useState('+60123456789');
  const [whatsapp, setWhatsapp] = useState('+60123456789');
  const [country, setCountry] = useState('Malaysia');
  const [specialRequest, setSpecialRequest] = useState('Dietary: Seafood preferences & quiet room request');
  const [paymentMethod, setPaymentMethod] = useState<'stripe' | 'fpx' | 'bank_transfer'>('stripe');
  const [isProcessing, setIsProcessing] = useState(false);

  const bookingNumber = `SMPR-2026-${Math.floor(100000 + Math.random() * 900000)}`;

  const handlePayNow = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      if (paymentMethod === 'stripe') {
        const session = await createCheckoutSession({
          bookingNumber,
          items: items.map((i) => ({ title: i.title, amount: i.unitPrice, quantity: i.quantity })),
          customerEmail: email,
          totalAmount: total,
        });

        // Simulate Stripe redirect or direct voucher generation
        setTimeout(() => {
          router.push(`/booking-confirmation?bookingNumber=${bookingNumber}&paid=true`);
        }, 1500);
      } else {
        setTimeout(() => {
          router.push(`/booking-confirmation?bookingNumber=${bookingNumber}&paid=true&method=${paymentMethod}`);
        }, 1500);
      }
    } catch (err) {
      console.error(err);
      setIsProcessing(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="py-20 bg-navy min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4 max-w-md mx-auto px-4">
          <h2 className="text-2xl font-heading font-bold text-white">Your Trip Basket is Empty</h2>
          <p className="text-xs text-gray-400">Please select stays, guides, or island experiences before checking out.</p>
          <Link href="/stays" className="inline-block px-6 py-3 bg-turquoise text-navy font-bold text-xs rounded-xl">
            Browse Stays & Experiences
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 bg-navy min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="space-y-1">
          <h1 className="text-3xl font-heading font-extrabold text-white">Checkout & Payment</h1>
          <p className="text-xs text-gray-400">Complete your details to lock in your Semporna itinerary.</p>
        </div>

        <form onSubmit={handlePayNow} className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* LEFT FORM DETAILS */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Customer Contact Details */}
            <div className="bg-navy-dark border border-white/10 p-6 rounded-3xl space-y-4">
              <h3 className="font-heading font-extrabold text-lg text-white">Customer Details</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] uppercase font-bold text-sand-light block mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:border-turquoise"
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase font-bold text-sand-light block mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:border-turquoise"
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase font-bold text-sand-light block mb-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:border-turquoise"
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase font-bold text-sand-light block mb-1">WhatsApp Number</label>
                  <input
                    type="tel"
                    required
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:border-turquoise"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] uppercase font-bold text-sand-light block mb-1">Special Requests (Optional)</label>
                <textarea
                  rows={2}
                  value={specialRequest}
                  onChange={(e) => setSpecialRequest(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white focus:border-turquoise"
                  placeholder="Dietary requirements, early check-in, dive gear sizes..."
                />
              </div>
            </div>

            {/* Payment Gateway Options */}
            <div className="bg-navy-dark border border-white/10 p-6 rounded-3xl space-y-4">
              <h3 className="font-heading font-extrabold text-lg text-white">Payment Method</h3>
              <div className="space-y-3">
                
                {/* Stripe Credit/Debit Card */}
                <label
                  onClick={() => setPaymentMethod('stripe')}
                  className={`p-4 rounded-2xl border flex items-center justify-between cursor-pointer transition-all ${
                    paymentMethod === 'stripe'
                      ? 'bg-turquoise/10 border-turquoise shadow-md'
                      : 'bg-white/5 border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <CreditCard className="w-5 h-5 text-turquoise" />
                    <div>
                      <span className="font-bold text-sm text-white block">Credit / Debit Card (Stripe Secured)</span>
                      <span className="text-[11px] text-gray-400">Visa, Mastercard, American Express</span>
                    </div>
                  </div>
                  <input type="radio" checked={paymentMethod === 'stripe'} readOnly className="accent-turquoise" />
                </label>

                {/* FPX Malaysian Online Banking */}
                <label
                  onClick={() => setPaymentMethod('fpx')}
                  className={`p-4 rounded-2xl border flex items-center justify-between cursor-pointer transition-all ${
                    paymentMethod === 'fpx'
                      ? 'bg-turquoise/10 border-turquoise shadow-md'
                      : 'bg-white/5 border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Building className="w-5 h-5 text-turquoise" />
                    <div>
                      <span className="font-bold text-sm text-white block">FPX Online Banking (Malaysia)</span>
                      <span className="text-[11px] text-gray-400">Maybank2u, CIMB Clicks, Public Bank, RHB, Bank Islam</span>
                    </div>
                  </div>
                  <input type="radio" checked={paymentMethod === 'fpx'} readOnly className="accent-turquoise" />
                </label>

                {/* Manual Bank Transfer */}
                <label
                  onClick={() => setPaymentMethod('bank_transfer')}
                  className={`p-4 rounded-2xl border flex items-center justify-between cursor-pointer transition-all ${
                    paymentMethod === 'bank_transfer'
                      ? 'bg-turquoise/10 border-turquoise shadow-md'
                      : 'bg-white/5 border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Lock className="w-5 h-5 text-turquoise" />
                    <div>
                      <span className="font-bold text-sm text-white block">Manual Bank Transfer / QR</span>
                      <span className="text-[11px] text-gray-400">Instant confirmation via WhatsApp slip upload</span>
                    </div>
                  </div>
                  <input type="radio" checked={paymentMethod === 'bank_transfer'} readOnly className="accent-turquoise" />
                </label>
              </div>
            </div>

          </div>

          {/* RIGHT SUMMARY COLUMN */}
          <div>
            <div className="bg-navy-dark border border-turquoise/30 p-6 rounded-3xl sticky top-24 shadow-2xl space-y-6">
              <h3 className="font-heading font-extrabold text-lg text-white pb-3 border-b border-white/10">
                Booking Summary ({items.length})
              </h3>

              {/* Items List */}
              <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-3 text-xs bg-white/5 p-2.5 rounded-xl border border-white/5">
                    <div className="relative w-12 h-12 rounded bg-navy overflow-hidden flex-shrink-0">
                      <Image src={item.imageUrl} alt={item.title} fill className="object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-[10px] text-turquoise font-bold uppercase">{item.type}</span>
                      <h4 className="font-bold text-white truncate">{item.title}</h4>
                      <span className="text-[11px] text-gray-400">RM{item.unitPrice} x {item.quantity}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      className="text-gray-500 hover:text-red-400 p-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Price Calculation */}
              <div className="space-y-2 text-xs text-gray-300 pt-2 border-t border-white/10">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>RM{subtotal.toFixed(2)}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-turquoise font-semibold">
                    <span>Discount ({couponCode})</span>
                    <span>-RM{discountAmount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Platform & Service Fee</span>
                  <span>RM{serviceFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold text-lg text-white pt-2 border-t border-white/10">
                  <span>Total Amount</span>
                  <span className="text-turquoise">RM{total.toFixed(2)}</span>
                </div>
              </div>

              {/* Pay Now CTA */}
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-turquoise to-ocean text-navy font-heading font-extrabold text-sm tracking-wide hover:opacity-95 transition-all shadow-xl shadow-turquoise/20 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isProcessing ? (
                  <span>Processing Payment...</span>
                ) : (
                  <>
                    <Lock className="w-4 h-4" />
                    <span>Pay RM{total.toFixed(2)} & Confirm</span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-gray-400">
                <ShieldCheck className="w-3.5 h-3.5 text-turquoise" />
                <span>256-Bit SSL Encrypted & Secured</span>
              </div>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
}
