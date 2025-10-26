import { render, screen, waitFor } from "@testing-library/react";
import AlbumList from "./AlbumList";
import Providers from "@/lib/Providers";

// Basic smoke test
test("renders album list", async () => {
  render(
    (
      <Providers>
        <AlbumList />
      </Providers>
    ) as any
  );

  // Wait for the component to finish loading (since fetch is mocked to return empty results)
  await waitFor(() => {
    expect(screen.getByText(/No albums found/i)).toBeInTheDocument();
  });
});
