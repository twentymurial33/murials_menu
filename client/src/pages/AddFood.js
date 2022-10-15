import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import { useQuery } from "react-query";
import axios from "axios";
import TableCell from "@mui/material/TableCell";
import Layout from "../components/Layout";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const rows = [
  ("Frozen yoghurt", 159, 6.0, 24, 4.0),
  ("Ice cream sandwich", 237, 9.0, 37, 4.3),
  ("Eclair", 262, 16.0, 24, 6.0),
  ("Cupcake", 305, 3.7, 67, 4.3),
  ("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function DenseTable() {
  const { isLoading, data, error } = useQuery(["food"], () =>
    axios("http://localhost:3000/api/food")
  );
  console.log(data);
  return (
    <>
      <Layout />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
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
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
