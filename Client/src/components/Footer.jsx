/*Libraries & Frameworks*/
import React from "react";
import { Card, Button, Container } from "react-bootstrap";

const FooterCard = ({title, description, url, img}) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <p>{description}</p> {/*couldn't get it to render unsing Card.Text */}
        <Button href={url} target="_blank" variant="primary">
          Go!
        </Button>
      </Card.Body>
    </Card>
  );
};


const Footer = () => {
    const data = [
      { title : "LinkedIn", desc : "Find me on LinkedIn", url : "https://www.linkedin.com/in/elliotrhysallen/", img : "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png" },
      { title : "LinkedIn", desc : "Find me on LinkedIn", url : "https://www.linkedin.com/in/elliotrhysallen/", img : "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png" }
    ]
  

  return (
    <Container className="d-flex flex-wrap gap-3">
      {data.map((item, index) => (
        <FooterCard 
          key={index} 
          title={item.title} 
          desc={item.desc} 
          url={item.url} 
          img={item.img}
        />
      ))}
    </Container>
  );
};

export default Footer;
