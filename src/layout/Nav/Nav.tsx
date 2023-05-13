import Group from "@components/Group/Group";
import Logo from "@components/Logo/Logo";
import { CgInfo, CgProfile } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import classes from "./Nav.module.css";

function Navigation() {
  return (
    <nav className={classes.nav}>
      <Logo classes={classes} />

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

export default Navigation;
