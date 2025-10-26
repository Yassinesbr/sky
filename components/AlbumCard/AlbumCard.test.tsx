import { render, screen, fireEvent } from "@testing-library/react";
import AlbumCard from "./AlbumCard";

// Mock Next.js Image component
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    const { priority, placeholder, blurDataURL, ...imgProps } = props;
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...imgProps} />;
  },
}));

const album = {
  id: "1",
  title: "Test Album",
  artist: "Test Artist",
  image: "https://via.placeholder.com/84",
  link: "https://example.com",
  category: "Pop",
  price: "$9.99",
};

test("renders album card and toggles favorite", () => {
  const onToggle = jest.fn();
  render(
    <AlbumCard album={album} isFavorite={false} onToggleFavorite={onToggle} />
  );
  expect(screen.getByText("Test Album")).toBeInTheDocument();
  fireEvent.click(screen.getByText(/Favorite/));
  expect(onToggle).toHaveBeenCalledWith("1");
});
