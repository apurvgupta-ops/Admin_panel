import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./table.scss";
const Tables = () => {
  const rows = [
    {
      id: 112233,
      product: "Acer",
      customer: "Tom",
      date: "1 June",
      amount: 1929,
      method: "Online",
      status: "Approved",
    },
    {
      id: 112233,
      product: "Acer",
      customer: " John",
      date: "1 November",
      amount: 192943,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 112243,
      product: "Apple",
      customer: " Virat",
      date: "16 March",
      amount: 192921,
      method: "Online",
      status: "Pending",
    },
    {
      id: 1122563,
      product: "Dell",
      customer: "Rohit",
      date: "1 March",
      amount: 192921,
      method: "Online",
      status: "Declined",
    },
    {
      id: 11223233,
      product: "Asus",
      customer: " Apurv",
      date: "12 March",
      amount: 1921239,
      method: "Cash on Delivery",
      status: "Pending",
    },
  ];

  return (
    <>
      <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tablecell">Id</TableCell>
              <TableCell className="tablecell">Products</TableCell>
              <TableCell className="tablecell">Customer</TableCell>
              <TableCell className="tablecell">Date</TableCell>
              <TableCell className="tablecell">Amount</TableCell>
              <TableCell className="tablecell">Method</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="tablecell">{row.id}</TableCell>
                <TableCell className="tablecell">{row.product}</TableCell>
                <TableCell className="tablecell">{row.customer}</TableCell>
                <TableCell className="tablecell">{row.date}</TableCell>
                <TableCell className="tablecell">{row.amount}</TableCell>
                <TableCell className="tablecell">{row.method}</TableCell>
                <TableCell className={`status ${row.status}`}>
                  {row.status}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Tables;
