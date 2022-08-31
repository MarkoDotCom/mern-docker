import React from "react";
import Typography from "@mui/material/Typography";

const Typography_01 = ({ parrafo }) => {
  return (
    <Typography
      sx={{
        fontFamily: "Baloo 2",
        display: "flex",
        fontSize: 18,
        color: "#505050",
        my: 2,
        px: "5%",
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
