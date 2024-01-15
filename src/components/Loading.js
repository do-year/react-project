import styles from "../css/Loading.module.css";

function Loading() {
  return (
    <div className={styles["loading-container"]}>
      <div className={styles.loading}></div>
      <div id={styles["loading-text"]}>loading</div>
    </div>
  );
}

export default Loading;
