import React from "react";
import "./userlist.scss";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import DataTable from "../../Components/Data Table/DataTable";

const UserList = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <DataTable />
      </div>
    </div>
  );
};

export default UserList;
