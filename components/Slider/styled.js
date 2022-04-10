import styled from "styled-components";

export const Container = styled.div`
  gap: var(--size-1);
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 50%;
  overflow-x: auto;
  overscroll-behavior-inline: contain;

  scroll-snap-type: mandatory inline;

  @media (min-width: 768px) {
    grid-auto-columns: 33%;
  }

  @media (min-width: 1024px) {
    grid-auto-columns: 20%;
  }

  > * {
    scroll-snap-align: start;
    scroll-padding-inline: var(--size-1, 1rem);
  }
`;
