import React from "react";
import HeaderXL from "../components/HeaderXL/HeaderXL.jsx";
import PrimaryButton from "../components/PrimaryButton/PrimaryButton.jsx";
import SecondaryButton from "../components/SecondaryButton/SecondaryButton.jsx";
import HorizontalFlex from "../components/HorizontalFlex/HorizontalFlex.jsx";
import "../styles/home.css";
import Navbbar from "../components/Navbar/Navbbar.jsx";
function Home() {
  return (
    <div className="home-page">
      <Navbbar />
      <HeaderXL headerXL="Home" />
      <HorizontalFlex childrenMarginRight={"2 rem"}>
        <PrimaryButton label="Primary Button" />
        <SecondaryButton label="Secondary Button" />
      </HorizontalFlex>
    </div>
  );
}

export default Home;
