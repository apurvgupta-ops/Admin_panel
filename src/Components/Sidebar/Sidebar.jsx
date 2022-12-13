import React, { useContext } from "react";
import {
  MdDashboardCustomize,
  MdShoppingCart,
  MdQueryStats,
  MdSettings,
  MdNotificationAdd,
} from "react-icons/md";
import { RiMapPinUserFill } from "react-icons/ri";
import { FaProductHunt } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { GrSystem } from "react-icons/gr";
import { SiLogstash } from "react-icons/si";
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./sidebar.scss";
import { DarkModeContext } from "../../Context/DarkModeContext";
const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <span className="logo">Admin Panel</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <li>
              <MdDashboardCustomize className="icons" />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to={"/users"} style={{ textDecoration: "none" }}>
            <li>
              <RiMapPinUserFill className="icons" />
              <span> Users</span>
            </li>
          </Link>
          <Link to={"/products"} style={{ textDecoration: "none" }}>
            <li>
              <FaProductHunt className="icons" />
              <span>Products</span>
            </li>
          </Link>
          <li>
            <MdShoppingCart className="icons" />
            <span> Orders</span>
          </li>
          <li>
            <TbTruckDelivery className="icons" />
            <span> Delivery</span>
          </li>
          <p className="title">USEFUL</p>

          <li>
            <MdQueryStats className="icons" />
            <span> Stats</span>
          </li>
          <li>
            <MdNotificationAdd className="icons" />
            <span> Notification</span>
          </li>
          <p className="title">SERVICES</p>

          <li>
            <GrSystem className="icons" />
            <span> System Health</span>
          </li>
          <li>
            <SiLogstash className="icons" />
            <span> Logs</span>
          </li>
          <p className="title">USERS</p>

          <li>
            <MdSettings className="icons" />
            <span> Setting</span>
          </li>
          <li>
            <CgProfile className="icons" />
            <span> Profile</span>
          </li>
          <li>
            <FiLogOut className="icons" />
            <span> Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOptions"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOptions"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
