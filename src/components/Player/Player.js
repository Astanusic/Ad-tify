import React from "react";
import "./Player.scss";
import Sidebar from "../Sidebar/Sidebar";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        <Body />
      </div>

      <Footer />
    </div>
  );
}

export default Player;
