import React from "react";
import Grid from "@mui/material/Grid";
import Card from "./Card_01";

const Grid_01 = () => {
  return (
    <Grid
      container
      sx={{
        border: 1,
        height: 200,
        display: "flex",
        flexWrap: "wrap",
        alignContent: 'flex-start',
        alignContent: "center",
        // justifyContent: "center",
      }}
    >
      <Grid item xs={6} sx={{flexDirection: 'row',}}>
        <Card />
      </Grid>
      <Grid item xs={6}>
        <Card />
      </Grid>
      <Grid item xs={6}>
        <Card />
      </Grid>
      <Grid item xs={6}>
        <Card />
      </Grid>
      <Grid item xs={6}>
        <Card />
      </Grid>
      <Grid item xs={6}>
        <Card />
      </Grid>
      <Grid item xs={6}>
        <Card />
      </Grid>
    </Grid>
  );
};

export default Grid_01;
