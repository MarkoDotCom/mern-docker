import * as React from "react";
import { useState, Fragment } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
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
    fontFamily: "Noto Sans",
    fontWeight: 'bold',
    
    // xs: "h1",
    // fontWeight: "bold",
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
          // my: "auto",
          pb: 0.5,
          // border: 1,
          pl: "4.5rem",
        }}
      >
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
                px:".25rem",
                justifyContent: "center",
                // justify: "center",
                display: "flex",
                // mx:".1rem"
              }}
            >
              <Chip
                sx={{
                  color: "#fadddd",
                  // flexWrap: "wrap",
                  border:1,
                  borderRadius: "2rem",
                  // m: "1.5rem",
                  py:"2rem",
                  // m: "1rem",
                  fontSize: "1rem",
                  // mx: 0.25,
                  justifyContent: "center",
                  // height: "2.5rem",
                  // width: 200,
                  background:
                    "linear-gradient(342deg, rgba(137,58,180,1) 0%, rgba(253,29,84,1) 50%, rgba(252,199,69,1) 100%)",
                }}
                label={
                  <ThemeProvider theme={theme}>
                    <Typography 
                      variant="body"
                      sx={{
                        // position: "relative",
                        // border:1,
                        px:"2rem",
                        display: "flex",
                        // fontFamily: "Ubuntu",
                        // display: "flex", 
                        justifyContent: "center",
                        alignItems: "center",
                        typography: {
                          xs: "h5",
                          md: "h4",
                          //   useNextVariants: true
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
      </Container>
    );

    // const chunkSize = 5;
    // let bannerArray = [];

    // for (let i = 0; i < lenguajes.lenght; i += chunkSize) {
    //   let items = [];
    //   const segmento = lenguajes.slice(i, i + chunkSize);
    //   segmento.map((lenguaje) => {
    //     items.push(<Grid item>{props}</Grid>);
    //   });
    //   return <Grid container>{items}</Grid>;
    // }
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
        //aqui cada item seria un array de 3 lenguajes
        <Banner item={item} key={index}></Banner>
      ))}
      {/* {lenguajes} */}
    </Carousel>
  );

  // const Banner = function (props) {
  //   const elements = lenguajes.lenght;
  //   const size1 = elements % 3;
  //   const size2 = elements / 3;

  //   const sizeLeft = size2 + (size1 > 0 ? 1 : 0)
  //   const sizeRight = size2 + (size1 > 0 ? 1 : 0)
  //   const sizeCenter = size2

  //   // Math.round(lenguajes.lenght / 3).each((index, i))
  // };

  // return (
  //   <Box
  //     sx={{ my: "1.5rem" }}
  //     display="flex"
  //     justifyContent="center"
  //     alignItems="center"
  //   >
  //     <Carousel
  //       autoPlay={true}
  //       animation="slide"
  //       indicators={false}
  //       duration={2500}
  //       navButtonsAlwaysVisible={false}
  //       navButtonsAlwaysInvisible={true}
  //       cycleNavigation={true}
  //       // fullHeightHover={true}
  //       swipe={true}
  //       sx={{
  //         display: "flex",
  //         // border: 1,
  //         // m: 1,aX
  //         width: "100%",
  //       }}
  //     >
  //       {lenguajes.map((lenguaje, index) => (
  //         <Fragment key={index}>
  //           <Chip
  //             sx={{
  //               // border: 1,
  //               color: "#fadddd",
  //               flexWrap: "wrap",
  //               my: 0.5,
  //               mx: 0.25,
  //               background:
  //                 "linear-gradient(342deg, rgba(137,58,180,1) 0%, rgba(253,29,84,1) 50%, rgba(252,199,69,1) 100%)",
  //             }}
  //             label={
  //               <Typography
  //                 variant="body"
  //                 sx={{
  //                   fontFamily: "Ubuntu",
  //                 }}
  //               >
  //                 {lenguaje}
  //               </Typography>
  //             }
  //           >
  //             {/* <Typography>size2{uuid()}</Typography> */}
  //           </Chip>
  //         </Fragment>
  //       ))}
  //     </Carousel>
  //   </Box>
  // );
};

export default CompetenciasTecnologicas;
