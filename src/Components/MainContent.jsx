import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import CardWrapper from "./CardWrapper";
import EnhancedTable from "./Table";
import EventView from "./EventView";

const MainContent = () => {
  let [toggleView, setToggleView] = useState(true);
  let [tableDate, setTableData] = useState(true);
  const dataHandlerForView = (data) => {
    setToggleView(false);
    setTableData(data);
  };
  const goBackHandler = (data) => {
    setToggleView(true);
  };
  return (
    <CardWrapper>
      <Box
        sx={{
          // height: "80vh",
          width: "70vw",
        }}
      >
        {toggleView ? (
          <EnhancedTable
            tablePagNo={10}
            triggerDataHandler={dataHandlerForView}
          />
        ) : (
          <EventView
            tablePagNo={5}
            dataForTable={tableDate}
            triggerGoBack={goBackHandler}
          ></EventView>
        )}
      </Box>
    </CardWrapper>
  );
};
export default MainContent;
