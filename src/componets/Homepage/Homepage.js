import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newsList } from "../../actions/newsListAction";

export default function Homepage() {
  const dispatch = useDispatch();
  const newsState = useSelector((state) => state.newsListState);
  const { loading, news } = newsState;
  console.log(news);

  // console.log(news);

  useEffect(() => {
    dispatch(newsList());
  }, []);

  return (
    <div>
      {news &&
        news.map(({ title, by, score, time }) => {
          return (
            <div>
              <h1>{title}</h1>
              <p>{score}</p>
              <p>{by}</p>
              <p>{time}</p>
            </div>
          );
        })}
      {loading && <h1> Loading </h1>}
    </div>
  );
}
