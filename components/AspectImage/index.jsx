import Image from "next/image";
import * as S from "./styled";

export const AspectImage = ({ src, altText, aspect }) => {
  return (
    <S.Container aspect={aspect}>
      <Image src={src} layout="fill" alt={altText} />
    </S.Container>
  );
};
