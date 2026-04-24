import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    // TODO: Wire to Mailchimp, ConvertKit, Resend, etc.
    console.log('New newsletter signup:', data);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Failed to process signup' }, { status: 500 });
  }
}
