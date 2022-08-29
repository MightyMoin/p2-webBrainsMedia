import { useTheme } from "@emotion/react";
import { Box } from "@mui/system";
import MyAppBar from "./../elements/MyAppBar";
import React from "react";

const LandingPage = () => {
  const theme = useTheme();

  return (
    <Box color="#fff" bgcolor={theme.palette.primary.main} width="100vw" height="100vh">
      <MyAppBar />
    </Box>
  );
};

export default LandingPage;
