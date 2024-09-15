import {
  faBackward,
  faForward,
  faPause,
  faPlay,
  faShuffle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function Reproduct() {
  const [isReproduct, setReproduct] = useState(false);

  const handlerClick = () => {
    setReproduct((preventState) => !preventState);
  };
  return (
    <footer className="Reproduct grid grid-cols-3 w-full rounded-md bg-slate-500/40 p-2">
      <div className="flex flex-row gap-3">
        <figure className="w-14">
          <img
            className="w-full h-full"
            src={
              "data:image/jpeg;base64,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"
            }
            alt="imagen de una chica"
          />
        </figure>
        <header>
          <h5>Tu puta madre</h5>
          <h6>album tu otra puta madre</h6>
        </header>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div>
          <ul className="flex justify-center items-center gap-4">
            <li>
              <FontAwesomeIcon icon={faShuffle} size="sm" />
            </li>
            <FontAwesomeIcon icon={faBackward} size="sm" />
            <li
              className="text-center p-1 cursor-pointer border rounded-md"
              onClick={() => handlerClick()}
            >
              {isReproduct ? (
                <FontAwesomeIcon icon={faPause} height="40px" width="40px" />
              ) : (
                <FontAwesomeIcon icon={faPlay} height="40px" width="40px" />
              )}
            </li>
            <li>
              <FontAwesomeIcon icon={faForward} size="sm" />
            </li>
          </ul>
        </div>
        <div>----------------------------------------------</div>
      </div>
      <div>bajar volumen</div>
    </footer>
  );
}

export default Reproduct;
