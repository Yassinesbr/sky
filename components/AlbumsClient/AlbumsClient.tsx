"use client";

import { useState } from "react";
import Header from "@/components/Header/Header";
import AlbumList from "@/components/AlbumList/AlbumList";
import styled from "styled-components";
import { ITunesEntry } from "@/app/api/top-albums/route";

const Container = styled.main`
  max-width: 1100px;
  margin: 0 auto;
  padding: 24px 16px 64px;
`;

type Props = {
  initialData: {
    feed: {
      entry: ITunesEntry[];
    };
  };
};

export default function AlbumsClient({ initialData }: Props) {
  const [search, setSearch] = useState("");
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

  return (
    <Container>
      <Header
        onSearchChange={setSearch}
        onToggleFavorites={() => setShowOnlyFavorites((v) => !v)}
        showOnlyFavorites={showOnlyFavorites}
      />
      <AlbumList
        search={search}
        showOnlyFavorites={showOnlyFavorites}
        initialData={initialData}
      />
    </Container>
  );
}
