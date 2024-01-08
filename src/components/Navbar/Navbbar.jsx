import React from "react";
import HorizontalFlex from "../HorizontalFlex/HorizontalFlex";
import Searchbar from "../Searchbar/Searchbar";

function Navbbar() {
  return (
    <HorizontalFlex>
      <Searchbar onClick={searchFunc} />
    </HorizontalFlex>
  );
}

export default Navbbar;

function searchFunc() {
  alert("searchFunc");
}
