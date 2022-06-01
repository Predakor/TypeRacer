import { Link, NavLink } from "react-router-dom";
import Group from "../../Utils/group/Group";
import { CgInfo, CgProfile } from "react-icons/cg";
import classes from "./Navigation.module.css";

function Navigation() {
  return (
    <nav className={classes.nav}>
      <Logo />

      <Group>
        <NavLink className={classes.link} to="typer/about">
          <CgInfo />
        </NavLink>
        <NavLink className={classes.link} to="typer/profile">
          <CgProfile />
        </NavLink>
      </Group>
    </nav>
  );
}

function Logo(props) {
  return (
    <Group orientation="vertical">
      <Link to="typer" className={classes.logo}>
        Typer
        <p className={classes.text}>The Typing App</p>
      </Link>
    </Group>
  );
}

export default Navigation;
