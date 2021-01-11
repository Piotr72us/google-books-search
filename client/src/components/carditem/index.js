import { Card, Row, Col, Button } from "react-bootstrap";
import "./index.css";

function CardItem(props) {
  return (
    <Card>
      <Row>
        <Col sm={10}>

          <h3 className="title padded">{props.title}</h3>
          <h6 className="author padded"> written by: {props.authors}</h6>
        </Col>
        <Col sm={2}>  
        <Button className="btnEl" as="input" type="button" value="View" onClick={() => window.location.href="https://books.google.com/books?id=f280CwAAQBAJ&dq=harrypotter&hl=en&source=gbs_api"} />
        <Button className="btnEl" as="input" type="button" value="Save" />
        </Col>
      </Row>
      <Row>
        <Col sm={2}>
          <img className="padded" alt="book" src={props.image}/>
        </Col>
        <Col className="title" sm={10}>{props.description}</Col>
      </Row>
    </Card>
  )
}

export default CardItem;