import { Word } from "types/types";
import classes from "./Word.module.css";

type Props = Pick<Word, "entered" | "generated">;

export function Letter({ generated, entered }: Props) {
  const isCorrect = generated === entered;
  const correct = isCorrect ? classes.correct : classes.wrong;
  return (
    <span className={`${classes.letter} ${entered ? correct : ""}`}>
      {generated}
    </span>
  );
}

export function ExtraLetter({ letter }: { letter: string }) {
  return <div className={`${classes.letter} ${classes.wrong}`}>{letter}</div>;
}
