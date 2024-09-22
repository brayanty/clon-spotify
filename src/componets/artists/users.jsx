import { useState } from "react";
import { useEffect } from "react";
import getUsers from "./service/getUsers.js";

function useUsers() {
  const [isUsers, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getUsers();
      setUsers(users);
    };
    fetchUsers();
  }, []);

  return isUsers;
}

// eslint-disable-next-line react/prop-types
export function Users({ artists }) {
  const users = useUsers();

  if (users == -1) {
    return (
      <div className="text-red-400 flex flex-row text-center items-center">
        ¨¡Oh no algo ocurrio algo!
      </div>
    );
  } else {
    // eslint-disable-next-line react/prop-types
    return artists.map((artist) => (
      <li key={artist.id} className="flex flex-row gap-2 items-center">
        <figure className="md:w-10 w-[4rem] overflow-hidden rounded-full">
          <img className="w-full h-full" src={artist.img} alt={artist.name} />
        </figure>
        <header className="max-md:hidden">
          <h4 className="text-sm font-primaryMedium">{artist.name}</h4>
          <div>
            <p className="text-xs font-primaryRegular">Artista</p>
          </div>
        </header>
      </li>
    ));
  }
}
