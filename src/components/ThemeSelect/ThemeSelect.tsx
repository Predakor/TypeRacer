import themes from "@utils/themes";
import useCurrentTheme from "hooks/useCurrentTheme";

function ThemeSelect() {
  const activeTheme = useCurrentTheme();
  return (
    <select className="select-ghost select select-sm" data-choose-theme>
      {themes.map((theme) => (
        <option value={theme} selected={theme === activeTheme}>
          {theme}
        </option>
      ))}
    </select>
  );
}

export default ThemeSelect;
