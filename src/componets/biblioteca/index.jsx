import {
  faArrowRight,
  faList,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useEffect } from "react";

function Biblioteca() {
  return (
    <aside className="Biblioteca rounded-md bg-slate-500/40 p-2 flex flex-col gap-3 h-full">
      <div className="flex justify-between">
        <h5>Tu Biblioteca</h5>
        <div className="flex gap-2">
          <a href="#">
            <FontAwesomeIcon icon={faPlus} size="lg" />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faArrowRight} size="lg" />
          </a>
        </div>
      </div>

      <div>
        <h4 className="w-max p-1 block rounded-xl bg-transparent border">
          Artistas
        </h4>
      </div>

      <section className="flex gap-2 flex-col h-full overflow-y-scroll overscroll-x-contain snap-x snap-proximity">
        <div>
          <ul className="flex justify-between items-center">
            <li className="w-[70%] flex">
              <input
                className="w-full"
                type="search"
                name="search"
                id="search"
              />
              <button
                className="p-1 bg-transparent border rounded-md"
                type="button"
              >
                Search
              </button>
            </li>
            <li>
              <a href="#" className="flex items-center justify-between">
                <FontAwesomeIcon icon={faList} size="lg" />
              </a>
            </li>
          </ul>
        </div>

        <ul className="flex flex-col gap-3">
          <UserRennder />
          <UserRennder />
        </ul>
      </section>
    </aside>
  );
}

const END_POINT_USER = "https://randomuser.me/api/?results=5";

function useUsers() {
  const [isUsers, setUsers] = useState([]);

  useEffect(() => {
    fetch(END_POINT_USER)
      .then((response) => response.json())
      .then((data) => setUsers(data.results))
      .catch((error) => console.error("Error:", error));
  }, []);

  return isUsers;
}

const UserRennder = () => {
  const users = useUsers();
  return users.map((user) => (
    <li key={user.login.uuid} className="flex flex-row gap-2 items-center">
      <figure className="md:w-10 w-[4rem] overflow-hidden rounded-full">
        <img
          className="w-full h-full"
          src={user.picture.large}
          alt={`${user.name.first} ${user.name.last}`}
        />
      </figure>
      <header>
        <h4 className="text-sm font-primaryMedium">
          {user.name.first} {user.name.last}
        </h4>
        <div className="">
          <p className="text-xs font-primaryRegular">Artista</p>
        </div>
      </header>
    </li>
  ));
};

export default Biblioteca;
