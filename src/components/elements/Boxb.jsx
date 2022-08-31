import { Box, Grid } from "@mui/material";
import React from "react";
import "../styles/VideoAndContent.css";
import EastIcon from "@mui/icons-material/East";

function Boxb() {
  return (
    <Box pt={10}>
      <Grid container height="100%" spacing={5} width="100vw">
        <Grid item xs={12} lg={6}>
          <Box width="100%">
            <a href="https://youtu.be/IDrUzXubiiQ">
              <video
                width={"100%"}
                height={"100%"}
                data-js-id="connectedness"
                aria-describedby="connectedness"
                autoPlay
                loop
                muted
                controls
                style={{
                  borderTopRightRadius: "500px",
                  borderBottomRightRadius: "500px",
                }}
              >
                <source
                  src="https://a.slack-edge.com/93eaeb3/marketing/img/features/customer-awards/customer-awards-tmobile-quote-610x305@2x.mp4"
                  type="video/webm"
                />
              </video>
            </a>
          </Box>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Box>
            <Box fontStyle={"italic"} fontSize={"28px"}>
              'We were able to create a large virtual network of employees that
              can communicate as though they are together. There was a lot of
              disruption in terms of where we worked, but in terms of how we
              worked -very little disruption'
            </Box>
            <p className="author-in-content">
              <span>Mark Smith</span>
              <br />
              Senior Technical Product Manager, T-Mobile
            </p>
            <a
              style={{
                display: "inline-flex",
                justifyContent: "center",
                color: "#1263A3",
              }}
              href="https://slack.com/intl/en-in/customer-stories"
            >
              See more about the custom stories <EastIcon />
            </a>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Boxb;
