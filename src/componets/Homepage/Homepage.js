import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";

// import { Link } from "react-router-dom";
// import { NEWSPAGE_ROUTE } from "../../utils/consts";
import { newsList } from "../../actions/newsListAction";
import { Item } from "../Item/Item";
import { Loader } from "../Loader/Loader";

import styles from "./Homepage.module.css";

export default function Homepage() {
  const dispatch = useDispatch();
  const newsState = useSelector((state) => state.newsListState);
  const { loading, news } = newsState;

  useEffect(() => {
    dispatch(newsList());
  }, []);
  const onUpdateClick = () => {
    dispatch(newsList());
    console.log(news);

  };
  return (
    <div>
      <div className={styles.nav}>
        <Button
          onClick={() => {
            onUpdateClick();
          }}
          variant="secondary"
        >
          {" "}
          Update{" "}
        </Button>
      </div>
        {news &&
          news.map((item) => {
            return <Item key={item.id} item={item} />;
          })}

        {loading && <Loader />}
    </div>
  );
}
