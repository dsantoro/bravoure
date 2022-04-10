import * as S from "./styled";
import { useEpisode } from "../../contexts/EpisodeContext";
import { AnimatePresence } from "framer-motion";
import { Details } from "../../components";
import { useMediaQuery } from "../../hooks/useMediaQuery";

export const GenericLayout = (props) => {
  const { episode } = useEpisode();
  const isLarge = useMediaQuery("(min-width: 768px)");
  return (
    <S.Container>
      <S.Main>{props.children}</S.Main>
      <AnimatePresence>
        {episode && (
          <S.SideBar
            key="sidebar"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: !isLarge ? "100%" : "30%", opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Details episode={episode} />
          </S.SideBar>
        )}
      </AnimatePresence>
    </S.Container>
  );
};
