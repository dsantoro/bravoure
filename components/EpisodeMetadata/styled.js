import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: calc(var(--size-1) * 1.5) var(--size-1);
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
`;

export const Text = styled.p`
  margin-bottom: 0;
  font-size: var(--font-size-2);
`;
