import { useState } from "react";
import { AspectImage } from "..";
import * as S from "./styled";
import { useEpisode } from "../../contexts/EpisodeContext";

export const SliderCard = ({ episodeInfo, index }) => {
  const { updateEpisode, episode, updateActiveEpisode, activeEpisode } =
    useEpisode();
  return (
    <S.Container
      onClick={() => {
        updateEpisode(episodeInfo);
        updateActiveEpisode(index);
      }}
    >
      <S.Episode>{index + 1}</S.Episode>
      <S.ImageOverlay isActive={activeEpisode === index && episode}>
        <AspectImage
          src={episodeInfo.Poster}
          aspect="4/3"
          alt={episodeInfo.Title}
        />
      </S.ImageOverlay>
      <S.Title>{episodeInfo.Title}</S.Title>
      <S.Plot>{episodeInfo.Plot}</S.Plot>
    </S.Container>
  );
};
