import "./App.css";
import Navbar from "./componets/navbar/index.jsx";
import Artists from "./componets/artists/index.jsx";
import Main from "./componets/main/index.jsx";
import Reproduct from "./componets/reproduct/index.jsx";

function App() {
  return (
    <>
      <div className=" flex flex-col gap-2 h-[100vh] max-h-screen overflow-hidden">
        <Navbar />
        <div className="w-full h-[70vh] flex flex-row gap-1">
          <Artists />
          <Main />
        </div>
        <Reproduct />
      </div>
    </>
  );
}

export default App;
