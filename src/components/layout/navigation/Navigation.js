import { Link } from "react-router-dom";
import Group from "../../Utils/group/Group";
import { CgInfo, CgProfile } from "react-icons/cg";
import classes from "./Navigation.module.css";

function Navigation() {
  return (
    <nav className={classes.nav}>
      <ul className={classes.links}>
        <Logo />
        <Group orientation="horizontal">
          <NavLink to="Typer/about">
            <CgInfo />
          </NavLink>
          <NavLink to="Typer/profile">
            <CgProfile />
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
      <Link to={"Typer"} className={classes.logo}>
        Typer
        <p className={classes.text}>The Typing App</p>
      </Link>
    </Group>
  );
}

export default Navigation;
