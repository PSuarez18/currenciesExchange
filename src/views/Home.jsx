import React from "react";
import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import VideoInfo from "../components/VideoInfo/VideoInfo.jsx";
import PrimaryButton from "../components/PrimaryButton/PrimaryButton.jsx";
import SecondaryButton from "../components/SecondaryButton/SecondaryButton.jsx";
import "../styles/home.css";
import AsideRight from "../components/AsideRIght/AsideRight.jsx";
import AsideLeft from "../components/AsideLeft/AsideLeft.jsx";

function Home() {
  return (
    <div className="home-page">
      <header>
        <Navbar />
      </header>
      <main>
        <div className="container-mainL">
          <AsideRight />
        </div>
        <div className="container-mainR">
          <AsideLeft />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
