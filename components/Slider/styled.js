import styled from "styled-components";

export const Container = styled.div`
  gap: var(--size-1);
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 20%;
  overflow-x: auto;
  overscroll-behavior-inline: contain;

  scroll-snap-type: mandatory inline;

  > * {
    scroll-snap-align: start;
    scroll-padding-inline: var(--size-1, 1rem);
  }
`;
