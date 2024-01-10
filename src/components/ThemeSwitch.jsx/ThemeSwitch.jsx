import React from "react";
import Switch from "../Switch/Switch";
function ThemeSwitch() {
  const [theme, setTheme] = React.useState("dk");
  //get 'prefers-color-scheme' from user's browser and set theme
  React.useEffect(() => {
    const theme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dk"
      : "lt";
    setTheme(theme);
  }, []);

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
