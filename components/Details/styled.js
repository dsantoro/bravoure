import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  position: relative;
`;

export const InfoContainer = styled(motion.div)`
  padding: calc(var(--size-1) * 1.5) var(--size-1);
`;

export const Title = styled.h2`
  font-size: var(--font-size-4);
  font-weight: bold;
  margin: 0 0 1rem 0;
`;

export const Plot = styled(motion.p)`
  margin-bottom: 0;
  font-size: var(--font-size-2);
`;

export const CloseButton = styled.button`
  appearance: none;
  position: absolute;
  top: 0;
  left: 0;
  background-color: transparent;
  border: none;
  padding: 1rem;
  cursor: pointer;
`;
