import { Card, Row, Col } from "react-bootstrap";
import "./index.css";

function CardItem({ title, authors, link, description, image, Button }) {
  return (
    <Card>
      <Row>
        <Col sm={10}>
          <h3 className="title padded">{title}</h3>
          <h6 className="author padded"> written by: {authors}</h6>
        </Col>
        <Col sm={2}>  
        <div className="adjustBtn">
          <span><a rel="noreferrer" target="_blank" href={link}><button className="btn btn-dark" >View
            {/* <Button className="btnEl" as="input" type="button" value="View"/> */}
          </button></a>
          <Button />
          </span>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm={2}>
          <img className="padded" alt={title} src={image}/>
        </Col>
        <Col className="title" sm={10}>{description}</Col>
      </Row>
    </Card>
  )
}

export default CardItem;