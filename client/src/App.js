import "./App.css";
import {
  GridCard,
  Banner01,
  Parrafo01,
  GridExperiencias01,
  GridExperiencias02,
  GridIdiomas01,
  CompetenciasTecnologicas,
  Subtitulo01,
  NavBar01,
  MainBanner01,
} from "./components";
import { Switch, Route } from "react-router-dom";

import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const App = () => {
  return (
    <>
      <NavBar01></NavBar01>
      <Box
        // component="main"
        sx={{
          // flexGrow: 1,
          // ml: "flex-start",
          // pt: "1rem",
        }}
        >
        <MainBanner01></MainBanner01>
        <DrawerHeader />
        <Switch>
          <Route exact path="/">
            <Parrafo01 />
          </Route>
          <Route path="/carta-presentacion">
            <Banner01
            // key="aqui"
              titulo="Carta de Presentación"
              icon="person"
              height="120"
              fontVariant="h2"
            />
            <Parrafo01 />
          </Route>
          <Route path="/experiencias-laborales">
            {/* <Banner01
              titulo="Experiencias Laborales"
              icon="homework"
              height="120"
              fontVariant="h2"
            /> */}
            <GridExperiencias01 />
          </Route>
          <Route path="/experiencias-academicas">
            <Banner01
              titulo="Evidencias Académicas"
              icon="academy"
              height="120"
              fontVariant="h2"
            />
            <GridExperiencias02 />
          </Route>
          <Route path="/idiomas">
            <Banner01
              titulo="Idiomas"
              icon="translate"
              height="120"
              fontVariant="h2"
            />
            <GridIdiomas01></GridIdiomas01>
          </Route>
          <Route path="/competencias-tecnologicas">
            <Banner01
              titulo="Competencias Tecnológicas"
              icon="Layer"
              height="120"
              fontVariant="h2"
            />
            <CompetenciasTecnologicas></CompetenciasTecnologicas>
          </Route>
        </Switch>
      </Box>
      {/* <Route exact path="/"> */}
      {/* </Route> */}
      {/* </Switch> */}
    </>
  );
};

export default App;
