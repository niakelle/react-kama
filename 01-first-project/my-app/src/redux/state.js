let store = {
  _state: {
    profilePage: {
      postData: [
        { id: 1, message: "Hi, how are you?", likes: 15 },
        { id: 2, message: "It's my first post", likes: 20 },
      ],
      newPostText: "New Post Text",
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

  dispatch(action) { // {type: 'ADD-POST'}
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.postData.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } 
    else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  },
};

export default store;
window.store = store;
