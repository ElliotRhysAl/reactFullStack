import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


const Home = () => {
    return (
      <Container className="p-4">
      <h1 className="text-2xl font-bold">Welcome to Home Page</h1>
      <p>This is the homepage of our React site.</p>

      <Form>
        <Row>
          <Col>
          <Form.Group conrtollid="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" placeholder="John" />              
            <Form.Text>Please input yor name</Form.Text>
          </Form.Group>
          </Col>
          <Col>
          <Form.Group conrtollid="formSurname">
            <Form.Label>Name</Form.Label>
            <Form.Control type="surname" placeholder="Smith" />
            <Form.Text>Please input yor Surname</Form.Text>
          </Form.Group>
          </Col> 
        </Row>
      </Form>
      </Container>
    );
  };
  
  export default Home;