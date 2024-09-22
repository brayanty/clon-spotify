import {
  faBackward,
  faForward,
  faPause,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import secondsToString from "./logic/secondsToString.js";
import { useProgress, useReproduct, usePlaying } from "./logic/customsHooks.js";

import mp31 from "./Imagine Dragons  Nice to Meet You.mp3";
import mp32 from "./Imagine Dragons  Believer.mp3";
import mp33 from "./Imagine Dragons  Radioactive.mp3";
import mp34 from "./Imagine Dragons  Thunder.mp3";

//Esta lista era de prueba lo ideal seria traerlo desde un servidor
const musicList = [
  {
    artist: "Imagine Dragons",
    songTitle: "Nice to Meet You",
    song: mp31,
    img: "https://i.ytimg.com/vi/w3viBe2Q0P8/maxresdefault.jpg",
  },
  {
    artist: "Imagine Dragons",
    songTitle: "Beliver",
    song: mp32,
    img: "https://i.ytimg.com/vi/w3viBe2Q0P8/maxresdefault.jpg",
  },
  {
    artist: "Imagine Dragons",
    songTitle: "Radioactive",
    song: mp33,
    img: "https://i.ytimg.com/vi/w3viBe2Q0P8/maxresdefault.jpg",
  },
  {
    artist: "Imagine Dragons",
    songTitle: "Thunder",
    song: mp34,
    img: "https://i.ytimg.com/vi/w3viBe2Q0P8/maxresdefault.jpg",
  },
];

function Reproduct() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMusic, setMusic] = useState(musicList[0].song);
  const [listSelect, setListSelect] = useState(0);

  const [loading, audio] = useReproduct(isMusic);
  // Barra de progreso
  const [progress, currentTime, duration] = useProgress(audio);
  // Para reproducir la musica
  usePlaying(audio, isPlaying);
  // Pasa a la siguiente musica si ya la actual a terminado
  useEffect(() => {
    if (duration > 0 && currentTime >= duration) {
      if (listSelect + 1 === musicList.length) {
        setIsPlaying(false);
      } else {
        if (listSelect + 1 === musicList.length) {
          return;
        }
        handlerListNext();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTime, duration, listSelect]);

  const handlerPlayPauseClick = () => {
    setIsPlaying((prev) => !prev);
  };

  const handlerListNext = () => {
    setListSelect((prev) => {
      const newIndex = (prev + 1) % musicList.length;
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
      setMusic(musicList[newIndex].song);
      return newIndex;
    });
  };

  const handlerListBack = () => {
    setListSelect((prev) => {
      const newIndex = (prev - 1 + musicList.length) % musicList.length;
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
      setMusic(musicList[newIndex].song);
      return newIndex;
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <footer className="flex flex-row justify-evenly gap-3 items-center h-full w-full rounded-md bg-slate-500/40 p-2">
      <div className="max-md:hidden flex flex-row w-64 gap-3 justify-center items-center">
        <figure className="w-20 h-full">
          <img
            className="h-full w-full"
            src={musicList[listSelect].img}
            alt={musicList[listSelect].songTitle}
          />
        </figure>
        <header>
          <h4>{musicList[listSelect].songTitle}</h4>
          <h3>{musicList[listSelect].artist}</h3>
        </header>
      </div>
      <nav className="w-full h-full flex flex-col justify-evenly">
        <ul className="flex justify-center items-center gap-4">
          <li
            className="p-2 cursor-pointer"
            onClick={() => {
              handlerListBack();
            }}
          >
            <FontAwesomeIcon icon={faBackward} size="sm" />
          </li>
          <li
            className="text-center p-1 cursor-pointer border rounded-md"
            onClick={handlerPlayPauseClick}
            role="button"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <FontAwesomeIcon icon={faPause} height="40px" width="40px" />
            ) : (
              <FontAwesomeIcon icon={faPlay} height="40px" width="40px" />
            )}
          </li>
          <li
            className="p-2 cursor-pointer"
            onClick={() => {
              handlerListNext();
            }}
          >
            <FontAwesomeIcon icon={faForward} size="sm" />
          </li>
        </ul>
        <div className="w-full flex flex-row justify-between">
          <div className="font-bold">{secondsToString(currentTime)}</div>
          <div className="font-bold">{secondsToString(duration)}</div>
        </div>

        <div className="h-3 w-full border rounded-md bg-transparent">
          <div
            className="h-full bg-white transition-all duration-100 ease-linear rounded-md"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </nav>
    </footer>
  );
}

export default Reproduct;
