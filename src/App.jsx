import "./App.css";
import Navbar from "./componets/navbar/index.jsx";
import Biblioteca from "./componets/biblioteca/index.jsx";
import Main from "./componets/main/index.jsx";
import Noticias from "./componets/noticia/index.jsx";
import Reproduct from "./componets/reproduct/index.jsx";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Biblioteca />
        <Main />
        <Noticias />
        <Reproduct />
      </div>
    </>
  );
}

export default App;
