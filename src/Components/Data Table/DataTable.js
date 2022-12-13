import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { columns, rows } from "../../DataTableSource";
import { Link } from "react-router-dom";
import "./dataTable.scss";
const DataTable = () => {
  const action = {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: () => {
      return (
        <div className={`cellAction`}>
          <Link to={"/users/12"}>
            <button className="viewButton">View</button>
          </Link>
          <button className="deleteButton">Delete</button>
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
        rows={rows}
        columns={columns.concat(action)}
        // pageSize={5}
        // rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;
