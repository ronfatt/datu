-- ========================================================
-- SEMPORNA LOCAL - SUPABASE POSTGRESQL PRODUCTION SCHEMA
-- ========================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. ENUMS & CONSTANTS
CREATE TYPE user_role AS ENUM ('CUSTOMER', 'PARTNER', 'ADMIN', 'SUPER_ADMIN');
CREATE TYPE partner_type AS ENUM ('HOMESTAY', 'GUIDE', 'TOUR_OPERATOR', 'TRANSFER', 'PHOTOGRAPHER', 'EXPERIENCE');
CREATE TYPE booking_status AS ENUM ('DRAFT', 'PENDING_PAYMENT', 'PAID', 'CONFIRMED', 'CANCELLED', 'COMPLETED', 'REFUND_PENDING', 'REFUNDED');
CREATE TYPE booking_item_type AS ENUM ('STAY', 'GUIDE', 'EXPERIENCE', 'TRANSFER', 'TOUR', 'PHOTOGRAPHY', 'OTHER');
CREATE TYPE payment_status AS ENUM ('PENDING', 'PAID', 'FAILED', 'REFUNDED', 'PARTIALLY_REFUNDED');
CREATE TYPE payout_status AS ENUM ('PENDING', 'READY', 'PROCESSING', 'PAID', 'FAILED');
CREATE TYPE inventory_state AS ENUM ('AVAILABLE', 'HELD', 'BOOKED', 'BLOCKED');

-- 2. USER PROFILES & ACCOUNTS
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email VARCHAR(255) UNIQUE NOT NULL,
  full_name VARCHAR(255),
  phone VARCHAR(50),
  whatsapp VARCHAR(50),
  avatar_url TEXT,
  country VARCHAR(100) DEFAULT 'Malaysia',
  role user_role DEFAULT 'CUSTOMER',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE customers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  profile_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  emergency_contact JSONB,
  preferences JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE partners (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  profile_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  company_name VARCHAR(255) NOT NULL,
  partner_type partner_type NOT NULL,
  commission_rate NUMERIC(5,2) DEFAULT 15.00,
  verified BOOLEAN DEFAULT FALSE,
  payout_details JSONB DEFAULT '{}'::jsonb,
  rating NUMERIC(3,2) DEFAULT 5.0,
  review_count INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. PROPERTIES & ACCOMMODATION
CREATE TABLE properties (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  partner_id UUID REFERENCES partners(id) ON DELETE CASCADE,
  slug VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  type VARCHAR(50) NOT NULL, -- Homestay, Hotel, Chalet, Water Chalet, Villa
  description TEXT,
  location_name VARCHAR(255) NOT NULL, -- Semporna Town, Seafront, Jetty, Island
  address TEXT,
  latitude NUMERIC(10,8),
  longitude NUMERIC(11,8),
  rating NUMERIC(3,2) DEFAULT 4.8,
  review_count INT DEFAULT 0,
  price_per_night NUMERIC(10,2) NOT NULL,
  facilities TEXT[] DEFAULT '{}',
  house_rules TEXT[] DEFAULT '{}',
  cancellation_policy TEXT,
  featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE property_images (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  property_id UUID REFERENCES properties(id) ON DELETE CASCADE,
  url TEXT NOT NULL,
  caption VARCHAR(255),
  sort_order INT DEFAULT 0
);

CREATE TABLE rooms (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  property_id UUID REFERENCES properties(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  capacity INT NOT NULL DEFAULT 2,
  bed_type VARCHAR(100) NOT NULL,
  price NUMERIC(10,2) NOT NULL,
  discount_price NUMERIC(10,2),
  total_inventory INT NOT NULL DEFAULT 1,
  amenities TEXT[] DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE room_images (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  room_id UUID REFERENCES rooms(id) ON DELETE CASCADE,
  url TEXT NOT NULL,
  sort_order INT DEFAULT 0
);

CREATE TABLE room_inventory (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  room_id UUID REFERENCES rooms(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  available_units INT NOT NULL,
  state inventory_state DEFAULT 'AVAILABLE',
  held_until TIMESTAMPTZ,
  UNIQUE(room_id, date)
);

CREATE TABLE room_rates (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  room_id UUID REFERENCES rooms(id) ON DELETE CASCADE,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  price NUMERIC(10,2) NOT NULL
);

-- 4. LOCAL GUIDES
CREATE TABLE guides (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  partner_id UUID REFERENCES partners(id) ON DELETE CASCADE,
  slug VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  avatar_url TEXT NOT NULL,
  bio TEXT,
  languages TEXT[] DEFAULT '{}',
  specialties TEXT[] DEFAULT '{}',
  experience_years INT DEFAULT 1,
  daily_rate NUMERIC(10,2) NOT NULL,
  half_day_rate NUMERIC(10,2),
  rating NUMERIC(3,2) DEFAULT 4.9,
  review_count INT DEFAULT 0,
  verified BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE guide_availability (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  guide_id UUID REFERENCES guides(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  is_available BOOLEAN DEFAULT TRUE,
  notes TEXT,
  UNIQUE(guide_id, date)
);

-- 5. LOCAL EXPERIENCES & TOURS
CREATE TABLE experiences (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  partner_id UUID REFERENCES partners(id) ON DELETE CASCADE,
  slug VARCHAR(255) UNIQUE NOT NULL,
  title VARCHAR(255) NOT NULL,
  category VARCHAR(100) NOT NULL,
  location VARCHAR(255) NOT NULL,
  duration VARCHAR(100) NOT NULL,
  price NUMERIC(10,2) NOT NULL,
  rating NUMERIC(3,2) DEFAULT 4.9,
  review_count INT DEFAULT 0,
  short_description TEXT,
  description TEXT,
  highlights TEXT[] DEFAULT '{}',
  included TEXT[] DEFAULT '{}',
  not_included TEXT[] DEFAULT '{}',
  meeting_point TEXT,
  important_info TEXT,
  featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE experience_images (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  experience_id UUID REFERENCES experiences(id) ON DELETE CASCADE,
  url TEXT NOT NULL,
  sort_order INT DEFAULT 0
);

CREATE TABLE experience_slots (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  experience_id UUID REFERENCES experiences(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  time_slot VARCHAR(50) NOT NULL,
  max_capacity INT NOT NULL DEFAULT 15,
  booked_count INT DEFAULT 0,
  held_count INT DEFAULT 0
);

-- 6. AIRPORT TRANSFERS
CREATE TABLE transfers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  partner_id UUID REFERENCES partners(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  vehicle_type VARCHAR(100) NOT NULL, -- Shared Van, Private Car, Private MPV, Premium
  route VARCHAR(255) DEFAULT 'Tawau Airport ↔ Semporna',
  capacity INT NOT NULL,
  price NUMERIC(10,2) NOT NULL,
  description TEXT,
  image_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 7. UNIVERSAL BOOKINGS & ITEMS
CREATE TABLE bookings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  booking_number VARCHAR(50) UNIQUE NOT NULL,
  customer_id UUID REFERENCES customers(id) ON DELETE SET NULL,
  customer_name VARCHAR(255) NOT NULL,
  customer_email VARCHAR(255) NOT NULL,
  customer_phone VARCHAR(50) NOT NULL,
  customer_whatsapp VARCHAR(50),
  special_request TEXT,
  status booking_status DEFAULT 'PENDING_PAYMENT',
  payment_status payment_status DEFAULT 'PENDING',
  currency VARCHAR(10) DEFAULT 'MYR',
  subtotal NUMERIC(10,2) NOT NULL,
  discount_amount NUMERIC(10,2) DEFAULT 0.00,
  service_fee NUMERIC(10,2) DEFAULT 0.00,
  tax_amount NUMERIC(10,2) DEFAULT 0.00,
  total_amount NUMERIC(10,2) NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE booking_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  booking_id UUID REFERENCES bookings(id) ON DELETE CASCADE,
  type booking_item_type NOT NULL,
  reference_id UUID NOT NULL,
  title VARCHAR(255) NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE,
  quantity INT DEFAULT 1,
  unit_price NUMERIC(10,2) NOT NULL,
  subtotal NUMERIC(10,2) NOT NULL,
  partner_id UUID REFERENCES partners(id),
  commission_rate NUMERIC(5,2) DEFAULT 15.00,
  commission_amount NUMERIC(10,2) NOT NULL,
  partner_amount NUMERIC(10,2) NOT NULL,
  metadata JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 8. PAYMENTS, COMMISSIONS & PAYOUTS
CREATE TABLE payments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  booking_id UUID REFERENCES bookings(id) ON DELETE CASCADE,
  stripe_session_id VARCHAR(255),
  stripe_payment_intent VARCHAR(255),
  method VARCHAR(50) NOT NULL, -- Stripe Card, FPX, Manual Bank Transfer
  amount NUMERIC(10,2) NOT NULL,
  currency VARCHAR(10) DEFAULT 'MYR',
  status payment_status DEFAULT 'PENDING',
  raw_response JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE commissions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  booking_item_id UUID REFERENCES booking_items(id) ON DELETE CASCADE,
  partner_id UUID REFERENCES partners(id) ON DELETE CASCADE,
  gross_amount NUMERIC(10,2) NOT NULL,
  commission_rate NUMERIC(5,2) NOT NULL,
  commission_amount NUMERIC(10,2) NOT NULL,
  partner_amount NUMERIC(10,2) NOT NULL,
  platform_fee NUMERIC(10,2) DEFAULT 0.00,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE payouts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  partner_id UUID REFERENCES partners(id) ON DELETE CASCADE,
  amount NUMERIC(10,2) NOT NULL,
  status payout_status DEFAULT 'PENDING',
  payout_date TIMESTAMPTZ,
  reference_code VARCHAR(100),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 9. REVIEWS & WISHLISTS & COUPONS
CREATE TABLE reviews (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  customer_id UUID REFERENCES customers(id) ON DELETE CASCADE,
  booking_item_id UUID REFERENCES booking_items(id) ON DELETE SET NULL,
  item_type booking_item_type NOT NULL,
  item_id UUID NOT NULL,
  rating NUMERIC(2,1) NOT NULL,
  cleanliness NUMERIC(2,1),
  location NUMERIC(2,1),
  service NUMERIC(2,1),
  value NUMERIC(2,1),
  comment TEXT,
  photos TEXT[] DEFAULT '{}',
  approved BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE wishlists (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  customer_id UUID REFERENCES customers(id) ON DELETE CASCADE,
  item_type booking_item_type NOT NULL,
  item_id UUID NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(customer_id, item_type, item_id)
);

CREATE TABLE coupons (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  code VARCHAR(50) UNIQUE NOT NULL,
  discount_percentage NUMERIC(5,2),
  discount_amount NUMERIC(10,2),
  max_uses INT DEFAULT 100,
  used_count INT DEFAULT 0,
  valid_from DATE,
  valid_until DATE,
  active BOOLEAN DEFAULT TRUE
);

CREATE TABLE coupon_usage (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  coupon_id UUID REFERENCES coupons(id) ON DELETE CASCADE,
  booking_id UUID REFERENCES bookings(id) ON DELETE CASCADE,
  used_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE notifications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  profile_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  is_read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE site_content (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  key VARCHAR(100) UNIQUE NOT NULL,
  content JSONB NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE audit_logs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID,
  action VARCHAR(255) NOT NULL,
  details JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- RLS POLICIES PLACEHOLDER
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE wishlists ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public profiles are viewable by everyone" ON profiles FOR SELECT USING (true);
CREATE POLICY "Users can update own profile" ON profiles FOR UPDATE USING (auth.uid() = id);
