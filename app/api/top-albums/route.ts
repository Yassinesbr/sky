import { NextResponse } from "next/server";

export const URL = "https://itunes.apple.com/us/rss/topalbums/limit=100/json";

export async function GET() {
  const res = await fetch(URL, {
    cache: "no-store",
  });
  if (!res.ok) {
    return NextResponse.json(
      { error: "Failed to fetch albums" },
      { status: 500 }
    );
  }
  const data = await res.json();
  return NextResponse.json(data);
}
