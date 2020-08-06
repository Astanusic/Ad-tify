import React from "react";
import "./Sidebar.scss";
import SidebarOption from "../SidebarOption/SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";

function Sidebar() {
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/0/3470510000_223917f3-83a5-46da-8aa0-55bb348434f0.png?cb=1596674289"
        alt=""
      />
      <SidebarOption Icon={HomeIcon} title="Home" />
      <SidebarOption Icon={SearchIcon} title="Search" />
      <SidebarOption Icon={LibraryMusicIcon} title="Library" />
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />

      <SidebarOption title="Hip-hop" />
      <SidebarOption title="Hip-hop" />
      <SidebarOption title="Hip-hop" />
      <SidebarOption title="Hip-hop" />
    </div>
  );
}

export default Sidebar;
