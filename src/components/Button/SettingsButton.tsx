import { IoSettingsOutline } from "react-icons/io5";
import Button from "./Button";

interface Props {
  className?: string;
  onClick?: VoidFunction;
}

function SettingsButton({ className = "", onClick }: Props) {
  return (
    <Button className={className} onClick={onClick}>
      <IoSettingsOutline />
    </Button>
  );
}
export default SettingsButton;
