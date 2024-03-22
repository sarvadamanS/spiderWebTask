import * as React from "react";
import { CssBaseline } from "@mui/material";
import Sidebar from "./Components/Sidebar";
import MainContent from "./Components/MainContent";
import Header from "./Components/Header";
import { EllipseOne, EllipseTwo } from "./Components/Ellipse";

import { createTheme, ThemeProvider } from "@mui/material/styles";

// Define your custom color
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Example primary color
    },
    white: {
      main: "#ffffff", // White color
    },
  },
});

function App() {
  return (
    <>
      {/* <CssBaseline> */}
      <ThemeProvider theme={theme}>
        <Header></Header>
        <EllipseOne />
        <EllipseTwo />
        <div
          style={{
            height: "auto",
            width: "auto",
            display: "inline-flex",
            gap: "20px",
            margin: "20px",
          }}
        >
          <Sidebar></Sidebar>
          <MainContent />
        </div>
      </ThemeProvider>
      {/* </CssBaseline> */}
    </>
  );
}

export default App;
