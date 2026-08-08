import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Top Semporna Island Hopping, Bohey Dulang Hike & Sipadan Permits | Mahligai Semporna',
  description: 'Book top-rated Mabul & Kapalai day tours, Bohey Dulang peak mountain hikes, Sipadan dive permits & sunset catamaran cruises in Semporna.',
  openGraph: {
    title: 'Top Semporna Experiences & Island Trips | Mahligai Semporna by Datu.H',
    description: 'Explore Bohey Dulang, Mabul, Sipadan, and secret coral reefs with Mahligai Semporna.',
    images: ['https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&h=630&q=80'],
  },
};

export default function ExperiencesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
