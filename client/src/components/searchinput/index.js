import { Row, Col, InputGroup, FormControl, Button } from "react-bootstrap";
import "./index.css";

function searchInput() {
  return (
    <div className="wrapper">
      <Row>
        <Col sm={10}>
          <h4 className="title">Book Search</h4>
          <h6 className="title">Search</h6>
          <InputGroup>
            <FormControl
              placeholder="Harry Potter"
              aria-label="search"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <Button className="btnStyling" variant="primary">Search</Button>
        </Col>
      </Row>
    </div>
  )
}

export default searchInput;