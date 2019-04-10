import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

class NavBarMainPage extends Component {

  render(){
    return (
        <div>
          <Container className= "Container-decorator" fluid = {true} >
            <Row>
              <Col className="mt-2 mb-2">
                <Image className= "Icon_right_corner" src='Images/red_Alien_icon.jpg' roundedCircle/>
              </Col>
              <Col className="Searcher">
                <InputGroup className="mt-2 mb-2">
                  <FormControl
                    placeholder="Buscar Sitios, Eventos o Personas"
                    aria-label="Buscar Sitios, Eventos o Personas"
                    aria-describedby="basic-addon2"
                  />
                <InputGroup.Append>
                  <Button variant="light">Buscar</Button>
                </InputGroup.Append>
                </InputGroup>
              </Col>
              <Col className="mt-2 mb-2">

              </Col>
            </Row>
          </Container>
        </div>
    )
  }
}

export default NavBarMainPage;
