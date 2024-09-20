import cardImg from "../../../assets/Cards/descarga.jfif";
export default function Card() {
  return (
    <div>
      <figure>
        <img
          className="h-full w-full"
          src={cardImg}
          alt="Foto de una chica escuchando música"
        />
      </figure>
      <h5>brayan,Brayan,brayan</h5>
    </div>
  );
}
