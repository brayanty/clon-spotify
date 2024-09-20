import { Users } from "./users.jsx";

function Artists() {
  return (
    <aside className="rounded-md bg-slate-500/40 p-2 flex flex-col gap-3 h-full transition-all w-[16rem] max-md:w-[5rem] ">
      <div>
        <h4 className="w-max p-1 block rounded-xl bg-transparent border">
          Artistas
        </h4>
      </div>
      <section className="flex gap-2 flex-col h-full overflow-y-scroll  overscroll-x-contain snap-x snap-proximity">
        <ul className="flex flex-col gap-3">
          <Users />
        </ul>
      </section>
    </aside>
  );
}

export default Artists;
