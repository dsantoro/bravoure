import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  display: flex;
  padding: calc(var(--size-1) * 1.5) var(--size-1);
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
`;

export const Text = styled.p`
  margin-bottom: 0;
  font-size: var(--font-size-2);
  line-height: 1;
`;

export const InlineItems = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Bold = styled.span`
  font-weight: bold;
`;
