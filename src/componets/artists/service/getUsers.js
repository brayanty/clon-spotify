const END_POINT_USER = "https://randomuser.me/api/?results=10";


async function getUsers() {
    try {
        const response = await fetch(END_POINT_USER);
        const data = await response.json();
        
        const users = data.results.map((user) => ({
            id: user.login.uuid,
            first: user.name.first, 
            last: user.name.last,
            imagen: user.picture.large, 
        }));
        return users;
    } catch (error) {
        console.log("no se pudo obtener los resultado " + " " + error)
        return -1
    }
}

export default getUsers
