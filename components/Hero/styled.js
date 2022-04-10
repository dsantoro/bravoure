import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  height: 100vh;
  position: absolute;
  inset: 0;
  z-index: -1;

  &:after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    background-color: rgba(0, 0, 0, 0.48);
    mix-blend-mode: multiply;
  }

  img {
    object-fit: cover;
    z-index: -2;
    max-width: 100%;
    mix-blend-mode: multiply;
  }
`;
