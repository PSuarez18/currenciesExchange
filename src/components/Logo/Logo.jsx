import React from "react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/" style={{ margin: "4px 4px 0px 4px"}}>
      <img
        src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        alt="Google Logo"
        style={{
          height: "1.8rem",
          
        }}
      />
    </Link>
  );
}

export default Logo;
