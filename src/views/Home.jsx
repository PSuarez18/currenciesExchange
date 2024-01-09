import React from "react";
import HeaderXL from "../components/HeaderXL/HeaderXL.jsx";
import PrimaryButton from "../components/PrimaryButton/PrimaryButton.jsx";
import SecondaryButton from "../components/SecondaryButton/SecondaryButton.jsx";
import HorizontalFlex from "../components/HorizontalFlex/HorizontalFlex.jsx";
import "../styles/home.css";
import Footer from "../components/Footer/Footer.jsx";
function Home() {
  return (
    <div className="home-page">
      <header>
        <HeaderXL headerXL="Home" />
        <HorizontalFlex childrenMarginRight={"2 rem"}>
          <PrimaryButton label="Primary Button" />
          <SecondaryButton label="Secondary Button" />
        </HorizontalFlex>

      </header>
      <main>

      </main>
      <footer>
        <Footer />

      </footer>

    </div>
  );
}

export default Home;
