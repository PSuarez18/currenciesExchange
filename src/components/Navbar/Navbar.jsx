import React, { useEffect } from "react";
import HorizontalFlex from "../HorizontalFlex/HorizontalFlex";
import Searchbar from "../Searchbar/Searchbar";
import Logo from "../Logo/Logo";
import "../../styles/navbar.css";
import LanguageSwitch from "../LanguageSwitch/LanguageSwitch";
import ThemeSwitch from "../ThemeSwitch.jsx/ThemeSwitch";
import { Link } from "react-router-dom";
import Header from "../Header/HeaderXL";

function Navbar() {
  //if window width is less than 600px, then display hamburger menu
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, [windowWidth]);
  return (
    <HorizontalFlex spacing={"space-around"} height={"3rem"} width={"100%"}>
      <Logo />
      <Searchbar onClick={searchFunc} />
      {windowWidth < 600 ? hamburgerMenu() : horizontalFlex()}
    </HorizontalFlex>
  );
}

export default Navbar;

function searchFunc() {
  alert("searchFunc");
}

function hamburgerMenu() {
  return <Header Header="BURGER" />;
}
function horizontalFlex() {
  return (
    <HorizontalFlex spacing={"space-between"}>
      <HorizontalFlex spacing={"space-around"}>
        <Link to="/">Home</Link>
        <Link to="/history">History</Link>
        <Link to="/contact">Contact</Link>
      </HorizontalFlex>

      <LanguageSwitch />
      <ThemeSwitch />
    </HorizontalFlex>
  );
}
