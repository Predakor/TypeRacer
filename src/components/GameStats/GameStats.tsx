import { calculateStats } from "@utils/calculateTest";
import { useGameSettings } from "contexts/settings-context";
import useGameStats from "hooks/useGameStats";
import { Word } from "types/types";
import Stat from "./Stat";

const avgWordLength = 5;

export default function GameStats({ words }: { words: Word[] }) {
  const { totalClicks, totalErrors, time } = useGameStats();
  const [{ time: startTime, mode, wordCount }] = useGameSettings();
  const { correct, wrong, skiped, extra } = calculateStats(words);

  const timeMode = mode === "time";
  const duration = timeMode ? startTime - time : time;

  const correctWords = correct / avgWordLength;
  const wordsPerMinute = Math.round((correctWords * 60) / duration);

  const totalCorrectClicks = totalClicks - totalErrors;
  const accuracy = Math.round((totalCorrectClicks / totalClicks) * 100);

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
        value={timeMode ? "time " + duration : "words " + wordCount}
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
