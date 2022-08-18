import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

// MAIN component for exporting
const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messagesElements = props.dialogsPage.messagesData.map((m) => (
    <Message className={styles.message} message={m.message} />
  ));

  let newMessageElement = React.createRef();

  let addMessage = () => {
    let text = newMessageElement.current.value;
    alert(text);
  };

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>{dialogsElements}</div>
      <div className={styles.messagesWrapper}>
        <div className={styles.messages}>{messagesElements}</div>
        <div className={styles.newMessage}>
          <textarea
            ref={newMessageElement}
            className={styles.textArea}
          ></textarea>
          <button
            onClick={addMessage}
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
