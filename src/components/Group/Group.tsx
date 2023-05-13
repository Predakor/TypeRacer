import { ReactNode } from "react";
import classes from "./Group.module.css";

interface Props {
  children: ReactNode;
  orientation: "horizontal" | "vertical";
}

function Group({ children, orientation }: Props) {
  const _orientation = classes[orientation];

  return <div className={`flex ${_orientation}`}>{children}</div>;
}

export default Group;
