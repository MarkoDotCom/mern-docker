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
    
        {/* <NavBar /> */}
        <Switch>
          <Route exact path="/">
            <Box text="Bienvenidos" icon="test"/>
            <GridCard/>
            <Banner_01 />
            {/* <Box text="Carta de Presentación"/> */}
            {/* <Box_00/> */}
            {/* <Home /> */}
          </Route>
        </Switch>
      


    </>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

export default App;
