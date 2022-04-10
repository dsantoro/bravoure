import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
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
