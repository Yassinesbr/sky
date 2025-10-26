import { NextResponse } from "next/server";

export const URL = "https://itunes.apple.com/us/rss/topalbums/limit=100/json";

type ITunesImage = {
  label: string;
  attributes?: { height: string };
};

type ITunesEntry = {
  id: { label: string };
  title: { label: string };
  "im:artist": { label: string };
  "im:image": ITunesImage[];
  link: { attributes: { href: string } };
  category: { attributes: { label: string } };
  "im:price": { label: string };
};

type ITunesResponse = {
  feed: {
    entry: ITunesEntry[];
  };
};

export async function GET() {
  try {
    const res = await fetch(URL, {
      cache: "no-store",
      next: { revalidate: 0 },
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch albums" },
        { status: res.status }
      );
    }

    const data: ITunesResponse = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
