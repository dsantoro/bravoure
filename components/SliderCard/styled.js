import styled from "styled-components";

export const ImageOverlay = styled.div`
  position: relative;

  &:before {
    content: "";
    inset: 0;
    background-color: ${({ isActive }) =>
      isActive ? "transparent" : "rgba(0, 0, 0, 0.5)"};
    z-index: 1;
    position: absolute;
    transition: background-color 0.6s;
    will-change: background-color;
  }

  &:hover {
    &:before {
      background-color: transparent;
    }
  }
`;

export const Container = styled.div`
  position: relative;
  cursor: pointer;
`;

export const Title = styled.h2`
  font-size: var(--font-size-1);
  font-weight: bold;
  color: white;
  margin: 19px 0 10px;
`;

export const Plot = styled.p`
  font-size: var(--font-size-0);
  line-height: 1rem;
  margin-bottom: 0;
  color: white;
  opacity: 0.8;
`;

export const Episode = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background-color: #fff;
  top: 0;
  left: 0;
  z-index: 1;
`;
