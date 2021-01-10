import React from "react";
import Jumbotron from "../../components/jumbotron";
import Navbar from "../../components/navbar";
import Search from "../../components/searchinput";
import WrapperCard from "../../components/wrappercard";

function SearchPage() {

  return (
    <>
      <Navbar />
      <Jumbotron />
      <Search />
      <WrapperCard />
    </>
  )
}

export default SearchPage;