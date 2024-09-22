import PropTypes from "prop-types";

Albums.propTypes = {
  items: PropTypes.object,
};
export function Albums({ items }) {
  if (!items) {
    return;
  }
  const albums = items.albums.items;

  const albumenes = albums.map((album) => ({
    title: album.data.name,
    img: album.data.coverArt.sources[0].url,
    id: album.data.uri,
  }));

  return (
    <ul className="grid gap-2 grid-cols-4 grid-rows-1">
      {albumenes.map((album, i) => {
        return (
          <li
            className="p-2 bg-slate-300/30 backdrop-blur-sm overflow-hidden"
            key={i}
          >
            <figure className="h-40 w-full">
              <img
                className="h-full w-full"
                src={album.img}
                alt={album.title}
              />
            </figure>
            <h5 className=" text-center font-primarybold">
              {album.title.toUpperCase()}
            </h5>
          </li>
        );
      })}
    </ul>
  );
}

Artists.propTypes = {
  items: PropTypes.object,
};
export function Artists({ items }) {
  if (!items) {
    return;
  }
  const artists = items.artists.items;
  const newArtists = artists.map((artist, i) => ({
    name: artist.data.profile.name,
    img:
      artist?.data?.visuals?.avatarImage?.sources?.[0]?.url ||
      "data:image/png;base64,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",
    id: i,
  }));

  return (
    <ul className="flex flex-row">
      {newArtists.map((artist) => {
        return (
          <li
            className="overflow-hidden flex gap-2 justify-center items-center flex-wrap "
            key={artist.id}
          >
            <figure className="rounded-full overflow-hidden h-20 w-20">
              <img
                className="h-full w-full"
                src={artist.img}
                alt={artist.name}
              />
            </figure>
            <h5 className=" text-center font-primarybold">{artist.name}</h5>
          </li>
        );
      })}
    </ul>
  );
}
