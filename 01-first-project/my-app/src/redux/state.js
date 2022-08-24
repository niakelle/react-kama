let rerenderEntireTree = () => {
  console.log("State changed");
};

let state = {
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
};

export const addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };
  state.profilePage.postData.push(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree(state);
};

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
}

export default state;
