import { NextRequest, NextResponse } from 'next/server';

// SSLCommerz (BD) + Stripe (International) payment initiation
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    // TODO: determine gateway (BD vs international), initiate payment session
    return NextResponse.json({ redirectUrl: '#' });
  } catch (error) {
    return NextResponse.json({ error: 'Payment initiation failed' }, { status: 500 });
  }
}
