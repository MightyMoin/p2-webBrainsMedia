import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "../styles/VideoAndContent.css";
import GoogleSVG from "./GoogleSVG";

const Header = () => {
  return (
    <Box marginTop={10}>
      <Grid
        container
        minHeight="80%"
        width="100vw"
        overflow="hidden"
        paddingTop={4}
      >
        <Grid item md={1}></Grid>
        <Grid height="100%" item xs={12} md={6}>
          <Box width="100%" height="100%" className="header">
            <Box
              display="flex"
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"right"}
              width="100%"
              height="100%"
            >
              <h1 style={{ fontSize: "64px" }}>
                Great teamwork starts with a digital HQ
              </h1>
              <p className="content-after-video" style={{ fontWeight: 400 }}>
                <span>Slack is free to try</span> for as long as you like
              </p>
              <Box display={"flex"}>
                <div className="btn-email">
                  <span>Sign up with email address</span>
                </div>
                <div className="google-btn btn-header">
                  <div>
                    <GoogleSVG />
                  </div>
                  <span style={{ fontWeight: 100 }}>Sign up with Google</span>
                </div>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box height="100%">
            <video width="105%" autoPlay loop muted controls>
              <source
                src="https://a.slack-edge.com/9689dea/marketing/img/homepage/e2e-prospects/animations/webm/hero-product-ui.webm"
                type="video/webm"
              />
              <source
                src="https://a.slack-edge.com/9689dea/marketing/img/homepage/e2e-prospects/animations/mp4/hero-product-ui.mp4"
                type="video/mp4"
              />
            </video>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
