import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";

import styles from "./Newspage.module.css";
import { Button } from "react-bootstrap";
import { kidsList } from "../../actions/kidsListActions";

export default function Newspage(props) {
  const dispatch = useDispatch();
  const [itemState, onSetItem] = useState();

  const newsState = useSelector((state) => state.newsListState);
  const { news } = newsState;
  const kidsState = useSelector((state) => state.kidsListState);
  const { kids: coments } = kidsState;

  useEffect(() => {
    const item = news.filter(({ id }) => {
      return id == props.match.params.id;
    });

    onSetItem(...item);

    const { kids } = item[0];
    if (kids) {
      dispatch(kidsList(kids));
    }
  }, []);
  console.log("coments", coments);
  // coments.map(({ data }) => {
  //   console.log("data", data.text);
  // });

  return (
    <>
      <div className={styles.nav}>
        <Link to="/">
          <Button variant="secondary"> Back </Button>
        </Link>
      </div>
      {itemState && (
        <div className={styles.item}>
          <h2>{itemState.title}</h2>
          <a target="_blank" href={itemState.url}>
            Source
          </a>
          <hr />
          <p>
            <strong>Author: </strong> <i> {itemState.by}</i>
          </p>
          <p>
            <strong>Published at:</strong>{" "}
            <i>{new Date(itemState.time * 1000).toString()}</i>
          </p>
          <p>
            <FontAwesomeIcon icon={faComment} />{" "}
            {itemState.kids ? itemState.kids.length : 0} comments
          </p>
        </div>
      )}

      {coments &&
        coments.map(({ data }) => {
          return (
            <div className={styles.item}>
              <p>{data.by}</p>
              <p>{data.text}</p>
              <i>{new Date(data.time * 1000).toString()}</i>;
            </div>
          );
        })}
      <div className={styles.button}>
        <Button variant="secondary"> Update coments </Button>
      </div>
    </>
  );
}
