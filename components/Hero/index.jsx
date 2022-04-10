import Image from "next/image";
import * as S from "./styled";
import { useEpisode } from "../../contexts/EpisodeContext";
import { AnimatePresence } from "framer-motion";

export const Hero = ({ image }) => {
  const { episode } = useEpisode();
  return (
    <AnimatePresence>
      <S.Container
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Image
          src={episode?.Poster ? episode?.Poster : image}
          alt="Alt"
          layout="fill"
        />
      </S.Container>
    </AnimatePresence>
  );
};
