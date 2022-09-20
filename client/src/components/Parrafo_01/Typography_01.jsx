import React, { useState } from "react";
import Typography from "@mui/material/Typography";

const Typography_01 = () => {
  // const [parrafo] = useState(
  //   <React.Fragment>
  //   <Typography>Soy un <strong>Ingeniero Analista Computacional</strong> asociado en el Instituto Académido DuocUC.</Typography>
  //   <Typography>Me especializo en desarrollo <strong>Full-Stack</strong> usando <strong>ReactJS</strong> y <strong>Node.js</strong>.</Typography>
  //   <Typography>Ofrezco <strong>proyectos atractivos</strong> con un <strong>diseño minimalista</strong>, al mismo tiempo que me preocupo por mantener una <strong>experiencia de usuario</strong> de calidad.</Typography>
  //   </React.Fragment>

  //   // "Colaborador interesado en mejorar sus habilidades tecnológicas en el desarrollo de software computacional. Ofrezco utilidad en áreas de interés como desarrollo de aplicaciones, redes, electrónica, robótica, ecología y botánica. Mantengo mis mejores expectativas para ser una gran contribución y también con quienes me inviten a ser parte de sus proyectos."
  //   // "Soy un Ingeniero Analista Computacional, asociado en el Instituto Académido DuocUC Me especializo en desarrollo Full-Stack usando ReactJS y Node.js Soy un defensor activo del minimalismo en el diseño y siempre me esfuerzo por crear un trabajo atractivo, al mismo tiempo que mantengo una experiencia de usuario de calidad."
  // );

  const [parrafo] = useState(
    // <Typography variant="h6">Soy un <strong>Ingeniero Analista Computacional</strong> asociado a la Institución Académica DuocUC. <br/>Me especializo en desarrollo <strong>Full-Stack</strong> usando <strong>ReactJS</strong> y <strong>Node.js</strong>.<br/> Ofrezco <strong>proyectos atractivos</strong> con un <strong>diseño minimalista</strong>, al mismo tiempo que me preocupo por mantener una <strong>experiencia de usuario</strong> de calidad.</Typography>
    <Typography variant="h5">
      Soy un <b>Ingeniero Analista Computacional</b> asociado a la Institución
      Académica DuocUC. <br />
      Me especializo en desarrollo <b>Full-Stack</b> usando <b>ReactJS</b> y{" "}
      <b>Node.js</b>.<br /> Ofrezco <b>proyectos atractivos</b> con un{" "}
      <b>diseño minimalista</b>, al mismo tiempo que me preocupo por obtener una{" "}
      <b>experiencia de usuario</b> de calidad.
    </Typography>

    // "Colaborador interesado en mejorar sus habilidades tecnológicas en el desarrollo de software computacional. Ofrezco utilidad en áreas de interés como desarrollo de aplicaciones, redes, electrónica, robótica, ecología y botánica. Mantengo mis mejores expectativas para ser una gran contribución y también con quienes me inviten a ser parte de sus proyectos."
    // "Soy un Ingeniero Analista Computacional, asociado en el Instituto Académido DuocUC Me especializo en desarrollo Full-Stack usando ReactJS y Node.js Soy un defensor activo del minimalismo en el diseño y siempre me esfuerzo por crear un trabajo atractivo, al mismo tiempo que mantengo una experiencia de usuario de calidad."
  );

  return (
    <Typography
      // variant="h1"
      align="justify"
      sx={{
        fontFamily: "Noto Sans",
        // display: "flex",
        // justifyContent: "center",
        // alignItems:"center",
        // fontSize: 202,
        color: "#ffffff",
        // textShadow: "1px 1px 2px black",
        textShadow: "1px 1px 2px black",
        // my: 2,
        // px: "5%",
        // lineHeight: "100%",
        // align:"justify",
        // textAlign:"center",
        // verticalAlign: "middle",
        // border:1,
        // pr: "2rem",
        // pl: "5rem",
        // display: "block",
        // m:"auto",
        // position: "absolute",
        // top: "50%",
        // left: "50%",
        // -ms-transform: translateY(-50%);
        // transform: "translateY(50%)",
        // height: "100%",
        // m:"auto",
        // letterSpacing: 1,
        // color: "#bd472a",
        // fontWeight: "bold",
        // justifyContent: "left",
        // pl: "10%",
        // ml:"20%"
      }}
    >
      {parrafo}
    </Typography>
  );
};

export default Typography_01;
