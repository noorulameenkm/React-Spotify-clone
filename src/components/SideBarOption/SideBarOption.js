import React from "react";
import { useDataLayerValue } from "../../DataLayer";
import "./SideBarOption.css";

function SideBarOption({ title, Icon, playListId }) {
  const [{ spotify }, dispatch] = useDataLayerValue();

  const getPlayList = () => {
    spotify.getPlaylist(playListId).then((currentPlayList) => {
      dispatch({
        type: "SET_CURRENT_PLAYLIST",
        payload: currentPlayList,
      });
    });
  };

  return (
    <div className="sidebarOption">
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? <h4>{title}</h4> : <p onClick={getPlayList}>{title}</p>}
    </div>
  );
}

export default SideBarOption;
