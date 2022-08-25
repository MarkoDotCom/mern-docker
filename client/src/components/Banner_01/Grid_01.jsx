import React from "react";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
// import Card from "./Card_01";
import Container from "@mui/material/Container";
import { DiamondTwoToneIcon } from "../Icons"
import Icon from "./Icon_01"


const Grid_01 = ({titulo, icon}) => {
	// const [parrafo, setParrafo] = useState("Colaborador interesado en mejorar sus habilidades tecnológicas en el desarrollo de software computacional. Ofrezco utilidad en áreas de interes como son el desarrollo de aplicaciones, redes, electrónica, robótica, ecología y botánica. Mantengo mis mejores expectativas para ser una gran contribución y también con quienes me inviten a ser parte de sus proyectos.")

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
        //   border: 1,
          height: "auto",
          display: "flex",
          flexWrap: "wrap",
		  justifyContent: "center",
        //   alignContent: "flex-start",
        //   alignContent: "center",
          m: 0,
          p: 2,
        }}
      >
        <Grid
          item
        //   xs={6}
          sx={
            {
            //   border: "1px solid",
            }
          }
		  >
		  	<Icon icon={icon} />
        </Grid>
		<Grid
          item
        //   xs={6}
          sx={
            {
            //   border: "1px solid",
            }
          }
        >
			{titulo}
        </Grid>


      </Grid>
    </Container>
  );
};

export default Grid_01;
