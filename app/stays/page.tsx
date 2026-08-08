'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Star, MapPin, SlidersHorizontal, Heart, Check, X } from 'lucide-react';
import { SAMPLE_PROPERTIES } from '@/lib/mock-data';
import { useLanguage } from '@/lib/i18n';

export default function StaysSearchPage() {
  const { t } = useLanguage();

  // Filters State
  const [selectedLocation, setSelectedLocation] = useState<string>('All');
  const [selectedType, setSelectedType] = useState<string>('All');
  const [maxPrice, setMaxPrice] = useState<number>(800);
  const [minRating, setMinRating] = useState<number>(0);
  const [selectedFacilities, setSelectedFacilities] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<'recommended' | 'price_low' | 'price_high' | 'rating'>('recommended');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [wishlist, setWishlist] = useState<Record<string, boolean>>({});

  const toggleFacility = (facility: string) => {
    setSelectedFacilities((prev) =>
      prev.includes(facility) ? prev.filter((f) => f !== facility) : [...prev, facility]
    );
  };

  const toggleWishlist = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setWishlist((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredProperties = useMemo(() => {
    let result = [...SAMPLE_PROPERTIES];

    if (selectedLocation !== 'All') {
      result = result.filter((p) => p.locationName === selectedLocation);
    }

    if (selectedType !== 'All') {
      result = result.filter((p) => p.type === selectedType);
    }

    result = result.filter((p) => p.pricePerNight <= maxPrice);

    if (minRating > 0) {
      result = result.filter((p) => p.rating >= minRating);
    }

    if (selectedFacilities.length > 0) {
      result = result.filter((p) =>
        selectedFacilities.every((f) => p.facilities.includes(f))
      );
    }

    if (sortBy === 'price_low') {
      result.sort((a, b) => a.pricePerNight - b.pricePerNight);
    } else if (sortBy === 'price_high') {
      result.sort((a, b) => b.pricePerNight - a.pricePerNight);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [selectedLocation, selectedType, maxPrice, minRating, selectedFacilities, sortBy]);

  const facilityOptions = [
    'WiFi', 'Breakfast Included', 'Air Conditioning', 'Private Bathroom', 'Sea View', 'Swimming Pool', 'Diving Center'
  ];

  return (
    <div className="py-10 bg-navy min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb & Header */}
        <div className="mb-8 space-y-2">
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <Link href="/" className="hover:text-turquoise">Home</Link>
            <span>/</span>
            <span className="text-turquoise font-semibold">Stays</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-heading font-extrabold text-white">
                Semporna Stays & Water Chalets
              </h1>
              <p className="text-xs text-gray-400 mt-1">
                Showing {filteredProperties.length} handpicked places in Semporna, Sabah
              </p>
            </div>

            {/* Mobile Filter Button */}
            <button
              onClick={() => setIsMobileFilterOpen(true)}
              className="lg:hidden flex items-center justify-center gap-2 px-4 py-2.5 bg-turquoise text-navy font-bold text-xs rounded-xl shadow-md"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>Filter ({filteredProperties.length})</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* DESKTOP FILTER SIDEBAR */}
          <div className="hidden lg:block space-y-6 bg-navy-dark border border-white/10 p-6 rounded-2xl h-fit sticky top-24">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <h3 className="font-heading font-bold text-white text-base flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-turquoise" />
                Filters
              </h3>
              <button
                onClick={() => {
                  setSelectedLocation('All');
                  setSelectedType('All');
                  setMaxPrice(800);
                  setMinRating(0);
                  setSelectedFacilities([]);
                }}
                className="text-xs text-turquoise hover:underline"
              >
                Reset All
              </button>
            </div>

            {/* Location */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-sand-light">Location</label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-turquoise"
              >
                <option value="All" className="bg-navy-dark">All Locations</option>
                <option value="Semporna Town" className="bg-navy-dark">Semporna Town</option>
                <option value="Seafront" className="bg-navy-dark">Seafront Promenade</option>
                <option value="Near Jetty" className="bg-navy-dark">Near Jetty</option>
                <option value="Island" className="bg-navy-dark">Island (Mabul / Mataking)</option>
              </select>
            </div>

            {/* Property Type */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-sand-light">Property Type</label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-turquoise"
              >
                <option value="All" className="bg-navy-dark">All Types</option>
                <option value="Water Chalet" className="bg-navy-dark">Water Chalet</option>
                <option value="Homestay" className="bg-navy-dark">Homestay</option>
                <option value="Hotel" className="bg-navy-dark">Hotel</option>
                <option value="Villa" className="bg-navy-dark">Villa</option>
                <option value="Chalet" className="bg-navy-dark">Chalet</option>
                <option value="Guesthouse" className="bg-navy-dark">Guesthouse</option>
              </select>
            </div>

            {/* Max Price Range */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="font-bold uppercase tracking-wider text-sand-light">Max Price / Night</span>
                <span className="font-bold text-turquoise">RM{maxPrice}</span>
              </div>
              <input
                type="range"
                min="100"
                max="800"
                step="20"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-turquoise"
              />
            </div>

            {/* Rating Filter */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-sand-light">Minimum Rating</label>
              <div className="flex gap-2">
                {[0, 4.5, 4.8].map((r) => (
                  <button
                    key={r}
                    onClick={() => setMinRating(r)}
                    className={`flex-1 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                      minRating === r
                        ? 'bg-turquoise text-navy border-turquoise'
                        : 'bg-white/5 border-white/10 text-gray-300 hover:border-turquoise/40'
                    }`}
                  >
                    {r === 0 ? 'Any' : `${r}+ ★`}
                  </button>
                ))}
              </div>
            </div>

            {/* Facilities Checkboxes */}
            <div className="space-y-2 pt-2">
              <label className="text-xs font-bold uppercase tracking-wider text-sand-light">Facilities</label>
              <div className="space-y-1.5 max-h-44 overflow-y-auto pr-1">
                {facilityOptions.map((f) => (
                  <label key={f} className="flex items-center gap-2 text-xs text-gray-300 cursor-pointer hover:text-white">
                    <input
                      type="checkbox"
                      checked={selectedFacilities.includes(f)}
                      onChange={() => toggleFacility(f)}
                      className="rounded accent-turquoise bg-white/5 border-white/10"
                    />
                    <span>{f}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* SEARCH RESULTS LIST */}
          <div className="lg:col-span-3 space-y-6">
            
            {/* Sorting Header */}
            <div className="flex items-center justify-between bg-navy-dark border border-white/10 px-4 py-3 rounded-2xl">
              <span className="text-xs text-gray-400 font-medium">
                {filteredProperties.length} Properties available
              </span>
              <div className="flex items-center gap-2">
                <span className="text-xs text-sand-light font-bold">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-white/5 border border-white/10 rounded-lg px-2.5 py-1 text-xs text-white focus:outline-none focus:border-turquoise"
                >
                  <option value="recommended" className="bg-navy-dark">Recommended</option>
                  <option value="price_low" className="bg-navy-dark">Price: Low → High</option>
                  <option value="price_high" className="bg-navy-dark">Price: High → Low</option>
                  <option value="rating" className="bg-navy-dark">Top Rated</option>
                </select>
              </div>
            </div>

            {/* Property Cards */}
            {filteredProperties.length === 0 ? (
              <div className="py-16 text-center bg-navy-dark border border-white/10 rounded-2xl space-y-3">
                <p className="text-base font-bold text-white">No stays match your criteria</p>
                <p className="text-xs text-gray-400">Try adjusting your filters or price range.</p>
                <button
                  onClick={() => {
                    setSelectedLocation('All');
                    setSelectedType('All');
                    setMaxPrice(800);
                    setMinRating(0);
                    setSelectedFacilities([]);
                  }}
                  className="px-4 py-2 bg-turquoise text-navy font-bold text-xs rounded-xl"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredProperties.map((stay) => (
                  <Link
                    key={stay.id}
                    href={`/stays/${stay.slug}`}
                    className="group rounded-2xl overflow-hidden bg-navy-dark border border-white/10 flex flex-col justify-between hover:border-turquoise/50 transition-all duration-300 shadow-card hover:shadow-card-hover"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-navy">
                      <Image
                        src={stay.images[0]}
                        alt={stay.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 bg-navy/80 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-semibold text-turquoise border border-turquoise/30">
                        {stay.type}
                      </div>
                      <button
                        onClick={(e) => toggleWishlist(stay.id, e)}
                        className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-colors ${
                          wishlist[stay.id] ? 'bg-red-500 text-white' : 'bg-navy/60 text-white/80 hover:text-white'
                        }`}
                      >
                        <Heart className={`w-4 h-4 ${wishlist[stay.id] ? 'fill-current' : ''}`} />
                      </button>
                    </div>

                    <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-xs text-gray-400">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5 text-turquoise" />
                            {stay.locationName}
                          </span>
                          <span className="flex items-center gap-1 font-semibold text-sand-light">
                            <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                            {stay.rating} ({stay.reviewCount})
                          </span>
                        </div>
                        <h3 className="font-heading font-bold text-base text-white group-hover:text-turquoise transition-colors">
                          {stay.name}
                        </h3>
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {stay.facilities.slice(0, 3).map((f) => (
                          <span key={f} className="text-[10px] bg-white/5 text-gray-300 px-2 py-0.5 rounded border border-white/5">
                            {f}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-end justify-between pt-3 border-t border-white/10">
                        <div>
                          <span className="text-[10px] text-gray-400 uppercase font-semibold">From</span>
                          <div className="flex items-baseline gap-1">
                            <span className="text-lg font-bold text-turquoise">RM{stay.pricePerNight}</span>
                            <span className="text-xs text-gray-400">{t('per_night')}</span>
                          </div>
                        </div>
                        <span className="px-3.5 py-1.5 rounded-lg bg-turquoise text-navy text-xs font-bold group-hover:bg-turquoise-light transition-colors">
                          {t('view_stay')}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE BOTTOM SHEET FILTER */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 bg-navy/80 backdrop-blur-sm flex justify-end flex-col lg:hidden">
          <div className="bg-navy-dark border-t border-white/10 p-6 rounded-t-3xl max-h-[85vh] overflow-y-auto space-y-6 text-white shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <h3 className="font-heading font-bold text-lg">Filter Stays</h3>
              <button onClick={() => setIsMobileFilterOpen(false)} className="p-1 text-gray-400 hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Filters Content */}
            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold uppercase text-sand-light block mb-1">Location</label>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-sm text-white"
                >
                  <option value="All" className="bg-navy">All Locations</option>
                  <option value="Semporna Town" className="bg-navy">Semporna Town</option>
                  <option value="Seafront" className="bg-navy">Seafront Promenade</option>
                  <option value="Island" className="bg-navy">Island (Mabul/Mataking)</option>
                </select>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="font-bold text-sand-light uppercase">Max Price</span>
                  <span className="text-turquoise font-bold">RM{maxPrice}</span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="800"
                  step="20"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-turquoise"
                />
              </div>

              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="w-full py-3.5 bg-turquoise text-navy font-bold text-sm rounded-xl"
              >
                Apply Filters ({filteredProperties.length} Places)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
