import React from "react";
import "../../styles/primary-button.css";

function PrimaryButton({ label, onClick }) {
  return (
    <button className="primary-button" onClick={onClick}>
      {label}
    </button>
  );
}

export default PrimaryButton;
