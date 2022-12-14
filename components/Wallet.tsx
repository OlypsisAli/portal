import React, { useState } from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";

const drawerBleeding = 30;

const Wallet = () => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  const Root = styled("div")(({ theme }) => ({
    height: "100%",
    backgroundColor: theme.palette.mode === "dark" ? grey[100] : grey[100],
  }));
  const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === "dark" ? "rgb(24, 24, 24)" : grey[800],
  }));
  const Puller = styled(Box)(({ theme }) => ({
    width: 30,
    height: 6,
    backgroundColor: theme.palette.mode === "dark" ? grey[300] : grey[900],
    borderRadius: 3,
    position: "absolute",
    top: 8,
    left: "calc(50% - 15px)",
  }));
  const container = window !== undefined ? () => document.body : undefined;
  return (
    <div>
      <Root>
        {/* <CssBaseline /> */}
        <Global
          styles={{
            ".MuiDrawer-root > .MuiPaper-root": {
              height: `calc(50% - ${drawerBleeding}px)`,
              overflow: "visible",
              // backgroundColor: "rgb(24, 24, 24)",
            },
          }}
        />
        {/* <Box sx={{ textAlign: "center", pt: 1 }}>
          <Button onClick={toggleDrawer(true)}>Open</Button>
        </Box> */}
        <SwipeableDrawer
          container={container}
          anchor="bottom"
          open={open}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
          swipeAreaWidth={drawerBleeding}
          disableSwipeToOpen={false}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <StyledBox
            sx={{
              position: "absolute",
              top: -drawerBleeding,
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              visibility: "visible",
              right: 0,
              left: 0,
            }}
          >
            <Puller />
            <Typography sx={{ p: 2, color: "text.secondary" }}></Typography>
          </StyledBox>
          <StyledBox
            sx={{
              px: 2,
              pb: 2,
              height: "100%",
              overflow: "auto",
            }}
          >
            <Skeleton variant="rectangular" height="100%" />
          </StyledBox>
        </SwipeableDrawer>
      </Root>
    </div>
  );
};

export default Wallet;
