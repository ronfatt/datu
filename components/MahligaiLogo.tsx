'use client';

import React from 'react';

interface MahligaiLogoProps {
  className?: string;
  showSubtitle?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export default function MahligaiLogo({ className = '', showSubtitle = true, size = 'md' }: MahligaiLogoProps) {
  const iconHeight = size === 'sm' ? 36 : size === 'md' ? 48 : 64;

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Mahligai Gold Roofline & Emblem SVG */}
      <svg
        viewBox="0 0 200 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ height: `${iconHeight}px`, width: 'auto' }}
        className="flex-shrink-0 drop-shadow-[0_2px_8px_rgba(212,175,55,0.3)]"
      >
        <defs>
          <linearGradient id="mahligaiGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F3E5AB" />
            <stop offset="40%" stopColor="#D4AF37" />
            <stop offset="80%" stopColor="#C5A059" />
            <stop offset="100%" stopColor="#9A7B38" />
          </linearGradient>
        </defs>

        {/* Outer Roof Ridge Curve */}
        <path
          d="M 20 50 C 60 25, 90 10, 100 8 C 110 10, 140 25, 180 50"
          stroke="url(#mahligaiGold)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        
        {/* Top Finials (Horned roof motif) */}
        <path
          d="M 95 10 C 93 2, 88 -2, 84 -4 M 105 10 C 107 2, 112 -2, 116 -4"
          stroke="url(#mahligaiGold)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Inner Gable Triangle & Filigree Roof Structure */}
        <polygon
          points="100,18 45,48 155,48"
          stroke="url(#mahligaiGold)"
          strokeWidth="2"
          fill="none"
        />
        {/* Geometric Fill Lines in Roof */}
        <path
          d="M 100 24 L 70 42 M 100 24 L 130 42 M 100 32 L 85 42 M 100 32 L 115 42 M 100 18 L 100 48"
          stroke="url(#mahligaiGold)"
          strokeWidth="1.5"
        />

        {/* Octagonal Golden Frame */}
        <path
          d="M 25 54 L 175 54 L 190 65 L 190 95 L 175 106 L 25 106 L 10 95 L 10 65 Z"
          stroke="url(#mahligaiGold)"
          strokeWidth="2.5"
          fill="none"
        />
        <path
          d="M 28 57 L 172 57 L 186 67 L 186 93 L 172 103 L 28 103 L 14 93 L 14 67 Z"
          stroke="url(#mahligaiGold)"
          strokeWidth="1"
          fill="none"
          strokeDasharray="4 2"
        />

        {/* MAHLIGAI Stylized Text */}
        <text
          x="100"
          y="82"
          textAnchor="middle"
          fill="url(#mahligaiGold)"
          fontFamily="Plus Jakarta Sans, sans-serif"
          fontWeight="800"
          fontSize="17"
          letterSpacing="4"
        >
          MAHLIGAI
        </text>

        {/* SEMPORNA Subtitle bounded by lines */}
        <line x1="30" y1="95" x2="60" y2="95" stroke="url(#mahligaiGold)" strokeWidth="1" />
        <text
          x="100"
          y="98"
          textAnchor="middle"
          fill="#CBD5E1"
          fontFamily="Inter, sans-serif"
          fontWeight="700"
          fontSize="8"
          letterSpacing="3"
        >
          SEMPORNA
        </text>
        <line x1="140" y1="95" x2="170" y2="95" stroke="url(#mahligaiGold)" strokeWidth="1" />

        {/* Bottom Diamond Ornament */}
        <polygon
          points="100,106 106,112 100,118 94,112"
          stroke="url(#mahligaiGold)"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>

      {/* Brand Text Block */}
      {showSubtitle && (
        <div className="flex flex-col">
          <span className="font-heading font-extrabold text-xl tracking-tight text-white flex items-center gap-1">
            <span className="text-gold-gradient tracking-wider font-heading">MAHLIGAI</span>
            <span className="text-gray-300 font-light text-base">SEMPORNA</span>
          </span>
          <span className="text-[9px] tracking-wider font-semibold uppercase text-gold-medium -mt-1">
            Datu.H — Your Local Way to Semporna
          </span>
        </div>
      )}
    </div>
  );
}
