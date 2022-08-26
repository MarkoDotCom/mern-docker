import './App.css';
import styled from 'styled-components';
import { NavBar, Box, Box_00, GridCard, Banner_01} from './components'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Home } from './pages'

function App() {
  return (
    <>
        <Switch>
          <Route exact path="/">
            <Banner_01 titulo="Bienvenidos" icon="diamond" height="200"/>
            <GridCard/>
            <Banner_01 titulo="Carta de presentación" icon="person" height="120"/>
          </Route>
        </Switch>
    </>
  );
}

export default App;
