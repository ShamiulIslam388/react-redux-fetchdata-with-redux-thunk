import { DATA_REQUEST, DATA_SUCCESS, DATA_ERROR } from "./constants";

const initialState = {
  loading: false,
  data: [],
  error: ""
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA_REQUEST:
      return {
        ...state,
        loading: true
      };
    case DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case DATA_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default dataReducer;
