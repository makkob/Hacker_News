import {
  NEWS_LIST_REQUEST,
  NEWS_LIST_SUCCESS,
  NEWS_LIST_FAIL,
  NEWS_DETAILS_REQUEST,
  NEWS_DETAILS_SUCCESS,
  NEWS_DETAILS_FAIL,
  NEWS_CREATE_REQUEST,
  NEWS_DELETE_SUCCESS,
  NEWS_DELETE_FAIL,
  NEWS_CREATE_SUCCESS,
  NEWS_CREATE_FAIL,
  NEWS_DELETE_REQUEST,
  NEWS_CREATE_RESET,
  NEWS_UPDATE_REQUEST,
  NEWS_UPDATE_SUCCESS,
  NEWS_UPDATE_FAIL,
  NEWS_UPDATE_RESET,
  NEWS_CREATE_REVIEW_REQUEST,
  NEWS_CREATE_REVIEW_SUCCESS,
  NEWS_CREATE_REVIEW_FAIL,
  NEWS_CREATE_REVIEW_RESET,
  NEWS_TOP_REQUEST,
  NEWS_TOP_SUCCESS,
  NEWS_TOP_FAIL,
} from "../constants/newsListConstants";

export const newsListReducer = (state = { news: [] }, action) => {
  switch (action.type) {
    case NEWS_LIST_REQUEST:
      return { loading: true, news: [] };
    case NEWS_LIST_SUCCESS:
      return {
        loading: false,
        news: action.payload,
      };
    case NEWS_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
