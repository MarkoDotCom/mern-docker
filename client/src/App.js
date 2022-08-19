import './App.css';
import styled from 'styled-components';
import { NavBar } from './components'
import {
  Router,
  Route,
  Link
} from "react-router-dom";
import { Banner } from "./components";

import { Home, Products } from './pages'

const Container = styled.div`
background: gray;
height: 100vh;
`

function App() {
  return (
    <>
      <Container>
        <NavBar />
        {/* <Banner /> */}
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
       <Link to="/">Back Home</Link> 
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
