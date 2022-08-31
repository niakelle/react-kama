const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let store = {
  _state: {
    profilePage: {
      postData: [
        { id: 1, message: "Hi, how are you?", likes: 15 },
        { id: 2, message: "It's my first post", likes: 20 },
      ],
      newPostText: "New Post Text"  
    },

    dialogsPage: {
      dialogsData: [
        { id: 1, name: "Dmytry" },
        { id: 2, name: "Sasha" },
        { id: 3, name: "Valery" },
        { id: 4, name: "Sergey" },
      ],
      messagesData: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "How are your holidays?" },
      ],
      newMessageText: ""
    },

    navbar: {
      friendsData: [
        { id: 1, name: "Dmytry" },
        { id: 2, name: "Sasha" },
        { id: 3, name: "Valery" },
      ],
    },
  },

  _callSubscriber() {
    console.log("State changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    // {type: 'ADD-POST'}
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.postData.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.dialogsPage.newMessageText = action.newMessageText;
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let body = this._state.dialogsPage.newMessageText;
      this._state.dialogsPage.newMessageText = '';
      this._state.dialogsPage.messagesData.push({ id: 4, message: body});
      this._callSubscriber(this._state);
    }
  },
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT, newText: text });

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: text });

export default store;
window.store = store;
