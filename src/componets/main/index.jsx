import card from "../../assets/Cards/descarga.jfif";
function Main() {
  return (
    <main className="Main p-2 rounded-md bg-slate-500/40 flex flex-col gap-3 overflow-hidden h-full overflow-y-scroll overscroll-x-contain snap-x snap-proximity">
      <nav>
        <ul className="flex gap-4">
          <li>
            <a href="#">Todo</a>
          </li>
          <li>
            <a href="#">Música</a>
          </li>
          <li>
            <a href="#">Podcasts</a>
          </li>
        </ul>
      </nav>
      <div className="flex flex-col gap-2">
        <div>
          <h4>Hecho para ti</h4>
          <div>Mostrar todo</div>
        </div>
        <div className="flex gap-2 justify-between">
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
        <div className="flex gap-2 justify-between">
          <RenderCard />
          <RenderCard />
          <RenderCard />
          <RenderCard />
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
      <h5>Miree,Ilonquee,Brayan</h5>
    </div>
  );
};

export default Main;
