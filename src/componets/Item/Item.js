import React from "react";
import { Link } from "react-router-dom";

import styles from "./Item.module.css";

export function Item(props) {
  const { id, title, score, by, time } = props.item;
  const date = new Date(time * 1000).toString();
  return (
    <div className={styles.item}>
      <Link
        key={id}
        to={"/newspage/" + id}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <h2>{title}</h2>
        <p>
          <strong>Score:</strong> {score}
        </p>
        <p>
          <strong>Author: </strong> <i> {by}</i>
        </p>
        <p>
          <strong>Published at:</strong> <i>{date}</i>
        </p>
      </Link>
    </div>
  );
}
