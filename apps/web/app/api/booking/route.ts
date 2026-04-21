import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    // TODO: validate, create booking in DB, trigger payment
    return NextResponse.json({ bookingId: 'BYND-XXXXX' });
  } catch (error) {
    return NextResponse.json({ error: 'Booking failed' }, { status: 500 });
  }
}
