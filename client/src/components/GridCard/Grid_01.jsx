import React from "react";
import Grid from "@mui/material/Grid";
import Card from './Card_01';
import Typography from '@mui/joy/Typography';

const Grid_01 = () => {
  return (
    <Grid
      sx={{
        border: 1,
        height: 200,
        display: "flex",
        flexWrap: "wrap",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <Typography sx={{ border: 1 }}>Grid_01 Component</Typography>
      
      <Card />
    </Grid>
  );
};

export default Grid_01;
