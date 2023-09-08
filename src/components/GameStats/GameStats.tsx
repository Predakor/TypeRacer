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
    <>
      <h2 className={"text-center text-4xl  font-bold text-accent"}>
        Test Completed
      </h2>

      <section
        className={
          "grid animate-appear justify-items-center gap-2 p-2 md:gap-4 md:p-4"
        }
      >
        <div className={"grid grid-cols-3"}>
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
            className="col-span-full justify-items-center text-accent md:col-span-1"
            title={`Gamemode`}
            value={mode === "time" ? "time " + startTime : "words " + wordCount}
            descr={"Current gamemode"}
          />
          <Stat
            className="col-span-full justify-items-center text-accent md:col-span-2"
            title="Characters"
            value={`${correct}/${wrong}/${skiped}/${extra}`}
            descr="Correct, Wrong, Skipped, Extra"
          />
        </div>
      </section>
    </>
  );
}
