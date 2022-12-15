import React, { useEffect, useState } from "react";
import Charts from "../../Components/Charts/Chart";
import Tabels from "../../Components/Table/Table";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import "./singleUserDetails.scss";
import { db } from "../../FirebaseConfig";
import { collection, doc, getDoc, onSnapshot } from "firebase/firestore";
import { useParams } from "react-router-dom";

const SingleUserDetails = () => {
  const { userId } = useParams();
  // console.log(userId);
  const [data, setData] = useState();

  useEffect(() => {
    const getUser = async () => {
      const user = await getDoc(doc(db, "users", userId));
      // console.log(data.data());
      if (user.exists()) {
        setData(user.data());
      } else {
        console.log("User not available");
      }
    };
    getUser();
  }, []);

  console.log(data);
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src={data?.img} alt="" className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">{data?.displayname}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{data?.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">{data?.phone}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">{data?.address}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">{data?.country}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Charts aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <Tabels />
        </div>
      </div>
    </div>
  );
};

export default SingleUserDetails;
