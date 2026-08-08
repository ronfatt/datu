'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { X, Trash2, Tag, ArrowRight, Clock, ShieldCheck, ShoppingBag } from 'lucide-react';
import { useBasket } from '@/lib/store/basket';
import { useLanguage } from '@/lib/i18n';

interface BasketDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BasketDrawer({ isOpen, onClose }: BasketDrawerProps) {
  const {
    items,
    removeItem,
    clearBasket,
    couponCode,
    discountAmount,
    applyCoupon,
    removeCoupon,
    subtotal,
    serviceFee,
    total,
    holdExpiresAt,
  } = useBasket();

  const { t } = useLanguage();
  const [promoInput, setPromoInput] = useState('');
  const [promoMsg, setPromoMsg] = useState<{ success?: boolean; text?: string }>({});
  const [timeLeft, setTimeLeft] = useState<string>('');

  useEffect(() => {
    if (!holdExpiresAt) return;
    const interval = setInterval(() => {
      const remainingMs = holdExpiresAt - Date.now();
      if (remainingMs <= 0) {
        setTimeLeft('Expired');
        clearInterval(interval);
      } else {
        const mins = Math.floor(remainingMs / 60000);
        const secs = Math.floor((remainingMs % 60000) / 1000);
        setTimeLeft(`${mins}:${secs < 10 ? '0' : ''}${secs}`);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [holdExpiresAt]);

  if (!isOpen) return null;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promoInput) return;
    const res = applyCoupon(promoInput);
    setPromoMsg({ success: res.success, text: res.message });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-navy/80 backdrop-blur-sm transition-opacity">
      <div className="absolute inset-0" onClick={onClose} />
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-navy-dark border-l border-white/10 text-white shadow-2xl flex flex-col">
          {/* Drawer Header */}
          <div className="p-6 border-b border-white/10 flex items-center justify-between bg-navy">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-turquoise" />
              <h2 className="font-heading font-bold text-lg">{t('cart_title')}</h2>
              {items.length > 0 && (
                <span className="bg-turquoise/20 text-turquoise text-xs px-2 py-0.5 rounded-full font-semibold">
                  {items.length} {items.length === 1 ? 'item' : 'items'}
                </span>
              )}
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Inventory Hold Timer Banner */}
          {items.length > 0 && holdExpiresAt && (
            <div className="bg-ocean/20 border-b border-ocean/30 px-6 py-2.5 flex items-center justify-between text-xs text-aqua">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-turquoise animate-pulse" />
                <span>Inventory temporarily held for:</span>
              </div>
              <span className="font-mono font-bold text-turquoise bg-navy px-2 py-0.5 rounded">
                {timeLeft || '15:00'}
              </span>
            </div>
          )}

          {/* Drawer Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto text-gray-400">
                  <ShoppingBag className="w-8 h-8 stroke-1" />
                </div>
                <div className="space-y-1">
                  <p className="font-heading font-semibold text-lg">Your Trip Basket is Empty</p>
                  <p className="text-xs text-gray-400 max-w-xs mx-auto">
                    Combine stays, local guides, island experiences & airport transfers into one single booking!
                  </p>
                </div>
                <Link
                  href="/stays"
                  onClick={onClose}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-turquoise text-navy font-bold text-xs hover:bg-turquoise-light transition-all shadow-lg shadow-turquoise/20"
                >
                  <span>Explore Stays & Tours</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ) : (
              <div className="space-y-3">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex gap-3 items-start group hover:border-turquoise/30 transition-all"
                  >
                    <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-navy">
                      <Image
                        src={item.imageUrl || 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=400&q=80'}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-turquoise/20 text-turquoise">
                          {item.type}
                        </span>
                        {item.subtitle && (
                          <span className="text-[11px] text-gray-400 truncate">{item.subtitle}</span>
                        )}
                      </div>
                      <h4 className="text-sm font-bold text-white truncate">{item.title}</h4>
                      <p className="text-xs text-sand-light mt-0.5">
                        {item.startDate} {item.endDate ? `→ ${item.endDate}` : ''}
                      </p>
                      <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/5">
                        <span className="text-xs text-gray-400">
                          {item.quantity} x RM{item.unitPrice}
                        </span>
                        <span className="font-bold text-sm text-turquoise">RM{item.subtotal}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-gray-500 hover:text-red-400 p-1 rounded transition-colors"
                      title="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}

                <button
                  onClick={clearBasket}
                  className="text-xs text-gray-400 hover:text-red-400 py-1 transition-colors block ml-auto"
                >
                  Clear all items
                </button>
              </div>
            )}
          </div>

          {/* Drawer Footer / Summary & Checkout */}
          {items.length > 0 && (
            <div className="p-6 border-t border-white/10 bg-navy space-y-4">
              {/* Promo Code Input */}
              <form onSubmit={handleApplyPromo} className="space-y-1.5">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Tag className="w-3.5 h-3.5 absolute left-3 top-3 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Promo Code (e.g. SEMPORNA10)"
                      value={promoInput}
                      onChange={(e) => setPromoInput(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-lg pl-9 pr-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-turquoise"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-3 py-2 bg-white/10 hover:bg-white/20 text-xs font-semibold rounded-lg text-white transition-colors"
                  >
                    Apply
                  </button>
                </div>
                {couponCode && (
                  <div className="flex items-center justify-between text-xs text-turquoise bg-turquoise/10 px-3 py-1.5 rounded">
                    <span>Applied: <strong>{couponCode}</strong> (-RM{discountAmount.toFixed(2)})</span>
                    <button type="button" onClick={removeCoupon} className="text-gray-400 hover:text-white">
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
                {promoMsg.text && !couponCode && (
                  <p className={`text-[11px] ${promoMsg.success ? 'text-turquoise' : 'text-red-400'}`}>
                    {promoMsg.text}
                  </p>
                )}
              </form>

              {/* Price Breakdown */}
              <div className="space-y-1.5 text-xs text-gray-300">
                <div className="flex justify-between">
                  <span>{t('subtotal')}</span>
                  <span>RM{subtotal.toFixed(2)}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-turquoise">
                    <span>{t('discount')}</span>
                    <span>-RM{discountAmount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>{t('service_fee')} (3%)</span>
                  <span>RM{serviceFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold text-base text-white pt-2 border-t border-white/10">
                  <span>{t('total')}</span>
                  <span className="text-turquoise">RM{total.toFixed(2)}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <Link
                href="/checkout"
                onClick={onClose}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-turquoise to-ocean text-navy font-heading font-extrabold text-center hover:opacity-95 transition-all shadow-lg shadow-turquoise/20 flex items-center justify-center gap-2"
              >
                <span>{t('checkout')}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-gray-400">
                <ShieldCheck className="w-3.5 h-3.5 text-turquoise" />
                <span>100% Guaranteed Local Booking & Instant Confirmation</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
