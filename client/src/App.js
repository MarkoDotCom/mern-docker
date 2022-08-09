import './App.css';
import styled from 'styled-components';
import { NavBar } from './components'

const Container = styled.div`
background: gray;
height: 100vh;`

function App() {
  return (
    <Container>
      <NavBar />
    </Container>
  );
}

export default App;
