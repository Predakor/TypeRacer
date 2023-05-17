import { VscSettings } from "react-icons/vsc";
import Button from "./Button";

interface Props {
  className?: string;
}

function SettingsButton({ className = "" }: Props) {
  return (
    <Button className={className} ariaLabel={"Game settings"}>
      <VscSettings />
    </Button>
  );
}
export default SettingsButton;
