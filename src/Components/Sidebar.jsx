import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import CardWrapper from "./CardWrapper";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { TreeView } from "@mui/x-tree-view/TreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";
import "./Sidebar.css";

const Sidebar = () => {
  let [toggleIcon, setToggleIcon] = useState(true);
  const toggleExpandIcon = (e) => {
    setToggleIcon(!toggleIcon);
  };
  return (
    <CardWrapper>
      <Box
        sx={{
          height: "80vh",
          width: "20vw",
          color: "rgba(209, 117, 182, 1)",
        }}
      >
        <TreeView
          aria-label="file system navigator"
          onNodeToggle={toggleExpandIcon}
        >
          <TreeItem
            nodeId="1"
            label={
              <div style={{ display: "flex", alignItems: "center" }}>
                <span style={{ marginRight: "8px" }}>Events</span>
                {toggleIcon ? <ExpandMoreIcon /> : <ChevronRightIcon />}
              </div>
            }
          >
            <TreeItem nodeId="2" label="New Requests" />
            <TreeItem nodeId="3" label="Estimate" />
            <TreeItem nodeId="4" label="Events" />
            <TreeItem nodeId="6" label="Partial Requests" />
          </TreeItem>
          <TreeItem nodeId="7" label="Postions"></TreeItem>
          <TreeItem nodeId="8" label="Contractors"></TreeItem>
          <TreeItem
            nodeId="9"
            label={
              <div style={{ display: "flex", alignItems: "center" }}>
                <span style={{ marginRight: "8px" }}>Users</span>
                {toggleIcon ? <ExpandMoreIcon /> : <ChevronRightIcon />}
              </div>
            }
          >
            <TreeItem nodeId="10" label="Admin" />
            <TreeItem nodeId="11" label="Clients">
              <TreeItem nodeId="12" label="Coordinators" />
            </TreeItem>
            <TreeItem nodeId="13" label="Profiles"></TreeItem>
          </TreeItem>
        </TreeView>
      </Box>
    </CardWrapper>
  );
};
export default Sidebar;
