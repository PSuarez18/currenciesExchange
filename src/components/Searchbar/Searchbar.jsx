import React from "react";
import HorizontalFlex from "../HorizontalFlex/HorizontalFlex";
import "../../styles/searchbar.css";
import icon from "../../assets/svg/magnifier.svg";
function Searchbar({ onClick }) {
  //{ children, spacing, height, width }
  return (
    <HorizontalFlex width={"25%"} height={"100%"}>
      <input className="search-input" type="text" placeholder="Search" />
      <button className="search-button" type="submit" onClick={onClick}>
        <img className="search-icon" src={icon} alt="search icon" />
      </button>
    </HorizontalFlex>
  );
}

export default Searchbar;
