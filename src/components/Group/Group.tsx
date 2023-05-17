import { ReactNode } from "react";
import classes from "./Group.module.css";

interface Props {
  children: ReactNode | ReactNode[];
  vertical?: boolean;
}

function Group({ children, vertical }: Props) {
  const orientaion = vertical ? classes.vertical : "";

  return (
    <div className={`flex ${classes.group} ${orientaion}`}>{children}</div>
  );
}

export default Group;
