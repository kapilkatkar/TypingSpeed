import React from "react";
import styles from "./TypingTest.module.css";

const TypingInput = ({ inputRef, value, onChange }) => {
  return (
    <input
      ref={inputRef}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={styles.hiddenInput}
      autoFocus
    />
  );
};

export default TypingInput;
