import React from "react";
import Switch from "../Switch/Switch";
function ThemeSwitch() {
  const [theme, setTheme] = React.useState("dk");
  function changeTheme() {
    setTheme((prevTheme) => (prevTheme === "dk" ? "lt" : "dk"));
    console.log(theme);
  }

  const contentLeft = "LT";
  const contentRight = "DK";

  return (
    <Switch
      contentLeft={theme === "dk" ? contentLeft : contentRight}
      contentRight={theme === "lt" ? contentRight : contentLeft}
      onClick={changeTheme}
    />
  );
}
export default ThemeSwitch;
