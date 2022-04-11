import { AspectImage, EpisodeMetadata } from "..";
import * as S from "./styled";
import { useEpisode } from "../../contexts/EpisodeContext";
import Image from "next/image";
import close from "../../assets/close.svg";

export const Details = ({ episode }) => {
  const { updateEpisode, updateActiveEpisode } = useEpisode();
  return (
    <S.Container
      key="content"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <AspectImage src={episode.Poster} alt={episode.Title} aspect="1" />
      <EpisodeMetadata
        episode={episode.Episode}
        released={episode.Released}
        imdbRating={episode.imdbRating}
      />
      <S.InfoContainer
        key="info"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <S.Title>{episode.Title}</S.Title>
        <S.Plot>{episode.Plot}</S.Plot>
      </S.InfoContainer>
      <S.CloseButton
        onClick={() => {
          updateEpisode(null);
          updateActiveEpisode(null);
        }}
      >
        <Image src={close} width="30" height="30" alt="Close" />
      </S.CloseButton>
    </S.Container>
  );
};
