import React from "react";
import { browserHistory } from "react-router";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';


export class siteProfile extends React.Component {

    constructor(props) {
      super(props);
      this.state = { apiResponse: "", calificacion: ""};
    }

    callSites() {
      fetch("http://localhost:9000/sites")
        .then(res => res.text())
        .then(res => JSON.parse(res))
        .then(res => res[0])
        .then(res => this.setState({ apiResponse: res }));

      fetch("http://localhost:9000/sites")
        .then(res => res.text())
        .then(res => JSON.parse(res))
        .then(res => res[0])
        .then(res => res.calificacion[0])
        .then(res => this.setState({calificacion: res}));

    }

    componentWillMount() {
      this.callSites();
    }

    onNavigateSite() {
      browserHistory.push("/home");
    }

    render() {

        console.log(this.state.calificacion);
        return (
          <Container className="rowMargins">
            <Image src = "../fonda.png" fluid/>
            <Card className="cardMargins">
              <Card.Header as="h5" defaultValue= "...">{this.state.apiResponse.nombre}</Card.Header>
              <Card.Body>
                <Form>
                  <Form.Group as={Row} controlId="formPlaintextEmail">
                    <Form.Label column sm="2">
                      descripcion
                    </Form.Label>
                    <Col sm="10">
                      <Form.Control plaintext readOnly defaultValue="El sitio no ha puesto descripcion aún" value= {this.state.apiResponse.descripcion}/>
                    </Col>
                    <Form.Label column sm="2">
                      Horarios
                    </Form.Label>
                    <Col sm="10">
                      <Form.Control plaintext readOnly defaultValue="No los conocemos" value= {this.state.apiResponse.horario}/>
                    </Col>
                    <Form.Label column sm="2">
                      Tipos
                    </Form.Label>
                    <Col sm="10">
                      <Form.Control plaintext readOnly defaultValue="Parece que no se especifico" value= {this.state.apiResponse.tipos}/>
                    </Col>
                    <Form.Label column sm="2">
                      Direcciones
                    </Form.Label>
                    <Col sm="10">
                      <Form.Control plaintext readOnly defaultValue="No hay direcciones" value= {this.state.apiResponse.direcciones}/>
                    </Col>
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
            <Card className="cardMargins">
              <Card.Header as="h5">Calificaciones</Card.Header>
              <Card.Body>
                <Card >
                  <Card.Header as="h5">
                      <Row>
                        <Col>
                          {this.state.calificacion.user}
                        </Col>
                        <Col className= "align-right">
                          <Form.Control plaintext readOnly defaultValue="Parece que no se especifico" value= {this.state.calificacion.calificacion + " /5"}/>
                        </Col>
                      </Row>
                    </Card.Header>
                    <Card.Body>
                      <Col sm="10">
                        <Form.Control plaintext readOnly defaultValue="Parece que no se especifico" value= {this.state.calificacion.comentario}/>
                      </Col>
                  </Card.Body>
                </Card>
              </Card.Body>
            </Card>
          </Container>

        );
    }
}
