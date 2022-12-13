import React, { useContext } from "react";
import { CgLayoutList, CgProfile, CgSearch } from "react-icons/cg";
import {
  MdChatBubble,
  MdDarkMode,
  MdFullscreenExit,
  MdLanguage,
  MdLightMode,
  MdNotifications,
} from "react-icons/md";
import { DarkModeContext } from "../../Context/DarkModeContext";

import "./navbar.scss";

const Navbar = () => {
  const { dispatch, darkMode } = useContext(DarkModeContext);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <CgSearch color="black" />
        </div>
        <div className="items">
          <div className="item">
            <MdLanguage className="icon" /> English
          </div>
          <div className="item" onClick={() => dispatch({ type: "TOGGLE" })}>
            {darkMode ? (
              <MdLightMode className="icon" />
            ) : (
              <MdDarkMode className="icon" />
            )}
          </div>
          <div className="item">
            <MdFullscreenExit className="icon" />
          </div>
          <div className="item">
            <MdNotifications className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <MdChatBubble className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <CgLayoutList className="icon" />
          </div>
          <div className="item">
            <CgProfile className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
