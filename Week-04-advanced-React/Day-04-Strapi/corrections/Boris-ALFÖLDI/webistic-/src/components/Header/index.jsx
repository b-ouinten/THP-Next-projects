import React from "react";
import { Navbar, Nav} from 'react-bootstrap';
import CheckLanguageDisplay from '../CheckLanguageDisplay';
import { NavLink } from "react-router-dom";


const Header = () => {
  return (
    <>
    <Navbar bg='light' expand='lg'>
      <NavLink className="navbar-brand" to='/'> Webistic</NavLink>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <NavLink className="nav-link" to='/about'>About</NavLink>
          <NavLink className="nav-link" to='/works'>Works</NavLink>
        </Nav>
        <CheckLanguageDisplay />
      </Navbar.Collapse>
    </Navbar>
    </>
  );
};
export default Header;