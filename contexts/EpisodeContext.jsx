import React, { useContext, useState, useCallback } from "react";

export const EpisodeContext = React.createContext();

export function useEpisode() {
  return useContext(EpisodeContext);
}

export const EpisodeProvider = ({ children }) => {
  const [episode, setEpisode] = useState(null);
  const [activeEpisode, setActiveEpisode] = useState(0);

  const updateEpisode = useCallback((episode) => {
    setEpisode(episode);
  }, []);

  const updateActiveEpisode = useCallback((activeEpisode) => {
    setActiveEpisode(activeEpisode);
  }, []);

  return (
    <EpisodeContext.Provider
      value={{
        episode,
        updateEpisode,
        activeEpisode,
        updateActiveEpisode,
      }}
    >
      {children}
    </EpisodeContext.Provider>
  );
};
