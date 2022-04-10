import * as S from "./styled";

export const HighLight = ({ season, title, plot }) => {
  return (
    <S.Container>
      <S.Season>Season {season}</S.Season>
      <S.Title>{title}</S.Title>
      <S.Plot>{plot}</S.Plot>
    </S.Container>
  );
};
