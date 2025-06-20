import React from "react";
import { Container, Row, Col, Image, FloatingLabel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


const ProfilePage = () => {
  return (
    <>
      <Container className="p-4">
        <Row>
          <Col xs="auto"> 
            <Image
        src=""
        onError={e => { e.target.src = "https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg"; }}
        roundedCircle style={{ width: "5rem", height: "5rem", objectFit: "cover" }}
      />
        </Col>
        <Col>
          <h1 className="text-2xl font-bold">Profile</h1>
          <p>Welcome to your profile</p>
        </Col>  
      </Row>
      </Container>

      <Container>
      </Container>
    </>
  );
};


export default ProfilePage;