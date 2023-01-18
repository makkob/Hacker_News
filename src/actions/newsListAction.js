import axios from "axios";

import {
  NEWS_LIST_REQUEST,
  NEWS_LIST_SUCCESS,
  NEWS_LIST_FAIL,
  NEWS_DETAILS_REQUEST,
  NEWS_DETAILS_SUCCESS,
  NEWS_DETAILS_FAIL,
  NEWS_DELETE_FAIL,
  NEWS_DELETE_SUCCESS,
  NEWS_DELETE_REQUEST,
  NEWS_CREATE_REQUEST,
  NEWS_CREATE_SUCCESS,
  NEWS_CREATE_FAIL,
  NEWS_UPDATE_REQUEST,
  NEWS_UPDATE_SUCCESS,
  NEWS_UPDATE_FAIL,
  NEWS_CREATE_REVIEW_REQUEST,
  NEWS_CREATE_REVIEW_SUCCESS,
  NEWS_CREATE_REVIEW_FAIL,
  NEWS_TOP_REQUEST,
  NEWS_TOP_SUCCESS,
  NEWS_TOP_FAIL,
} from "../constants/newsListConstants";

export const newsList = () => async (dispatch) => {
  try {
    dispatch({ type: NEWS_LIST_REQUEST });
    URL = process.env.REACT_APP_API_URL;

    const { data } = await axios.get(URL + "newstories.json?print=pretty");

    const news = await Promise.all(
      data.slice(0, 100).map((id) => {
        const oneNews = axios.get(`${URL}item/${id}.json?print=pretty`);
        return oneNews;
      })
    );

    dispatch({
      type: NEWS_LIST_SUCCESS,
      payload: news.map(({ data }) => data),
    });
  } catch (error) {
    dispatch({
      type: NEWS_LIST_FAIL,
      payload: error,
    });
  }
};
