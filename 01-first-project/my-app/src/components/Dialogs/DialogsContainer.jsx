import React from "react";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/dialogs-reducer";
import StoreContext from "../../StoreContext";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  // receiving dialogsPage state from props and shortcutting it

  // onClick function for sending messages. Uses imported action creator "sendMessageCreator"

  return (
    <StoreContext.Consumer>
      {(store) => {
        let dialogsPage = store.getState().dialogsPage;

        let onSendMessageClick = () => {
          store.dispatch(sendMessageCreator());
        };

        let onNewMessageTextChange = (body) => {
          store.dispatch(updateNewMessageBodyCreator(body));
        };

        return (
          <Dialogs
            updateNewMessageBody={onNewMessageTextChange}
            sendMessage={onSendMessageClick}
            dialogsPage={dialogsPage}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
