import React from "react";
import {browserHistory} from "react-router";

import Image from 'react-bootstrap/Image';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';


//This class handle the navigation bar on top of the web-page
class Header extends React.Component {

    //handler of the navigation whe you have to change to the Main Page
    onNavigateHome() {
      browserHistory.push("/home");
    }

    //handler of the navigation when you have to change to the user profile
    onNavigateProfile() {
      browserHistory.push("/user/10");
    }

    //render of the graphical interfaces
    render() {
      return(
        <Navbar bg="light" expand="lg" ml="0" mr="0">
          <Navbar.Brand onClick={this.onNavigateHome}>
            <Image src = "./red_Alien_icon.jpg" roundedCircle className="Icon_right_corner"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                  <Nav.Link onClick={this.onNavigateHome}>Home</Nav.Link>
              </Nav>
              <Nav>
                  <Nav.Link onClick={this.onNavigateProfile}>Profile</Nav.Link>
              </Nav>
          </Navbar.Collapse>

          <ul>
            <Navbar bg="light" expand="lg" className="navbar-right">
              <Form inline>
                <FormControl type="text" placeholder="Search"/>
                <Button variant="outline-dark">Search</Button>
              </Form>
            </Navbar>
          </ul>
        </Navbar>
    );
  }
}

export default Header;
