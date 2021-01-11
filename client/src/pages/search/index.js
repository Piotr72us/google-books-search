import React, { Component } from "react";
import Jumbotron from "../../components/jumbotron";
import Navbar from "../../components/navbar";
import Search from "../../components/searchinput";
import WrapperCard from "../../components/wrappercard";
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
        <WrapperCard books={this.state.books} />
      </>
    );
  }
}

export default SearchPage;