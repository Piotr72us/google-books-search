import { InputGroup, FormControl, Button } from "react-bootstrap";

function searchInput() {
  return (
    <>
      <InputGroup>
        <FormControl
          placeholder="search"
          aria-label="search"
          aria-describedby="basic-addon1"
        />


      </InputGroup>
      <Button variant="primary">Primary</Button>
    </>
  )
}

export default searchInput;