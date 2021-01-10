import React, { Component } from "react";
import Jumbotron from "../../components/jumbotron";
import Navbar from "../../components/navbar";
import Search from "../../components/searchinput";
import WrapperCard from "../../components/wrappercard";

class SearchPage extends Component {
render(){
  return (
    <>
      <Navbar />
      <Jumbotron />
      <Search />
      <WrapperCard />
    </>
  );
}
}

export default SearchPage;