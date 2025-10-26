"use client";

import { Provider } from "react-redux";
import { store } from "./store";
import { useEffect } from "react";

export default function Providers({ children }: { children: React.ReactNode }) {
  // Rehydrate favorites from localStorage
  useEffect(() => {
    const raw = localStorage.getItem("favorites");
    if (raw) {
      try {
        const ids: string[] = JSON.parse(raw);
        store.dispatch({ type: "albums/hydrateFavorites", payload: ids });
      } catch {}
    }
  }, []);

  return <Provider store={store}>{children}</Provider>;
}
