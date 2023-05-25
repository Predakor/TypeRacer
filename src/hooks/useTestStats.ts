import { calculateStats } from "@utils/calculateTest";
import { useGameSettings } from "contexts/settings-context";
import { Word } from "types/types";
import useGameStats from "./useGameStats";

const avgWordLength = 5;

function useTestStats(words: Word[]) {
  const { totalClicks, totalErrors, time } = useGameStats();
  const [{ time: startTime, mode, wordCount }] = useGameSettings();
  const chars = calculateStats(words);

  const timeMode = mode === "time";
  const duration = timeMode ? startTime - time : time;

  const correctWords = chars.correct / avgWordLength;
  const wordsPerMinute = Math.round((correctWords * 60) / duration);

  const totalCorrectClicks = totalClicks - totalErrors;
  const accuracy = Math.round((totalCorrectClicks / totalClicks) * 100);

  return {
    wordsPerMinute,
    accuracy,
    duration,
    chars,
    mode,
    startTime,
    wordCount,
  };
}
export default useTestStats;
