import React from "react";
import HorizontalFlex from "../HorizontalFlex/HorizontalFlex";

function Searchbar({ onClick }) {
  return (
    <HorizontalFlex>
      <input type="text" placeholder="Search" />
      <button type="submit" onClick={onClick}>
        Search
      </button>
    </HorizontalFlex>
  );
}

export default Searchbar;
