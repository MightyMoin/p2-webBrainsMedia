import React, { useEffect, useRef, useState } from "react";
import { Box, Grid } from "@mui/material";
import SlackLogo from "./SlackLogo";
import SearchIcon from "@mui/icons-material/Search";
import "../styles/navBar.css";

const MyAppBar = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Box zIndex={10000} paddingTop={2}>
      <Grid container>
        <Grid item xs={1}></Grid>
        <Grid
          alignItems="center"
          item
          xs={10}
          p={2}
          style={{
            borderRadius: 50,
            backgroundColor: offset > 5 ? "white" : "transparent",
            color: offset > 5 ? "black" : "white",
          }}
        >
          <Grid
            display={"inline-flex"}
            container
            width="100%"
            alignItems="center"
            position="relative"
          >
            <Grid item xs={1}>
              <SlackLogo offset={offset} />
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
              <div className={offset > 5 ? "nav-buttons2" : "nav-buttons"}>
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
