/*Libraries & Frameworks*/
import React from "react";
import { Card, Button, Container } from "react-bootstrap";


const FooterCard = ({title, desc, url, img}) => {
  return (
    <Card style={{ width: "9rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
          <Card.Text>{desc}</Card.Text>
        <Button href={url} target="_blank" variant="primary">
          Go!
        </Button>
      </Card.Body>
    </Card>
  );
};


const Footer = () => {
    const data = [
      { title : "LinkedIn", desc : "Find me on LinkedIn!", url : "https://www.linkedin.com/in/elliotrhysallen/", img : "https://blog.waalaxy.com/wp-content/uploads/2021/01/6.png.webp" },
      { title : "GitHub", desc : "Follow me on Github!", url : "https://github.com/ElliotRhysAl", img : "https://cdn3.iconfinder.com/data/icons/inficons/512/github.png" }
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
