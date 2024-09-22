import { useEffect, useState } from "react";
import { Albums, Artists } from "./resouce/cards.jsx";
import getSearch from "../service/getSearch.js";
import PropTypes from "prop-types";

Main.propTypes = {
  elements: PropTypes.object,
};

function Main({ elements }) {
  const [isSelect, seSelect] = useState("All");
  const [results, setResults] = useState(null);

  const menuSelect = ["All", "Music", "Podcast"];

  useEffect(() => {
    async function fetchData() {
      const searchResults = await getSearch(elements);
      setResults(searchResults);
    }

    fetchData();
  }, [elements]);

  const handlerClick = (e) => {
    const newSelect = e.target.childNodes[0].nodeValue;
    seSelect(newSelect);
  };
  return (
    <main className="w-full h-full p-4 rounded-md bg-slate-500/40 flex flex-col gap-3 ">
      <nav>
        <ul className="flex gap-4">
          {menuSelect.map((item, index) => {
            return (
              <li key={index}>
                <button
                  className={`${
                    isSelect == item
                      ? "border-black text-black font-primaryMedium bg-slate-400/60"
                      : "border-transparent"
                  }
              border hover:border-gray-400 rounded-md p-1`}
                  onClick={(e) => {
                    handlerClick(e);
                  }}
                >
                  {item}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="flex flex-col gap-3 overflow-hidden overflow-y-scroll overscroll-x-contain snap-x snap-proximity">
        <div className="flex flex-col gap-2">
          <h4 className="font-primarybold">Artists</h4>
          <Artists items={results} />
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="font-primarybold">Albumes</h4>
          <Albums items={results} />
        </div>
      </div>
    </main>
  );
}

export default Main;
