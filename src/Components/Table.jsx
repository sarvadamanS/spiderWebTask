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
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import { visuallyHidden } from "@mui/utils";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { Button } from "@mui/material";

function createData(id, name, startDate, endDate, clientName, venueName) {
  return {
    id,
    name,
    startDate,
    endDate,
    clientName,
    venueName,
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

const headCells = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Event Name",
  },
  {
    id: "startDate",
    numeric: true,
    disablePadding: false,
    label: "Event Start",
  },
  {
    id: "endDate",
    numeric: true,
    disablePadding: false,
    label: "Event End",
  },
  {
    id: "clientName",
    numeric: true,
    disablePadding: false,
    label: "Client Name",
  },
  {
    id: "venueName",
    numeric: true,
    disablePadding: false,
    label: "Venue",
  },
];

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead
      sx={{
        backgroundColor: "rgba(209, 117, 182, 1)",
        color: "rgba(255, 255, 255, 1)",
      }}
    >
      <TableRow>
        <TableCell>
          {/* <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            // checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }} */}
          {/* /> */}
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{
              color: "rgba(255, 255, 255, 1)",
            }}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
              sx={{
                color: "rgba(255, 255, 255, 1)",
              }}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
  const { numSelected } = props;
  const [focused, setFocused] = useState(false);
  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h4"
          id="tableTitle"
          component="div"
        >
          Event Requests
        </Typography>
      )}

      {/* {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )} */}
      <TextField
        id="input-with-icon-textfield"
        // label="TextField"
        size="small"
        placeholder="Search here"
        InputProps={{
          style: { color: "rgba(255, 255, 255, 1)" },
          startAdornment: (
            <InputAdornment
              position="start"
              sx={{
                color: "rgba(255, 255, 255, 1)",
              }}
            >
              <SearchIcon
                sx={{
                  color: "rgba(255, 255, 255, 1)",
                  border: "none",
                }}
              />
            </InputAdornment>
          ),
        }}
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.01)",
          color: "rgba(255, 255, 255, 1)",
          borderRadius: "8px",
          boxShadow: "0px 0px 30px 0px rgba(209, 117, 182, 0.2)",
          border: "2px solid rgba(255, 255, 255, 1)",
          "& input:focus": {
            border: "1px solid rgba(255, 255, 255, 1)",
          },
        }}
        focused={focused}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      <img src="/Frame 39235.png" height="64px" width="64px"></img>
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function EnhancedTable(props) {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("startDate");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

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
    // console.log(rows[id - 1]);
    props.triggerDataHandler(rows[id - 1]);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
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
    <Box
      sx={{
        width: "100%",
        // border: "3px solid rgba(209, 117, 182, 1)",
        // width: "inherit",
        // backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <Paper
        sx={{
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          color: "rgba(255, 255, 255, 1) ",
        }}
      >
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750, color: "rgba(255, 255, 255, 1)" }}
            aria-labelledby="tableTitle"
            size="medium"
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                // const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.id)}
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
                      {row.startDate}
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{ color: "rgba(255, 255, 255, 1)" }}
                    >
                      {row.endDate}
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{ color: "rgba(255, 255, 255, 1)" }}
                    >
                      {row.clientName}
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{ color: "rgba(255, 255, 255, 1)" }}
                    >
                      {row.venueName}
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
      {/* <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      /> */}
    </Box>
  );
}
