import { useContext, useEffect, useState } from "react";
import { Songs } from "../Contex";
// import "./ListSong.css";

function ListSong() {
  const { DataSongs, handleSetSong, song } = useContext(Songs);
  const [idSong, setIdSongs] = useState(0);
  const handleSongs = (idSong) => {
    setIdSongs(idSong);
    handleSetSong(idSong);
  };
  useEffect(() => {
    setIdSongs(song.id);
  }, [song]);
  return (
    <div className="col-span-2 overflow-y-scroll">
      <table className="table-auto w-full">
        <thead className="text-white h-12">
          <tr>
            <th className="w-[10%]">#</th>
            <th className="text-left">Title</th>
            <th className="w-[10%]">Author</th>
            <th className="w-[10%]">
              <i className="fa fa-download"></i>
            </th>
          </tr>
        </thead>
        <tbody>
          {DataSongs.map((song, index) => (
            <tr
              key={index}
              className={`bg-slate-800 h-12 text-gray-500 hover:bg-slate-600 ${
                idSong === song.id && "text-teal-400"
              }`}
              onClick={() => handleSongs(song.id)}
            >
              <td className="w-[10%] text-center">{index + 1}</td>
              <td className="text-center">{song.name}</td>
              <td className="text-center">{song.author}</td>
              <td className="text-center">
                <a href={song.url}>
                  <i className="fa fa-download"></i>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListSong;
