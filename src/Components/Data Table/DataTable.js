import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { columns, rows } from "../../DataTableSource";
import "./dataTable.scss";
const DataTable = () => {
  const action = {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: () => {
      return (
        <div className={`cellAction`}>
          <button className="viewButton">View</button>
          <button className="deleteButton">Delete</button>
        </div>
      );
    },
  };

  return (
    <div style={{ height: "800px", width: "96%" }} className="datatable">
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
