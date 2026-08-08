'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { DollarSign, Calendar, Users, TrendingUp, CheckCircle2, Clock, Plus, ShieldCheck, Home } from 'lucide-react';

export default function PartnerDashboardPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'bookings' | 'listings' | 'payouts'>('overview');

  const metrics = [
    { label: "Today's Bookings", value: "3", sub: "2 Arrivals Today", icon: Calendar },
    { label: "Monthly Revenue", value: "RM 14,280.00", sub: "August 2026", icon: DollarSign },
    { label: "Platform Commission (12%)", value: "RM 1,713.60", sub: "Deducted at source", icon: TrendingUp },
    { label: "Net Partner Payout", value: "RM 12,566.40", sub: "Status: READY FOR PAYOUT", icon: CheckCircle2 },
  ];

  return (
    <div className="py-10 bg-navy min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header Banner */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-navy-dark border border-white/10 p-6 rounded-3xl">
          <div className="space-y-1">
            <span className="text-[10px] uppercase font-bold text-turquoise tracking-widest">
              HOMESTAY OWNER PORTAL • HARIMAUBARU ENTERPRISE
            </span>
            <h1 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
              Partner Dashboard: Sea Breeze Homestay
            </h1>
            <p className="text-xs text-gray-400">Verified Local Host • 8 Active Rooms</p>
          </div>

          <div className="flex items-center gap-3">
            <button className="px-4 py-2.5 bg-turquoise text-navy font-bold text-xs rounded-xl flex items-center gap-1.5 shadow-md">
              <Plus className="w-4 h-4 stroke-[2.5]" />
              <span>Add New Room / Tour</span>
            </button>
          </div>
        </div>

        {/* METRICS CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m, i) => {
            const Icon = m.icon;
            return (
              <div key={i} className="p-5 rounded-2xl bg-navy-dark border border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-sand-light uppercase">{m.label}</span>
                  <div className="w-8 h-8 rounded-lg bg-turquoise/20 text-turquoise flex items-center justify-center">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-2xl font-heading font-extrabold text-white">{m.value}</div>
                <div className="text-[11px] text-gray-400">{m.sub}</div>
              </div>
            );
          })}
        </div>

        {/* Dashboard Navigation Tabs */}
        <div className="flex border-b border-white/10 gap-6 text-sm font-semibold">
          <button
            onClick={() => setActiveTab('overview')}
            className={`pb-3 transition-colors ${activeTab === 'overview' ? 'text-turquoise border-b-2 border-turquoise font-bold' : 'text-gray-400 hover:text-white'}`}
          >
            Overview & Manifest
          </button>
          <button
            onClick={() => setActiveTab('bookings')}
            className={`pb-3 transition-colors ${activeTab === 'bookings' ? 'text-turquoise border-b-2 border-turquoise font-bold' : 'text-gray-400 hover:text-white'}`}
          >
            Manage Bookings (14)
          </button>
          <button
            onClick={() => setActiveTab('listings')}
            className={`pb-3 transition-colors ${activeTab === 'listings' ? 'text-turquoise border-b-2 border-turquoise font-bold' : 'text-gray-400 hover:text-white'}`}
          >
            Room Rates & Inventory
          </button>
          <button
            onClick={() => setActiveTab('payouts')}
            className={`pb-3 transition-colors ${activeTab === 'payouts' ? 'text-turquoise border-b-2 border-turquoise font-bold' : 'text-gray-400 hover:text-white'}`}
          >
            Payout History
          </button>
        </div>

        {/* RECENT BOOKINGS MANIFEST TABLE */}
        <div className="bg-navy-dark border border-white/10 rounded-3xl p-6 space-y-4">
          <div className="flex justify-between items-center pb-3 border-b border-white/10">
            <h3 className="font-heading font-bold text-base text-white">Upcoming Guest Manifest</h3>
            <span className="text-xs text-turquoise hover:underline cursor-pointer">Export CSV</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-gray-300">
              <thead className="bg-white/5 text-sand-light uppercase font-bold text-[10px]">
                <tr>
                  <th className="p-3">Booking ID</th>
                  <th className="p-3">Guest Name</th>
                  <th className="p-3">Room / Service</th>
                  <th className="p-3">Dates</th>
                  <th className="p-3">Gross Revenue</th>
                  <th className="p-3">Commission</th>
                  <th className="p-3">Net Payout</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr>
                  <td className="p-3 font-mono font-bold text-turquoise">SMPR-849201</td>
                  <td className="p-3 font-bold text-white">Hazriel Zakaria</td>
                  <td className="p-3">Overwater Deluxe King</td>
                  <td className="p-3">12 Sep - 15 Sep 2026</td>
                  <td className="p-3">RM 840.00</td>
                  <td className="p-3 text-red-400">-RM 100.80 (12%)</td>
                  <td className="p-3 font-bold text-emerald-400">RM 739.20</td>
                  <td className="p-3"><span className="bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded text-[10px] font-bold">CONFIRMED</span></td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-bold text-turquoise">SMPR-310492</td>
                  <td className="p-3 font-bold text-white">Li Wei (China)</td>
                  <td className="p-3">Family Ocean Suite</td>
                  <td className="p-3">14 Sep - 17 Sep 2026</td>
                  <td className="p-3">RM 1,350.00</td>
                  <td className="p-3 text-red-400">-RM 162.00 (12%)</td>
                  <td className="p-3 font-bold text-emerald-400">RM 1,188.00</td>
                  <td className="p-3"><span className="bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded text-[10px] font-bold">CONFIRMED</span></td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-bold text-turquoise">SMPR-958204</td>
                  <td className="p-3 font-bold text-white">Sarah Jenkins (UK)</td>
                  <td className="p-3">Overwater Deluxe King</td>
                  <td className="p-3">18 Sep - 20 Sep 2026</td>
                  <td className="p-3">RM 560.00</td>
                  <td className="p-3 text-red-400">-RM 67.20 (12%)</td>
                  <td className="p-3 font-bold text-emerald-400">RM 492.80</td>
                  <td className="p-3"><span className="bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded text-[10px] font-bold">CONFIRMED</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
