import React, { useState } from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

const NavBar = () => {
  const [expand, setExpand] = useState(false);

  return (
    <div>
      <Navbar
        expanded={expand}
        fixed="top"
        expand="md"
      >
        <Container>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => {
              setExpand(!expand);
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </Navbar.Toggle>

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto" defaultActiveKey="#home">
              <Nav.Item>
                <Nav.Link as={Link} to="/" onClick={() => setExpand(false)}>
                  <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link as={Link} to="/login" onClick={() => setExpand(false)}>
                  <AiOutlineHome style={{ marginBottom: "2px" }} /> Login
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link as={Link} to="/profile" onClick={() => setExpand(false)}>
                  <AiOutlineHome style={{ marginBottom: "2px" }} /> Profile
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar