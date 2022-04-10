import * as S from "./styled";
import { useEpisode } from "../../contexts/EpisodeContext";
import { AnimatePresence } from "framer-motion";
import { Details } from "../../components";

export const GenericLayout = (props) => {
  const { episode } = useEpisode();
  return (
    <S.Container>
      <S.Main>{props.children}</S.Main>
      <AnimatePresence>
        {episode && (
          <S.SideBar
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "30%", opacity: 1 }}
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
