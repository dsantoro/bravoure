import Image from "next/image";
import * as S from "./styled";
import { useEpisode } from "../../contexts/EpisodeContext";

export const Hero = ({ image }) => {
  const { episode } = useEpisode();
  console.log(episode);
  return (
    <S.Container>
      <Image
        src={episode?.Poster ? episode?.Poster : image}
        alt="Alt"
        layout="fill"
      />
    </S.Container>
  );
};
