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
          <a target="_blank" rel="noopener noreferrer" href={props.link}>
            <Button className="btnEl" as="input" type="button" value="View"/>
          </a>
          <Button className="btnEl" as="input" type="button" value="Save" onClick={() => props.handleBookSave()}/>
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