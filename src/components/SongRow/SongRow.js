import React from "react";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { useDataLayerValue } from "../../DataLayer";
import "./SongRow.css";

function SongRow({ track }) {
  const [{ currentTrack }, dispatch] = useDataLayerValue();

  const setThisSongToPlayer = () => {
    dispatch({
      type: "SET_CURRENT_TRACK",
      payload: track,
    });
  };

  return (
    <div className="songRow">
      <div className="songRow__icons">
        <PlayArrowIcon
          className="songRow__playArrowIcon"
          onClick={setThisSongToPlayer}
        />
        <MusicNoteIcon className="songRow__musicNoteIcon" />
      </div>
      <img className="songRow__album" src={track.album.images[0].url} alt="" />
      <div className="songRow__info">
        <h1>{track.name}</h1>
        <p>
          {track.artists.map((artist) => artist.name).join(", ")}
          {track.album.name}
        </p>
      </div>
    </div>
  );
}

export default SongRow;
