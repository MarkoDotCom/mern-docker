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
      <Box component="main" sx={{ flexGrow: 1 }}>
        <DrawerHeader />
        <Switch>
          <Route exact path="/">
            <Banner01
              titulo="Bienvenidos"
              icon="diamond"
              height="200"
              fontVariant="h1"
            />
            <GridCard />
            <Banner01
              titulo="Carta de Presentación"
              icon="person"
              height="120"
              fontVariant="h2"
            />
            <Parrafo01 />
            <Banner01
              titulo="Experiencias Laborales"
              icon="homework"
              height="120"
              fontVariant="h2"
            />
            <GridExperiencias01 />
            <Banner01
              titulo="Evidencias Académicas"
              icon="academy"
              height="120"
              fontVariant="h2"
            />
            <GridExperiencias02 />
            <Banner01
              titulo="Idiomas"
              icon="translate"
              height="120"
              fontVariant="h2"
            />
            <GridIdiomas01></GridIdiomas01>
            <Banner01
              titulo="Competencias Tecnológicas"
              icon="Layer"
              height="120"
              fontVariant="h2"
            />
            <Subtitulo01>Lenguajes de Programación</Subtitulo01>
            <CompetenciasTecnologicas></CompetenciasTecnologicas>
          </Route>
          <Route path="/gridcard">
            <GridCard />
            <Banner01
              titulo="Carta de Presentación"
              icon="person"
              height="120"
              fontVariant="h2"
            />
            <Parrafo01 />
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
