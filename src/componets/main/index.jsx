import { useState } from "react";
import { Albums } from "./resources/cards.jsx";
import PropTypes from "prop-types";

Main.propTypes = {
  results: PropTypes.object,
};

function Main({ results }) {
  const [isSelect, setSelect] = useState("All");
  const menuSelect = ["All", "Music", "Podcast"];

  const handleClick = (e) => {
    const newSelect = e.target.childNodes[0].nodeValue;
    setSelect(newSelect);
  };

  return (
    <main className="w-full h-full p-4 rounded-md bg-slate-500/40 flex flex-col gap-3 ">
      <nav>
        <ul className="flex gap-4">
          {menuSelect.map((item, index) => (
            <li key={index}>
              <button
                className={`${
                  isSelect === item
                    ? "border-black text-black font-primaryMedium bg-slate-200/60"
                    : "border-transparent"
                } border hover:border-gray-400 rounded-md p-1`}
                onClick={handleClick}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex flex-col gap-3 overflow-hidden">
        <div className="flex flex-col gap-2">
          <h4 className="font-primarybold">Albums</h4>
          <Albums items={results} />
        </div>
      </div>
    </main>
  );
}

export default Main;
