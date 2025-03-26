import CardComp from "./Card";
import { Container } from "react-bootstrap";

const Footer = () => {
    const data = [
      { title : "LinkedIn", desc : "Find me on LinkedIn", url : "https://www.linkedin.com/in/elliotrhysallen/", img : "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png" },
      { title : "LinkedIn", desc : "Find me on LinkedIn", url : "https://www.linkedin.com/in/elliotrhysallen/", img : "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png" }
    ]
  

  return (
    <Container className="d-flex flex-wrap gap-3">
      {data.map((item, index) => (
            <CardComp 
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
