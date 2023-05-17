import Button from "@components/Button/Button";
import SettingsButton from "@components/Button/SettingsButton";
import { IoSyncOutline } from "react-icons/io5";
import { VscChevronRight, VscDebugRestart } from "react-icons/vsc";
import { Link } from "react-router-dom";

interface Props {
  controls: Record<string, VoidFunction>;
  ended: boolean;
}

function ControlButtons({ controls, ended }: Props) {
  const { restartGame, repeatGame } = controls;

  return (
    <section
      className={`grid auto-cols-fr grid-flow-col justify-items-center p-4`}
    >
      {ended && (
        <Button
          className="tooltip-bottom"
          onClick={restartGame}
          ariaLabel={"Next game"}
        >
          <VscChevronRight />
        </Button>
      )}

      <Button
        className="tooltip-bottom"
        onClick={ended ? repeatGame : restartGame}
        ariaLabel={ended ? "Repeat game" : "Restart game"}
      >
        {ended ? <IoSyncOutline /> : <VscDebugRestart />}
      </Button>

      {ended && (
        <Link to={"settings"}>
          <SettingsButton className="tooltip-bottom" />
        </Link>
      )}
    </section>
  );
}

export default ControlButtons;
