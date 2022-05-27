import { Link } from "react-router-dom";
import Group from "../../Utils/group/Group";
import { IoPersonOutline } from "react-icons/io5";
import { FiSettings } from "react-icons/fi";
import classes from "./Navigation.module.css";

function Navigation() {
  return (
    <nav className={classes.nav}>
      <ul className={classes.links}>
        <Logo></Logo>
        <Group orientation="horizontal">
          <NavLink to="settings">
            <FiSettings />
          </NavLink>
          <NavLink to="profile">
            <IoPersonOutline />
          </NavLink>
        </Group>
      </ul>
    </nav>
  );
}

function NavLink(props) {
  return (
    <li className={classes.link}>
      <Link to={`/${props.to}`}>{props.children}</Link>
    </li>
  );
}
function Logo(props) {
  return (
    <Group orientation="vertical">
      <Link to={"/"} className={classes.logo}>
        Typer
        <p className={classes.text}>The Typing App</p>
      </Link>
    </Group>
  );
}

export default Navigation;
