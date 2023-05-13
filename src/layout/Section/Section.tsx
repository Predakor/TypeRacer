import { ReactNode } from "react";
import classes from "../Layout.module.css";

function Panel({ children }: { children: ReactNode }) {
  return <section className={classes.section}>{children}</section>;
}
export default Panel;
