import React from "react";
import { Typography } from "@mui/material";
import Container01 from "../Container01/Container01";

const Subtitulo01 = (props) => {
  return (
    <Container01>
      <Typography
        variant="h2"
        sx={{
          my: "1.5rem",
          fontFamily: "Noto Sans Display",
          color: "rgb(70, 70, 70)"
        }}
      >
        {props.children}
      </Typography>
    </Container01>
  );
};

export default Subtitulo01;
