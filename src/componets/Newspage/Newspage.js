import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Newspage(props) {
  // const dispatch = useDispatch();
  const [itemState, onSetItem] = useState();
  const newsState = useSelector((state) => state.newsListState);
  const { news } = newsState;

  useEffect(() => {
    const item = news.filter(({ id }) => {
      return id == props.match.params.id;
    });

    onSetItem(...item);
  }, []);

  return (
    <>
      {itemState && <h3 key={itemState.id}>{itemState.title}</h3>}

      {itemState && <a href={itemState.url}></a>}
      {itemState && <p> {itemState.time}</p>}
      {itemState && <p> {itemState.by}</p>}
    </>
  );
}
