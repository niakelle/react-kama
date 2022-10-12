import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Navigate } from "react-router-dom";

const Dialogs = (props) => {
  let dialogsPage = props.dialogsPage;

  let dialogsElements = dialogsPage.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />
  ));
  let messagesElements = dialogsPage.messagesData.map((m) => (
    <Message className={styles.message} key={m.id} message={m.message} />
  ));
  let newMessageText = dialogsPage.newMessageText;

  let onSendMessageClick = () => {
    props.sendMessage();
  };
  let onNewMessageTextChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  };

  if (!props.isAuthfalse) return <Navigate to={"/login"}/>

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>{dialogsElements}</div>
      <div className={styles.messagesWrapper}>
        <div className={styles.messages}>
          <div>{messagesElements}</div>
        </div>
        <div className={styles.newMessage}>
          <textarea
            value={newMessageText}
            onChange={onNewMessageTextChange}
            placeholder="Enter your message"
            className={styles.textArea}
          ></textarea>
          <button
            onClick={onSendMessageClick}
            className={styles.sendMessageButton}
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
