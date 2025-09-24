import React from "react";
import styles from "./TypingTest.module.css";

const Results = ({
  time,
  wordsTyped,
  correctWords,
  incorrectWords,
  wpm,
  wph,
  wps,
  accuracy,
  onRestart,
}) => {
  return (
    <div className={styles.resultsBox}>
      <h2>Results</h2>
      <p>Time Taken: {time}s</p>
      <p>Total Words Typed: {wordsTyped}</p>
      <p>Correct Characters: {correctWords}</p>
      <p>Incorrect Characters: {incorrectWords}</p>
      <p>WPM: {wpm}</p>
      <p>WPH: {wph}</p>
      <p>WPS: {wps}</p>
      <p>Accuracy: {accuracy}%</p>
      <button onClick={onRestart} className={styles.restartBtn}>
        Restart Test
      </button>
    </div>
  );
};

export default Results;
