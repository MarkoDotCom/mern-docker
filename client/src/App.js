import './App.css';
import styled from 'styled-components';
import { NavBar, Box } from './components'
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
      <Container>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Box/>
            <Home />
          </Route>
        </Switch>
      </Container>


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
