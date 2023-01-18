import React from "react";
import { Link } from "react-router-dom";

export function Item(props) {
  const { id, title, score, by, time } = props.item;
  return (
    <Link key={id} to={"/newspage/" + id}>
      <div>
        <h2>{title}</h2>
        <p>{score}</p>
        <p>{by}</p>
        <p>{time}</p>
      </div>
    </Link>
  );
}
