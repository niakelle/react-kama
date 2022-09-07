const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT: {
      let stateCopy = { 
        ...state,
        newMessageText: action.newMessageText
      };
      return stateCopy;
    }
    case SEND_MESSAGE: {
      let body = state.newMessageText;
      let newMessageId = (state.messagesData.length + 1);
      let stateCopy = {
        ...state,
        newMessageText: "",
        messagesData: [...state.messagesData, { id: newMessageId, message: body }]
      };
      return stateCopy;
    }
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newMessageText: text,
});


export default dialogsReducer;
