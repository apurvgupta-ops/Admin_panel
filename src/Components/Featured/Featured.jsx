import React from "react";
import "./featured.scss";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const Featured = () => {
  const percentage = 70;
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title"> Total Revenue</h1>
        <BsThreeDotsVertical />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar
            value={70}
            text={`70%`}
            styles={buildStyles({
              display: "flex",
              justifyContent: "center",
              alignItem: "center",
              pathTransitionDuration: 0.5,
              pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
              trailColor: "#d6d6d6",
              strokeWidth: "3",
              backgroundColor: "#3e98c7",
            })}
          />
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">Rs 1000</p>
        <p className="desc">
          Previous transactions processing. Last payments may not be included
        </p>

        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult positive">
              <MdKeyboardArrowUp />
              <div className="resultAmount">Rs 800</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult positive">
              <MdKeyboardArrowUp />

              <div className="resultAmount">Rs 800</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult negative">
              <MdKeyboardArrowDown />

              <div className="resultAmount">Rs 800</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
