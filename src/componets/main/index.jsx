import { useState } from "react";
import Card from "./resouce/cards.jsx";

function Main() {
  const [isSelect, seSelect] = useState("All");
  const items = ["All", "Music", "Music"];

  const handlerClick = (e) => {
    const newSelect = e.target.childNodes[0].nodeValue;
    seSelect(newSelect);
  };

  return (
    <main className="w-full h-full p-4 rounded-md bg-slate-500/40 flex flex-col gap-3 ">
      <nav>
        <ul className="flex gap-4">
          {items.map((item, index) => {
            return (
              <li key={index}>
                <button
                  className={`${
                    isSelect == { item }
                      ? "border-gray-400"
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
      <div className="overflow-hidden overflow-y-scroll overscroll-x-contain snap-x snap-proximity">
        <div className="flex flex-col gap-2">
          <div>
            <h4>Hecho para ti</h4>
            <div>Mostrar todo</div>
          </div>
          <div className="flex gap-2 justify-around flex-wrap">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div>
            <h4>Hecho para ti</h4>
            <div>Mostrar todo</div>
          </div>
          <div className="flex gap-2 justify-around flex-wrap">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
