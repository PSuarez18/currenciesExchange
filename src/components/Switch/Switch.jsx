import React from "react";
import "../../styles/switch.css";
function Switch({ contentLeft, contentRight, onClick }) {
  return (
    <div className="switch-container">
      <div className="button r" id="button-3" onClick={onClick}>
        <input type="checkbox" className="checkbox" />
        <div className="knobs">
          <span className="knob-content">{contentLeft}</span>
        </div>
        <div className="layer"></div>
      </div>
    </div>
  );
}

export default Switch;
