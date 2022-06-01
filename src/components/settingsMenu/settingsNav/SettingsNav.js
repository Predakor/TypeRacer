import classes from "./SettingsNav.module.css";
import { AiFillCaretRight } from "react-icons/ai";

function settingsNav(props) {
  const setTab = (tab) => props.setActiveTab(tab);
  return (
    <nav className={classes.nav}>
      <SettingButton onClick={setTab} tab={"Game"} currentTab={props.activeTab} />
      <SettingButton onClick={setTab} tab={"Theme"} currentTab={props.activeTab} />
      <SettingButton onClick={setTab} tab={"Extra"} currentTab={props.activeTab} />
    </nav>
  );
}
function SettingButton(props) {
  const active = props.currentTab === props.tab ? classes.activeTab : "";
  return (
    <button
      className={`${classes.button} ${active}`}
      onClick={() => {
        props.onClick(props.tab);
      }}>
      {props.tab}
    </button>
  );
}
export default settingsNav;
