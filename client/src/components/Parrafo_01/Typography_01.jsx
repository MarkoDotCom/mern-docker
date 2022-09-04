import React from "react";
import Typography from "@mui/material/Typography";

const Typography_01 = ({ parrafo }) => {
  return (
    <Typography
    align="justify"
      sx={{
        fontFamily: "Baloo 2",
        display: "flex",
        fontSize: 20,
        color: "#505050",
        my: 2,
        px: "5%",
          // lineHeight: "100%"
        // align:"justify"
        // border:1,
        // letterSpacing: 1,
        // color: "#bd472a",
        // fontWeight: "bold",
        // justifyContent: "left",
        // pl: "10%",
        // ml:"20%"
      }}
    >
      {parrafo}
    </Typography>
  );
};

export default Typography_01;
