'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Star, Clock, MapPin, ArrowRight } from 'lucide-react';
import { SAMPLE_EXPERIENCES } from '@/lib/mock-data';

export default function UnforgettableExperiences() {
  const experiences = SAMPLE_EXPERIENCES.slice(0, 4);

  return (
    <section className="py-12 bg-navy border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-[10px] uppercase font-extrabold text-turquoise tracking-widest block mb-1">
              TOP EXPERIENCES
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
              Island Trips & Tours
            </h2>
          </div>

          <Link
            href="/experiences"
            className="flex items-center gap-1 text-xs font-bold text-turquoise hover:underline"
          >
            <span>All Experiences ({SAMPLE_EXPERIENCES.length})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {experiences.map((exp) => (
            <Link
              key={exp.id}
              href={`/experiences/${exp.slug}`}
              className="group relative rounded-2xl overflow-hidden bg-navy-dark border border-white/10 flex flex-col justify-between hover:border-turquoise/50 transition-all duration-300 shadow-card hover:shadow-card-hover"
            >
              {/* Photo First */}
              <div className="relative aspect-[16/11] overflow-hidden bg-navy">
                <Image
                  src={exp.images[0]}
                  alt={exp.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2.5 left-2.5 bg-navy/85 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] font-bold text-turquoise border border-turquoise/30">
                  {exp.category}
                </div>
                <div className="absolute bottom-2.5 left-2.5 bg-navy/85 backdrop-blur-md px-2 py-0.5 rounded-md text-[10px] font-bold text-sand-light flex items-center gap-1">
                  <Star className="w-3 h-3 text-yellow-400 fill-current" />
                  {exp.rating}
                </div>
              </div>

              {/* Minimal Text */}
              <div className="p-3.5 flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <div className="flex items-center gap-2 text-[10px] text-gray-400">
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-turquoise" /> {exp.duration}</span>
                    <span>•</span>
                    <span className="truncate flex items-center gap-1"><MapPin className="w-3 h-3 text-turquoise" /> {exp.location}</span>
                  </div>
                  <h3 className="font-heading font-bold text-sm text-white group-hover:text-turquoise transition-colors line-clamp-1 mt-1">
                    {exp.title}
                  </h3>
                </div>

                <div className="flex items-baseline justify-between pt-2 border-t border-white/5">
                  <div>
                    <span className="text-[10px] text-gray-400 uppercase">From </span>
                    <span className="text-base font-extrabold text-turquoise">RM{exp.price}</span>
                  </div>
                  <span className="text-[10px] font-bold text-navy bg-turquoise px-2.5 py-1 rounded-lg">
                    Book
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
