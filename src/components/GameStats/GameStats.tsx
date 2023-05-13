import useGameSettings from "hooks/useGameSettings";
import useGameStats from "hooks/useGameStats";
import { Word } from "types/types";
import classes from "./GameStats.module.css";
import { calculateStats } from "@utils/calculateTest";

const avgWordLength = 5;

export default function GameStats({ words }: { words: Word[] }) {
  const { totalClicks, totalErrors, time } = useGameStats();
  const { time: startTime, mode, wordCount } = useGameSettings();
  const stats = calculateStats(words);

  const timeMode = mode === "time";
  const duration = timeMode ? startTime - time : time;

  const correctWords = stats.correct / avgWordLength;
  const wordsPerMinute = Math.round((correctWords * 60) / duration);

  const totalCorrectClicks = totalClicks - totalErrors;
  const accuracy = Math.round((totalCorrectClicks / totalClicks) * 100);

  return (
    <div className={classes.container}>
      <h2 className={classes.header}>Test Completed</h2>

      <MainStat descr="Wpm" stat={wordsPerMinute} />
      <MainStat descr="Time" stat={duration} suffix="s" />
      <MainStat descr="Accuracy" stat={accuracy} suffix="%" />

      <section className={classes["mode-stats"]}>
        <Stat descr="mode: " stat={mode} />

        <Stat
          descr={`${timeMode ? "time" : "words"}: `}
          stat={timeMode ? time : wordCount}
          suffix={timeMode ? "s" : ""}
        />
      </section>

      <section className={classes["final-stats"]}>
        <FinalStat descr="correct" stat={stats.correct} />
        <FinalStat descr="wrong" stat={stats.wrong} />
        <FinalStat descr="skiped" stat={stats.skiped} />
        <FinalStat descr="extra" stat={stats.extra} />
      </section>
    </div>
  );
}

interface StatProps {
  stat: string | number;
  descr: string;
  suffix?: string;
  className?: string;
}

function Stat({ stat, descr, suffix, className }: StatProps) {
  return (
    <p className={`${classes.stat} ${className}`}>
      {descr}
      <span className={classes.value}>
        {stat}
        {suffix}
      </span>
    </p>
  );
}

function MainStat({ stat, descr, suffix = "" }: StatProps) {
  return (
    <h3 className={classes["main-stat"]}>
      {descr}
      <p className={classes["main-value"]}>{`${stat}${suffix}`}</p>
    </h3>
  );
}

function FinalStat({ stat, descr }: StatProps) {
  return (
    <h4 className={classes.stat}>
      {descr}
      <p className={classes.value}>{stat}</p>
    </h4>
  );
}
