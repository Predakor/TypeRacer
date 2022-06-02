import { useContext } from "react";
import settingsContext from "../store/settings-context";
import SettingButton from "../components/settingsMenu/settingsButon/SettingsButon";
import classes from "../components/settingsMenu/SettingsMenu.module.css";

function Settings() {
  const settings = useContext(settingsContext);

  return (
    <div className={classes.panel}>
      <h2>Settings</h2>

      <div className={classes.section}>
        <div className={classes.setting}>
          <p>Mode</p>
          <SettingButton onClick={() => console.log(1)}>Words</SettingButton>
          <SettingButton onClick={() => console.log(1)}>Quotes</SettingButton>
          <SettingButton onClick={() => console.log(1)}>Time</SettingButton>
        </div>
        <div className={classes.setting}>
          <p>Duration</p>
          <SettingButton onClick={() => console.log(1)}>short</SettingButton>
          <SettingButton onClick={() => console.log(1)}>medium</SettingButton>
          <SettingButton onClick={() => console.log(1)}>long</SettingButton>
        </div>

        <div className={classes.setting}>
          <p>Extras</p>
          <SettingButton onClick={() => console.log(1)}>punctuaction</SettingButton>
          <SettingButton onClick={() => console.log(1)}>numbers</SettingButton>
          <SettingButton onClick={() => console.log(1)}>upperCase</SettingButton>
        </div>
      </div>

      <div className={classes.section}>
        <div className={classes.setting}>
          <p>Predefine thems</p>
          <select name="themes" id="">
            <option value="theme1">theme1</option>
            <option value="theme2">theme2</option>
            <option value="theme3">theme3</option>
            <option value="theme4">theme4</option>
            <option value="theme5">theme5</option>
          </select>
        </div>

        <div className={classes["custom-theme"]}>
          <h3>Custom theme</h3>
          <div className={classes.themeSetting}>
            <p>Main Color</p>
          </div>
          <div className={classes.themeSetting}>
            <p>Secondary Color</p>
          </div>
          <div className={classes.themeSetting}>
            <p>Accent Color</p>
          </div>
          <div className={classes.themeSetting}>
            <p>Text Color </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Settings;
