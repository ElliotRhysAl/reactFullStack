import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


const HomePage = () => {
  return (
    <Container className="p-4">
      <h1 className="text-2xl font-bold">Welcome to Home Page</h1>
      <p>This is the homepage of our React site.</p>

      <Form>
        <Row>
          <Col>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="John" />
              <Form.Text className="text-muted">Please input your name</Form.Text>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="surname">
              <Form.Label>Surname</Form.Label>
              <Form.Control type="text" placeholder="Smith" />
              <Form.Text className="text-muted">Please input your surname</Form.Text>
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};
  
  export default HomePage;