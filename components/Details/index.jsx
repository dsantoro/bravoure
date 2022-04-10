import { AspectImage, EpisodeMetadata } from "..";
import * as S from "./styled";
import { useEpisode } from "../../contexts/EpisodeContext";

export const Details = ({ episode }) => {
  const { updateEpisode } = useEpisode();
  return (
    <>
      <AspectImage src={episode.Poster} alt={episode.Title} aspect="1" />
      <EpisodeMetadata
        episode={episode.Episode}
        released={episode.Released}
        imdbRating={episode.imdbRating}
      />
      <S.Container>
        <S.Title>{episode.Title}</S.Title>
        <S.Plot>{episode.Plot}</S.Plot>
      </S.Container>
      <button onClick={() => updateEpisode(null)}>Close</button>
    </>
  );
};
