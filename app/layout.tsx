import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import './globals.css';
import { BasketProvider } from '@/lib/store/basket';
import { LanguageProvider } from '@/lib/i18n';
import Navbar from '@/components/Navbar';
import MobileBottomNav from '@/components/MobileBottomNav';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import JsonLd from '@/components/JsonLd';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['400', '500', '600', '700', '800'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600', '700'],
});

export const viewport: Viewport = {
  themeColor: '#090B0E',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
};

const SITE_TITLE = 'MAHLIGAI SEMPORNA — Datu.H | Your Local Way to Semporna';
const SITE_DESCRIPTION = 'Discover Semporna like a local. Handpicked overwater chalets, trusted native guides, Bohey Dulang hikes, Sipadan dive permits & Tawau airport transfers — all in one local booking platform.';
const OG_IMAGE_URL = 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=1200&h=630&q=80';

export const metadata: Metadata = {
  metadataBase: new URL('https://sempornalocal.com'),
  title: {
    default: SITE_TITLE,
    template: '%s | Mahligai Semporna by Datu.H',
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'Mahligai Semporna',
    'Datu.H',
    'Semporna Travel Booking',
    'Semporna Water Chalets',
    'Mabul Island Resort',
    'Bohey Dulang Hike',
    'Sipadan Permit',
    'Tawau Airport Transfer',
    'Local Guide Semporna',
    'Sabah Tourism Malaysia',
  ],
  authors: [{ name: 'Mahligai Semporna by Datu.H' }],
  creator: 'Datu.H',
  publisher: 'Mahligai Semporna',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Mahligai Semporna',
  },

  // Open Graph for Social Media Link Sharing (WhatsApp, WeChat, Facebook, LinkedIn)
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: 'https://sempornalocal.com',
    siteName: 'MAHLIGAI SEMPORNA by Datu.H',
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: 'Mahligai Semporna Aerial Island Drone View',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  // Twitter Large Card Preview
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE_URL],
    creator: '@DatuHSemporna',
  },

  // Robots SEO Directive
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable}`}>
      <head>
        <JsonLd />
      </head>
      <body className="bg-navy font-body text-offwhite min-h-screen flex flex-col antialiased selection:bg-gold selection:text-navy pb-16 lg:pb-0">
        <LanguageProvider>
          <BasketProvider>
            <Navbar />
            <main className="flex-1 max-w-7xl mx-auto w-full">{children}</main>
            <Footer />
            <MobileBottomNav />
            <WhatsAppButton />
          </BasketProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
