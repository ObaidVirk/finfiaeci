import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  return NextResponse.json(
    { error: 'Registration is disabled. Please contact the administrator.' },
    { status: 403 }
  );
}
