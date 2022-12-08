import React from "react";
import { GrOrderedList } from "react-icons/gr";
import {
  MdAccountBalance,
  MdKeyboardArrowUp,
  MdPersonOutline,
} from "react-icons/md";
import { RiMoneyEuroBoxFill } from "react-icons/ri";
import "./widgets.scss";

const Widget = ({ type }) => {
  const amount = 1200;
  const percentage = 20;

  //WAY 1
  //   let data;
  //   switch (type) {
  //     case "users":
  //       data = {
  //         title: "USERS",
  //         isMoney: false,
  //         link: "See all users",
  //         icon: <MdPersonOutline className="icon" />,
  //       };
  //       break;
  //     case "orders":
  //       data = {
  //         title: "ORDERS",
  //         isMoney: false,
  //         link: "See all orders",
  //         icon: <GrOrderedList className="icon" />,
  //       };
  //       break;

  //     case "earning":
  //       data = {
  //         title: "EARNING",
  //         isMoney: true,
  //         link: "See earning",
  //         icon: <RiMoneyEuroBoxFill className="icon" />,
  //       };
  //       break;
  //     case "balance":
  //       data = {
  //         title: "BALANCE",
  //         isMoney: true,
  //         link: "See Balance",
  //         icon: <MdAccountBalance className="icon" />,
  //       };
  //       break;

  //     default:
  //       break;
  //   }

  //WAY 2;
  const data = [
    {
      title: "USERS",
      icon: (
        <MdPersonOutline
          className="icon"
          style={{
            backgroundColor: " rgba(255, 0, 0, 0.2)",
            color: "crimson",
          }}
        />
      ),
      isMoney: false,
      link: "See all users",
    },
    {
      title: "ORDERS",
      icon: (
        <GrOrderedList
          className="icon"
          style={{
            backgroundColor: " rgba(128, 165, 32, 0.2)",
            color: "goldenrod",
          }}
        />
      ),
      isMoney: false,
      link: "See all orders",
    },

    {
      title: "EARNING",
      icon: (
        <RiMoneyEuroBoxFill
          className="icon"
          style={{
            backgroundColor: " rgba(0, 128,0, 0.2)",
            color: "green",
          }}
        />
      ),
      isMoney: true,
      link: "View net earning",
    },

    {
      title: "BALANCE",
      icon: (
        <MdAccountBalance
          className="icon"
          style={{
            backgroundColor: " rgba(128, 0, 128, 0.2)",
            color: "purple",
          }}
        />
      ),
      isMoney: true,
      link: "See Balance",
    },
  ];

  return (
    <>
      {data?.map((item) => (
        <div className="widget">
          <div className="left">
            <span className="title">{item.title}</span>
            <span className="counter">
              {item.isMoney && "Rs"} {amount}{" "}
            </span>
            <span className="link">{item.link}</span>
          </div>

          <div className="right">
            <div className="percentage positive">
              <MdKeyboardArrowUp />
              {percentage}
            </div>
            {item.icon}
          </div>
        </div>
      ))}
    </>
  );
};

export default Widget;
