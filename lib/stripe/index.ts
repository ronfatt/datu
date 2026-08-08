import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_mock_key_semporna', {
  typescript: true,
});

export const createCheckoutSession = async ({
  bookingNumber,
  items,
  customerEmail,
  totalAmount,
}: {
  bookingNumber: string;
  items: { title: string; amount: number; quantity: number }[];
  customerEmail: string;
  totalAmount: number;
}) => {
  // Production ready session creator stub
  if (!process.env.STRIPE_SECRET_KEY || process.env.STRIPE_SECRET_KEY.includes('mock')) {
    // Return simulated checkout session for local demo testing
    return {
      id: `cs_test_${Date.now()}`,
      url: `/booking-confirmation?bookingNumber=${bookingNumber}&mockPaid=true`,
    };
  }

  const lineItems = items.map((item) => ({
    price_data: {
      currency: 'myr',
      product_data: {
        name: item.title,
      },
      unit_amount: Math.round(item.amount * 100),
    },
    quantity: item.quantity,
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: lineItems,
    mode: 'payment',
    customer_email: customerEmail,
    client_reference_id: bookingNumber,
    success_url: `${process.env.NEXT_PUBLIC_APP_URL}/booking-confirmation?bookingNumber=${bookingNumber}&session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/checkout?cancelled=true`,
  });

  return session;
};
