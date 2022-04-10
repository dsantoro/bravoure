import styled from "styled-components";

export const Container = styled.div`
  aspect-ratio: ${({ aspect }) => aspect};
  position: relative;

  img {
    object-fit: cover;
    inline-size: 100%;
  }
`;
