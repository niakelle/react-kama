import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";
import profileReducer from "./profile-reducer";

let store = {
  _state: {
    profilePage: {
      postData: [
        { id: 1, message: "Hi, how are you?", likes: 15 },
        { id: 2, message: "It's my first post", likes: 20 },
      ],
      newPostText: "",
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
      newMessageText: "",
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
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.navbar = navbarReducer(this._state.navbar, action);

    this._callSubscriber(this._state);
  },
};




export default store;
window.store = store;
