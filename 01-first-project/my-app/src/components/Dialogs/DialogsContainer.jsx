import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  // receiving dialogsPage state from props and shortcutting it
  let dialogsPage = props.store.getState().dialogsPage;

  // onClick function for sending messages. Uses imported action creator "sendMessageCreator"
  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };
  
  let onNewMessageTextChange = (body) => {
    props.store.dispatch(updateNewMessageBodyCreator(body));
  };

  return (
    <Dialogs
      updateNewMessageBody={onNewMessageTextChange}
      sendMessage={onSendMessageClick}
      dialogsPage={dialogsPage}
    />
  );
};

export default DialogsContainer;
