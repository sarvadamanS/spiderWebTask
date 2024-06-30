import * as React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import { visuallyHidden } from "@mui/utils";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

function createData(id, name, calories, fat, carbs, protein) {
  return {
    id,
    name,
    calories,
    fat,
    carbs,
    protein,
  };
}
const rows = [
  createData(
    1,
    "Birthday Party",
    "2024-03-20",
    "2024-03-21",
    "John Doe",
    "XYZ Hall"
  ),
  createData(
    2,
    "Conference",
    "2024-04-15",
    "2024-04-17",
    "XYZ Corp",
    "Conference Center"
  ),
  createData(
    3,
    "Wedding",
    "2024-05-10",
    "2024-05-12",
    "Jane Smith",
    "ABC Gardens"
  ),
  createData(
    4,
    "Business Meeting",
    "2024-06-05",
    "2024-06-06",
    "Acme Inc",
    "Boardroom"
  ),
  createData(
    5,
    "Product Launch",
    "2024-07-01",
    "2024-07-02",
    "Tech Innovations",
    "Convention Center"
  ),
  createData(
    6,
    "Seminar",
    "2024-08-18",
    "2024-08-19",
    "Learning Institute",
    "Auditorium"
  ),
  createData(
    7,
    "Music Concert",
    "2024-09-25",
    "2024-09-26",
    "Entertainment LLC",
    "Stadium"
  ),
  createData(
    8,
    "Charity Gala",
    "2024-10-12",
    "2024-10-13",
    "Hope Foundation",
    "Hotel Ballroom"
  ),
  createData(
    9,
    "Trade Show",
    "2024-11-08",
    "2024-11-09",
    "Global Expo",
    "Exhibition Center"
  ),
  createData(
    10,
    "Art Exhibition",
    "2024-12-03",
    "2024-12-04",
    "Creative Arts",
    "Gallery"
  ),
  createData(
    11,
    "Sports Tournament",
    "2025-01-20",
    "2025-01-21",
    "Sports Club",
    "Sports Complex"
  ),
  createData(
    12,
    "Fundraising Event",
    "2025-02-14",
    "2025-02-15",
    "Community Services",
    "Community Center"
  ),
  createData(
    13,
    "Networking Mixer",
    "2025-03-10",
    "2025-03-11",
    "Business Network",
    "Restaurant"
  ),
  createData(
    14,
    "Fashion Show",
    "2025-04-05",
    "2025-04-06",
    "Fashion House",
    "Catwalk Venue"
  ),
  createData(
    15,
    "Tech Symposium",
    "2025-05-22",
    "2025-05-23",
    "Tech Association",
    "Convention Center"
  ),
  createData(
    16,
    "Holiday Party",
    "2025-06-18",
    "2025-06-19",
    "Company X",
    "Club House"
  ),
  createData(
    17,
    "Health Fair",
    "2025-07-15",
    "2025-07-16",
    "Wellness Center",
    "Community Park"
  ),
  createData(
    18,
    "Film Premiere",
    "2025-08-10",
    "2025-08-11",
    "Film Studios",
    "Movie Theater"
  ),
  createData(
    19,
    "Food Festival",
    "2025-09-05",
    "2025-09-06",
    "Culinary Institute",
    "Market Square"
  ),
  createData(
    20,
    "Book Launch",
    "2025-10-30",
    "2025-10-31",
    "Author's Guild",
    "Bookstore"
  ),
  createData(
    21,
    "Science Fair",
    "2025-11-25",
    "2025-11-26",
    "STEM Education",
    "School Gym"
  ),
  createData(
    22,
    "Fitness Expo",
    "2025-12-20",
    "2025-12-21",
    "Fitness Club",
    "Exhibition Center"
  ),
  createData(
    23,
    "Travel Expo",
    "2026-01-15",
    "2026-01-16",
    "Travel Agency",
    "Convention Center"
  ),
  createData(
    24,
    "Gardening Workshop",
    "2026-02-10",
    "2026-02-11",
    "Garden Club",
    "Botanical Garden"
  ),
  createData(
    25,
    "Film Festival",
    "2026-03-05",
    "2026-03-06",
    "Film Society",
    "Movie Theater"
  ),
  createData(
    26,
    "Technology Summit",
    "2026-04-01",
    "2026-04-02",
    "Tech Council",
    "Convention Center"
  ),
];
function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const SmallTable = () => {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 5));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage]
  );

  return (
    <Paper
      sx={{
        paddingBottom: 2,
        width: "100%",
        height: "auto",
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        color: "rgba(255, 255, 255, 1) ",
        border: "1px solid rgba(209, 117, 182, 1)",
      }}
    >
      <TableContainer>
        <Table
          sx={{ minWidth: 750, color: "rgba(255, 255, 255, 1)" }}
          aria-labelledby="tableTitle"
          size="medium"
        >
          <TableBody>
            {visibleRows.map((row, index) => {
              // const isItemSelected = isSelected(row.id);
              const labelId = `enhanced-table-checkbox-${index}`;

              return (
                <TableRow
                  hover
                  // onClick={(event) => handleClick(event, row.id)}
                  // role="checkbox"
                  // aria-checked={isItemSelected}
                  tabIndex={-1}
                  key={row.id}
                  // selected={isItemSelected}
                  sx={{ cursor: "pointer" }}
                >
                  <TableCell>
                    {/* <Checkbox
                color="primary"
                // checked={isItemSelected}
                inputProps={{
                    "aria-labelledby": labelId,
                }}
            /> */}
                    <IconButton>
                      <RemoveRedEyeIcon
                        variant="outlined"
                        sx={{
                          color: "rgba(255, 255, 255, 1)",
                          transition: "color 0.3s ease",
                          "&:hover": {
                            color: "rgba(209, 117, 182, 1)",
                          },
                        }}
                      />
                    </IconButton>
                  </TableCell>
                  <TableCell
                    component="th"
                    id={labelId}
                    scope="row"
                    padding="none"
                    sx={{ color: "rgba(255, 255, 255, 1)" }}
                  >
                    {row.name}
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{ color: "rgba(255, 255, 255, 1)" }}
                  >
                    {row.calories}
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{ color: "rgba(255, 255, 255, 1)" }}
                  >
                    {row.fat}
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{ color: "rgba(255, 255, 255, 1)" }}
                  >
                    {row.carbs}
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{ color: "rgba(255, 255, 255, 1)" }}
                  >
                    {row.protein}
                  </TableCell>
                </TableRow>
              );
            })}
            {emptyRows > 0 && (
              <TableRow
                style={{
                  height: (dense ? 33 : 53) * emptyRows,
                }}
              >
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        sx={{ color: "rgba(255, 255, 255, 1)" }}
      />
    </Paper>
  );
};
export default SmallTable;
