import React from "react";
import styles from "./ResultItem.module.scss";

const ResultItem = ({ item: { title, description } }) => {
  return (
    <article className={styles["item"]}>
      <h2 className={styles["title"]}>{title}</h2>
      <p className={styles["description"]}>{description}</p>
    </article>
  );
};

export default ResultItem;
