import axios from "axios";
import { DATA_REQUEST, DATA_SUCCESS, DATA_ERROR, API } from "./constants";

export const requestAction = () => {
  return {
    type: DATA_REQUEST
  };
};

export const successAction = (data) => {
  return {
    type: DATA_SUCCESS,
    payload: data
  };
};

export const errorAction = (error) => {
  return {
    type: DATA_ERROR,
    payload: error
  };
};

export const fetchData = () => {
  return async (dispatch) => {
    dispatch(requestAction());
    try {
      const response = await axios.get(API);
      let data = await response.data;
      dispatch(successAction(data));
    } catch (error) {
      dispatch(errorAction(error.message));
    }
  };
};
