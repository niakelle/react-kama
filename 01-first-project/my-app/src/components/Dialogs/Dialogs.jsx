import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  // receiving dialogsPage state from props and shortcutting it
  let dialogsPage = props.dialogsPage;

  // drawing multiple clickable dialog items
  let dialogsElements = dialogsPage.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />
  ));
  // and then messages
  let messagesElements = dialogsPage.messagesData.map((m) => (
    <Message className={styles.message} key={m.id} message={m.message} />
  ));
  let newMessageText = dialogsPage.newMessageText;

  // onClick function for sending messages. Uses imported action creator "sendMessageCreator"
  let onSendMessageClick = () => {
    props.sendMessage();
  };
  let onNewMessageTextChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  };

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
