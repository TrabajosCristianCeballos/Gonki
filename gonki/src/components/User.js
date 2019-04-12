import React from "react";
import { browserHistory } from "react-router";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

export class User extends React.Component {



    onNavigateHome() {
        browserHistory.push("/home");
    }

    constructor(props) {
      super(props);
      this.state = { apiResponse: "", idiomas: ""};
    }

    callSites() {
      fetch("http://localhost:9000/users")
        .then(res => res.text())
        .then(res => JSON.parse(res))
        .then(res => res[0])
        .then(res => this.setState({ apiResponse: res }));
      fetch("http://localhost:9000/users")
        .then(res => res.text())
        .then(res => JSON.parse(res))
        .then(res => res[0])
        .then(res => res.idiomas)
        .then(res => this.setState({idiomas: res}));
    }

    componentWillMount() {
      this.callSites();
    }

    render() {
        return (
            <Container className="rowMargins">
              <Row>
                <Image src = "../portrait.jpg" rounded fluid/>
              </Row>
              <Row className="cardMargins2">
                <Col>
                  <Card>
                  <Card.Body>
                    <Row>
                      <Col className="col-aux"><p>NOMBRE</p></Col>
                      <Col>
                        <Form.Control plaintext readOnly defaultValue="Cargando..." value= {this.state.apiResponse.nombre}/>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="col-aux"><p>USUARIO</p></Col>
                      <Col>
                        <Form.Control plaintext readOnly defaultValue="Cargando..." value= {this.state.apiResponse.usuario}/>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="col-aux"><p>EMAIL</p></Col>
                      <Col>
                        <Form.Control plaintext readOnly defaultValue="Cargando..." value= {this.state.apiResponse.email}/>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="col-aux"><p>TELEFONO</p></Col>
                      <Col>
                        <Form.Control plaintext readOnly defaultValue="Cargando..." value= {this.state.apiResponse.telefono}/>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="col-aux"><p>FECHA DE NACIMIENTO</p></Col>
                      <Col>
                        <Form.Control plaintext readOnly defaultValue="Cargando..." value= {this.state.apiResponse.fechaNacimiento}/>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="col-aux"><p>NACIONALIDAD</p></Col>
                      <Col>
                        <Form.Control plaintext readOnly defaultValue="Cargando..." value= {this.state.apiResponse.nacionalidad}/>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="col-aux"><p>IDIOMAS</p></Col>
                      <Col>
                        <Form.Control plaintext readOnly defaultValue="Cargando..." value= {this.state.idiomas}/>
                      </Col>
                    </Row>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
        );
    }
}
