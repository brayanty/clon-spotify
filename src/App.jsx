import "./App.css";
import Navbar from "./componets/navbar/index.jsx";
import Artists from "./componets/artists/index.jsx";
import Main from "./componets/main/index.jsx";
import Reproduct from "./componets/reproduct/index.jsx";
import getSearch from "./componets/service/getSearch.js";
import { useEffect, useState } from "react";

function useGetUrlResult() {
  const [results, setResults] = useState(null);
  const [url, setUrl] = useState(window.location.search);

  useEffect(() => {
    async function fetchData(currentUrl) {
      const searchResults = await getSearch(currentUrl);

      setResults(searchResults);
    }

    function handleUrlChange() {
      const currentUrl = window.location.search;
      setUrl(currentUrl);
    }

    fetchData(url);

    window.addEventListener("popstate", handleUrlChange);

    return () => {
      window.removeEventListener("popstate", handleUrlChange);
    };
  }, [url]);
  return [results, setUrl];
}

function App() {
  const [results, setUrl] = useGetUrlResult();

  const changesURL = (search) => {
    setUrl(search);
  };
  return (
    <>
      <div className="h-full grid grid-rows-9 grid-cols-3 gap-2 max-h-screen overflow-hidden">
        <div className="col-span-3 row-span-1">
          <Navbar changesURL={changesURL} />
        </div>
        <div className="w-full row-span-6 col-span-3 flex flex-row gap-1">
          <Artists results={results} />
          <Main results={results} />
        </div>
        <div className="col-span-3 row-span-2 ">
          <Reproduct />
        </div>
      </div>
    </>
  );
}

export default App;
