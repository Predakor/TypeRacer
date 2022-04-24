import { useEffect } from "react";
import commons from "../../words/common.json";
import classes from "./Board.module.css";
import { pushWords } from "./controller";
import Word from "./word/Word";

let generatedWords = [];

function generateWords(amount) {
  let words = commons["common500"];

  for (let i = 0; i < amount; i++) {
    let random = Math.floor(Math.random() * words.length);
    generatedWords.push(words[random]);
  }
}

function Board(props) {
  if (generatedWords.length === 0) generateWords(90);

  useEffect(() => {
    pushWords(generatedWords);
  });

  return (
    <div className={classes.board}>
      {generatedWords.map((word, i) => {
        return <Word key={i} word={word} />;
      })}
    </div>
  );
}
export default Board;
