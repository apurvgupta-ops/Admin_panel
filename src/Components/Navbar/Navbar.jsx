import React from "react";
import { CgLayoutList, CgList, CgListTree, CgSearch } from "react-icons/cg";
import {
  MdDarkMode,
  MdFullscreenExit,
  MdLanguage,
  MdNotifications,
} from "react-icons/md";
import { TbChartBubble } from "react-icons/tb";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <CgSearch color="black" />
        </div>
        <div className="items">
          <div className="item">
            <MdLanguage /> English
          </div>
          <div className="item">
            <MdDarkMode />
          </div>
          <div className="item">
            <MdFullscreenExit />
          </div>
          <div className="item">
            <MdNotifications />
          </div>
          <div className="item">
            <TbChartBubble />
          </div>
          <div className="item">
            <CgLayoutList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
