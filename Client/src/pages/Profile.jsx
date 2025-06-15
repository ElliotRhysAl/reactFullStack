import React from "react";
import { Container, Row, Col, Form, FloatingLabel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


const ProfilePage = () => {
  return (
    <Container className="p-4">
      <h1 className="text-2xl font-bold">Welcome to Home Page</h1>
      <p>This is the homepage of our React site.</p>

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

export default ProfilePage;