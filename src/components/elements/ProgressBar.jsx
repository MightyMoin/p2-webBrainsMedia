import { Box, LinearProgress } from "@mui/material";
import { useEffect, useState } from "react";

const useStyles = ((theme) => ({
  root: {
    background: "white",
    position: "-webkit-sticky",
    position: "sticky",
    top: 20,
    bottom: 20,
    paddingTop: "40px",
    paddingBottom: "40px",
    zIndex: 5,
  },
  details: {
    display: "flex",
  },
  progressWrapper: {
    marginTop: theme.spacing(2),
  },
  linearProgress: {
    height: 20,
  },
}));

export function ProgressBar(props) {
  const { profileDetail } = props;
  const classes = useStyles();
  const [completeness, setCompleteness] = useState(0);

  useEffect(() => {
    if (profileDetail) {
      setCompleteness(
        profileDetail.teamKeysTier1.split(",").filter((x) => {
          return x.length !== 0;
        }).length +
          profileDetail.teamKeysTier2.split(",").filter((x) => {
            return x.length != 0;
          }).length
      );
    }
  }, [profileDetail]);

  return (
    <Box className={classes.root}>
      <Box>
        {completeness > 8 ? (
          <div className={classes.progressWrapper}>
            <Box variant="h3" color="textSecondary">
              Team Selection Completeness: {completeness * 10 + 10}%
            </Box>
            <br />
            <br />
            <LinearProgress
              className={classes.linearProgress}
              value={completeness * 10 + 10}
              variant="determinate"
              position="fixed"
            />{" "}
          </div>
        ) : (
          <div className={classes.progressWrapper}>
            <Box variant="h3" color="textSecondary">
              Team Selection Completeness: {completeness * 10}%
            </Box>
            <br />
            <br />
            <LinearProgress
              className={classes.linearProgress}
              value={completeness * 10}
              variant="determinate"
              position="fixed"
            />
          </div>
        )}
      </Box>
    </Box>
  );
}

export default ProgressBar;
