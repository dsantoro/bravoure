import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  display: flex;
`;

export const Main = styled.div`
  position: relative;
  height: 100vh;
  z-index: 1;
  flex: 1;
  overflow: hidden;
`;

export const SideBar = styled(motion.div)`
  z-index: 1;
`;
