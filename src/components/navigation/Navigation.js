import { Link } from "react-router-dom";
import classes from "./Navigation.module.css";

function Navigation() {
  return (
    <nav className={classes.nav}>
      <ul className={classes.links}>
        <li>
          <Link to="/">Main</Link>
        </li>
        <li>
          <Link to="/play">Play</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
