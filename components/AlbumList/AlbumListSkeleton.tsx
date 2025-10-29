import * as S from "./AlbumList.styles";

export default function AlbumListSkeleton() {
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
