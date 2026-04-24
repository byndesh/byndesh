import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    // In a real implementation, this would save to database and send an email
    console.log('Booking form submission received:', data);
    
    return NextResponse.json({ success: true, message: 'Booking request received' });
  } catch (error) {
    console.error('Booking form error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to process request' },
      { status: 500 }
    );
  }
}
