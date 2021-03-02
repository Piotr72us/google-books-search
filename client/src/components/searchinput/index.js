import { Row, Col, InputGroup, FormControl, Button } from "react-bootstrap";
import "./index.css";

function searchInput({ handleInputChange, handleFormSubmit, q }) {
  return (
    <div className="wrapper">
      <Row>
      <Col>
      </Col>
        <Col sm={6} className="text-center">
          {/* <h4 className="title">Search Book</h4> */}
          {/* <h6 className="title">Search</h6> */}
          <InputGroup>
            <FormControl
              value={q}
              name="q"
              onChange={handleInputChange}
              placeholder="enter title or author"
              aria-label="search"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <Button onClick={handleFormSubmit} className="btn btn-dark btnStyling" variant="primary">Search</Button>
        </Col>
        <Col>
      </Col>
      </Row>
    </div>
  )
}

export default searchInput;