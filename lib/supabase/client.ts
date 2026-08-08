import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://demo-semporna.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || 'demo-anon-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
