import SettingsGroup from "@components/SettingsGroup/SettingsGroup";
import ThemeSelect from "@components/ThemeSelect/ThemeSelect";
import useGameSettings from "hooks/useGameSettings";
import { useState } from "preact/hooks";
function Settings() {
  const settings = useGameSettings();

  const [mode, setMode] = useState(settings.mode);

  return (
    <div
      className={
        "grid items-center justify-around gap-4 md:grid-cols-2 md:justify-items-center"
      }
    >
      <h2 className={"col-span-full text-primary"}>Settings</h2>

      <SettingsGroup
        title="Mode"
        settings={["mode", "words", "quotes"]}
        active={mode}
        onClick={setMode}
      />

      <SettingsGroup
        title="Duration"
        settings={["30", "60", "90"]}
        active={mode}
        onClick={setMode}
      />

      <div>
        <p>Extras</p>
        <button className="btn-ghost btn flex" onClick={() => console.log(1)}>
          punctuaction
        </button>
        <button className="btn-ghost btn" onClick={() => console.log(1)}>
          numbers
        </button>
        <button
          className="btn-ghost btn flex text-xl"
          onClick={() => console.log(1)}
        >
          upperCase
        </button>
      </div>

      <div className={"md:col-start-2 md:row-start-2 md:row-end-4"}>
        <ThemeSelect />

        <h3>Custom theme</h3>
        <div>
          <p>Main Color</p>
        </div>
        <div>
          <p>Secondary Color</p>
        </div>
        <div>
          <p>Accent Color</p>
        </div>
        <div>
          <p>Text Color </p>
        </div>
      </div>
    </div>
  );
}
export default Settings;
