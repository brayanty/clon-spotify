import "./App.css";
import Navbar from "./componets/navbar/index.jsx";
import Artists from "./componets/artists/index.jsx";
import Main from "./componets/main/index.jsx";
import Reproduct from "./componets/reproduct/index.jsx";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState(null);

  const handlerSearch = (search) => {
    setSearch(search);
  };
  return (
    <>
      <div className=" grid grid-rows-9 grid-cols-3 gap-1 max-h-screen overflow-hidden">
        <div className="col-span-3 row-span-1">
          <Navbar searchHandler={handlerSearch} />
        </div>
        <div className="w-full row-span-6 col-span-3 flex flex-row gap-1">
          <Artists />
          <Main elementos={search} />
        </div>
        <div className="col-span-3 row-span-2 ">
          <Reproduct />
        </div>
      </div>
    </>
  );
}

export default App;
