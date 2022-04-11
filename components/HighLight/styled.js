import styled from "styled-components";

export const Container = styled.hgroup`
  margin: 0 0 100px 0;

  > * {
    color: white;
  }
`;

export const Season = styled.h6`
  font-size: var(--font-size-3);
  font-weight: normal;
`;

export const Title = styled.h1`
  font-size: clamp(2rem, -0.875rem + 8.333vw, var(--font-size-5));
  font-weight: bold;
`;

export const Plot = styled.h2`
  font-size: clamp(1rem, -0.875rem + 5.333vw, var(--font-size-4));
  font-weight: normal;
  max-width: 60%;
`;
