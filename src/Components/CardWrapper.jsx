import { Box, Card } from "@mui/material";
import React, { Children } from "react";

const CardWrapper = ({ children }) => {
  return (
    <Box
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        border: "2px solid rgba(209, 117, 182, 1)",
        boxShadow: "0px 0px 30px 0px rgba(209, 117, 182, 0.2)",
        borderRadius: "16px",
        // padding: "20px",
      }}
    >
      {children}
    </Box>
  );
};
export default CardWrapper;
