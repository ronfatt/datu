'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ShieldCheck, TrendingUp, DollarSign, Users, Home, Compass, BarChart3, CheckCircle2, Clock, Settings, Percent } from 'lucide-react';

export default function AdminDashboardPage() {
  const [activeSection, setActiveSection] = useState<'overview' | 'commission' | 'payouts' | 'partners'>('overview');

  const analytics = [
    { label: "Gross Booking Value (GBV)", value: "RM 184,500.00", icon: DollarSign, change: "+24.5%" },
    { label: "Platform Net Revenue", value: "RM 26,420.00", icon: TrendingUp, change: "+18.2%" },
    { label: "Total Bookings", value: "312", icon: BarChart3, change: "+42 this month" },
    { label: "Active Partners", value: "28 Local Partners", icon: Users, change: "8 Homestays • 6 Guides" },
  ];

  return (
    <div className="py-10 bg-navy min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-navy-dark border border-white/10 p-6 rounded-3xl">
          <div className="space-y-1">
            <span className="text-[10px] uppercase font-bold text-turquoise tracking-widest flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" /> SUPER ADMIN CONTROL PANEL
            </span>
            <h1 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
              Semporna Local Platform Analytics
            </h1>
            <p className="text-xs text-gray-400">System metrics, partner commission configs & payout queues.</p>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold rounded-full">
              System Online (Supabase Active)
            </span>
          </div>
        </div>

        {/* ANALYTICS CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {analytics.map((a, i) => {
            const Icon = a.icon;
            return (
              <div key={i} className="p-5 rounded-2xl bg-navy-dark border border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-sand-light uppercase">{a.label}</span>
                  <div className="w-8 h-8 rounded-lg bg-turquoise/20 text-turquoise flex items-center justify-center">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-2xl font-heading font-extrabold text-white">{a.value}</div>
                <div className="text-[11px] text-emerald-400 font-semibold">{a.change}</div>
              </div>
            );
          })}
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-white/10 gap-6 text-sm font-semibold">
          <button
            onClick={() => setActiveSection('overview')}
            className={`pb-3 transition-colors ${activeSection === 'overview' ? 'text-turquoise border-b-2 border-turquoise font-bold' : 'text-gray-400 hover:text-white'}`}
          >
            Overview Analytics
          </button>
          <button
            onClick={() => setActiveSection('commission')}
            className={`pb-3 transition-colors ${activeSection === 'commission' ? 'text-turquoise border-b-2 border-turquoise font-bold' : 'text-gray-400 hover:text-white'}`}
          >
            Commission Rates Settings
          </button>
          <button
            onClick={() => setActiveSection('payouts')}
            className={`pb-3 transition-colors ${activeSection === 'payouts' ? 'text-turquoise border-b-2 border-turquoise font-bold' : 'text-gray-400 hover:text-white'}`}
          >
            Partner Payout Queue (RM 14,250)
          </button>
        </div>

        {/* COMMISSION RATES CONFIGURATION SECTION */}
        {activeSection === 'commission' && (
          <div className="bg-navy-dark border border-white/10 rounded-3xl p-6 space-y-6">
            <div className="space-y-1">
              <h3 className="font-heading font-extrabold text-lg text-white flex items-center gap-2">
                <Percent className="w-5 h-5 text-turquoise" />
                Service Commission Rate Configuration
              </h3>
              <p className="text-xs text-gray-400">Set default platform take rates per service category.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/5 border border-white/10 p-4 rounded-2xl space-y-2">
                <span className="text-xs font-bold text-sand-light uppercase">Accommodation (Stays)</span>
                <div className="text-2xl font-extrabold text-turquoise">12.00%</div>
                <p className="text-[11px] text-gray-400">Applied to Homestays, Hotels & Water Chalets</p>
              </div>

              <div className="bg-white/5 border border-white/10 p-4 rounded-2xl space-y-2">
                <span className="text-xs font-bold text-sand-light uppercase">Local Guides</span>
                <div className="text-2xl font-extrabold text-turquoise">15.00%</div>
                <p className="text-[11px] text-gray-400">Applied to daily guide bookings</p>
              </div>

              <div className="bg-white/5 border border-white/10 p-4 rounded-2xl space-y-2">
                <span className="text-xs font-bold text-sand-light uppercase">Experiences & Tours</span>
                <div className="text-2xl font-extrabold text-turquoise">18.00%</div>
                <p className="text-[11px] text-gray-400">Applied to island hopping & diving</p>
              </div>

              <div className="bg-white/5 border border-white/10 p-4 rounded-2xl space-y-2">
                <span className="text-xs font-bold text-sand-light uppercase">Airport Transfers</span>
                <div className="text-2xl font-extrabold text-turquoise">10.00%</div>
                <p className="text-[11px] text-gray-400">Applied to airport shuttles & cars</p>
              </div>
            </div>
          </div>
        )}

        {/* PAYOUT QUEUE TABLE */}
        <div className="bg-navy-dark border border-white/10 rounded-3xl p-6 space-y-4">
          <div className="flex justify-between items-center pb-3 border-b border-white/10">
            <h3 className="font-heading font-bold text-base text-white">Manual Partner Payout Queue</h3>
            <span className="text-xs text-turquoise">Stripe Connect Prepared</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-gray-300">
              <thead className="bg-white/5 text-sand-light uppercase font-bold text-[10px]">
                <tr>
                  <th className="p-3">Partner Name</th>
                  <th className="p-3">Service Type</th>
                  <th className="p-3">Gross Revenue</th>
                  <th className="p-3">Commission Amount</th>
                  <th className="p-3">Net Payout</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr>
                  <td className="p-3 font-bold text-white">Sea Breeze Homestay</td>
                  <td className="p-3">Stay</td>
                  <td className="p-3">RM 14,280.00</td>
                  <td className="p-3 text-turquoise">RM 1,713.60 (12%)</td>
                  <td className="p-3 font-bold text-white">RM 12,566.40</td>
                  <td className="p-3"><span className="bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded text-[10px] font-bold">READY</span></td>
                  <td className="p-3">
                    <button className="px-3 py-1 bg-turquoise text-navy font-bold text-[11px] rounded-lg">
                      Mark Paid
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-white">Amin Rahman (Guide)</td>
                  <td className="p-3">Guide</td>
                  <td className="p-3">RM 3,240.00</td>
                  <td className="p-3 text-turquoise">RM 486.00 (15%)</td>
                  <td className="p-3 font-bold text-white">RM 2,754.00</td>
                  <td className="p-3"><span className="bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded text-[10px] font-bold">PAID</span></td>
                  <td className="p-3">
                    <span className="text-[11px] text-gray-400">Ref: MBK-884912</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
