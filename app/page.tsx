import AlbumsClient from "@/components/AlbumsClient/AlbumsClient";
import { ITunesResponse, URL } from "./api/top-albums/route";

async function getTopAlbums(): Promise<ITunesResponse> {
  try {
    const res = await fetch(URL, {
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
