import React from "react";
import Typography from "@mui/material/Typography";

const Typography_01 = ({ parrafo }) => {
  return (
    <Typography
      sx={{
        // border:1,
        // letterSpacing: 1,
        fontFamily: "Baloo 2",
        display: "flex",
        // color: "#bd472a",
        // fontWeight: "bold",
        // justifyContent: "left",
        // pl: "10%",
        fontSize:18,
            color: "#505050",
            my: 2,
        // ml:"20%"
      }}
    >
      {parrafo}
    </Typography>
  );
};

export default Typography_01;
