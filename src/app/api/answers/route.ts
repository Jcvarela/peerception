import { NextRequest, NextResponse } from 'next/server';
export async function POST(req: NextRequest) {
  const body = await req.json(); // { sessionId, answers }
  return NextResponse.json({ ok: true, received: !!body });
}
