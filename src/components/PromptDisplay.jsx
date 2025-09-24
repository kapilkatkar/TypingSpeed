import React from "react";
import styles from "./TypingTest.module.css";

const PromptDisplay = ({ words, userInput }) => {
  const fullText = words.join(" ");
  return (
    <div className={styles.editorBox}>
      {fullText.split("").map((char, idx) => {
        let className = styles.char;
        if (idx < userInput.length) {
          className =
            userInput[idx] === char ? styles.correct : styles.incorrect;
        }
        if (idx === userInput.length) className += ` ${styles.cursor}`;
        return (
          <span key={idx} className={className}>
            {char}
          </span>
        );
      })}
    </div>
  );
};

export default PromptDisplay;
