import * as React from "react";
import Image02 from "./Image02.jpg";
import Image from "mui-image";
import { Box } from "@mui/material";

const MainBanner01 = (props) => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${Image02})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
        width: "100vw",
        // opacity: 0.8  ,
        position: "fixed",
        filter: "blur(20px)",
        display:"flex",
        transform: "scale(1.1)"
      }}
    >
      {props.children}
    </Box>
  );
};

export default MainBanner01;
