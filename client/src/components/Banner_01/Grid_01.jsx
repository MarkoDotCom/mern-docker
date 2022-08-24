import React from "react";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
// import Card from "./Card_01";
import Container from "@mui/material/Container";
import { DiamondTwoToneIcon } from "../Icons"


const Grid_01 = () => {
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
          p: 0,
        }}
      >
        <Grid
          item
          xs={6}
          sx={
            {
              // border: "1px solid",
            }
          }
        >
			<DiamondTwoToneIcon/>
          {/* <Card parrafo={parrafo} /> */}
        </Grid>
		<Grid
          item
          xs={6}
          sx={
            {
              // border: "1px solid",
            }
          }
        >
			<DiamondTwoToneIcon/>
          {/* <Card parrafo={parrafo} /> */}
        </Grid>
        {/* {index % 2 == 0 ? (
              <Divider
                flexItem
                orientation="vertical"
                sx={{
                  mr: "-1px",
                }}
              />
            ) : (
              <></>
            )} */}
      </Grid>
    </Container>
  );
};

export default Grid_01;
