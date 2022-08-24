import React from "react";
import Typography from "@mui/material/Typography";

const Typography_01 = ({ parrafo }) => {
  return (
      <>
      <Typography
        sx={{
          // border: 1,
          letterSpacing: 0,
          fontFamily: "Baloo 2",
          display: "flex",
          color: "#c5624a",
          // justifyContent: "center",
          pl: "10%",
        }}
      >
        {parrafo.tag}:
      </Typography>

      <Typography
        // // xs={6}
        // variant="h6"
        sx={{
          // border:1,
          letterSpacing: 1,
          fontFamily: "Baloo 2",
          display: "flex",
          color: "#bd472a",
          fontWeight: "bold",
          // justifyContent: "left",
          pl:"15%"
          // ml:"20%"
        }}
      >
        {parrafo.value} 
      </Typography>
    </>
  );
};

export default Typography_01;
