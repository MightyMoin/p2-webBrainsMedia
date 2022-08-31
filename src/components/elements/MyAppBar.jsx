import React from "react";
import { Box, Grid } from "@mui/material";
import SlackLogo from "./SlackLogo";
import SearchIcon from "@mui/icons-material/Search";
import "../styles/navBar.css";

const MyAppBar = () => {
  return (
    <Box position={"sticky"} paddingTop={3}>
      <Grid container>
        <Grid item xs={1}></Grid>
        <Grid alignItems="center" item xs={10}>
          <Grid
            display={"inline-flex"}
            container
            width="100%"
            alignItems="center"
            position="relative"
          >
            <Grid item xs={1}>
              <SlackLogo />
            </Grid>
            <Grid item xs={5}>
              <Box fontWeight={5}>
                <ul
                  className="nav-ul"
                  style={{
                    listStyleType: "none",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <li>Product</li>
                  <li>Solution</li>
                  <li>Enterprise</li>
                  <li>Resources</li>
                  <li>Pricing</li>
                </ul>
              </Box>
            </Grid>
            <Grid display={"flex"} justifyContent="right" item xs={1}>
              <SearchIcon />
            </Grid>
            <Grid item xs={1}>
              <ul
                className="nav-ul"
                style={{
                  listStyleType: "none",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <li>Sign In</li>
              </ul>
            </Grid>
            <Grid item xs={4}>
              <div className="nav-buttons">
                <button>TALK TO SALES</button>
                <button>TRY FOR FREE</button>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </Box>
  );
};

export default MyAppBar;
