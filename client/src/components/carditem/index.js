import { Card, Row, Col, Button } from "react-bootstrap";
import "./index.css";

function CardItem(props) {
  return (
    <Card>
      <Row>
        <Col sm={10}>

          <h3 className="title padded">{props.title}</h3>
          <h4 className="author padded"> written by: Author</h4>
        </Col>
        <Col sm={2}>  
        <Button className="btnEl" as="input" type="button" value="View" onClick={() => window.location.href="https://books.google.com/books?id=f280CwAAQBAJ&dq=harrypotter&hl=en&source=gbs_api"} />
        <Button className="btnEl" as="input" type="button" value="Save" />
        </Col>
      </Row>
      <Row>
        <Col sm={2}>
          <img className="padded" alt="book" src={"http://books.google.com/books/content?id=f280CwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"}/>
        </Col>
        <Col className="title" sm={10}>All seven eBooks in the multi-award winning, internationally bestselling Harry Potter series, available as one download with stunning cover art by Olly Moss. Enjoy the stories that have captured the imagination of millions worldwide.</Col>
      </Row>
    </Card>
  )
}

export default CardItem;