import { NextResponse } from 'next/server';

const GET = () => {
  return NextResponse.json({
    ok: true,
    service: 'scaffold.fast',
    timestamp: new Date().toISOString(),
  });
};

export { GET };
