import React, { useState, useEffect, useRef } from "react";
import styles from "./components/TypingTest.module.css";
import {
  generateWords,
  calculateWPM,
  calculateWPH,
  calculateWPS,
  calculateAccuracy,
} from "./utils";

import PromptDisplay from "./components/PromptDisplay";
import TypingInput from "./components/TypingInput";
import StatsDisplay from "./components/StatsDisplay";
import Results from "./components/Results";

const App = () => {
  const [words, setWords] = useState(generateWords(40));
  const [userInput, setUserInput] = useState("");
  const [isStarted, setIsStarted] = useState(false);
  const [time, setTime] = useState(0);
  const [finished, setFinished] = useState(false);
  const [theme, setTheme] = useState("dark"); // dark or light
  const inputRef = useRef(null);

  // Timer
  useEffect(() => {
    if (isStarted && !finished) {
      const interval = setInterval(() => setTime((prev) => prev + 1), 1000);
      return () => clearInterval(interval);
    }
  }, [isStarted, finished]);

  // Handle typing input
  const handleChange = (value) => {
    if (!isStarted) setIsStarted(true);
    setUserInput(value);

    if (value.length >= words.join(" ").length) {
      setFinished(true);
      setIsStarted(false);
    }
  };

  // Restart test
  const restartTest = () => {
    setWords(generateWords(40));
    setUserInput("");
    setIsStarted(false);
    setTime(0);
    setFinished(false);
    inputRef.current.focus();
  };

  // Toggle theme
  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  // Calculate stats
  const totalChars = userInput.length;
  const correctChars = words
    .join(" ")
    .slice(0, userInput.length)
    .split("")
    .filter((c, i) => c === userInput[i]).length;
  const wpm = calculateWPM(totalChars, time);
  const wph = calculateWPH(wpm);
  const wps = calculateWPS(wpm);
  const accuracy = calculateAccuracy(correctChars, totalChars);

  return (
    <div
      className={`${styles.container} ${
        theme === "light" ? styles.light : styles.dark
      }`}
      onClick={() => inputRef.current.focus()}
    >
      {/* Theme toggle button */}
      <button className={styles.themeBtn} onClick={toggleTheme}>
        {theme === "dark" ? "🌞 Light" : "🌙 Dark"}
      </button>

      <h1 className={styles.title}>Typing Speed Test</h1>

      {!finished && (
        <>
          <PromptDisplay words={words} userInput={userInput} />
          <TypingInput
            inputRef={inputRef}
            value={userInput}
            onChange={handleChange}
          />
          <StatsDisplay
            time={time}
            wpm={wpm}
            wph={wph}
            wps={wps}
            accuracy={accuracy}
          />
          <button onClick={restartTest} className={styles.restartBtn}>
            Restart Test
          </button>
        </>
      )}

      {finished && (
        <Results
          time={time}
          wordsTyped={userInput.trim().split(/\s+/).length}
          correctWords={correctChars}
          incorrectWords={totalChars - correctChars}
          wpm={wpm}
          wph={wph}
          wps={wps}
          accuracy={accuracy}
          onRestart={restartTest}
        />
      )}
    </div>
  );
};

export default App;
