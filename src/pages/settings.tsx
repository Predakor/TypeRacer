import SettingsGroup from "@components/Settings/SettingsGroup";
import ThemeSettings from "@components/Settings/ThemeSettings";
import { useGameSettings } from "contexts/settings-context";

type PunctuationOptions = "numbers" | "punctuation" | "uppercase";

function Settings() {
  const [settings, setSettings] = useGameSettings();
  const { mode, wordCount, time, numbers, punctuation, uppercase } = settings;

  const activePunctuationOptions = [
    punctuation ? "punctuation" : "",
    uppercase ? "uppercase" : "",
    numbers ? "numbers" : "",
  ];

  return (
    <div className={"row-span-full grid gap-4 p-4 md:grid-cols-2"}>
      <h2 className={"sr-only"}>Settings</h2>

      <section
        className={"flex flex-col place-content-between items-stretch gap-2"}
      >
        <SettingsGroup
          title="Mode"
          settings={["time", "words", "quotes"]}
          active={[mode]}
          onClick={(setting) => setSettings({ mode: setting })}
        />

        {mode === "words" ? (
          <SettingsGroup
            title="Words"
            settings={["10", "25", "50", "100"]}
            active={[`${wordCount}`]}
            onClick={(setting) => setSettings({ wordCount: setting })}
          />
        ) : (
          <SettingsGroup
            title="Duration"
            settings={["30", "60", "90", "120"]}
            active={[`${time}`]}
            onClick={(setting) => setSettings({ time: setting })}
          />
        )}

        <SettingsGroup
          title="Punctuation"
          settings={["punctuation", "uppercase", "numbers"]}
          active={activePunctuationOptions}
          onClick={(setting: PunctuationOptions) =>
            setSettings({ [setting]: !settings[setting] })
          }
        />
      </section>

      <section
        className={"flex flex-col place-content-between items-stretch gap-2"}
      >
        <ThemeSettings />
      </section>
    </div>
  );
}
export default Settings;
