export type BookingItemType = 
  | 'STAY' 
  | 'GUIDE' 
  | 'EXPERIENCE' 
  | 'TRANSFER' 
  | 'TOUR' 
  | 'PHOTOGRAPHY' 
  | 'OTHER';

export type BookingStatus = 
  | 'DRAFT' 
  | 'PENDING_PAYMENT' 
  | 'PAID' 
  | 'CONFIRMED' 
  | 'CANCELLED' 
  | 'COMPLETED' 
  | 'REFUND_PENDING' 
  | 'REFUNDED';

export type PaymentStatus = 
  | 'PENDING' 
  | 'PAID' 
  | 'FAILED' 
  | 'REFUNDED' 
  | 'PARTIALLY_REFUNDED';

export type PayoutStatus = 
  | 'PENDING' 
  | 'READY' 
  | 'PROCESSING' 
  | 'PAID' 
  | 'FAILED';

export interface Room {
  id: string;
  propertyId: string;
  name: string;
  description: string;
  capacity: number;
  bedType: string;
  price: number;
  discountPrice?: number;
  totalInventory: number;
  amenities: string[];
  images: string[];
}

export interface Property {
  id: string;
  slug: string;
  name: string;
  type: 'Homestay' | 'Hotel' | 'Chalet' | 'Water Chalet' | 'Guesthouse' | 'Villa';
  description: string;
  locationName: 'Semporna Town' | 'Seafront' | 'Near Jetty' | 'Island';
  address: string;
  rating: number;
  reviewCount: number;
  pricePerNight: number;
  facilities: string[];
  houseRules: string[];
  cancellationPolicy: string;
  images: string[];
  rooms: Room[];
  featured?: boolean;
  partnerId: string;
  partnerName: string;
}

export interface GuidePackage {
  id: string;
  name: string;
  price: number;
  duration: string;
  description: string;
}

export interface Guide {
  id: string;
  slug: string;
  name: string;
  avatarUrl: string;
  bio: string;
  languages: string[];
  specialties: string[];
  experienceYears: number;
  dailyRate: number;
  halfDayRate: number;
  rating: number;
  reviewCount: number;
  verified: boolean;
  packages: GuidePackage[];
  gallery: string[];
  partnerId: string;
}

export interface Experience {
  id: string;
  slug: string;
  title: string;
  category: string;
  location: string;
  duration: string;
  price: number;
  rating: number;
  reviewCount: number;
  shortDescription: string;
  description: string;
  highlights: string[];
  included: string[];
  notIncluded: string[];
  meetingPoint: string;
  importantInfo: string;
  images: string[];
  timeSlots: string[];
  featured?: boolean;
  partnerId: string;
}

export interface TransferService {
  id: string;
  title: string;
  vehicleType: 'Shared Van' | 'Private Car' | 'Private MPV' | 'Premium Transfer';
  route: string;
  capacity: number;
  price: number;
  description: string;
  imageUrl: string;
}

export interface UniversalBookingItem {
  id: string;
  type: BookingItemType;
  referenceId: string;
  title: string;
  subtitle?: string;
  imageUrl: string;
  startDate: string;
  endDate?: string;
  quantity: number;
  unitPrice: number;
  subtotal: number;
  partnerId: string;
  commissionRate: number;
  metadata?: Record<string, any>;
}

export interface Booking {
  id: string;
  bookingNumber: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  customerWhatsapp?: string;
  specialRequest?: string;
  status: BookingStatus;
  paymentStatus: PaymentStatus;
  currency: string;
  subtotal: number;
  discountAmount: number;
  serviceFee: number;
  taxAmount: number;
  totalAmount: number;
  items: UniversalBookingItem[];
  createdAt: string;
}

export interface TripPlannerInput {
  days: number;
  companion: 'Solo' | 'Couple' | 'Family' | 'Friends' | 'Group';
  interests: string[];
  budgetLevel: 'Budget' | 'Comfort' | 'Premium' | 'Luxury';
}

export interface TripPlannerItineraryDay {
  dayNumber: number;
  title: string;
  activities: {
    time: string;
    title: string;
    type: BookingItemType;
    referenceId?: string;
    description: string;
    price: number;
  }[];
}

export interface TripPlannerItinerary {
  id: string;
  title: string;
  totalEstimatedPrice: number;
  days: TripPlannerItineraryDay[];
  suggestedItems: UniversalBookingItem[];
}
