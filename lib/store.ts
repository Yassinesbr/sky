import { configureStore } from "@reduxjs/toolkit";
import albumsReducer from "@/lib/slices/albumsSlice";

export const store = configureStore({
  reducer: {
    albums: albumsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
