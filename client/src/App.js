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
import { DiamondTwoToneIcon } from "./components/Icons"

const Container = styled.div`
background: gray;
height: 100vh;
`

function App() {
  return (
    <>
        <Switch>
          <Route exact path="/">
            <Box text="Bienvenidos" icon="test"/>
            <GridCard/>
            <Banner_01 titulo="Carta de presentación" icon="person" height="120"/>
            <Banner_01 titulo="Bienvenidos" icon="diamond" height="200"/>
          </Route>
        </Switch>
    </>
  );
}

export default App;
