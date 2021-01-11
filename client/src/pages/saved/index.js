import React, { Component } from "react";
import Jumbotron from "../../components/jumbotron";
import Navbar from "../../components/navbar";
import API from "../../utils/API";

import WrapperCard from "../../components/wrappercard";
import CardItem from "../../components/carditem";


class SearchPage extends Component {

  state = {
    books: []
  };

  componentDidMount() {
    this.getSavedBooks();
  }

  getSavedBooks = () => {
    API.getSavedBooks()
      .then(res =>
        this.setState({
          books: res.data
        })
      )
      .catch(err => console.log(err));
  };

  handleBookDelete = id => {
    API.deleteBook(id).then(res => this.getSavedBooks());
  };

  render() {
  return (
    <>
    <Navbar />
    <Jumbotron />


    <WrapperCard 
      > 
      {this.state.books.length ? (
        <div>
              {this.state.books.map(book => (
                <CardItem
                key={book._id}
                title={book.title}
                link={book.link}
                authors={book.authors}
                description={book.description}
                image={book.image}
                Button={() => (
                  <button
                    onClick={() => this.handleBookDelete(book._id)}
                    className="btn ml-2 btnEl"
                  >
                    Delete
                  </button>
                )}
                />
              ))}
      </div>) : (console.log("nothing"))
      

                  }


      </WrapperCard>
  </>
  );
  }


}

export default SearchPage;