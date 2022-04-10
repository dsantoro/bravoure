import * as S from "./styled";
import Image from "next/image";
import star from "../../assets/star.svg";

export const EpisodeMetadata = ({ episode, released, imdbRating }) => {
  return (
    <S.Container
      key="info"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <div>
        <S.Text>
          Episode {episode} - {released}
        </S.Text>
      </div>
      <S.InlineItems>
        <Image src={star} width="28" height="28" alt="IMDb Rating" />
        <S.Text>
          <S.Bold>{imdbRating}</S.Bold>/10
        </S.Text>
      </S.InlineItems>
    </S.Container>
  );
};
