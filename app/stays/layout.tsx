import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Handpicked Water Chalets & Stays in Semporna | Mahligai Semporna',
  description: 'Book verified overwater chalets, Mabul island resorts, seafront boutique hotels & local homestays in Semporna, Sabah with Mahligai Semporna by Datu.H.',
  openGraph: {
    title: 'Semporna Water Chalets & Local Stays | Mahligai Semporna by Datu.H',
    description: 'Handpicked overwater chalets, Mabul island resorts & local homestays selected by Semporna locals.',
    images: ['https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&h=630&q=80'],
  },
};

export default function StaysLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
