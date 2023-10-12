"use client";
import React, { useContext } from "react";
import styles from "./darkmodetoggle.module.css";
import { ThemeContext } from "../../../context/ThemeContext";

const DarKModeToggle = () => {
  const { toggle, mode } = useContext(ThemeContext);
  return (
    <div className={styles.container} onClick={toggle}>
      <div className={styles.icon}>🌞</div>
      <div className={styles.icon}>🌚</div>
      <div
        className={styles.ball}
        style={mode === "light" ? { left: "1px" } : { right: "1px" }}
      />
    </div>
  );
};

export default DarKModeToggle;
