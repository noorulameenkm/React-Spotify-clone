import React from "react";
import Header from "../Header/Header";
import { useDataLayerValue } from "../../DataLayer";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "../SongRow/SongRow";
import "./Body.css";

function Body({ spotify }) {
  const [{ currentPlayList }, dispatch] = useDataLayerValue();

  return (
    <div className="body">
      <Header spotify={spotify} />

      <div className="body__info">
        <img src={currentPlayList?.images[0]?.url} alt="" />
        <div className="body__infotext">
          <strong>PLAYLIST</strong>
          <h2>{currentPlayList?.name}</h2>
          <p>{currentPlayList?.description}</p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon className="body__shuffle" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>

        {/* List of Songs */}
        {currentPlayList?.tracks?.items?.map((item) => (
          <SongRow track={item.track} key={item.track.id} />
        ))}
      </div>
    </div>
  );
}

export default Body;
