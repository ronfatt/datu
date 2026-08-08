import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import './globals.css';
import { BasketProvider } from '@/lib/store/basket';
import { LanguageProvider } from '@/lib/i18n';
import Navbar from '@/components/Navbar';
import MobileBottomNav from '@/components/MobileBottomNav';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

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
  themeColor: '#071923',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  title: 'Datu.H — Your Local Way to Semporna',
  description: 'Datu.H — Your Local Way to Semporna. Handpicked local stays, trusted local guides, authentic island experiences, and Tawau Airport transfers in Semporna, Sabah, Malaysia.',
  keywords: ['Datu.H', 'Semporna', 'Mabul Island', 'Bohey Dulang', 'Sipadan', 'Sabah Tourism', 'Water Chalets', 'Local Guide Semporna'],
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Datu.H Semporna',
  },
  openGraph: {
    title: 'Datu.H — Your Local Way to Semporna',
    description: 'Handpicked local stays, trusted local guides and authentic experiences — all in one place.',
    url: 'https://sempornalocal.com',
    siteName: 'Datu.H',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable}`}>
      <body className="bg-navy font-body text-offwhite min-h-screen flex flex-col antialiased selection:bg-turquoise selection:text-navy pb-16 lg:pb-0">
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
