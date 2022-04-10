import { AspectImage } from "..";
import * as S from "./styled";
import { useEpisode } from "../../contexts/EpisodeContext";

export const SliderCard = ({ episodeInfo, index }) => {
  const { updateEpisode } = useEpisode();
  return (
    <S.Container onClick={() => updateEpisode(episodeInfo)}>
      <S.Episode>{index + 1}</S.Episode>
      <AspectImage
        src={episodeInfo.Poster}
        aspect="4/3"
        alt={episodeInfo.Title}
      />
      <S.Title>{episodeInfo.Title}</S.Title>
      <S.Plot>{episodeInfo.Plot}</S.Plot>
    </S.Container>
  );
};
