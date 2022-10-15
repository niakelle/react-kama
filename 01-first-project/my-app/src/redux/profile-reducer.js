import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
  postData: [
    { id: 1, message: "Hi, how are you?", likes: 15 },
    { id: 2, message: "It's my first post", likes: 20 },
  ],
  newPostText: "",
  profile: null,
  status: ""
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPostId = state.postData.length + 1;
      let newPost = {
        id: newPostId,
        message: state.newPostText,
        likesCount: 0,
      };
      let stateCopy = { 
        ...state,
        postData: [...state.postData, newPost],
        newPostText: ""
      };
      return stateCopy;
    }
    case UPDATE_NEW_POST_TEXT: {
      let stateCopy = { 
        ...state,
        newPostText: action.newText
       };
      return stateCopy;
    }
    case SET_USER_PROFILE: {
      return {...state, profile: action.profile}
    }
    case SET_STATUS: {
      return {...state, status: action.status}
    }
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status})

export const getUserProfile = (userId) => {
  return (dispatch) => {
    usersAPI.getProfile(userId).then((response) => {
      dispatch(setUserProfile(response.data));
    });
  };
};

export const getStatus = (userId) => (dispatch) => {
  profileAPI.getProfile(userId)
  .then((response) => {
    return response.data.company.title;
  })
  .then((response) => {
    dispatch(setStatus(response));
  });
};

export const updateStatus = (userId, status) => (dispatch) => {
  profileAPI.updateStatus(userId, status)
    .then((response) => {
      // if (response.resultCode === 200) {}
      dispatch(setStatus(response.data.company.title));
    });
};


export default profileReducer;
