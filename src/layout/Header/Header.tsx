import Logo from "@components/Logo/Logo";
import { CgInfo, CgProfile } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import { Nav } from "..";

function Header() {
  return (
    <header>
      <Nav ariaLabel={""}>
        <Logo />
        <section className="navbar-end items-end">
          <NavLink className={"btn-ghost btn-sm btn"} to="about">
            <CgInfo className="text-3xl" />
          </NavLink>
          <NavLink className={"btn-ghost btn-sm btn"} to="profile">
            <CgProfile className="text-3xl" />
          </NavLink>
        </section>
      </Nav>
    </header>
  );
}
export default Header;
