import React from "react";
import "../../styles/secondary-button.css";
function SecondaryButton({ label, onClick }) {
  return (
    <button className="secondary-button" onClick={onClick}>
      {label}
    </button>
  );
}

export default SecondaryButton;
