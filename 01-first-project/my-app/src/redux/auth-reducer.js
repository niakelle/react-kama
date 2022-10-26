import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth },
});
export const getAuthUserData = () => (dispatch) => {
  authAPI.me().then((response) => {
    if (response.status === 200) {
      let { email, id, username } = response.data;
      dispatch(setAuthUserData(id, email, username, true));
    }
  });
};

export const login = (username, password) => (dispatch) => {
  authAPI.login(username, password).then((response) => {
    if (response.status === 200) {
      dispatch(getAuthUserData());
    }
  }).catch((error) => {
    let message = error.message.length > 0 ? error.message : "Whoops! Error." 
    dispatch(stopSubmit("login", {_error: message}));
  })
};

export const logout = () => (dispatch) => {
  dispatch(setAuthUserData(null, null, null, false));
};

export default authReducer;
