import React from "react";
import Chart from "../../Components/Charts/Chart";
import Featured from "../../Components/Featured/Featured";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Tables from "../../Components/Table/Table";
import Widget from "../../Components/Widgets/Widget";
import "./home.scss";

const Home = () => {
  return (
    <div className="Home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget />
        </div>
        <div className="charts">
          <Featured />
          <Chart />
        </div>
        <div className="listContainer">
          <div className="listTitle"> Last Transaction</div>
          <Tables />
        </div>
      </div>
    </div>
  );
};

export default Home;
