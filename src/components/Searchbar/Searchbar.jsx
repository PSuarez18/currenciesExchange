import React from "react";
import "../../styles/searchbar.css";
import icon from "../../assets/svg/magnifier.svg";
function Searchbar({ onClick }) {
  //{ children, spacing, height, width }
  return (
    <div className="searchbar">
      <input className="search-input" type="text" placeholder="¿Qué divisas estás buscando hoy?" />
      <button className="search-button" type="submit" onClick={onClick}>
        <img className="search-icon" src={icon} alt="search icon" />
      </button>
    </div>
  );
}

export default Searchbar;
