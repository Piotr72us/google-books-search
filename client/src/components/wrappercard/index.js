import { Card } from "react-bootstrap";

function WrapperCard (props) {
  return(
    <Card body> {props.children}</Card>
  )
}

export default WrapperCard;