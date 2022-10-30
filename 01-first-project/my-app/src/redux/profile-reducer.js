import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";

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
        message: action.newPostText,
        likesCount: 0,
      };
      let stateCopy = { 
        ...state,
        postData: [...state.postData, newPost],
        newPostText: ""
      };
      return stateCopy;
    }
    case SET_USER_PROFILE: {
      return {...state, profile: action.profile}
    }
    case SET_STATUS: {
      return {...state, status: action.status}
    }
    case DELETE_POST: {
      return {...state, postData: state.postData.filter (p => p.id != action.postId)};
    }
    default:
      return state;
  }
};

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText });
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status})
export const deletePost = (postId) => ({type: DELETE_POST, postId})

// changed into async await just to try it
export const getUserProfile = (userId) => async (dispatch) => {
  let response = await profileAPI.getProfile(userId);
  dispatch(setUserProfile(response.data));
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
