import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


const FooterCard = ({title, desc, url, img}) => {
  return (
    <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <p>{desc}</p> {/*couldn't get it to render unsing Card.Text */}
          <Button href={url} target="_blank" variant="primary">
            Go!
          </Button>
        </Card.Body>
      </Card>
  );
};

export default FooterCard;
