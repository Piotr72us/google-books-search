import React from "react";
import Jumbotron from "../../components/jumbotron";
import Navbar from "../../components/navbar";
import Search from "../../components/searchinput";

function SearchPage() {

  return (
    <>
      <Navbar />
      <Jumbotron />
      <Search />
    </>
  )
}

export default SearchPage;