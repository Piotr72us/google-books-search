import { Card } from "react-bootstrap";
import "./index.css";
import CardItem from "../carditem/index.js";

function WrapperCard(props) {
  return (
    <div className="wrapper">
      <br />
      {props.books.length ? (
        <>
          <h4>Results</h4>
          <Card body>
            {props.books.map(book => (
              <CardItem
                key={book.id}
                // id={book.id}
                title={book.volumeInfo.title}
                authors={book.volumeInfo.authors}
                description={book.volumeInfo.description}
                image={book.volumeInfo.imageLinks.thumbnail}
                link={book.volumeInfo.infoLink}
                handleBookSave={props.handleBookSave}
              />
            ))
            }
          </Card>
        </>
      ) : (console.log("nothing found yet"))
      }
    </div>
  )
}

export default WrapperCard;