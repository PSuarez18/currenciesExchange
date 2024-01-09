import React from "react";
import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import PrimaryButton from "../components/PrimaryButton/PrimaryButton.jsx";
import SecondaryButton from "../components/SecondaryButton/SecondaryButton.jsx";
import "../styles/home.css";

function Home() {
  return (
    <div className="home-page">
      <header>
        <Navbar />
      </header>
      <main></main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
