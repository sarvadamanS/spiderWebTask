import { useState } from "react";
import { Paper, Typography, Grid, Chip, Table, Button } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";

import "./EventView.css";
import EnhancedTable from "./Table";
import SmallTable from "./SmallTable";
const tabs = [
  { value: "one", label: "Event Details" },
  { value: "two", label: "Assign Coordinator/Coordinator" },
  { value: "three", label: "Session Management" },
  { value: "four", label: "Generate SOW" },
];
const listItems = ["a", "b", "c", "d", "e"]; // Add more items as needed
const EventView = (props) => {
  const [value, setValue] = useState("one");
  const [age, setAge] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(1);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeSelect = (event) => {
    setAge(event.target.value);
  };
  const handlerClickSave = () => {
    props.triggerGoBack();
  };

  return (
    <>
      <Paper
        sx={{
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          color: "rgba(255, 255, 255, 1) ",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            // alignItems: "center",
            color: "rgba(255, 255, 255, 1)",

            padding: "10px",
            borderRadius: "8px",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
            }}
          >
            {props.dataForTable.name}{" "}
            <span style={{ fontSize: "1rem" }}>
              ({props.dataForTable.venueName})
            </span>
          </Typography>
        </div>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="white"
          indicatorColor="white"
          aria-label="secondary tabs example"
          sx={{
            m: 2,
            border: "2px solid rgba(209, 117, 182, 1)",
            width: "80%",
            borderRadius: "8px",
          }}
        >
          {tabs.map((tab, index) => (
            <Tab
              key={index}
              value={tab.value}
              label={tab.label}
              sx={{
                width: "25%",
                fontWeight: "400",
                borderLeft: index !== 0 && "2px solid rgba(209, 117, 182, 1)",
                borderRight:
                  index !== tabs.length - 1 &&
                  "2px solid rgba(209, 117, 182, 1)",
                fontSize: "0.8rem",
                backgroundColor:
                  value === tab.value ? "rgba(209, 117, 182, 1)" : "",
                ...(value === tab.value && { fontWeight: "bold" }), // Apply bold font to active tab
                color:
                  value === tab.value
                    ? "rgba(255, 255, 255, 1)"
                    : "rgba(209, 117, 182, 1)",
              }}
            />
          ))}
        </Tabs>
        <Grid container spacing={2} sx={{ padding: "10px" }}>
          <Grid item xs={6}>
            <Typography
              variant="h6"
              sx={{
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
                padding: "10px",
              }}
            >
              Assign Coordinators{" "}
              <span style={{ fontSize: "1rem" }}>(Venue Details)</span>
            </Typography>
            <FormControl fullWidth>
              <InputLabel
                id="demo-simple-select-label"
                style={{ color: "white" }}
              >
                Search Coordinator
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChangeSelect}
                sx={{
                  height: "40px",
                  border: "2px solid white",
                  my: "10px",
                  "& .MuiSelect-icon": {
                    color: "white",
                  },
                }}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <Typography
              variant="body1"
              sx={{
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
                marginy: "10px",
                color: "rgba(209, 117, 182, 1)",
                fontWeight: "400",
                textAlign: "left",
              }}
            >
              Add New Contractor
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography
              variant="h6"
              sx={{
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
                padding: "10px",
              }}
            >
              {props.dataForTable.name}{" "}
              <span style={{ fontSize: "1rem" }}>
                ({props.dataForTable.venueName})
              </span>
            </Typography>
            <Chip
              label={`Start date: ${props.dataForTable.startDate}         End Date: ${props.dataForTable.endDate}`}
              variant="outlined"
              sx={{
                borderRadius: "3px",
                border: "1px solid rgba(209, 117, 182, 1)",
                color: "rgba(255, 255, 255, 1)",
                my: "10px",
                width: "100%",
                "& .MuiChip-label": {
                  textAlign: "left", // Align text to the left
                },
              }}
            ></Chip>
            <Chip
              label={`Start date: ${
                props.dataForTable.startDate + "        "
              }   End Date: ${props.dataForTable.endDate}`}
              variant="outlined"
              sx={{
                borderRadius: "3px",
                border: "1px solid rgba(209, 117, 182, 1)",
                color: "rgba(255, 255, 255, 1)",
                width: "100%",
                my: "10px",
                "& .MuiChip-label": {
                  textAlign: "left", // Align text to the left
                },
              }}
            ></Chip>
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ padding: "10px" }}>
          <Grid item xs={3}>
            <Typography
              variant="h6"
              sx={{
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
                padding: "10px",
              }}
            >
              Assign Contractors
            </Typography>
            <List
              component="nav"
              aria-label="main mailbox folders"
              sx={{
                backgroundColor: "rgba(0, 0, 0, 1)",
                border: "1px solid rgba(209, 117, 182, 1)",
                borderRadius: "12px",
              }}
            >
              {/* Map over the listItems array to render list items dynamically */}
              {listItems.map((item, index) => (
                <ListItemButton
                  key={index}
                  selected={selectedIndex === index}
                  onClick={(event) => handleListItemClick(event, index)}
                  className={selectedIndex === index ? "selected-link" : ""}
                  sx={{
                    // backgroundColor: selectedIndex === index ? "pink" : "green",
                    border: "1px solid rgba(209, 117, 182, 1)",
                    borderRadius: "12px",
                    color: "rgba(255, 255, 255, 1)",
                    mt: 2,
                    mx: 2,
                    ":active": { backgroundColor: "rgba(209, 117, 182, 1)" },
                    // ":hover": { backgroundColor: "rgba(209, 117, 182, 1)" },
                    ":focus": { backgroundColor: "rgba(209, 117, 182, 1)" },
                  }}
                >
                  <ListItemText primary={"Meeting room " + (index + 1)} />
                  <img src="/Star 2.png" height="32px" width="32px"></img>
                  <ListItemText
                    primary={"12 positions "}
                    sx={{
                      color: "rgba(209, 117, 182, 1) ",
                    }}
                  />
                </ListItemButton>
              ))}
            </List>
          </Grid>
          <Grid item xs={9}>
            <SmallTable></SmallTable>
          </Grid>
        </Grid>
        <Button
          variant="contained"
          onClick={() => {
            handlerClickSave();
          }}
          sx={{
            mb: 2,
            ml: "50%",
            boxShadow: "0px 30px 80px 0px rgba(255, 0, 255, 0.3)",
            backgroundColor: "rgba(216, 90, 216, 1)",
            "&:hover": {
              boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.6) inset",
              backgroundColor: "rgba(255, 0, 255, 0.5)",
            },
          }}
        >
          Save Edits
        </Button>
      </Paper>
    </>
  );
};

export default EventView;
