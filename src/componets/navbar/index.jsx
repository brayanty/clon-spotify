import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

Navbar.propTypes = {
  searchHandler: PropTypes.func,
};

function useMenu() {
  const [isSubMenuOpen, setSubMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const closeMenu = () => setSubMenuOpen(false);
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
  return [isSubMenuOpen, setSubMenuOpen, menuRef];
}

function Navbar({ searchHandler }) {
  const [navHeight, setnavHeight] = useState(" ");
  const [isSubMenuOpen, setSubMenuOpen, menuRef] = useMenu();
  const navRef = useRef(null);
  const inputRef = useRef(null);

  const menuVisible = () => {
    setnavHeight(navRef.current.clientHeight + "px");
    setSubMenuOpen(true);
  };

  const handlerSearch = (e) => {
    e.preventDefault();
    const searchValue = inputRef.current.value;
    searchHandler(searchValue);
  };

  return (
    <nav
      ref={navRef}
      className="relative container mx-auto flex justify-between gap-2 max-md:justify-evenly items-center pt-2"
    >
      <div className="flex items-center">
        <FontAwesomeIcon icon={faSpotify} size="2xl" />
        {/* Search bar */}
      </div>
      <form
        id="formSearch"
        className="flex flex-row justify-center gap-1 items-center px-3 py-3 w-[20rem] md:w-[30rem] bg-gray-700/70 rounded-3xl"
      >
        <div className="w-full overflow-hidden max-h-[20px]">
          <label htmlFor="text"></label>
          <input
            ref={inputRef}
            className="w-full text-white bg-transparent active:bg-transparent visited:bg-transparent focus:bg-transparent checked:bg-transparent border-none outline-none"
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
      {isSubMenuOpen && (
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
