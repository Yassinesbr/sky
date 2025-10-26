import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Album = {
  id: string;
  title: string;
  artist: string;
  image: string;
  link: string;
  category: string;
  price: string;
};

type AlbumsState = {
  favorites: string[];
};

const initialState: AlbumsState = {
  favorites: [],
};

const albumsSlice = createSlice({
  name: "albums",
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<string>) {
      const id = action.payload;
      if (state.favorites.includes(id)) {
        state.favorites = state.favorites.filter((x) => x !== id);
      } else {
        state.favorites.push(id);
      }
      if (typeof window !== "undefined") {
        localStorage.setItem("favorites", JSON.stringify(state.favorites));
      }
    },
    hydrateFavorites(state, action: PayloadAction<string[]>) {
      state.favorites = action.payload;
    },
  },
});

export const { toggleFavorite } = albumsSlice.actions;
export default albumsSlice.reducer;
