import {
  Table,
  TableCell,
  Paper,
  TableRow,
  TableHead,
  TableContainer,
  TableBody,
} from "@mui/material";
import React from "react";

const Tables = () => {
  const rows = [
    {
      id: 112233,
      product: "Acer",
      customer: " Apurv",
      date: "1 March",
      amount: 1929,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 112233,
      product: "Acer",
      customer: " Apurv",
      date: "1 March",
      amount: 192943,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 112243,
      product: "Apple",
      customer: " Apurv",
      date: "1 March",
      amount: 192921,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 1122563,
      product: "Dell",
      customer: " Apurv",
      date: "1 March",
      amount: 192921,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 11223233,
      product: "Asus",
      customer: " Apurv",
      date: "1 March",
      amount: 1921239,
      method: "Cash on Delivery",
      status: "Approved",
    },
  ];

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Tables;
