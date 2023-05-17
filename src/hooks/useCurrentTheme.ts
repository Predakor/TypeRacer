import { AvaibleThemes } from "@utils/themes";
import { useState, useEffect } from "react";

function useCurrentTheme() {
  const [activeTheme, setActiveTheme] = useState<AvaibleThemes>();

  useEffect(() => {
    const currentTheme = document
      .querySelector("html")
      ?.getAttribute("data-theme");
    if (currentTheme) setActiveTheme(currentTheme as AvaibleThemes);
  }, []);

  return activeTheme;
}

export default useCurrentTheme;
