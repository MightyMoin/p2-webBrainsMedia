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
        <Box color="#fff" height="60vh">
          <MyAppBar />
          <WomanWithLaptop />
        </Box>
        <Box bgcolor="#f4ede4" height="160vh">
          <ImagesInHeader />
          <VideoAndContent1 />
          <VideoAndContent2 />
          <VideoAndContent3 />
        </Box>
        <Box bgcolor="#FFFFFF" height="100vh">
          <Boxa />
          <Boxb />
        </Box>
        <Box bgcolor="#f4ede4" height="70vh">
          <Cards />
        </Box>

        <Box bgcolor="#FFFFFF" height="100vh">
          <Footer />
        </Box>
      </Box>
    </div>
  );
};

export default LandingPage;
