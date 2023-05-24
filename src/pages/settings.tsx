import Button from "@components/Button/Button";
import SettingsGroup from "@components/SettingsGroup/SettingsGroup";
import ThemeSelect from "@components/ThemeSelect/ThemeSelect";
import { useGameSettings } from "contexts/settings-context";
function Settings() {
  const [settings, setSettings] = useGameSettings();
  const { mode, wordCount, time } = settings;
  return (
    <div
      className={
        "grid items-center justify-around gap-4 md:grid-cols-2 md:justify-items-center"
      }
    >
      <h2 className={"col-span-full text-primary"}>Settings</h2>

      <SettingsGroup
        title="Mode"
        settings={["time", "words", "quotes"]}
        active={mode}
        onClick={(setting) => setSettings({ mode: setting })}
      />

      {mode === "words" ? (
        <SettingsGroup
          title="Words"
          settings={["30", "50", "90"]}
          active={`${wordCount}`}
          onClick={(setting) => setSettings({ wordCount: setting })}
        />
      ) : (
        <SettingsGroup
          title="Duration"
          settings={["30", "60", "90"]}
          active={`${time}`}
          onClick={(setting) => setSettings({ time: setting })}
        />
      )}

      <section>
        <h3>Extras</h3>
        <Button ariaLabel="Add punctuation to test">punctuaction</Button>
        <Button ariaLabel="Add Numbers to test">punctuaction</Button>
        <Button ariaLabel="Add Uppercase letters to test">punctuaction</Button>
      </section>

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
