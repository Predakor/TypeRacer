import classes from "./Group.module.css";

function Group(props) {
  const orientation = classes[props.orientation];

  return <div className={`flex ${orientation}`}>{props.children}</div>;
}

export default Group;
