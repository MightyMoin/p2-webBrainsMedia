import { useTheme } from "@emotion/react";
import { Box } from "@mui/system";
import MyAppBar from "./../elements/MyAppBar";
import WomanWithLaptop from "../elements/WomanWithLaptop";
import ImagesInHeader from "../elements/ImagesInHeader";
import VideoAndContent1 from "../elements/VideoAndContent1";
import VideoAndContent2 from "../elements/VideoAndContent2";
import VideoAndContent3 from "../elements/VideoAndContent3";
import { Boxa } from "../elements/Boxa";
import React from "react";
import Boxb from "../elements/Boxb";
import { Cards } from "../elements/Cards";
import { Footer } from "../elements/Footer";

const LandingPage = () => {
  const theme = useTheme();

  return (
    <div>
      <Box bgcolor={theme.palette.primary.main}>
        <Box color="#fff" minHeight="70vh">
          <MyAppBar />
          <Box display={"flex"} alignItems="top" height="100%">
            <WomanWithLaptop />
          </Box>
        </Box>

        <Box bgcolor="#F5EDE5">
          <ImagesInHeader />
          <VideoAndContent1 />
          <VideoAndContent2 />
          <VideoAndContent3 />
        </Box>
        <Box bgcolor="#FFFFFF" pv={2} minHeight="100vh">
          <Boxa />
          <Boxb />
        </Box>
        <Box bgcolor="#F5EDE5" minHeight="70vh">
          <Cards />
        </Box>

        <Box bgcolor="#FFFFFF" minHeight="100vh">
          <Footer />
        </Box>
      </Box>
    </div>
  );
};

export default LandingPage;
