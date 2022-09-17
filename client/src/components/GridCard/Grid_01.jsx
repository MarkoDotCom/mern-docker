import React, { useState, Fragment } from "react";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Card from "./Card_01";
import Container from "@mui/material/Container";
import { Box } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Grid_01 = () => {
  const [parrafos] = useState([
    { tag: "Nombre", value: "Marco Sebastián González Barraza" },
    { tag: "Edad", value: "26 años" },
    { tag: "Nacionalidad", value: "Chileno" },
    {
      tag: "Dirección",
      value: "Avenida Santa María 227, Recoleta, Santiago, CL",
    },
    { tag: "Correo Electrónico", value: "msg.barraza@gmail.com" },
    { tag: "Teléfono", value: "+56 9 4092 0875" },
  ]);

  return (
      <Container>
        <Grid
          container
          sx={{
            // border: 1,
            height: "auto",
            display: "flex",
            flexWrap: "wrap",
            alignContent: "flex-start",
            // alignContent: "center",
            m: 0,
            p: 1,
          }}
        >
          {parrafos.map((parrafo, index) => (
            <Fragment key={index}>
              <Grid
                item
                xs={6}
                sx={
                  {
                    // border: "1px solid",
                  }
                }
              >
                <Card parrafo={parrafo} />
              </Grid>
              {index % 2 === 0 ? (
                <Divider
                  flexItem
                  orientation="vertical"
                  sx={{
                    mr: "-1px",
                  }}
                />
              ) : (
                <></>
              )}
            </Fragment>
          ))}
        </Grid>
      </Container>
  );
};

export default Grid_01;
