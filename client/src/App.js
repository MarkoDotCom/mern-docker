import './App.css';
// import styled from 'styled-components';
import { GridCard, Banner01, Parrafo01, GridExperiencias01, GridExperiencias02, GridIdiomas01 } from './components'
import {
  // BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
// import { Home } from './pages'

const App = () => {
  return (
    <>
        {/* <Switch> */}
          {/* <Route exact path="/"> */}
            <Banner01 titulo="Bienvenidos" icon="diamond" height="200" fontVariant="h1"/>
            <GridCard/>
            <Banner01 titulo="Carta de Presentación" icon="person" height="150" fontVariant="h2"/>
            <Parrafo01/>
            <Banner01 titulo="Experiencia Laboral" icon="homework" height="150" fontVariant="h2"/>
            <GridExperiencias01/>
            <Banner01 titulo="Experiencia Académica" icon="academy" height="150" fontVariant="h2"/>
            <GridExperiencias02/>
            <Banner01 titulo="Idiomas" icon="translate" height="150" fontVariant="h2"/>
            <GridIdiomas01></GridIdiomas01>
          {/* </Route> */}
        {/* </Switch> */}
    </>
  );
}

export default App;
