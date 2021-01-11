import { Row, Col, InputGroup, FormControl, Button } from "react-bootstrap";
import "./index.css";

function searchInput({ handleInputChange, handleFormSubmit, q }) {
  return (
    <div className="wrapper">
      <Row>
        <Col sm={12}>
          <h4 className="title">Book Search</h4>
          <h6 className="title">Search</h6>
          <InputGroup>
            <FormControl
              value={q}
              name="q"
              onChange={handleInputChange}
              placeholder="Search"
              aria-label="search"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <Button onClick={handleFormSubmit} className="btnStyling" variant="primary">Search</Button>
        </Col>
      </Row>
    </div>
  )
}

export default searchInput;