import Button from "@components/Button/Button";
import SettingsGroup from "@components/Settings/SettingsGroup";
import ThemeSettings from "@components/Settings/ThemeSettings";
import { useGameSettings } from "contexts/settings-context";

function Settings() {
  const [settings, setSettings] = useGameSettings();
  const { mode, wordCount, time, numbers, punctuaction, uppercase } = settings;
  return (
    <div
      className={
        "grid items-center gap-4 md:grid-cols-2 md:justify-items-center"
      }
    >
      <h2 className={"col-span-full text-3xl font-semibold text-primary"}>
        Settings
      </h2>

      <SettingsGroup
        title="Mode"
        settings={["time", "words", "quotes"]}
        active={mode}
        onClick={(setting) => setSettings({ mode: setting })}
      />

      {mode === "words" ? (
        <SettingsGroup
          title="Words"
          settings={["10", "25", "50", "100"]}
          active={`${wordCount}`}
          onClick={(setting) => setSettings({ wordCount: setting })}
        />
      ) : (
        <SettingsGroup
          title="Duration"
          settings={["30", "60", "90", "120"]}
          active={`${time}`}
          onClick={(setting) => setSettings({ time: setting })}
        />
      )}

      <section>
        <h3 className={"text-2xl font-semibold"}>Extras</h3>
        <div className={"btn-group"}>
          <Button
            className={`${punctuaction ? "btn-active" : ""}`}
            onClick={() => setSettings({ punctuaction: !punctuaction })}
            ariaLabel="Add punctuation to test"
          >
            punctuaction
          </Button>
          <Button
            className={`${numbers ? "btn-active" : ""}`}
            onClick={() => setSettings({ numbers: !numbers })}
            ariaLabel="Add Numbers to test"
          >
            numbers
          </Button>
          <Button
            className={`${uppercase ? "btn-active" : ""}`}
            onClick={() => setSettings({ uppercase: !uppercase })}
            ariaLabel="Add Uppercase letters to test"
          >
            uppercase
          </Button>
        </div>
      </section>

      <ThemeSettings />
    </div>
  );
}
export default Settings;
