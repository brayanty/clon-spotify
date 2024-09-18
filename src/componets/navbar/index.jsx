import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import {
  faMagnifyingGlass,
  faUser,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect, useRef } from "react";

function Navbar() {
  const [navHeight, setnavHeight] = useState(" ");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const navRef = useRef(null);

  const menuVisible = () => {
    setnavHeight(navRef.current.clientHeight + "px");
    setIsMenuOpen(true);
  };

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

  return (
    <nav
      ref={navRef}
      className="relative container mx-auto flex justify-between gap-2 max-md:justify-evenly items-center pt-2"
    >
      <div className="flex items-center">
        <FontAwesomeIcon icon={faSpotify} size="2xl" />
        {/* Search bar */}
      </div>
      <div className="flex flex-row justify-center gap-1 items-center px-3 py-3 w-full sm:w-[20rem] md:w-[30rem] bg-gray-700/70 rounded-3xl">
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
            placeholder="¿Qué deseas buscar?"
          />
        </div>
        <div>
          <FontAwesomeIcon icon={faX} size="lg" />
        </div>
      </div>
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
            <li className="hover:bg-gray-200 rounded-md hover:text-black  cursor-pointer p-2">
              Login
            </li>
            <li className="hover:bg-gray-200 rounded-md hover:text-black  cursor-pointer p-2">
              Settings
            </li>
            <li className="hover:bg-gray-200 rounded-md hover:text-black  cursor-pointer p-2">
              Premium
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
