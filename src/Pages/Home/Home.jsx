import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./home.scss";

const Home = () => {
  return (
    <div className="Home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
      </div>
    </div>
  );
};

export default Home;
