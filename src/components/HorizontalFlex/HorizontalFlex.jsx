import React from "react";
import "../../styles/horizontal-flex.css";
function HorizontalFlex({ children, spacing, height, width }) {
  return (
    <div
      className="horizontal-flex"
      style={{
        justifyContent: spacing ? spacing : "center",
        height: height ? height : "auto",
        width: width ? width : "auto",
      }}
    >
      {children}
    </div>
  );
}

export default HorizontalFlex;
