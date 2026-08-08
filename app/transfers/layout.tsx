import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tawau Airport (TWU) ↔ Semporna Shuttle & Private Transfer | Mahligai Semporna',
  description: 'Book reliable 1.5-hour transfers between Tawau Airport (TWU) and Semporna town/jetty. Shared vans (RM35) and private MPV/Alphard options.',
  openGraph: {
    title: 'Tawau Airport ↔ Semporna Transfer Booking | Mahligai Semporna',
    description: 'Direct air-conditioned shuttle and private vehicle transfers straight to your Semporna hotel or boat jetty.',
    images: ['https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&h=630&q=80'],
  },
};

export default function TransfersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
