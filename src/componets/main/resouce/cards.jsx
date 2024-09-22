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
    <ul className="grid gap-2 grid-cols-3 grid-rows-1">
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
