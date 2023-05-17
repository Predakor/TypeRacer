import { Word } from "types/types";

export type CharStats = {
  total: number;
  correct: number;
  wrong: number;
  skiped: number;
  extra: number;
};

export function calculateStats(words: Word[]) {
  const stats = { total: 0, correct: 0, wrong: 0, skiped: 0, extra: 0 };
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
  return stats as CharStats;
}
