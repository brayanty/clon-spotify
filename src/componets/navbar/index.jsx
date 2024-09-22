import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect, useRef } from "react";

function useMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const closeMenu = () => setIsMenuOpen(false);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return { isMenuOpen, setIsMenuOpen, menuRef };
}

// eslint-disable-next-line react/prop-types
function Navbar({ changesURL }) {
  const [navHeight, setNavHeight] = useState(" ");
  const { isMenuOpen, setIsMenuOpen, menuRef } = useMenu();
  const navRef = useRef(null);
  const inputRef = useRef(null);

  const menuVisible = () => {
    setNavHeight(navRef.current.clientHeight + "px");
    setIsMenuOpen(true);
  };

  const handlerSearch = (e) => {
    e.preventDefault(); // Evita la recarga de la página
    const searchValue = inputRef.current.value; // Accede al valor del input
    const newUrl = searchValue; // Genera la nueva URL de búsqueda
    window.history.pushState({}, "", `?q=${newUrl}`); // Actualiza la URL sin recargar la página
    changesURL(newUrl); // Actualiza el estado para iniciar la búsqueda
  };

  return (
    <nav
      ref={navRef}
      className="relative container mx-auto flex justify-between gap-2 max-md:justify-evenly items-center pt-2"
    >
      <div className="flex items-center">
        <FontAwesomeIcon icon={faSpotify} size="2xl" />
      </div>
      {/* Search bar */}
      <form
        id="formSearch"
        className="flex flex-row justify-center gap-1 items-center px-3 py-3 w-[20rem] md:w-[30rem] bg-gray-700/70 rounded-3xl"
      >
        <div className="w-full overflow-hidden max-h-[20px]">
          <label htmlFor="text"></label>
          <input
            ref={inputRef}
            className="w-full text-white bg-transparent border-none outline-none"
            type="text"
            name="text"
            id="text"
            placeholder="¿Qué deseas buscar?"
          />
        </div>
        <button
          onClick={(e) => {
            handlerSearch(e);
          }}
          type="submit"
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
        </button>
      </form>
      <ul className="flex gap-3 justify-evenly items-center">
        <li
          onClick={menuVisible}
          className="cursor-pointer border rounded-full border-gray-500"
        >
          <FontAwesomeIcon className="p-4" icon={faUser} size="lg" />
        </li>
      </ul>
      {isMenuOpen && (
        <div
          ref={menuRef}
          style={{
            position: "absolute",
            top: navHeight,
            right: "1rem",
          }}
          className="font-semibold bg-slate-500/50 backdrop-blur-sm w-32 shadow-lg rounded-md p-2"
        >
          <ul className=" flex flex-col ">
            <li className="hover:bg-gray-200 rounded-md hover:text-black cursor-pointer p-2">
              Login
            </li>
            <li className="hover:bg-gray-200 rounded-md hover:text-black cursor-pointer p-2">
              Settings
            </li>
            <li className="hover:bg-gray-200 rounded-md hover:text-black cursor-pointer p-2">
              Premium
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
