import { Word } from "types/types";
import Stat from "./Stat";
import useTestStats from "hooks/useTestStats";

export default function GameStats({ words }: { words: Word[] }) {
  const {
    wordsPerMinute,
    accuracy,
    duration,
    chars,
    mode,
    startTime,
    wordCount,
  } = useTestStats(words);
  const { correct, extra, skiped, wrong } = chars;

  return (
    <section
      className={
        "grid animate-appear grid-cols-2 justify-items-center gap-4 p-4 md:grid-cols-3"
      }
    >
      <h2 className={"col-span-full text-4xl font-bold text-accent"}>
        Test Completed
      </h2>

      <Stat
        className="justify-items-center text-accent"
        title={"Wpm"}
        value={wordsPerMinute}
        descr="Words per minute"
      />
      <Stat
        className="justify-items-center text-accent"
        title={"Time"}
        value={`${duration}s`}
        descr="Test duration"
      />
      <Stat
        className="justify-items-center text-accent"
        title={"Accuracy"}
        value={`${accuracy}%`}
        descr="Accuracy"
      />

      <Stat
        className="justify-items-center text-accent"
        title={`Gamemode`}
        value={mode === "time" ? "time " + startTime : "words " + wordCount}
        descr={"Current gamemode"}
      />

      <Stat
        className="col-span-2 justify-items-center text-accent"
        title="Characters"
        value={`${correct}/${wrong}/${skiped}/${extra}`}
        descr="Correct, Wrong, Skipped, Extra"
      />
    </section>
  );
}
