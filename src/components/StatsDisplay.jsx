import React from "react";
import styles from "./TypingTest.module.css";

const StatsDisplay = ({ time, wpm, wph, wps, accuracy }) => {
  return (
    <div className={styles.statsRow}>
      <div className={styles.statBox}>Time: {time}s</div>
      <div className={styles.statBox}>WPM: {wpm}</div>
      <div className={styles.statBox}>WPH: {wph}</div>
      <div className={styles.statBox}>WPS: {wps}</div>
      <div className={styles.statBox}>Accuracy: {accuracy}%</div>
    </div>
  );
};

export default StatsDisplay;
