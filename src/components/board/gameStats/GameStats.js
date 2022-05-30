import { useContext } from "react";
import { getCurrentTime } from "../../Clock";
import gameSettingsContext from "../../../store/settings-context";
import statsDataContext from "../../../store/stats-context";
import classes from "./GameStats.module.css";

function GameStats(props) {
  const gameStats = useContext(statsDataContext);
  const gameSettings = useContext(gameSettingsContext);

  let { totalClicks, totalErrors } = gameStats;
  let { time: startTime, mode } = gameSettings;
  let timePassed = getCurrentTime();

  let duration = mode === "time" ? startTime - timePassed : timePassed;

  let wpm = (totalClicks - totalErrors) / 5;
  if (duration !== 60) wpm *= 60 / duration;
  wpm = Math.round(wpm);

  let accuracy = Math.round(((totalClicks - totalErrors) / totalClicks) * 100);

  return (
    <div className={classes.container}>
      <h2>Test Completed</h2>

      <Stat>wpm: {wpm}</Stat>
      <Stat>accuracy: {accuracy}%</Stat>

      <div className={classes["mode-stats"]}>
        <Stat>mode: {mode}</Stat>
        <Stat>time: {startTime}s </Stat>
        <Stat>duration: {duration}</Stat>
      </div>

      <div className={classes["final-stats"]}>
        <Stat>keyStrokes: {totalClicks}</Stat>
        <Stat>errors: {totalErrors}</Stat>
        <Stat>skiped: {totalErrors}</Stat>
      </div>
    </div>
  );
}

const Stat = (props) => <p className={classes.stat}>{props.children}</p>;

export default GameStats;
