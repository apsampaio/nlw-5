import Image from "next/image";
import { useContext } from "react";
import { PlayerContext } from "../../hooks/PlayerContext";

import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import styles from "./styles.module.scss";

const Player = () => {
  const { episodeList, currentEpisodeIndex } = useContext(PlayerContext);

  const episode = episodeList[currentEpisodeIndex];

  return (
    <div className={styles.playerContainer}>
      <header>
        <img src="/images/playing.svg" alt="Tocando agora" />
        <strong>Tocando agora</strong>
      </header>

      {episode ? (
        <div className={styles.currentEpisode}>
          <Image
            width={592}
            height={592}
            src={episode.thumbnail}
            objectFit="cover"
          />
          <strong>{episode.title}</strong>
          <span>{episode.members}</span>
        </div>
      ) : (
        <div className={styles.emptyPlayer}>
          <strong>Selecione um podcast para ouvir</strong>
        </div>
      )}

      <footer className={!episode ? styles.empty : ""}>
        <div className={styles.progress}>
          <span>00:00</span>
          <div className={styles.slider}>
            {episode ? (
              <Slider
                trackStyle={{
                  backgroundColor: "#04D361",
                }}
                railStyle={{ backgroundColor: "#9F75FF" }}
                handleStyle={{ borderColor: "#04D361", borderWidth: 4 }}
              />
            ) : (
              <div className={styles.emptySlider} />
            )}
          </div>
          <span>00:00</span>
        </div>

        <div className={styles.buttons}>
          <button type="button" disabled={!episode}>
            <img src="/images/shuffle.svg" alt="Aleatório" />
          </button>
          <button type="button" disabled={!episode}>
            <img src="/images/play-previous.svg" alt="Tocar anterior" />
          </button>
          <button
            type="button"
            className={styles.playButton}
            disabled={!episode}
          >
            <img src="/images/play.svg" alt="Tocar" />
          </button>
          <button type="button" disabled={!episode}>
            <img src="/images/play-next.svg" alt="Tocar próximo" />
          </button>
          <button type="button" disabled={!episode}>
            <img src="/images/repeat.svg" alt="Repetir" />
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Player;
