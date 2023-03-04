import React, { useContext } from "react";
import AppContext from "../../store/context/AppContext";
import styles from "./ResultContainer.module.css";

const ResultContainer = () => {
  const { resultText, onCopy, resultTextCopy } = useContext(AppContext);
  return (
    resultText && (
      <div id="resultsWrapper" className={styles["results-wrapper"]}>
        <button className={styles["btn-copy"]} onClick={onCopy}>Kopyala</button>
        <div className={styles.result}>{resultTextCopy}</div>
      </div>
    )
  );
};

export default ResultContainer;
