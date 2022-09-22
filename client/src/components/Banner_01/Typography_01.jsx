import React from "react";
import Typography from "@mui/material/Typography";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";

let theme = createTheme({
  typography: {
    fontFamily: "Salsa",
  },
});
theme = responsiveFontSizes(theme);

const Typography_01 = ({ titulo, fontVariant }) => {
  return (
    <ThemeProvider theme={theme}>
      <Typography
        // variant={fontVariant || null}
        variant="h1"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignContent: "center",
          justifyContent: "center",
          // fontFamily: "Salsa",
          // border: 1,
          letterSpacing: 2,
          // fontSize: 42,
          color: "#ffffff",
          // my:2,
          typography: {
            fontFamily: "Salsa",
            xs: "h5",
            md: "h2",
            //   useNextVariants: true
          },
        }}
      >
        {titulo}
      </Typography>
    </ThemeProvider>
  );
};

export default Typography_01;
