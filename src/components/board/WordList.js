import Word from "./word/Word";

function WordList(props) {
  return (
    <>
      {props.words.map((word, i) => (
        <Word word={word["word"]} userWord={word["userWord"]} key={i}></Word>
      ))}
    </>
  );
}

export default WordList;
