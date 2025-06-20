import React from "react";
import { Container, Row, Col, Form, FloatingLabel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


const HomePage = () => {
  return (
    <Container className="p-4">
      <h1 className="text-2xl font-bold">Welcome!</h1>
      <p>This is the homepage for my React site.</p>

      <Form>
        <Row>
          <Col>
            <Form.Group controlId="name">
            <FloatingLabel controlId="floatingForename" label="First Name">
              <Form.Control type="text" placeholder="First Name"/>
            </FloatingLabel>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="surname">
            <FloatingLabel controlId="floatingSuranme" label="Last Name">
              <Form.Control type="text" placeholder="Last Name"/>
            </FloatingLabel>
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default HomePage;