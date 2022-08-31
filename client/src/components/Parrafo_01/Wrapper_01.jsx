import React, { useState } from "react";
import Container from "@mui/material/Container";
import Typography from "./Typography_01";

const Wrapper_01 = () => {
  const [parrafo] = useState("Colaborador interesado en mejorar sus habilidades tecnológicas en el desarrollo de software computacional. Ofrezco utilidad en áreas de interés como desarrollo de aplicaciones, redes, electrónica, robótica, ecología y botánica. Mantengo mis mejores expectativas para ser una gran contribución y también con quienes me inviten a ser parte de sus proyectos.")
  
  return (
    <Container
      sx={{
        // border: 1,
      }}
    >
      <Typography parrafo={parrafo} />
    </Container>
  );
};

export default Wrapper_01;
