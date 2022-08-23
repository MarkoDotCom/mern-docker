import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Card_01 = () => {
  return (
    <Box sx={{ fontFamily: "Rubik", border: 1 }}>
      Card
      <Typography xs={6} variant="h6" sx={{ fontWeight: "bold" }}>
Component      </Typography>
    </Box>
  );
};

export default Card_01;
