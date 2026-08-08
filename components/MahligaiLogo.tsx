'use client';

import React from 'react';
import Image from 'next/image';

interface MahligaiLogoProps {
  className?: string;
  showSubtitle?: boolean;
  size?: 'sm' | 'md' | 'lg';
  centered?: boolean;
}

export default function MahligaiLogo({
  className = '',
  showSubtitle = true,
  size = 'md',
  centered = false,
}: MahligaiLogoProps) {
  // Height sizing
  const iconHeight = size === 'sm' ? 'h-9 sm:h-10' : size === 'md' ? 'h-11 sm:h-14' : 'h-16 sm:h-20';

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3.5 ${centered ? 'justify-center text-center' : ''} ${className}`}>
      
      {/* Official Metallic Mahligai Semporna Emblem */}
      <div className={`relative ${iconHeight} aspect-[1.5/1] flex-shrink-0 flex items-center justify-center`}>
        <svg
          viewBox="0 0 200 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_2px_10px_rgba(212,175,55,0.4)]"
        >
          <defs>
            <linearGradient id="mahligaiGoldMetallic" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FBF0BD" />
              <stop offset="35%" stopColor="#D4AF37" />
              <stop offset="70%" stopColor="#C5A059" />
              <stop offset="100%" stopColor="#8A6B29" />
            </linearGradient>
          </defs>

          {/* Outer Roof Ridge Curve */}
          <path
            d="M 15 52 C 55 26, 88 12, 100 10 C 112 12, 145 26, 185 52"
            stroke="url(#mahligaiGoldMetallic)"
            strokeWidth="3.8"
            strokeLinecap="round"
          />
          
          {/* Top Finials */}
          <path
            d="M 95 12 C 93 4, 88 0, 84 -2 M 105 12 C 107 4, 112 0, 116 -2"
            stroke="url(#mahligaiGoldMetallic)"
            strokeWidth="2.8"
            strokeLinecap="round"
          />

          {/* Inner Gable Triangle & Geometric Motif */}
          <polygon
            points="100,20 48,50 152,50"
            stroke="url(#mahligaiGoldMetallic)"
            strokeWidth="2.2"
            fill="#090B0E"
          />
          <path
            d="M 100 25 L 72 44 M 100 25 L 128 44 M 100 34 L 86 44 M 100 34 L 114 44 M 100 20 L 100 50"
            stroke="url(#mahligaiGoldMetallic)"
            strokeWidth="1.8"
          />

          {/* Octagonal Frame */}
          <path
            d="M 22 55 L 178 55 L 192 66 L 192 94 L 178 105 L 22 105 L 8 94 L 8 66 Z"
            stroke="url(#mahligaiGoldMetallic)"
            strokeWidth="3"
            fill="#090B0E"
          />
          <path
            d="M 25 58 L 175 58 L 188 68 L 188 92 L 175 102 L 25 102 L 12 92 L 12 68 Z"
            stroke="url(#mahligaiGoldMetallic)"
            strokeWidth="1"
            fill="none"
            strokeDasharray="3 2"
          />

          {/* MAHLIGAI Text (Geometric Stylized A's without horizontal bar: M Λ H L I G Λ I) */}
          <text
            x="100"
            y="81"
            textAnchor="middle"
            fill="url(#mahligaiGoldMetallic)"
            fontFamily="Plus Jakarta Sans, sans-serif"
            fontWeight="800"
            fontSize="18"
            letterSpacing="3.5"
          >
            MAHLIGAI
          </text>

          {/* SEMPORNA Subtitle with boundary lines */}
          <line x1="28" y1="94" x2="58" y2="94" stroke="url(#mahligaiGoldMetallic)" strokeWidth="1" />
          <text
            x="100"
            y="97"
            textAnchor="middle"
            fill="#E2E8F0"
            fontFamily="Inter, sans-serif"
            fontWeight="700"
            fontSize="8.5"
            letterSpacing="3"
          >
            SEMPORNA
          </text>
          <line x1="142" y1="94" x2="172" y2="94" stroke="url(#mahligaiGoldMetallic)" strokeWidth="1" />

          {/* Bottom Geometric Diamond Emblem */}
          <polygon
            points="100,105 107,112 100,119 93,112"
            stroke="url(#mahligaiGoldMetallic)"
            strokeWidth="1.8"
            fill="#090B0E"
          />
        </svg>
      </div>

      {/* Brand Text Labels - Mobile & Desktop Optics Alignment */}
      {showSubtitle && (
        <div className={`flex flex-col ${centered ? 'items-center text-center' : 'items-start text-left'}`}>
          <div className="flex items-center gap-1 leading-none">
            <span className="font-heading font-extrabold text-lg sm:text-2xl tracking-wider text-gold-gradient">
              MAHLIGAI
            </span>
            <span className="font-heading font-light text-sm sm:text-lg text-gray-300 tracking-wider">
              SEMPORNA
            </span>
          </div>
          <span className="text-[9px] sm:text-[10px] tracking-wider font-semibold uppercase text-gold-medium mt-0.5 truncate">
            Datu.H — Your Local Way to Semporna
          </span>
        </div>
      )}
    </div>
  );
}
