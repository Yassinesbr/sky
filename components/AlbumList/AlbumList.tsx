"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import * as S from "./AlbumList.styles";
import AlbumCard from "@/components/AlbumCard/AlbumCard";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { Album, toggleFavorite } from "@/lib/slices/albumsSlice";
import { useText } from "@/hooks/useText";

type FeedItem = {
  id: { label: string };
  title: { label: string };
  "im:image": { label: string }[];
  link: { attributes: { href: string } };
  category: { attributes: { label: string } };
  "im:price": { label: string };
  "im:artist": { label: string };
};

function mapFeedItem(it: FeedItem) {
  return {
    id: it.id.label,
    title: it.title.label,
    artist: it["im:artist"].label,
    image: it["im:image"][2]?.label ?? it["im:image"][0]?.label ?? "",
    link: it.link.attributes.href,
    category: it.category.attributes.label,
    price: it["im:price"].label,
  };
}

type Props = {
  search?: string;
  showOnlyFavorites?: boolean;
};

export default function AlbumList({
  search = "",
  showOnlyFavorites = false,
}: Props) {
  const { t } = useText();
  const dispatch = useAppDispatch();
  const favorites = useAppSelector((s) => s.albums.favorites);

  const [all, setAll] = useState<ReturnType<typeof mapFeedItem>[]>([]);
  const [visible, setVisible] = useState(12);
  const [loading, setLoading] = useState(true);
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const filteredLengthRef = useRef(0);

  const load = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/top-albums", { cache: "no-store" });
      const data = await res.json();
      const items: FeedItem[] = data?.feed?.entry ?? [];
      setAll(items.map(mapFeedItem));
    } catch (error) {
      console.error("Failed to load albums:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    let list = all;
    if (q) {
      list = list.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.artist.toLowerCase().includes(q)
      );
    }
    if (showOnlyFavorites) {
      list = list.filter((a) => favorites.includes(a.id));
    }
    return list;
  }, [all, search, showOnlyFavorites, favorites]);

  // Update the ref when filtered results change
  useEffect(() => {
    filteredLengthRef.current = filtered.length;
    console.log("Filtered results updated:", {
      total: filtered.length,
      visible,
    });
  }, [filtered.length, visible]);

  // Infinite scroll
  useEffect(() => {
    const el = sentinelRef.current;
    if (!el || loading || filtered.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && visible < filtered.length) {
            console.log("Loading more items:", {
              current: visible,
              total: filtered.length,
            });
            setVisible((prev) => prev + 12);
          }
        });
      },
      {
        rootMargin: "50px",
        threshold: 0,
      }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [loading, visible, filtered.length]);

  useEffect(() => {
    setVisible(12);
  }, [search, showOnlyFavorites]);

  if (loading) {
    return (
      <S.Grid>
        {Array.from({ length: 12 }).map((_, i) => (
          <S.LoadingCard key={i}>
            <S.LoadingSkeleton />
            <S.LoadingMeta>
              <S.LoadingTitle />
              <S.LoadingArtist />
            </S.LoadingMeta>
            <S.LoadingActions>
              <S.LoadingButton />
              <S.LoadingButton />
            </S.LoadingActions>
          </S.LoadingCard>
        ))}
      </S.Grid>
    );
  }

  return (
    <>
      <S.Grid>
        {filtered.slice(0, visible).map((album) => (
          <AlbumCard
            key={album.id}
            album={album as Album}
            isFavorite={favorites.includes(album.id)}
            onToggleFavorite={(id) => dispatch(toggleFavorite(id))}
          />
        ))}
      </S.Grid>
      {filtered.length === 0 && !loading && (
        <S.Empty>{t("albumList.empty")}</S.Empty>
      )}
      {visible < filtered.length && (
        <S.Sentinel ref={sentinelRef}>
          <div
            style={{
              textAlign: "center",
              color: "var(--muted)",
              padding: "20px",
            }}
          >
            {t("albumList.loading")} ({visible} of {filtered.length})
          </div>
        </S.Sentinel>
      )}
    </>
  );
}
