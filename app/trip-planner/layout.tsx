import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Interactive Semporna Trip Planner | Mahligai Semporna',
  description: 'Build your custom Semporna journey in 4 easy steps. Combine overwater chalets, native guides, island hopping & airport transfers into 1 bundle.',
  openGraph: {
    title: 'Build My Semporna Trip | Mahligai Semporna by Datu.H',
    description: 'Tell us how you travel. We will build your custom Semporna itinerary combining stays, guides, tours & transfers.',
    images: ['https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=1200&h=630&q=80'],
  },
};

export default function TripPlannerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
