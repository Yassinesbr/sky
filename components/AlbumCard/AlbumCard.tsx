"use client";

import Image from "next/image";
import * as S from "./AlbumCard.styles";
import { Album } from "@/lib/slices/albumsSlice";

type Props = {
  album: Album;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
};

export default function AlbumCard({
  album,
  isFavorite,
  onToggleFavorite,
}: Props) {
  const openLink = () => {
    window.open(album.link, "_blank", "noopener,noreferrer");
  };

  const onCardKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openLink();
    }
  };
  return (
    <S.Card
      onClick={openLink}
      role="link"
      tabIndex={0}
      onKeyDown={onCardKeyDown}
      // aria-label={`Open ${album.title} in a new tab`}
    >
      <S.CoverWrapper>
        <Image
          src={album.image}
          alt={album.title}
          width={100}
          height={100}
          priority={false}
        />
      </S.CoverWrapper>
      <S.Meta>
        <S.Title>{album.title}</S.Title>
        <S.Artist>{album.artist}</S.Artist>
      </S.Meta>
      <S.Actions>
        <S.Button
          onClick={(e: React.MouseEvent) => {
            e.stopPropagation();
            onToggleFavorite(album.id);
          }}
          aria-pressed={isFavorite}
        >
          {isFavorite ? "★ Favorited" : "❤ Favorite"}
        </S.Button>
      </S.Actions>
    </S.Card>
  );
}
