import axios from "axios";

import {
  KIDS_LIST_REQUEST,
  KIDS_LIST_SUCCESS,
  KIDS_LIST_FAIL,
} from "../constants/kidsListConstants";

export const kidsList = (kidsID) => async (dispatch) => {
  try {
    dispatch({ type: KIDS_LIST_REQUEST });
    URL = process.env.REACT_APP_API_URL;

    const data = await Promise.all(
      kidsID.map((id) => axios.get(`${URL}item/${id}.json?print=pretty`))
    );

    dispatch({
      type: KIDS_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: KIDS_LIST_FAIL,
      payload: error,
    });
  }
};
