'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Palmtree, Lock, Mail, ArrowRight } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/profile');
  };

  return (
    <div className="py-20 bg-navy min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md px-4 space-y-8">
        <div className="text-center space-y-3">
          <Link href="/" className="inline-flex items-center gap-2">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-ocean to-turquoise flex items-center justify-center text-navy shadow-lg">
              <Palmtree className="w-7 h-7 stroke-[2.5]" />
            </div>
          </Link>
          <h1 className="text-3xl font-heading font-extrabold text-white">Welcome Back</h1>
          <p className="text-xs text-gray-400">Log in to manage your Semporna bookings & itineraries.</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-navy-dark border border-white/10 p-8 rounded-3xl space-y-5 shadow-2xl">
          <div className="space-y-1">
            <label className="text-[10px] uppercase font-bold text-sand-light block">Email Address</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-xs text-white focus:border-turquoise"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] uppercase font-bold text-sand-light block">Password</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-xs text-white focus:border-turquoise"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-xl bg-turquoise text-navy font-heading font-extrabold text-sm hover:bg-turquoise-light transition-all shadow-lg flex items-center justify-center gap-2"
          >
            <span>Sign In</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <div className="text-center text-xs text-gray-400 pt-2">
            Don&apos;t have an account?{' '}
            <Link href="/register" className="text-turquoise hover:underline font-semibold">
              Create Account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
