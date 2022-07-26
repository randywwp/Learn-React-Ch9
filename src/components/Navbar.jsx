/* eslint-disable */
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  Navbar,
  Nav,
  NavItem,
  Button,
  NavbarText,
} from 'reactstrap';
import { logout as logoutFirebase } from '../firebase'

function NavBar ({ navigations, text }) {

  const navigate = useNavigate()

  function logout() {
    logoutFirebase()
    navigate('/')
  }

  return (
    <Navbar full={true}>
      <h4>
        <Link to="/dashboard">Dashboard</Link>
      </h4>
      {text && (<NavbarText className="ms-4">{text}</NavbarText>)}
      <Nav className="me-auto" navbar>
        {navigations.map(a => 
          <NavItem>
            <Link to={a.link}>
              {a.text}
            </Link>
          </NavItem>
        )}
      </Nav>
      <Button onClick={logout}>
        Log Out
      </Button>
    </Navbar>
  );
}

export default NavBar;
