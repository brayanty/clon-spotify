export default async function getSearch(search) {
  const url = `https://spotify23.p.rapidapi.com/search/?q=${search}&type=multi&offset=0&limit=10&numberOfTopResults=5`;

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "3d17dcc9e0msha2afea9398bc834p1cc93bjsn9b2d7acd4a9c",
      "x-rapidapi-host": "spotify23.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}
