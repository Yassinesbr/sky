"use client";

import * as S from "./Header.styles";
import { useText } from "@/hooks/useText";

type Props = {
  onSearchChange?: (v: string) => void;
  onToggleFavorites?: () => void;
  showOnlyFavorites?: boolean;
};

export default function Header(props: Props) {
  const { t } = useText();

  return (
    <S.Bar>
      <S.Title>{t("header.title")}</S.Title>
      <S.Controls>
        <S.Input
          placeholder={t("header.searchPlaceholder")}
          aria-label={t("header.searchAriaLabel")}
          onChange={(e) => props.onSearchChange?.(e.target.value)}
        />
        <S.Toggle onClick={props.onToggleFavorites}>
          {props.showOnlyFavorites
            ? t("header.showAll")
            : t("header.showFavorites")}
        </S.Toggle>
      </S.Controls>
    </S.Bar>
  );
}
