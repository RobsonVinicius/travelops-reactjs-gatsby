import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { IconContext } from 'react-icons'
import { IoAirplane } from 'react-icons/io5'
import { FaBars } from 'react-icons/fa'
import { menuData } from '../data/MenuData'
import { Button } from './Button'

const Navbar = () => {
  return (
    <Nav>
      <NavLink to="/">
        <IconContext.Provider value={{color: '#fff', size: 20}}>
          <IoAirplane />
        </IconContext.Provider>
        <Logo>TravelOps</Logo>
      </NavLink>
      <Bars />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavLink to={item.link} key={index}>
            {item.title}
          </NavLink>
        ))}
      </NavMenu>
      <NavBtn>
        <Button primary="true" round="true" to="/trips">Book a Flight</Button>
      </NavBtn>
    </Nav>
  )
}

export default Navbar

const Nav = styled(Link) `
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100; 
  position: relative;  
`

const Logo = styled.span `  
  font-size: 1.45rem;
  padding-left: .5rem
`

const NavLink = styled(Link) `
  color: #fff;
  display: flex;  
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-size: 1.1rem;
`

const Bars = styled(FaBars) `
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

const NavMenu = styled.div `
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const NavBtn = styled.div `
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }

`