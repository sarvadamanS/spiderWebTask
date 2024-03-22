import { Box, Card, Typography, Grid } from "@mui/material";
const Header = () => {
  return (
    <>
      <Box
        sx={{
          mt: "5vh",
          ml: "40%",
          // display: "flex",
          width: "400px",
          // justifyContent: "space-between",
          // gap: "20px",
        }}
      >
        <Grid container spacing={2} sx={{ padding: "10px" }}>
          <Grid item xs={2}>
            <img src="/Notification.png" height="90px" width="90px"></img>
          </Grid>
          <Grid item xs={2}>
            <img src="/Info Circle.png" height="90px" width="90px"></img>
          </Grid>
          <Grid item xs={6}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "left",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  color: "rgba(255, 255, 255, 1)",

                  padding: "5px",
                  borderRadius: "8px",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  Hi, <span style={{ color: "#35edc5" }}>Sarvadaman Singh</span>
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  Welcome back
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid item xs={2}>
            <img
              src="/madrid.jpeg"
              height="64px"
              width="64px"
              style={{
                border: "2px solid rgba(209, 117, 182, 1)",
                boxShadow: "0px 0px 40px 0px rgba(255, 0, 255, 0.3)",
                borderRadius: "50%",
              }}
            ></img>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default Header;
