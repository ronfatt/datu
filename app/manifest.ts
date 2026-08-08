import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Semporna Local - Discover Semporna Like a Local',
    short_name: 'Semporna Local',
    description: 'Handpicked local stays, trusted local guides, authentic island experiences and Tawau Airport transfers in Semporna, Sabah, Malaysia.',
    start_url: '/',
    display: 'standalone',
    background_color: '#071923',
    theme_color: '#071923',
    orientation: 'portrait',
    icons: [
      {
        src: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=192&q=80',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=512&q=80',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
