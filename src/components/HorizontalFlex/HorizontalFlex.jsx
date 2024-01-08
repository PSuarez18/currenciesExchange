import React from "react";
import "../../styles/horizontal-flex.css";
function HorizontalFlex(props) {
  //add spacer of size props.childrenMarginRight between each child

  return <div className="horizontal-flex">{props.children}</div>;
}

export default HorizontalFlex;
