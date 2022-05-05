import { useRef } from "react";
import Word from "./word/Word";

function WordList(props) {
  const renderedWords = useRef([]);
  const testRef = useRef();

  const addRef = (el) => {
    renderedWords.current.push(el);
    console.log(renderedWords.current);
    console.log(testRef);
  };
  return (
    <>
      {props.words.map((word, i) => (
        <Word word={word} key={i} ref={12}>
          <div ref={testRef}></div>
        </Word>
      ))}
    </>
  );
}

export default WordList;
