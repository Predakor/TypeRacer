import Group from "@components/Group/Group";
import { Link } from "react-router-dom";

function Logo({ classes }: { classes: Record<string, string> }) {
  return (
    <Group orientation="vertical">
      <Link to="typer" className={classes.logo}>
        Typer
        <p className={classes.text}>The Typing App</p>
      </Link>
    </Group>
  );
}

export default Logo;
