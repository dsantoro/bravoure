import React, { useContext, useState, useCallback } from "react";

export const EpisodeContext = React.createContext();

export function useEpisode() {
  return useContext(EpisodeContext);
}

export const EpisodeProvider = ({ children }) => {
  const [episode, setEpisode] = useState(null);

  const updateEpisode = useCallback((episode) => {
    setEpisode(episode);
  }, []);

  return (
    <EpisodeContext.Provider
      value={{
        episode,
        updateEpisode,
      }}
    >
      {children}
    </EpisodeContext.Provider>
  );
};
