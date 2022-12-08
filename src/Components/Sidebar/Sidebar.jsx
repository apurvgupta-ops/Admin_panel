import React from "react";
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
import "./sidebar.scss";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Admin Panel</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>

          <li>
            <MdDashboardCustomize className="icons" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>

          <li>
            <RiMapPinUserFill className="icons" />
            <span> Users</span>
          </li>
          <li>
            <FaProductHunt className="icons" />
            <span>Products</span>
          </li>
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
        <div className="colorOptions"></div>
        <div className="colorOptions"></div>
        <div className="colorOptions"></div>
      </div>
    </div>
  );
};

export default Sidebar;
