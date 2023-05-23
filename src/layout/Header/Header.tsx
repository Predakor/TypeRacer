import Logo from "@components/Logo/Logo";
import { CgInfo } from "react-icons/cg";
import { VscSettings } from "react-icons/vsc";
import { NavLink } from "react-router-dom";
import { Nav } from "..";

function Header() {
  return (
    <header>
      <Nav ariaLabel={"Primary"}>
        <Logo />
        <section className="navbar-end items-end">
          <NavLink className={"btn-ghost btn-sm btn"} to="about">
            <CgInfo className="text-2xl" />
          </NavLink>
          <NavLink className={"btn-ghost btn-sm btn"} to="settings">
            <VscSettings className="text-2xl" />
          </NavLink>
        </section>
      </Nav>
    </header>
  );
}
export default Header;
