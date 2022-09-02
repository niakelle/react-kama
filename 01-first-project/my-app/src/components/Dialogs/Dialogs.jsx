import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";


const Dialogs = (props) => {

  let dialogsPage = props.store.getState().dialogsPage;

  let dialogsElements = dialogsPage.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));
  let messagesElements = dialogsPage.messagesData.map((m) => (
    <Message className={styles.message} message={m.message} />
  ));
  let newMessageText = dialogsPage.newMessageText;

  let newMessageElement = React.createRef();

  let addMessage = () => {
    let text = newMessageElement.current.value;
    alert(text);
  };

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };
  let onNewMessageTextChange = (e) => {
    let body = e.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body));
  };

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>{dialogsElements}</div>
      <div className={styles.messagesWrapper}>
        <div className={styles.messages}>
          <div>{messagesElements}</div>
          <div>
            <div>
              <textarea 
              value={newMessageText}
              onChange={onNewMessageTextChange} 
              placeholder="Enter your message" />
            </div>
            <div><button onClick={onSendMessageClick}>Send</button></div>
          </div>
        </div>
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
