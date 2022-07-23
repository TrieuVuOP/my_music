import logo from "./logo.svg";
import "./App.css";
import Header from "./component/header/header";
import DetailSong from "./component/Detailsong/detailsong";
import ListSong from "./component/Listsong/ListSong";
import { Songs } from "./component/Contex";
import DataSongs from "./component/Data/songs.json";
import Player from "./component/Player/player";
import { useState } from "react";

function App() {
  const [song, setSong] = useState(DataSongs[0]);
  const handleSetSong = (idSong) => {
    const song = DataSongs.find((song) => song.id === idSong);
    if (!song) {
      setSong(DataSongs[0]);
    } else {
      setSong(song);
    }
  };
  return (
    <div className="App">
      <Songs.Provider value={{ DataSongs, song, handleSetSong }}>
        <Header />
        <div className="grid grid-cols-3 bg-slate-700 h-screen-navbar-player overflow-hidden">
          <DetailSong />

          <ListSong />
        </div>
        <Player />
      </Songs.Provider>
    </div>
  );
}

export default App;
