import * as S from "./styled";

export const EpisodeMetadata = ({ episode, released, imdbRating }) => {
  return (
    <S.Container>
      <div>
        <S.Text>
          Episode {episode} - {released}
        </S.Text>
      </div>
      <div>
        <S.Text>{imdbRating}/10</S.Text>
      </div>
    </S.Container>
  );
};
