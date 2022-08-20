import React , { useState } from 'react'
import styled from 'styled-components'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Nav>
      <Logo href="#">
        MSGB<span>curricular</span>
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink href="/productos">Productos</MenuLink>
        <MenuLink href="/">About</MenuLink>
        <MenuLink href="/">Carreras</MenuLink>
        <MenuLink href="/">Contacto</MenuLink>
      </Menu>
    </Nav>
  )
}

const Nav = styled.div`
padding: 0 2rem;
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
background: white;
`
const Hamburger = styled.div`
display: none;
flex-direccion: column;
cursor: pointer;

span {
  height: 2px;
  width: 25px;
  background: tomato;
  margin-bottom: 4px;
  border-radius: 5px;
}

@media (max-width: 768px) {
  display: flex;
}`

const MenuLink = styled.a`
padding: 1rem 2rem;
cursor: pointer;
text-align: center;
text-decoration: none;
color: tomato;
transition: all 0.3s ease-in;
font-size: 0.9rem
`

const Menu = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
position: relative;

@media (max-width: 768px) {
  overflow: hidden;
  flex-direccion: column;
  width: 100%;
  max-height: ${({isOpen}) => (isOpen ? "300px" : "0px")};
  transition: max-height 0.3s ease-in;
}
`

const Logo = styled.a`
padding: 1rem 0;
color: tomato;
text-decoration: none;
font-weight: 800;
font-size: 1.7rem;

span {
  font-weight: 300;
  font-size: 1.2rem;
}
`

export default NavBar