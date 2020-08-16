import React from "react";
import SideBar from "../SideBar/SideBar";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";
import "./Player.css";

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player__body">
        {/* SideBar */}
        <SideBar />
        {/* Body */}
        <Body spotify={spotify} />
      </div>

      <Footer spotify={spotify} />
    </div>
  );
}

export default Player;
