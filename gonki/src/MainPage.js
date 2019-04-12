import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Card from 'react-bootstrap/Card';

class MainPage extends Component {

  render(){
    return (
        <div>
          <Container fluid = {true}>
            <Row className="d-flex flex-column">
              <ButtonGroup toggle className="mt-0">
                <ToggleButton variant="light" type="radio" name="radio" defaultChecked value="1">
                  Comercio
                </ToggleButton>
                <ToggleButton variant="light" type="radio" name="radio" value="2">
                  Vida Nocturna
                </ToggleButton>
                <ToggleButton variant="light" type="radio" name="radio" value="3">
                  Restaurantes
                </ToggleButton>
              </ButtonGroup>
            </Row>
            <Row>
              <Col sm={8}>
              </Col>
              <Col sm={4}>
                LA OTRA COLUMNA
              </Col>
            </Row>
          </Container>
        </div>
    )
  }
}

export default MainPage;
