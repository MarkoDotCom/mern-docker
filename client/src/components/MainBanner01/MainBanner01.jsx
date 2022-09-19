import * as React from "react";
import Image02 from "./Image02.jpg";
import Image from "mui-image";
import { Box } from "@mui/material";

const MainBanner01 = (props) => {
  return (
    <Box
      sx={{
        // display: "flex",
        backgroundColor: "rgb(0, 0, 0)",
        backgroundImage: `url(${Image02})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
        width: "100vw",
        // opacity: 0.3,
        position: "absolute",
        filter: "blur(5px)",
        // m: ,
        // p: 3,
        // display:"flex",
      }}
    >
      {props.children}
    </Box>
  );
};

export default MainBanner01;
