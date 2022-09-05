import React from "react";
import Typography from "@mui/material/Typography";

const Typography_01 = ({ titulo, fontVariant }) => {
  return (
    <Typography
    variant={fontVariant || null}
      sx={{
		display: "flex",
        flexWrap: "wrap",
        alignContent: "center",
        justifyContent: "center",
		// border: 1,
        fontFamily: "Salsa",
          letterSpacing: 2,
		  // fontSize: 42,
        color: "#ffffff",
		// my:2,
		mx:2

      }}
    >
      {titulo}
    </Typography>
  );
};

export default Typography_01;
