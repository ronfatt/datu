import { Property, Guide, Experience, TransferService } from '../types';

export const SAMPLE_PROPERTIES: Property[] = [
  {
    id: 'stay-1',
    slug: 'sea-breeze-homestay',
    name: 'Sea Breeze Homestay & Water Chalets',
    type: 'Water Chalet',
    description: 'Experience living directly above Semporna’s crystal turquoise waters. Wake up to sea breezes, sea turtle sightings, and panoramic ocean sunrise views from your private balcony.',
    locationName: 'Seafront',
    address: 'Jalan Causeway, Oceanfront Promenade, 91308 Semporna, Sabah',
    rating: 4.8,
    reviewCount: 124,
    pricePerNight: 280,
    facilities: ['WiFi', 'Breakfast Included', 'Air Conditioning', 'Private Bathroom', 'Sea View', 'Balcony', 'Snorkelling Gear'],
    houseRules: ['Check-in: 2:00 PM', 'Check-out: 12:00 PM', 'No smoking inside chalets', 'Quiet hours after 10:00 PM'],
    cancellationPolicy: 'Free cancellation up to 7 days before check-in.',
    featured: true,
    partnerId: 'partner-1',
    partnerName: 'Haji Rahim & Family',
    images: [
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80'
    ],
    rooms: [
      {
        id: 'room-1-1',
        propertyId: 'stay-1',
        name: 'Overwater Deluxe King',
        description: 'Spacious water chalet with a king bed, direct ladder into the lagoon, and ocean balcony.',
        capacity: 2,
        bedType: '1 King Bed',
        price: 280,
        discountPrice: 250,
        totalInventory: 4,
        amenities: ['Sea View Balcony', 'Aircon', 'Ensuite Bathroom', 'Mini Fridge', 'Hot Shower'],
        images: ['https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80']
      },
      {
        id: 'room-1-2',
        propertyId: 'stay-1',
        name: 'Family Ocean Suite',
        description: 'Large water chalet suitable for families with 2 queen beds and wrap-around deck.',
        capacity: 4,
        bedType: '2 Queen Beds',
        price: 450,
        totalInventory: 2,
        amenities: ['Private Deck', 'Aircon', 'Hot Shower', 'Complimentary Kayak'],
        images: ['https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80']
      }
    ]
  },
  {
    id: 'stay-2',
    slug: 'mabul-coral-villa',
    name: 'Mabul Coral Sanctuary Villa',
    type: 'Villa',
    description: 'Boutique eco-resort nestled on Mabul Island fine white sand. Steps away from world-class macro diving and coral reefs.',
    locationName: 'Island',
    address: 'Mabul Island South Point, Semporna Archipelago, Sabah',
    rating: 4.9,
    reviewCount: 98,
    pricePerNight: 520,
    facilities: ['WiFi', 'All Meals Included', 'Air Conditioning', 'Private Bathroom', 'Sea View', 'Diving Center', 'Swimming Pool'],
    houseRules: ['Check-in: 1:00 PM', 'Check-out: 11:00 AM', 'Marine friendly sunblock only'],
    cancellationPolicy: 'Flexible: Cancel up to 14 days before check-in for full refund.',
    featured: true,
    partnerId: 'partner-2',
    partnerName: 'Mabul Eco Ventures',
    images: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80'
    ],
    rooms: [
      {
        id: 'room-2-1',
        propertyId: 'stay-2',
        name: 'Beachfront Coral Villa',
        description: 'Step directly onto the white sand from your sun terrace.',
        capacity: 2,
        bedType: '1 King Bed',
        price: 520,
        totalInventory: 6,
        amenities: ['Sea View', 'Full Board Meal Plan', 'Aircon', 'Day Bed'],
        images: ['https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80']
      }
    ]
  },
  {
    id: 'stay-3',
    slug: 'jetty-view-boutique-hotel',
    name: 'Semporna Jettyview Boutique Stay',
    type: 'Hotel',
    description: 'Modern, clean, and strategic hotel located 3 minutes walk from Semporna Tourist Jetty. Ideal for island-hoppers.',
    locationName: 'Near Jetty',
    address: 'Jalan Custom, Semporna Town Center, 91308 Semporna, Sabah',
    rating: 4.6,
    reviewCount: 210,
    pricePerNight: 160,
    facilities: ['WiFi', 'Air Conditioning', 'Elevator', 'Breakfast Option', '24h Front Desk', 'Luggage Storage'],
    houseRules: ['Check-in: 2:00 PM', 'Check-out: 12:00 PM'],
    cancellationPolicy: 'Free cancellation up to 48 hours prior to arrival.',
    featured: false,
    partnerId: 'partner-3',
    partnerName: 'Sabah Hospitality Group',
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80'
    ],
    rooms: [
      {
        id: 'room-3-1',
        propertyId: 'stay-3',
        name: 'Superior Queen Room',
        description: 'Comfortable room equipped with high speed WiFi and rain shower.',
        capacity: 2,
        bedType: '1 Queen Bed',
        price: 160,
        totalInventory: 12,
        amenities: ['Aircon', 'Flat TV', 'Hot Shower', 'Work Desk'],
        images: ['https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80']
      }
    ]
  },
  {
    id: 'stay-4',
    slug: 'kapalai-sunset-guesthouse',
    name: 'Kapalai Sunset Local Homestay',
    type: 'Homestay',
    description: 'Friendly Bajau family homestay experience with authentic homemade seafood meals and personal island boat trips.',
    locationName: 'Semporna Town',
    address: 'Kampung Simunul, Waterfront Road, 91308 Semporna, Sabah',
    rating: 4.7,
    reviewCount: 64,
    pricePerNight: 190,
    facilities: ['WiFi', 'Home-cooked Breakfast', 'Air Conditioning', 'Private Bathroom', 'Sea Terrace'],
    houseRules: ['Check-in: 2:00 PM', 'Check-out: 12:00 PM', 'Family friendly atmosphere'],
    cancellationPolicy: 'Free cancellation 3 days before arrival.',
    featured: true,
    partnerId: 'partner-4',
    partnerName: 'Encik Yusof & Family',
    images: [
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80'
    ],
    rooms: [
      {
        id: 'room-4-1',
        propertyId: 'stay-4',
        name: 'Sunset Waterfront Room',
        description: 'Cozy traditional timber homestay room with glass window facing sunset.',
        capacity: 2,
        bedType: '1 Queen Bed',
        price: 190,
        totalInventory: 3,
        amenities: ['Sunset View', 'Aircon', 'Breakfast', 'Shared Lounge'],
        images: ['https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80']
      }
    ]
  },
  {
    id: 'stay-5',
    slug: 'tun-sakaran-eco-chalets',
    name: 'Tun Sakaran Eco Water Lodge',
    type: 'Chalet',
    description: 'Rustic wooden overwater chalets off Bohey Dulang Island with crystal clear waters beneath.',
    locationName: 'Island',
    address: 'Bohey Dulang Lagoon, Tun Sakaran Marine Park, Sabah',
    rating: 4.9,
    reviewCount: 42,
    pricePerNight: 410,
    facilities: ['All Meals Included', 'Private Bathroom', 'Sea View', 'Snorkeling Deck'],
    houseRules: ['Solar power 24/7', 'Strict marine protection compliance'],
    cancellationPolicy: 'Full refund 7 days before check-in.',
    featured: false,
    partnerId: 'partner-5',
    partnerName: 'Marine Park Conservation Lodge',
    images: [
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80'
    ],
    rooms: [
      {
        id: 'room-5-1',
        propertyId: 'stay-5',
        name: 'Lagoon Overwater Chalet',
        description: 'Wake up above parrotfish and stingrays in pristine lagoon waters.',
        capacity: 2,
        bedType: '1 King Bed',
        price: 410,
        totalInventory: 5,
        amenities: ['Sea Balcony', 'Hot Shower', 'Full Board'],
        images: ['https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80']
      }
    ]
  },
  {
    id: 'stay-6',
    slug: 'seafront-panorama-suites',
    name: 'Semporna Seafront Panorama Suites',
    type: 'Hotel',
    description: 'Modern luxury suites overlooking the Semporna harbor with rooftop infinity sunset pool.',
    locationName: 'Seafront',
    address: 'Lot 12, Waterfront Commercial Complex, Semporna, Sabah',
    rating: 4.8,
    reviewCount: 156,
    pricePerNight: 340,
    facilities: ['WiFi', 'Infinity Pool', 'Air Conditioning', 'Breakfast', 'Sea View', 'Gym'],
    houseRules: ['Check-in: 3:00 PM', 'Check-out: 12:00 PM'],
    cancellationPolicy: 'Free cancellation up to 5 days before stay.',
    featured: true,
    partnerId: 'partner-6',
    partnerName: 'Panorama Oceanfront Hotels',
    images: [
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80'
    ],
    rooms: [
      {
        id: 'room-6-1',
        propertyId: 'stay-6',
        name: 'Panoramic Ocean Suite',
        description: 'Floor-to-ceiling glass windows with unobstructed harbor view.',
        capacity: 2,
        bedType: '1 King Bed',
        price: 340,
        totalInventory: 8,
        amenities: ['Ocean View', 'Infinity Pool Access', 'Buffet Breakfast', 'Bathtub'],
        images: ['https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80']
      }
    ]
  },
  {
    id: 'stay-7',
    slug: 'mataking-paradise-resort',
    name: 'Mataking Coral Paradise Haven',
    type: 'Villa',
    description: 'Luxury island sanctuary on Mataking Island featuring private beach access and sandbar walks.',
    locationName: 'Island',
    address: 'Mataking Island Reef, Semporna Archipelago, Sabah',
    rating: 4.9,
    reviewCount: 88,
    pricePerNight: 780,
    facilities: ['WiFi', 'Private Beach', 'Air Conditioning', 'Full Board', 'Spa', 'Dive Center'],
    houseRules: ['Check-in: 2:00 PM', 'Check-out: 11:00 AM'],
    cancellationPolicy: '14-day cancellation policy.',
    featured: false,
    partnerId: 'partner-7',
    partnerName: 'Mataking Island Resort',
    images: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80'
    ],
    rooms: [
      {
        id: 'room-7-1',
        propertyId: 'stay-7',
        name: 'Premium Beach Bungalow',
        description: 'Private timber villa on the white powder sand with jacuzzi.',
        capacity: 2,
        bedType: '1 King Bed',
        price: 780,
        totalInventory: 4,
        amenities: ['Beachfront', 'Private Jacuzzi', 'Full Board', 'Sunset Lounge'],
        images: ['https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80']
      }
    ]
  },
  {
    id: 'stay-8',
    slug: 'bajau-stilt-village-homestay',
    name: 'Bajau Heritage Water Village Stay',
    type: 'Guesthouse',
    description: 'Authentic cultural stay in a traditional wooden stilt house. Experience Bajau Laut hospitality.',
    locationName: 'Semporna Town',
    address: 'Lorong Heritage 4, Kampung Bangau-Bangau, Semporna, Sabah',
    rating: 4.7,
    reviewCount: 52,
    pricePerNight: 140,
    facilities: ['WiFi', 'Traditional Breakfast', 'Air Conditioning', 'Sea Terrace'],
    houseRules: ['Respect local village customs'],
    cancellationPolicy: 'Free cancellation up to 24h before stay.',
    featured: false,
    partnerId: 'partner-8',
    partnerName: 'Abang Zainal',
    images: [
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80'
    ],
    rooms: [
      {
        id: 'room-8-1',
        propertyId: 'stay-8',
        name: 'Traditional Stilt Room',
        description: 'Clean air-conditioned wooden room built over seawater.',
        capacity: 2,
        bedType: '1 Queen Bed',
        price: 140,
        totalInventory: 5,
        amenities: ['Aircon', 'Traditional Breakfast', 'Sea Terrace Access'],
        images: ['https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80']
      }
    ]
  }
];

export const SAMPLE_GUIDES: Guide[] = [
  {
    id: 'guide-1',
    slug: 'amin-rahman',
    name: 'Amin Rahman',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    bio: 'Licensed Sabah native guide with 6+ years leading island hopping, underwater photography, and secret snorkelling spots around Tun Sakaran Park.',
    languages: ['Bahasa Melayu', 'English', 'Mandarin (Basic)'],
    specialties: ['Island Hopping', 'Local Food', 'Photography', 'Secret Snorkeling'],
    experienceYears: 6,
    dailyRate: 180,
    halfDayRate: 120,
    rating: 4.9,
    reviewCount: 142,
    verified: true,
    partnerId: 'partner-g1',
    packages: [
      { id: 'pkg-1-1', name: 'Half Day Town & Culture Tour', price: 120, duration: '4 Hours', description: 'Explore Semporna wet markets, secret seafood spots, and Bajau village culture.' },
      { id: 'pkg-1-2', name: 'Full Day Private Island Expedition', price: 180, duration: '8 Hours', description: 'Guided boat navigation, photography coaching on Bohey Dulang peak, and secret reef snorkelling.' },
      { id: 'pkg-1-3', name: 'Private VIP Island Photography Tour', price: 280, duration: 'Full Day', description: 'Includes drone camera shots, GoPro underwater video capture, and personalized itinerary.' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'guide-2',
    slug: 'siti-nurhaliza-sabah',
    name: 'Siti Norazizah',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    bio: 'Born in Mabul Island. PADI Divemaster and marine bio enthusiast who loves introducing families and couples to sea turtles.',
    languages: ['Bahasa Melayu', 'English', 'Mandarin'],
    specialties: ['Diving', 'Sea Turtles', 'Family Friendly', 'Island Hopping'],
    experienceYears: 8,
    dailyRate: 200,
    halfDayRate: 130,
    rating: 5.0,
    reviewCount: 118,
    verified: true,
    partnerId: 'partner-g2',
    packages: [
      { id: 'pkg-2-1', name: 'Mabul & Kapalai Turtle Discovery', price: 200, duration: 'Full Day', description: 'Guided snorkelling/diving with sea turtles and blue ring octopus safety.' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'guide-3',
    slug: 'ken-wong',
    name: 'Ken Wong',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    bio: 'Fluent in Mandarin and Cantonese. Specializes in luxury small group tours, private speedboats, and drone photography.',
    languages: ['Mandarin', 'Cantonese', 'English', 'Bahasa Melayu'],
    specialties: ['Drone Photography', 'Private Boat', 'Luxury Groups', 'Seafood Feast'],
    experienceYears: 5,
    dailyRate: 220,
    halfDayRate: 150,
    rating: 4.9,
    reviewCount: 86,
    verified: true,
    partnerId: 'partner-g3',
    packages: [
      { id: 'pkg-3-1', name: 'Mandarin VIP Island & Drone Tour', price: 220, duration: 'Full Day', description: 'Full day photography with 4K drone video edits included.' }
    ],
    gallery: []
  },
  {
    id: 'guide-4',
    slug: 'captain-zulkifli',
    name: 'Captain Zulkifli (Abang Jul)',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    bio: 'Veteran Bajau navigator with 15 years experience reading Semporna currents, weather patterns, and marine life movements.',
    languages: ['Bahasa Melayu', 'Bajau', 'Basic English'],
    specialties: ['Boat Navigation', 'Deep Reef Fishing', 'Island Hopping', 'Sunset Cruises'],
    experienceYears: 15,
    dailyRate: 190,
    halfDayRate: 120,
    rating: 4.8,
    reviewCount: 94,
    verified: true,
    partnerId: 'partner-g4',
    packages: [
      { id: 'pkg-4-1', name: 'Veteran Marine Captain Guide', price: 190, duration: 'Full Day', description: 'Navigates secret, uncrowded coral reefs and secluded beaches.' }
    ],
    gallery: []
  },
  {
    id: 'guide-5',
    slug: 'mei-ling-tan',
    name: 'Mei Ling Tan',
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
    bio: 'Passionate eco-tourist guide and certified freediver. Specializes in female solo travelers and eco-conservation tours.',
    languages: ['English', 'Mandarin', 'Bahasa Melayu'],
    specialties: ['Freediving', 'Solo Travelers', 'Eco Conservation', 'Culture'],
    experienceYears: 4,
    dailyRate: 170,
    halfDayRate: 110,
    rating: 4.9,
    reviewCount: 53,
    verified: true,
    partnerId: 'partner-g5',
    packages: [
      { id: 'pkg-5-1', name: 'Solo Explorer & Freedive Guide', price: 170, duration: 'Full Day', description: 'Safe, fun freediving guidance and female solo friendly accompaniment.' }
    ],
    gallery: []
  },
  {
    id: 'guide-6',
    slug: 'fadli-bakar',
    name: 'Fadli Bakar',
    avatarUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
    bio: 'Semporna food critic and local culture guide. Knows every hidden seafood stall, lobster deal, and traditional sweet treat in town.',
    languages: ['Bahasa Melayu', 'English'],
    specialties: ['Local Food', 'Night Markets', 'Culture', 'Bajau Crafts'],
    experienceYears: 7,
    dailyRate: 150,
    halfDayRate: 100,
    rating: 4.8,
    reviewCount: 71,
    verified: true,
    partnerId: 'partner-g6',
    packages: [
      { id: 'pkg-6-1', name: 'Semporna Seafood & Night Market Safari', price: 150, duration: 'Half Day', description: 'Personalized food tasting, seafood selection at wholesale docks, and cooking session.' }
    ],
    gallery: []
  }
];

export const SAMPLE_EXPERIENCES: Experience[] = [
  {
    id: 'exp-1',
    slug: 'mabul-kapalai-island-hopping',
    title: 'Mabul & Kapalai Island Hopping Day Tour',
    category: 'Island Hopping',
    location: 'Mabul & Kapalai Islands',
    duration: '8 Hours (08:00 - 16:00)',
    price: 260,
    rating: 4.9,
    reviewCount: 310,
    shortDescription: 'Explore world-famous macro dive sites, crystal water sandbars, and swim alongside wild green sea turtles.',
    description: 'Depart from Semporna jetty for an action-packed full day visiting Mabul Island and Kapalai Water Resort sandbar. Enjoy top-tier snorkelling surrounded by colorful clownfish, rays, and friendly sea turtles.',
    highlights: [
      'Snorkel at Kapalai Sandbar Reef',
      'Walk along Mabul Island white sand beach & Bajau village',
      'Swim with wild green sea turtles',
      'Buffet lunch on island included',
      'Full set snorkelling gear & lifejacket provided'
    ],
    included: ['Speedboat transfer', 'Snorkel & mask', 'Buffet lunch & drinking water', 'Jetty fee', 'Professional boat captain & guide'],
    notIncluded: ['Hotel transfer to jetty', 'Personal souvenirs', 'Underwater camera rental (optional RM50)'],
    meetingPoint: 'Semporna Tourist Jetty, Pier 3 at 07:45 AM',
    importantInfo: 'Please bring sunblock, towel, dry bag, and swimwear. Suitable for non-swimmers with lifejackets.',
    featured: true,
    partnerId: 'partner-exp1',
    images: [
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'
    ],
    timeSlots: ['08:00 AM Departure']
  },
  {
    id: 'exp-2',
    slug: 'tun-sakaran-marine-park-hiking-snorkelling',
    title: 'Tun Sakaran Marine Park & Bohey Dulang Hike',
    category: 'Island Hopping',
    location: 'Bohey Dulang, Mantabuan & Sibuan',
    duration: '8.5 Hours',
    price: 280,
    rating: 4.95,
    reviewCount: 420,
    shortDescription: 'Hike 600m to the iconic Bohey Dulang peak overlooking the ancient volcanic lagoon, then snorkel at Sibuan island.',
    description: 'The ultimate Semporna signature experience. Climb Bohey Dulang peak for the famous postcard view of emerald lagoon, followed by mantabuan coral gardens and Sibuan Island sandspit.',
    highlights: [
      '600-meter panoramic mountain hike at Bohey Dulang',
      'Pristine coral garden snorkelling at Mantabuan',
      'White sandbar relaxed beach time at Sibuan Island',
      'Marine park conservation entry permits included'
    ],
    included: ['Bohey Dulang entry permits', 'Speedboat transport', 'Snorkeling equipment', 'Lunch box & mineral water', 'Hike guide'],
    notIncluded: ['Hiking shoes (required for mountain, rental available RM10 at jetty)'],
    meetingPoint: 'Semporna Public Jetty Pier 1 at 07:30 AM',
    importantInfo: 'Covered sports shoes/hiking shoes are MANDATORY for the Bohey Dulang hike. Flip-flops are strictly not allowed by park rangers.',
    featured: true,
    partnerId: 'partner-exp2',
    images: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'
    ],
    timeSlots: ['07:45 AM Departure']
  },
  {
    id: 'exp-3',
    slug: 'mataking-timba-timba-pom-pom-adventure',
    title: 'Mataking, Timba-Timba & Pom Pom Island Excursion',
    category: 'Island Hopping',
    location: 'Mataking, Timba-Timba, Pom Pom',
    duration: '8 Hours',
    price: 270,
    rating: 4.85,
    reviewCount: 230,
    shortDescription: 'Stroll across the narrow Timba-Timba sandbar into deep turquoise ocean and discover sea turtle nesting spots at Pom Pom.',
    description: 'A paradise day trip focusing on dramatic sandbars, clear water clarity, and pristine sea life around Mataking Island.',
    highlights: [
      'Walk across Timba-Timba sandbar bridge',
      'Snorkel Mataking underwater post office site',
      'Pom Pom turtle haven discovery'
    ],
    included: ['Speedboat transfer', 'Snorkel gear', 'Lunch box', 'Permits'],
    notIncluded: ['Personal expenses'],
    meetingPoint: 'Semporna Jetty Pier 2 at 08:00 AM',
    importantInfo: 'High tide times affect sandbar appearance, camera highly recommended.',
    featured: true,
    partnerId: 'partner-exp3',
    images: [
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80'
    ],
    timeSlots: ['08:15 AM Departure']
  },
  {
    id: 'exp-4',
    slug: 'semporna-seafood-night-market',
    title: 'Semporna Fresh Seafood Night Feast & Market',
    category: 'Food & Culture',
    location: 'Semporna Waterfront',
    duration: '3.5 Hours (18:00 - 21:30)',
    price: 130,
    rating: 4.8,
    reviewCount: 95,
    shortDescription: 'Select live mantis prawns, lobsters, and groupers directly from local fishermen docks with a local chef who cooks them to perfection.',
    description: 'A foodie delight! Guided market walk where you learn seafood selection secrets, followed by a private multi-course dinner at a trusted seafront restaurant.',
    highlights: [
      'Live seafood dock tour & bidding experience',
      'Butter garlic lobster, salted egg squid & steamed fish feast',
      'Local Sabah drinks tasting (Sabah tea, fresh coconut)'
    ],
    included: ['Full seafood multi-course dinner', 'Guided market walk', 'Drinks'],
    notIncluded: ['Alcoholic beverages'],
    meetingPoint: 'Semporna Night Market Entrance at 06:00 PM',
    importantInfo: 'Inform us in advance of any shell-fish allergies.',
    featured: false,
    partnerId: 'partner-exp4',
    images: [
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80'
    ],
    timeSlots: ['06:00 PM Dinner Slot']
  },
  {
    id: 'exp-5',
    slug: 'bajau-cultural-experience',
    title: 'Authentic Bajau Laut Stilt Village Cultural Tour',
    category: 'Food & Culture',
    location: 'Kampung Simunul & Omadal',
    duration: '4 Hours',
    price: 150,
    rating: 4.9,
    reviewCount: 64,
    shortDescription: 'Immerse in the traditional seafaring culture of the Bajau Laut (Sea Gypsies), craft workshops, and traditional dances.',
    description: 'Respectful, community-led cultural immersion. Visit traditional wooden craft boatmakers and learn how seafaring families live harmoniously with the ocean.',
    highlights: [
      'Community boat craft demonstration',
      'Traditional Bajau snacks & coffee tasting',
      'Support local education initiatives'
    ],
    included: ['Local community guide', 'Boat transport', 'Cultural snacks & drinks'],
    notIncluded: ['Souvenir purchases'],
    meetingPoint: 'Simunul Heritage Bridge at 09:00 AM',
    importantInfo: 'Please dress modestly covering shoulders and knees when visiting community homes.',
    featured: false,
    partnerId: 'partner-exp5',
    images: [
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80'
    ],
    timeSlots: ['09:00 AM', '02:00 PM']
  },
  {
    id: 'exp-6',
    slug: 'sunset-catamaran-boat-cruise',
    title: 'Semporna Archipelago Sunset Cruise & Mocktails',
    category: 'Photography',
    location: 'Semporna Seafront Bay',
    duration: '2.5 Hours (16:30 - 19:00)',
    price: 180,
    rating: 4.85,
    reviewCount: 110,
    shortDescription: 'Sail smoothly across calm island waters during golden hour with live acoustic music and tropical refreshments.',
    description: 'Unwind after a day of island hopping on a spacious catamaran deck watching the sun dip into the Celebes Sea.',
    highlights: [
      'Golden hour sunset photography',
      'Tropical mocktails & fresh fruit platter',
      'Spacious bean bags & music'
    ],
    included: ['Sunset cruise ticket', '2 complimentary mocktails', 'Fruit platter', 'Safety gear'],
    notIncluded: ['Personal transfers'],
    meetingPoint: 'Oceanfront Marina Pier at 04:15 PM',
    importantInfo: 'Smooth calm waters, suitable for all ages.',
    featured: true,
    partnerId: 'partner-exp6',
    images: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'
    ],
    timeSlots: ['04:30 PM Sunset Slot']
  },
  {
    id: 'exp-7',
    slug: 'underwater-photography-workshop',
    title: 'Private Underwater & Drone Photography Session',
    category: 'Photography',
    location: 'Bohey Dulang & Mabul Reefs',
    duration: '6 Hours',
    price: 350,
    rating: 5.0,
    reviewCount: 48,
    shortDescription: 'Get professional high-resolution underwater photos and 4K aerial drone video edits shot by certified media creators.',
    description: 'Turn your Semporna trip into stunning social media memories with a dedicated media creator following your day trip.',
    highlights: [
      '100+ raw high-res digital photos',
      '15 professionally edited color-graded photos',
      '1 minute 4K cinematic video reel'
    ],
    included: ['Personal photographer', 'Drone operation', 'GoPro 12 & Sony camera setup', 'Digital drive delivery within 24h'],
    notIncluded: ['Island hopping boat ticket (must be booked separately or combined)'],
    meetingPoint: 'Semporna Jetty Pier 3 at 08:00 AM',
    importantInfo: 'Delivery sent via Google Drive link within 24 hours of session.',
    featured: false,
    partnerId: 'partner-exp7',
    images: [
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80'
    ],
    timeSlots: ['08:00 AM']
  },
  {
    id: 'exp-8',
    slug: 'private-island-picnic-sandbox',
    title: 'Exclusive Sandbar Private Island Picnic',
    category: 'Diving & Snorkelling',
    location: 'Uninhabited Sandbar Island',
    duration: '5 Hours',
    price: 450,
    rating: 4.95,
    reviewCount: 37,
    shortDescription: 'Escape the crowd to a private white sandbar with shade gazebo, gourmet picnic setup, and private boat.',
    description: 'Perfect for couples, honeymoons, or intimate family celebrations looking for luxury exclusivity in Semporna.',
    highlights: [
      'Private boat charter',
      'Luxury bohemian picnic setup on white sandbar',
      'Gourmet barbecue lunch & chilled beverages'
    ],
    included: ['Private boat charter', 'Full picnic decor & gazebo setup', 'BBQ lunch & cold drinks'],
    notIncluded: ['Personal tip'],
    meetingPoint: 'Private Marina Wharf at 09:30 AM',
    importantInfo: 'Tide dependent, pre-booking at least 48h required.',
    featured: false,
    partnerId: 'partner-exp8',
    images: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'
    ],
    timeSlots: ['09:30 AM']
  },
  {
    id: 'exp-9',
    slug: 'discover-scuba-diving-non-certified',
    title: 'Discover Scuba Diving (No License Required)',
    category: 'Diving & Snorkelling',
    location: 'Mabul Island House Reef',
    duration: '7 Hours',
    price: 320,
    rating: 4.9,
    reviewCount: 165,
    shortDescription: 'First time breathing underwater! Experienced PADI Instructors take you hand-in-hand down to 12 meters safely.',
    description: 'No diving certification needed. Includes thorough safety briefing, shallow water pool skills practice, and two open ocean dives.',
    highlights: [
      '1-on-1 hand held dive instructor guidance',
      '2 full ocean dive sessions',
      'All Scuba gear & tank fills included'
    ],
    included: ['PADI Instructor', 'Full scuba gear set', '2 Dives', 'Lunch box'],
    notIncluded: ['Dive insurance (optional RM20)'],
    meetingPoint: 'Semporna Dive Center Pier 4 at 07:45 AM',
    importantInfo: 'Must wait 18 hours after diving before flying in an airplane.',
    featured: true,
    partnerId: 'partner-exp9',
    images: [
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80'
    ],
    timeSlots: ['07:45 AM']
  },
  {
    id: 'exp-10',
    slug: 'sipadan-island-permit-dive',
    title: 'Sipadan Island VIP Dive Expedition (Permit Guaranteed)',
    category: 'Diving & Snorkelling',
    location: 'Sipadan Marine Reserve',
    duration: '9 Hours',
    price: 1280,
    rating: 5.0,
    reviewCount: 78,
    shortDescription: 'Dive legendary Barracuda Point and Turtle Cave at Sipadan Island, ranked #1 dive spot in the world.',
    description: 'Exclusive, hard-to-get official Sabah Parks Sipadan Dive Permit package. Dive among hundreds of swirling barracudas, reef sharks, and giant green sea turtles.',
    highlights: [
      'Guaranteed official Sipadan Island permit',
      '3 boat dives at Sipadan Island prime sites',
      'High-ratio master guide to diver care (max 4:1)'
    ],
    included: ['Sipadan permit fees (RM250 value)', '3 Dives', 'High speed dive boat', 'Full board meal & drinks', 'PADI Divemaster'],
    notIncluded: ['Scuba gear rental (RM80 if needed)'],
    meetingPoint: 'VIP Dive Lounge Pier 5 at 06:45 AM',
    importantInfo: 'Advanced Open Water Diver license minimum requirement. Passport copy required 7 days prior for permit registration.',
    featured: true,
    partnerId: 'partner-exp10',
    images: [
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80'
    ],
    timeSlots: ['06:45 AM']
  }
];

export const SAMPLE_TRANSFERS: TransferService[] = [
  {
    id: 'tr-1',
    title: 'Shared Van Shuttle (Air-conditioned Comfort)',
    vehicleType: 'Shared Van',
    route: 'Tawau Airport (TWU) ↔ Semporna Town / Jetty',
    capacity: 10,
    price: 35,
    description: 'Budget-friendly shared Toyota HiAce van transfer. Direct pickup from airport terminal to Semporna hotels.',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'tr-2',
    title: 'Private Sedan Airport Transfer (1-3 Pax)',
    vehicleType: 'Private Car',
    route: 'Tawau Airport (TWU) ↔ Semporna Hotel / Jetty',
    capacity: 3,
    price: 120,
    description: 'Private sedan (Toyota Vios / Proton Persona) with dedicated driver waiting with name board at arrival hall.',
    imageUrl: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'tr-3',
    title: 'Private Family MPV (Toyota Innova / Ertiga 1-5 Pax)',
    vehicleType: 'Private MPV',
    route: 'Tawau Airport (TWU) ↔ Semporna Hotel / Jetty',
    capacity: 5,
    price: 160,
    description: 'Spacious MPV for family travellers with luggage space. Flexible stopovers for fruit or local snacks along the 1.5 hour route.',
    imageUrl: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'tr-4',
    title: 'Premium VIP Alphard / Vellfire Transfer (1-5 Pax)',
    vehicleType: 'Premium Transfer',
    route: 'Tawau Airport (TWU) ↔ Semporna Hotel / Jetty',
    capacity: 5,
    price: 320,
    description: 'Luxury captain seats, chilled bottled water, cold towels, and professional English/Mandarin speaking driver.',
    imageUrl: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80'
  }
];
