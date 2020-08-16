import React from "react";
import SideBarOption from "../SideBarOption/SideBarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from "../../DataLayer";
import "./SideBar.css";

function SideBar() {
  const [{ playLists }, dispatch] = useDataLayerValue();

  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="spotify"
      />

      <SideBarOption Icon={HomeIcon} title="Home" />
      <SideBarOption Icon={SearchIcon} title="Search" />
      <SideBarOption Icon={LibraryMusicIcon} title="Your Library" />
      <br />
      <strong className="sidebar__title">PLAYLIST</strong>
      <hr />

      {playLists?.map((playList) => (
        <SideBarOption
          title={playList.name}
          key={playList.id}
          playListId={playList.id}
        />
      ))}
    </div>
  );
}

export default SideBar;
