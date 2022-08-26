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
        my: 2,
        background:
          "linear-gradient(342deg, rgba(137,58,180,1) 0%, rgba(253,29,84,1) 50%, rgba(252,199,69,1) 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        // ml:"20%"
      }}
    >
      {parrafo}
    </Typography>
  );
};

export default Typography_01;
