let state = {
  profilePage: {
    postData: [
      { id: 1, message: "Hi, how are you?", likes: 15 },
      { id: 2, message: "It's my first post", likes: 20 },
    ],
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
  ],}
};

export default state;