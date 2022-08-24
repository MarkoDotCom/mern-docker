import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "./Typography_01";

const Card_01 = ({ parrafo }) => {
  return (
    <>
      <Box
        sx={{
          // border: 1,
          m: 1,
          p: 1,
        }}
      >
        <Typography parrafo={parrafo} />
      </Box>
    </>
  );
};

export default Card_01;
