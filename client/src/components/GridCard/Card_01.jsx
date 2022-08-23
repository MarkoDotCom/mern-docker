import React from "react";
import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
import Typography from "./Typography_01";

const Card_01 = (props) => {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        fontFamily: "Rubik",
        border: 1,
      }}
    >
      <Typography />
    </Box>
  );
};

export default Card_01;
