import { Link } from "react-router-dom";
import { BsKeyboard } from "react-icons/bs";
function Logo() {
  return (
    <Link
      to="/"
      className="navbar-start text-accent duration-150 hover:opacity-90"
      aria-label="Go to home page"
    >
      <BsKeyboard className="text-5xl" />
      <span className="hidden md:indicator">
        <h1 className="p-2 text-4xl font-bold">Typer</h1>
        <p className="indicator-bottom indicator-item text-primary ">
          the typing app
        </p>
      </span>
    </Link>
  );
}

export default Logo;
