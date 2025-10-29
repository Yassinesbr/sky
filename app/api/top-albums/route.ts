import { NextResponse } from "next/server";

export const URL = "https://itunes.apple.com/us/rss/topalbums/limit=100/json";

export type ITunesImage = {
  label: string;
  attributes?: { height: string };
};

export type ITunesEntry = {
  id: { label: string };
  title: { label: string };
  "im:artist": { label: string };
  "im:image": ITunesImage[];
  link: { attributes: { href: string } };
  category: { attributes: { label: string } };
  "im:price": { label: string };
};

export type ITunesResponse = {
  feed: {
    entry: ITunesEntry[];
  };
};

export async function GET() {
  try {
    const res = await fetch(URL, {
      next: {
        revalidate: 3600,
        tags: ["top-albums"], // For on-demand revalidation
      },
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
