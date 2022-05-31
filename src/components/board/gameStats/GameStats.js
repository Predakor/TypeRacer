import { useContext } from "react";
import { getCurrentTime } from "../../Clock";
import gameSettingsContext from "../../../store/settings-context";
import statsDataContext from "../../../store/stats-context";
import classes from "./GameStats.module.css";

function calculateTest(words) {
  let stats = { total: 0, correct: 0, wrong: 0, skiped: 0, extra: 0 };
  words.forEach((word) => {
    const { generated, entered } = word;
    const [generatedLen, enteredLen] = [generated.length, entered.length];
    for (let i = 0; i < generatedLen; i++) {
      const generatedLetter = generated.charAt(i);
      const enteredLetter = entered.charAt(i);

      if (!enteredLetter) stats.skiped++;
      else generatedLetter === enteredLetter ? stats.correct++ : stats.wrong++;
      stats.total++;
    }
    if (enteredLen > generatedLen) stats.extra += enteredLen - generatedLen;
  });
  stats.total += words.length - 1;
  stats.correct += words.length - 1;
  return stats;
}

function GameStats(props) {
  const finalStats = calculateTest(props.words); //stats from final text
  const gameStats = useContext(statsDataContext);
  const gameSettings = useContext(gameSettingsContext);

  let { totalClicks, totalErrors } = gameStats;
  let { time: startTime, mode } = gameSettings;
  let timePassed = getCurrentTime();

  let duration = mode === "time" ? startTime - timePassed : timePassed;

  let wpm = finalStats.correct / 5;
  wpm = Math.round((wpm * 60) / duration);

  let accuracy = Math.round(((totalClicks - totalErrors) / totalClicks) * 100);

  return (
    <div className={classes.container}>
      <h2 className={classes.header}>Test Completed</h2>

      <MainStat descr="Wpm" stat={wpm} />
      <MainStat descr="Time" stat={duration} sufix="s" />
      <MainStat descr="Accuracy" stat={accuracy} sufix="%" />

      <div className={classes["mode-stats"]}>
        <Stat descr="mode:" stat={mode} />
        {gameSettings.mode === "time" ? (
          <Stat descr="time:" stat={startTime} sufix="s" />
        ) : (
          <Stat descr="words:" stat={gameSettings.wordCount} />
        )}
      </div>

      <div className={classes["final-stats"]}>
        <FinalStat descr="correct" stat={finalStats.correct} />
        <FinalStat descr="wrong" stat={finalStats.wrong} />
        <FinalStat descr="skiped" stat={finalStats.skiped} />
        <FinalStat descr="extra" stat={finalStats.extra} />
      </div>
    </div>
  );
}

function Stat(props) {
  return (
    <p className={`${classes.stat} ${props.forwardClass}`}>
      {props.descr}
      <span className={classes.value}>
        {" "}
        {props.stat}
        {props.sufix}
      </span>
    </p>
  );
}

function MainStat(props) {
  return (
    <h3 className={classes["main-stat"]}>
      {props.descr}
      <p className={classes["main-value"]}>
        {props.stat}
        {props.sufix}
      </p>
    </h3>
  );
}

function FinalStat(props) {
  return (
    <h4 className={classes.stat}>
      {props.descr}
      <p className={classes.value}>
        {props.stat}
        {props.sufix}
      </p>
    </h4>
  );
}

export default GameStats;
