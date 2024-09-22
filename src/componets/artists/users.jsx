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

export function Users() {
  const users = useUsers();

  if (users == -1) {
    return (
      <div className="text-red-400 flex flex-row text-center items-center">
        ¨¡Oh no algo ocurrio algo!
      </div>
    );
  } else {
    return users.map((user) => (
      <li key={user.id} className="flex flex-row gap-2 items-center">
        <figure className="md:w-10 w-[4rem] overflow-hidden rounded-full">
          <img
            className="w-full h-full"
            src={user.imagen}
            alt={`${user.first} ${user.last}`}
          />
        </figure>
        <header className="max-md:hidden">
          <h4 className="text-sm font-primaryMedium">
            {user.first} {user.last}
          </h4>
          <div>
            <p className="text-xs font-primaryRegular">Artista</p>
          </div>
        </header>
      </li>
    ));
  }
}
