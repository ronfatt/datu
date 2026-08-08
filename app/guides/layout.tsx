import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Licensed Native Semporna Guides | Mahligai Semporna',
  description: 'Hire trusted native boat captains, divers & media photographers who call Semporna home. Personalized island hopping tours by Datu.H.',
  openGraph: {
    title: 'Meet Your Local Semporna Guide | Mahligai Semporna by Datu.H',
    description: 'Explore Semporna with trusted native captains, divers, and photographers who call this paradise home.',
    images: ['https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&h=630&q=80'],
  },
};

export default function GuidesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
