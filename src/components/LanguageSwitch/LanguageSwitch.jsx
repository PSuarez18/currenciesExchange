import React from "react";
import Switch from "../Switch/Switch";
function LanguageSwitch() {
  const [language, setLanguage] = React.useState("en");
  function onClick() {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "es" : "en"));
    console.log(language);
  }

  const contentLeft = "ES";
  const contentRight = "EN";

  return (
    <Switch
      contentLeft={language === "en" ? contentLeft : contentRight}
      contentRight={language === "es" ? contentRight : contentLeft}
      onClick={onClick}
    />
  );
}
export default LanguageSwitch;
