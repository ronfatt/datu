'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Compass, Search, Map, ShoppingBag, User } from 'lucide-react';
import { useBasket } from '@/lib/store/basket';

export default function MobileBottomNav() {
  const pathname = usePathname();
  const { items } = useBasket();

  const navItems = [
    { label: 'Discover', icon: Compass, href: '/' },
    { label: 'Explore', icon: Search, href: '/stays' },
    { label: 'Planner', icon: Map, href: '/trip-planner' },
    { label: 'Trips', icon: ShoppingBag, href: '/my-trips', count: items.length },
    { label: 'Me', icon: User, href: '/profile' },
  ];

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-navy/95 backdrop-blur-lg border-t border-white/10 px-2 py-2 shadow-glass-dark">
      <div className="grid grid-cols-5 gap-1 items-center max-w-md mx-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`relative flex flex-col items-center justify-center py-1.5 px-1 rounded-xl transition-all ${
                isActive ? 'text-turquoise font-semibold' : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              <div className="relative">
                <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5] text-turquoise' : 'stroke-2'}`} />
                {item.count && item.count > 0 ? (
                  <span className="absolute -top-1.5 -right-2 bg-turquoise text-navy font-bold text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                    {item.count}
                  </span>
                ) : null}
              </div>
              <span className="text-[10px] tracking-tight mt-1">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
