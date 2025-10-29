import AlbumsClient from "@/components/AlbumsClient/AlbumsClient";
import { ITunesResponse } from "./api/top-albums/route";

async function getTopAlbums(): Promise<ITunesResponse> {
  try {
    // Fetch from API route
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const res = await fetch(`${baseUrl}/api/top-albums`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch albums: ${res.status}`);
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching albums:", error);
    return { feed: { entry: [] } };
  }
}

export default async function HomePage() {
  const data = await getTopAlbums();

  return <AlbumsClient initialData={data} />;
}
