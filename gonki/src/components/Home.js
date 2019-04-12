import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

import {browserHistory} from "react-router";

export class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = { apiResponse: ""};
  }

  callSites() {
    fetch("http://localhost:9000/sites")
      .then(res => res.text())
      .then(res => JSON.parse(res))
      .then(res => res[0])
      .then(res => this.setState({ apiResponse: res }));

  }

  componentWillMount() {
    this.callSites();
  }

  onNavigateSite(id) {
    browserHistory.push("/site/" + id);
  }

    render() {
        return (
          <Container background-color="#56f442">
            <Row className="rowMargins">
              <Carousel>
                <Carousel.Item>
                  <Image
                    src="./first_slide.png"
                    alt="First slide"
                    fluid
                  />
                  <Carousel.Caption>
                    <h3>Explora el mundo</h3>
                    <p>Siempre hay algo por descubrir en cada sitio al que vayas</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    src="./second_slide.png"
                    alt="Third slide"
                    fluid
                  />
                  <Carousel.Caption>
                    <h3>Conectate.</h3>
                    <p>cada dia tienes la posibilidad de encontrar aquello que mas te gusta</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    src="./third_slide.png"
                    alt="Third slide"
                    fluid
                  />
                  <Carousel.Caption>
                    <h3>Viaja</h3>
                    <p>Hacemos que conocer un sitio nuevo sea sencillo</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Row>
            <Row>
              <Card className="cardMargins">
                <Card.Header as="h5">{this.state.apiResponse.nombre}</Card.Header>
                <Card.Body>
                  <Card.Title></Card.Title>
                  <Card.Text className= "textDescription">
                    {this.state.apiResponse.descripcion}
                  </Card.Text>
                  <Card.Text className= "textTag">
                    <Badge pill variant="info">
                      {this.state.apiResponse.tipos}
                    </Badge>
                  </Card.Text>
                  <Button variant="outline-dark" onClick= {this.onNavigateSite.bind(this, this.state.apiResponse._id)}>Ver Mas...</Button>
                </Card.Body>
                </Card>
            </Row>
          </Container>

        );
    }
}
