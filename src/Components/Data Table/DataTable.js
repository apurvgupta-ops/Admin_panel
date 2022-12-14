import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { columns, rows } from "../../DataTableSource";
import { Link } from "react-router-dom";
import {
  collection,
  getDocs,
  doc,
  deleteDoc,
  onSnapshot,
} from "firebase/firestore";
import "./dataTable.scss";
import { db } from "../../FirebaseConfig";
const DataTable = () => {
  const [data, setData] = useState([]);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "users", id));
      setData(data.filter((item) => item.id !== id));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    
    //NOT REALTIME
    // let user = [];
    // const getUsers = async () => {
    //   const querySnapshot = await getDocs(collection(db, "users"));
    //   querySnapshot.forEach((doc) => {
    //     user.push({ id: doc.id, ...doc.data() });
    //     setData(user);
    //     // console.log(doc.id, " => ", doc.data());
    //   });
    //   console.log(user);
    // };
    // getUsers();

    //REALTIME
    const getUsers = onSnapshot(collection(db, "users"), (snapshot) => {
      let user = [];
      snapshot.docs.forEach((doc) => {
        user.push({ id: doc.id, ...doc.data() });
      });
      setData(user);
    });

    return () => {
      getUsers();
    };
  }, []);
  const action = {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      // console.log(params);
      return (
        <div className={`cellAction`}>
          <Link to={`/users/${params.id}`}>
            <button className="viewButton">View</button>
          </Link>
          <button
            className="deleteButton"
            onClick={() => handleDelete(params.row.id)}
          >
            Delete
          </button>
        </div>
      );
    },
  };

  return (
    <div style={{ height: "800px", width: "96%" }} className="datatable">
      <div className="adduser">
        <Link to={"/users/add"}>
          <button>Add User</button>
        </Link>
      </div>
      <DataGrid
        rows={data}
        columns={columns.concat(action)}
        // pageSize={5}
        // rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;
