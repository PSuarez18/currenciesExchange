import React, { useEffect } from "react";
import Searchbar from "../Searchbar/Searchbar";
import Logo from "../Logo/Logo";
import "../../styles/navbar.css";
import LanguageSwitch from "../LanguageSwitch/LanguageSwitch";
import ThemeSwitch from "../ThemeSwitch.jsx/ThemeSwitch";
import { Link } from "react-router-dom";

function Navbar() {
  //if window width is less than 600px, then display hamburger menu
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, [windowWidth]);
  return (
    <div className="navbar">
      <Logo />
      <Searchbar onClick={searchFunc} />
      {windowWidth < 700 ? hamburgerMenu() : wide()}
    </div>
  );
}

export default Navbar;

function searchFunc() {
  alert("searchFunc");
}

function hamburgerMenu() {
  return <>burger</>;
}
function wide() {
  return (
    <>
      <nav className="navigation-links">
        <Link to="/">Home</Link>
        <Link to="/history">Historial</Link>
        <Link to="/contact">Contacto</Link>
      </nav>
      <div className="switches">
        <LanguageSwitch />
        <ThemeSwitch />
      </div>
    </>
  );
}
