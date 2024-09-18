import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import {
  faMagnifyingGlass,
  faUser,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar() {
  return (
    <nav className="container mx-auto flex justify-between gap-2 max-md:justify-evenly items-center px-2 pt-2">
      <div className="flex items-center">
        <FontAwesomeIcon icon={faSpotify} size="2xl" />
        {/* barra de busqueda */}
      </div>
      <div className="flex flex-row justify-center gap-1 items-center px-3 py-3 w-fullsm:w-[20rem]  md:w-[30rem] bg-gray-700/70 rounded-3xl">
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
      <ul className="flex gap-3 justify-evenly items-center">
        <li className="cursor-pointer border p-4 rounded-full border-gray-500">
          <a href="#">
            <FontAwesomeIcon icon={faUser} size="xl" />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
