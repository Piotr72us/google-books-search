import React, { Component } from "react";
import Jumbotron from "../../components/jumbotron";
import Navbar from "../../components/navbar";
import Search from "../../components/searchinput";
import WrapperCard from "../../components/wrappercard";
import CardItem from "../../components/carditem";
import API from "../../utils/API";

class SearchPage extends Component {

  state = {
    books: [],
    q: "",
    message: "Search for a book"
  }

  handleInputChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    });
  }

  getBooks = () => {
    API.getBooks(this.state.q)
      .then(res =>
        this.setState({
          books: res.data
        })
      )
      .catch(() =>
        this.setState({
          books: [],
          message: "Nothing new found"
        })
      );
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.getBooks();
  }

  handleBookSave = id => {
    console.log("The book was saved +", id)

    const book = this.state.books.find(book => book.id === id);

    API.saveBook({
      googleId: book.id,
      title: book.volumeInfo.title,
      link: book.volumeInfo.infoLink,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail
    }).then(() => this.getBooks());


  };


  render() {
    return (
      <>
        <Navbar />
        <Jumbotron />
        <Search
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
          q={this.state.q}
        />


        <WrapperCard 
          > 
          {this.state.books.length ? (
            <div>
                  {this.state.books.map(book => (
                    <CardItem
                      key={book.id}
                      title={book.volumeInfo.title}
                      link={book.volumeInfo.infoLink}
                      authors={book.volumeInfo.authors}
                      description={book.volumeInfo.description}
                      image={book.volumeInfo.imageLinks.thumbnail}
                      Button={() => (
                        <button
                          onClick={() => this.handleBookSave(book.id)}
                          className="btn btn-primary btnEl"
                        >
                          Save
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