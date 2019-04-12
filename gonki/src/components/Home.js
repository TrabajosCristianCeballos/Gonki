import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

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
                <h3>Pagina Principal</h3>
            </Row>
            <Row>
              <Card className="cardMargins">
                <Card.Header as="h5">{this.state.apiResponse.nombre}</Card.Header>
                <Card.Body>
                  <Card.Title></Card.Title>
                  <Card.Text>

                  </Card.Text>
                  <Card.Text className= "textDescription">
                    {this.state.apiResponse.descripcion}
                  </Card.Text>
                  <Card.Text className= "textTag">
                    tipo: {this.state.apiResponse.tipos}
                  </Card.Text>
                  <Button variant="outline-dark" onClick= {this.onNavigateSite.bind(this, this.state.apiResponse._id)}>Ver Mas...</Button>
                </Card.Body>
                </Card>
            </Row>
          </Container>

        );
    }
}
