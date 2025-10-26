"use client";

import * as S from "./Header.styles";

type Props = {
  onSearchChange?: (v: string) => void;
  onToggleFavorites?: () => void;
  showOnlyFavorites?: boolean;
};

export default function Header(props: Props) {
  return (
    <S.Bar>
      <S.Title>Sky Music — Top 100 Albums</S.Title>
      <S.Controls>
        <S.Input
          placeholder="Search albums or artists..."
          aria-label="Search"
          onChange={(e) => props.onSearchChange?.(e.target.value)}
        />
        <S.Toggle onClick={props.onToggleFavorites}>
          {props.showOnlyFavorites ? "Show All" : "Show Favorites"}
        </S.Toggle>
      </S.Controls>
    </S.Bar>
  );
}
