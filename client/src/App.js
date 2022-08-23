import './App.css';
import styled from 'styled-components';
import { NavBar, Box, Box_00, GridCard } from './components'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Home } from './pages'

const Container = styled.div`
background: gray;
height: 100vh;
`

function App() {
  return (
    <>
    
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Box/>
            <GridCard/>
            <Box_00/>
            <Home />
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
