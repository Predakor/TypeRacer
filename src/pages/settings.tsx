import SettingButon from "@components/SettingsMenu/SettingsButton/SettingsButon";
import Panel from "@layout/Section/Section";
import { Section } from "@layout/index";
import settingsContext from "@store/settings-context";
import { useContext } from "react";
function Settings() {
  const settings = useContext(settingsContext);

  return (
    <Panel>
      <h2>Settings</h2>

      <Section>
        <div>
          <p>Mode</p>
          <SettingButon onClick={() => console.log(1)}>Words</SettingButon>
          <SettingButon onClick={() => console.log(1)}>Quotes</SettingButon>
          <SettingButon onClick={() => console.log(1)}>Time</SettingButon>
        </div>
        <div>
          <p>Duration</p>
          <SettingButon onClick={() => console.log(1)}>short</SettingButon>
          <SettingButon onClick={() => console.log(1)}>medium</SettingButon>
          <SettingButon onClick={() => console.log(1)}>long</SettingButon>
        </div>

        <div>
          <p>Extras</p>
          <SettingButon onClick={() => console.log(1)}>
            punctuaction
          </SettingButon>
          <SettingButon onClick={() => console.log(1)}>numbers</SettingButon>
          <SettingButon onClick={() => console.log(1)}>upperCase</SettingButon>
        </div>
      </Section>

      <Section>
        <div>
          <p>Predefine thems</p>
          <select name="themes" id="">
            <option value="theme1">theme1</option>
            <option value="theme2">theme2</option>
            <option value="theme3">theme3</option>
            <option value="theme4">theme4</option>
            <option value="theme5">theme5</option>
          </select>
        </div>
        <div>
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
      </Section>
    </Panel>
  );
}
export default Settings;
