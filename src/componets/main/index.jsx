import { useState } from "react";
import card from "../../assets/Cards/descarga.jfif";

function Main() {
  const [isSelecta, seSelect] = useState("All");

  const handlerClick = (e) => {
    const newSelect = e.target.childNodes[0].nodeValue;
    seSelect(newSelect);
  };

  return (
    <main className="w-full h-full p-4 rounded-md bg-slate-500/40 flex flex-col gap-3 ">
      <nav>
        <ul className="flex gap-4">
          <li>
            <button
              className={`${
                isSelecta == "All" ? "border-gray-400" : "border-transparent"
              }
              border hover:border-gray-400 rounded-md p-1`}
              value="all"
              onClick={(e) => {
                handlerClick(e);
              }}
            >
              All
            </button>
          </li>
          <li>
            <button
              className={`${
                isSelecta == "Music" ? "border-gray-400" : "border-transparent"
              }
              border hover:border-gray-400 rounded-md p-1`}
              value="all"
              onClick={(e) => {
                handlerClick(e);
              }}
            >
              Music
            </button>
          </li>
          <li>
            <button
              className={`${
                isSelecta == "Podcasts"
                  ? "border-gray-300"
                  : "border-transparent"
              }
              border hover:border-gray-400 rounded-md p-1`}
              onClick={(e) => {
                handlerClick(e);
              }}
            >
              Podcasts
            </button>
          </li>
        </ul>
      </nav>
      <div className="overflow-hidden overflow-y-scroll overscroll-x-contain snap-x snap-proximity">
        <div className="flex flex-col gap-2">
          <div>
            <h4>Hecho para ti</h4>
            <div>Mostrar todo</div>
          </div>
          <div className="flex gap-2 justify-around flex-wrap">
            <RenderCard />
            <RenderCard />
            <RenderCard />
            <RenderCard />
            <RenderCard />
            <RenderCard />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div>
            <h4>Hecho para ti</h4>
            <div>Mostrar todo</div>
          </div>
          <div className="flex gap-2 justify-around flex-wrap">
            <RenderCard />
            <RenderCard />
            <RenderCard />
            <RenderCard />
            <RenderCard />
            <RenderCard />
          </div>
        </div>
      </div>
    </main>
  );
}

const RenderCard = () => {
  return (
    <div>
      <figure>
        <img
          className="h-full w-full"
          src={card}
          alt="Foto de una chica escuchando música"
        />
      </figure>
      <h5>brayan,Brayan,brayan</h5>
    </div>
  );
};

export default Main;
