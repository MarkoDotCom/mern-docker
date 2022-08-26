import React from "react";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
// import Card from "./Card_01";
import Container from "@mui/material/Container";
import { DiamondTwoToneIcon } from "../Icons"
import Icon from "./Icon_01"
import Typography from "./Typography_01"
import Box from "@mui/material/Box";


const Grid_01 = ({titulo, icon, height}) => {
	// const [parrafo, setParrafo] = useState("Colaborador interesado en mejorar sus habilidades tecnológicas en el desarrollo de software computacional. Ofrezco utilidad en áreas de interes como son el desarrollo de aplicaciones, redes, electrónica, robótica, ecología y botánica. Mantengo mis mejores expectativas para ser una gran contribución y también con quienes me inviten a ser parte de sus proyectos.")

  return (
    <Box
      sx={
        {
          // border: 1,
          background:
          "linear-gradient(315deg, rgba(137,58,180,1) 0%, rgba(253,29,84,1) 50%, rgba(252,199,69,1) 100%)",
        }
      }
    >
      <Grid
        container
        // spacing={2}
        sx={{
          // border: 1,
          // display: "flex",
          // flexWrap: "wrap",
		      justifyContent: "center",
          alignItems:"center",
          // my: 1,
          height: parseInt(height)
          // p: 1,
        }}
      >
        {/* {typeof height} */}
        <Grid
          item
        //   xs={6}
          sx={
            {
          // border: 1,
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
          <Typography titulo={titulo} ></Typography>
          </Grid>


      </Grid>
    </Box>
  );
};

export default Grid_01;
