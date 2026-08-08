'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { UniversalBookingItem, BookingItemType } from '../types';

interface BasketContextType {
  items: UniversalBookingItem[];
  addItem: (item: Omit<UniversalBookingItem, 'id' | 'subtotal'>) => void;
  removeItem: (id: string) => void;
  clearBasket: () => void;
  couponCode: string;
  discountAmount: number;
  applyCoupon: (code: string) => { success: boolean; message: string };
  removeCoupon: () => void;
  subtotal: number;
  serviceFee: number;
  taxAmount: number;
  total: number;
  holdExpiresAt: number | null;
}

const BasketContext = createContext<BasketContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = 'semporna_basket_items';
const COUPON_STORAGE_KEY = 'semporna_basket_coupon';

export const BasketProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<UniversalBookingItem[]>([]);
  const [couponCode, setCouponCode] = useState<string>('');
  const [discountAmount, setDiscountAmount] = useState<number>(0);
  const [holdExpiresAt, setHoldExpiresAt] = useState<number | null>(null);

  // Load initial basket from LocalStorage
  useEffect(() => {
    try {
      const savedItems = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (savedItems) {
        const parsed = JSON.parse(savedItems);
        setItems(parsed);
        if (parsed.length > 0) {
          setHoldExpiresAt(Date.now() + 15 * 60 * 1000); // 15 mins hold
        }
      }
      const savedCoupon = localStorage.getItem(COUPON_STORAGE_KEY);
      if (savedCoupon) {
        setCouponCode(savedCoupon);
      }
    } catch (e) {
      console.error('Failed to load basket storage', e);
    }
  }, []);

  // Sync back to LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items));
      if (items.length > 0 && !holdExpiresAt) {
        setHoldExpiresAt(Date.now() + 15 * 60 * 1000);
      } else if (items.length === 0) {
        setHoldExpiresAt(null);
      }
    } catch (e) {
      console.error('Failed to write basket storage', e);
    }
  }, [items, holdExpiresAt]);

  const addItem = (newItem: Omit<UniversalBookingItem, 'id' | 'subtotal'>) => {
    const id = `item-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`;
    const subtotal = newItem.unitPrice * newItem.quantity;
    const fullItem: UniversalBookingItem = {
      ...newItem,
      id,
      subtotal,
    };

    setItems((prev) => [...prev, fullItem]);
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearBasket = () => {
    setItems([]);
    setCouponCode('');
    setDiscountAmount(0);
    setHoldExpiresAt(null);
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    localStorage.removeItem(COUPON_STORAGE_KEY);
  };

  const applyCoupon = (code: string) => {
    const cleanCode = code.trim().toUpperCase();
    if (cleanCode === 'SEMPORNA10' || cleanCode === 'WELCOME10') {
      setCouponCode(cleanCode);
      localStorage.setItem(COUPON_STORAGE_KEY, cleanCode);
      return { success: true, message: '10% discount coupon applied!' };
    } else if (cleanCode === 'LOCAL50') {
      setCouponCode(cleanCode);
      localStorage.setItem(COUPON_STORAGE_KEY, cleanCode);
      return { success: true, message: 'RM50 local rebate applied!' };
    } else {
      return { success: false, message: 'Invalid promo code. Try SEMPORNA10' };
    }
  };

  const removeCoupon = () => {
    setCouponCode('');
    setDiscountAmount(0);
    localStorage.removeItem(COUPON_STORAGE_KEY);
  };

  const subtotal = items.reduce((sum, item) => sum + item.subtotal, 0);

  let computedDiscount = 0;
  if (couponCode === 'SEMPORNA10' || couponCode === 'WELCOME10') {
    computedDiscount = subtotal * 0.1;
  } else if (couponCode === 'LOCAL50') {
    computedDiscount = Math.min(50, subtotal);
  }

  const serviceFee = subtotal > 0 ? Math.round(subtotal * 0.03 * 100) / 100 : 0; // 3% platform fee
  const taxAmount = 0; // SST exempted / inclusive
  const total = Math.max(0, subtotal - computedDiscount + serviceFee);

  return (
    <BasketContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        clearBasket,
        couponCode,
        discountAmount: computedDiscount,
        applyCoupon,
        removeCoupon,
        subtotal,
        serviceFee,
        taxAmount,
        total,
        holdExpiresAt,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export const useBasket = () => {
  const context = useContext(BasketContext);
  if (!context) {
    throw new Error('useBasket must be used within a BasketProvider');
  }
  return context;
};
