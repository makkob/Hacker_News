import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import { NEWSPAGE_ROUTE } from "../../utils/consts";
import { newsList } from "../../actions/newsListAction";
import { Item } from "../Item/Item";
import { Loader } from "../Loader/Loader";

export default function Homepage() {
  const dispatch = useDispatch();
  const newsState = useSelector((state) => state.newsListState);
  const { loading, news } = newsState;
  console.log(news);

  useEffect(() => {
    dispatch(newsList());
  }, []);
  const onUpdateClick = () => {
    dispatch(newsList());
  };
  return (
    <div>
      <Button
        onClick={() => {
          onUpdateClick();
        }}
        variant="primary"
      >
        {" "}
        Update{" "}
      </Button>
      {news &&
        news.map((item) => {
          return <Item key={item.id} item={item} />;
        })}

      {loading && <Loader />}
    </div>
  );
}
