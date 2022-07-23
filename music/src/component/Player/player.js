import { useContext } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { Songs } from "../Contex";

function Player() {
  const { song, handleSetSong } = useContext(Songs);
  const handleNext = () => {
    handleSetSong(song.id + 1);
  };
  const handleReNext = () => {
    handleSetSong(song.id - 1);
  };
  return (
    <div>
      <AudioPlayer
        className="player-music"
        src={song.url}
        layout="stacked-reverse"
        showSkipControls={true}
        showJumpControls={false}
        onClickNext={() => handleNext()}
        onClickPrevious={() => handleReNext()}
      />
    </div>
  );
}

export default Player;
