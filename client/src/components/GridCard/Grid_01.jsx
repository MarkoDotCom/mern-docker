import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "./Card_01";
import Container from "@mui/material/Container";

const Grid_01 = () => {
  const [parrafos, setParrafos] = useState([
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
    <Container
      sx={
        {
          // border: "1px solid",
        }
      }
    >
      <Grid
        container
        sx={{
          // border: 1,
          height: "auto",
          display: "flex",
          flexWrap: "wrap",
          alignContent: "flex-start",
          alignContent: "center",
          m: 0,
          p: 1,
        }}
      >
        {parrafos.map((parrafo) => (
          <Grid
            item
            xs={6}
            sx={{
              // border: "1px solid",
            }}
          >
            <Card parrafo={parrafo} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Grid_01;
