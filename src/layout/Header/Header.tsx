import Logo from "@components/Logo/Logo";
import { useGameState } from "contexts/gameState-context";
import { CgInfo } from "react-icons/cg";
import { VscSettings } from "react-icons/vsc";
import { NavLink } from "react-router-dom";
import { Nav } from "..";

function Header() {
  const [{ started, paused }] = useGameState();
  const visible = started && !paused ? "opacity-0" : "";
  return (
    <header className={`${visible} transition-opacity duration-1000`}>
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
