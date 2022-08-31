import React from "react";
import {  Box, Grid } from "@mui/material";
import SlackLogo from "./SlackLogo";

const MyAppBar = () => {
  return (
    <Box position={'sticky'} paddingTop={4}>
      <Grid container>
        <Grid item xs={1}></Grid>
        <Grid alignItems="center" item xs={10}>
          <SlackLogo></SlackLogo>
          <Box display="inline-flex" height="100%" alignItems="center" paddingLeft={4} >
            <Grid container width="100%" alignItems="center" position="relative">
              <Grid alignItems="center" item xs={9}>
                a
              </Grid>
              <Grid item xs={3}>
                c
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </Box>
  );
};

export default MyAppBar;
