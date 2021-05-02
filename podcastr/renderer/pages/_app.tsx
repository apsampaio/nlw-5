import "../styles/global.scss";
import styles from "../styles/app.module.scss";
import Header from "../components/Header";
import Player from "../components/Player";
import { PlayerContext } from "../hooks/PlayerContext";
import { useState } from "react";

const MyApp = ({ Component, pageProps }) => {
  const [episodeList, setEpisodeList] = useState([]);
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);
  const [isPlaying, setisPlaying] = useState(false);

  const play = (episode) => {
    setEpisodeList([episode]);
    setCurrentEpisodeIndex(0);
    setisPlaying(true);
  };

  const togglePlay = () => {
    setisPlaying(!isPlaying);
  };

  const setPlayingState = (state: boolean) => {
    setisPlaying(state);
  };

  return (
    <PlayerContext.Provider
      value={{
        episodeList,
        currentEpisodeIndex,
        togglePlay,
        play,
        setPlayingState,
        isPlaying,
      }}
    >
      <div className={styles.wrapper}>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
        <Player />
      </div>
    </PlayerContext.Provider>
  );
};

export default MyApp;
