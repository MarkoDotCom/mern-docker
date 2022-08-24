import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "./Typography_01";
import Divider from "@mui/material/Divider";


const Card_01 = ({ parrafo, index }) => {
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
        
        {/* {index % 2 == 0 ? (
              <Divider
                orientation="vertical"
                flexItem
                sx={{
                  variant: "inset",
                  absolute: true
                }}
              />
            ) : (
              <></>
            )} */}
      </Box>

    </>
  );
};

export default Card_01;
