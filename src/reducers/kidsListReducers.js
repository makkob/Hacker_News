import {
  KIDS_LIST_REQUEST,
  KIDS_LIST_SUCCESS,
  KIDS_LIST_FAIL,
} from "../constants/kidsListConstants";

export const kidsListReducer = (state = { kids: [] }, action) => {
  switch (action.type) {
    case KIDS_LIST_REQUEST:
      return { loading: true, kids: [] };
    case KIDS_LIST_SUCCESS:
      return {
        loading: false,
        kids: action.payload,
      };
    case KIDS_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
