import * as React from "react";
import { useState, Fragment } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import Carousel from "react-material-ui-carousel";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { FixedSizeList } from "react-window";
import { v4 as uuid } from "uuid";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";

let theme = createTheme({
  typography: {
    subtitle1: {
      fontSize: "7rem",
    },
    body1: {
      fontSize: "7rem",
      fontWeight: 1000,
    },
    button: {
      fontStyle: "italic",
    },

  },
});
theme = responsiveFontSizes(theme);

const CompetenciasTecnologicas = () => {
  // mejorar el tipo de coleccion
  const [lenguajes] = useState([
    ["C#", "C++", "CSS"],
    ["HTML", "JAVA", "JavaScript"],
    ["JSON", "PHP", "Ruby"],
    ["SQL", "TypeScript", "XML"],
  ]);

  function Banner(props) {
    const currentArray = props.item;
    return (
      <Container
      sx={{
        pb: 0.5,
        border: 1,
        pl: "4.5rem",
      }}
      >
        <Card elevation={3}>
        <Grid
          container
          sx={{
            alignItems: "center",
            my: "1rem",
          }}
          direction="row"
          alignItems="center"
          justify="center"
        >
          {currentArray.map((item, index) => (
            <Grid
              key={index}
              item
              // columns={{ xs: item.lenght }}
              xs={4}
              sx={{
                // border: 1,
                // alignItems: "center",
                px: ".25rem",
                justifyContent: "center",
                // justify: "center",
                display: "flex",
              }}
            >
              <Chip
                sx={{
                  color: "#fadddd",
                  // flexWrap: "wrap",
                  // border: 1,
                  borderRadius: "2rem",
                  py: "2rem",
                  fontSize: "1rem",
                  justifyContent: "center",
                  // height: "2.5rem",
                  // width: 200,
                  background:
                    "linear-gradient(342deg, rgba(137,58,180,1) 0%, rgba(253,29,84,1) 50%, rgba(252,199,69,1) 100%)",
                }}
                label={
                  <ThemeProvider theme={theme}>
                    <Typography
                      // variant="h1"
                      sx={{
                        // position: "relative",
                        // border:1,
                        px: "2rem",
                        display: "flex",
                        // display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        typography: {
                          xs: "h5",
                          md: "h4",
                        },
                      }}
                    >
                      {item}
                    </Typography>
                  </ThemeProvider>
                }
              ></Chip>
            </Grid>
          ))}
        </Grid>
      </Card>
      </Container>
    );
  }

  return (
    <Carousel
      autoPlay={true}
      animation="fade"
      indicators={false}
      duration={500}
      navButtonsAlwaysVisible={false}
      navButtonsAlwaysInvisible={true}
      cycleNavigation={true}
      // fullHeightHover={true}
      swipe={true}
      sx={
        {
          // display: "flex",
          // border: 1,
          // m: 1,aX
          // width: "90%",
        }
      }
    >
      {lenguajes.map((item, index) => (
        <Banner item={item} key={index}></Banner>
      ))}
    </Carousel>
  );
};

export default CompetenciasTecnologicas;
