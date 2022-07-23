import { useContext } from "react";
import { Songs } from "../Contex";

function DetailSong() {
  const { song } = useContext(Songs);
  return (
    <div className="cols-span-1">
      <h2 className="text-cyan-500 font-bold">Now Playing</h2> <br />
      <h2 className="text-neutral-400 text-2xl">{song.name}</h2>
      <div className="w-[240px] m-auto mt-10">
        <img className="w-full" src={song.links.images[0].url}></img>
      </div>
      <div className="flex justify-evenly items-center mt-10">
        <img
          className="w-[70px] rounded-full"
          src={song.links.images[0].url}
        ></img>
        <span className="text-xl text-white">{song.author}</span>
      </div>
    </div>
  );
}

export default DetailSong;
