import commons from "../../../words/common.json";
import Word from "./Word";
import classes from "./Play.module.css";
import * as controller from "./controller.js";
import { useEffect } from "react";

let generatedWords = [];

function generateWords(amount) {
  let words = commons["common500"];

  for (let i = 0; i < amount; i++) {
    let random = Math.floor(Math.random() * words.length);
    generatedWords.push(words[random]);
  }
}

const readKey = (e) => {
  controller.compare(e.key);
};

function Play() {
  if (generatedWords.length === 0) generateWords(120);

  useEffect(() => {
    controller.pushWords(generatedWords);
  });
  return (
    <section className={classes.section}>
      <input className={classes.player_input} onKeyUp={(e) => readKey(e)} autoFocus />
      <div className={classes.board}>
        {generatedWords.map((word, i) => {
          let letters = Array.from(word);
          return <Word key={i} letters={letters} />;
        })}
      </div>
    </section>
  );
}

export default Play;
