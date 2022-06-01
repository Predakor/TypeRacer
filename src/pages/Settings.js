import { useContext, useState } from "react";
import Panel from "../components/layout/panel/Panel";
import SettingsNav from "../components/settingsMenu/settingsNav/SettingsNav";
import GameSettings from "../components/settingsMenu/settingsContent/GameSettings";
import ThemeSettings from "../components/settingsMenu/settingsContent/ThemeSettings";
import ExtraSettings from "../components/settingsMenu/settingsContent/ExtraSettings";
import SettingsContainer from "../components/settingsMenu/settingsContent/SettingsContainer";
import settingsContext from "../store/settings-context";

function Settings() {
  const [activeTab, setActiveTab] = useState("Game");
  const settings = useContext(settingsContext);

  return (
    <Panel>
      <SettingsNav setActiveTab={setActiveTab} activeTab={activeTab} />
      <SettingsContainer>
        {activeTab === "Game" && <GameSettings />}
        {activeTab === "Theme" && <ThemeSettings />}
        {activeTab === "Extra" && <ExtraSettings />}
      </SettingsContainer>
    </Panel>
  );
}
export default Settings;
