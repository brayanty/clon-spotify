import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import {
  faBell,
  faHome,
  faMagnifyingGlass,
  faUser,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar() {
  return (
    <nav className="Navbar grid grid-cols-3 gap-1 p-1 px-1">
      <div className="flex justify-start items-center">
        <FontAwesomeIcon icon={faSpotify} size="2xl" />
        {/* barra de busqueda */}
      </div>
      <div className="flex justify-between items-center ">
        <button
          className="rounded-full p-2  border border-gray-400"
          type="button"
        >
          <FontAwesomeIcon icon={faHome} size="lg" />
        </button>
        <div className="px-3 py-3 w-[30rem] bg-gray-700/70 rounded-3xl flex flex-row gap-1 justify-center">
          <div>
            <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
          </div>
          <div className="w-full overflow-hidden max-h-[20px]">
            <label htmlFor="text"></label>
            <input
              className="w-full text-white bg-transparent active:bg-transparent visited:bg-transparent focus:bg-transparent checked:bg-transparent border-none outline-none"
              type="text"
              name="text"
              id="text"
              placeholder="¿Qué deceas buscar?"
            />
          </div>
          <div>
            <FontAwesomeIcon icon={faX} size="lg" />
          </div>
        </div>
      </div>
      <ul className="flex gap-3 justify-around items-center">
        <li>
          <a href="#">Explorar Premium</a>
        </li>
        <li>
          <a href="#">Explorar Premium</a>
        </li>
        <li className="flex gap-5">
          <a href="#">
            <FontAwesomeIcon icon={faBell} size="lg" />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faUser} size="lg" />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
