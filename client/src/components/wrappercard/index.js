import { Card } from "react-bootstrap";
import "./index.css";
import CardItem from "../carditem/index.js";

function WrapperCard() {
  return (
    <div className="wrapper">
      <br />
      <h4>Results</h4>
      <Card body>
        <CardItem />


      </Card>
    </div>
  )
}

export default WrapperCard;