import React from "react";

import SiteNavBar from "./SiteNavBar";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export class Root extends React.Component {
    render() {
        return (
            <Container fluid className="pl-0 pr-0" bg="dark">
                <Row>
                    <Col className="xs-10" >
                        <Container fluid className="pl-0 pr-0">
                            <SiteNavBar />
                        </Container>
                    </Col>
                </Row>
                <Row>
                    {this.props.children}
                </Row>
            </Container>
        );
    }
}
