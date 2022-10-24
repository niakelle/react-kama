import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Field, reduxForm } from "redux-form";

const Dialogs = (props) => {
  let dialogsPage = props.dialogsPage;

  let dialogsElements = dialogsPage.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />
  ));
  let messagesElements = dialogsPage.messagesData.map((m) => (
    <Message className={styles.message} key={m.id} message={m.message} />
  ));
  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  }


  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>{dialogsElements}</div>
      <div className={styles.messagesWrapper}>
        <div className={styles.messages}>
          <div>{messagesElements}</div>
        </div>
        <AddMessageFormRedux onSubmit={addNewMessage}/>
      </div>
    </div>
  );
};

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={styles.newMessage}>
      <Field
        component="textarea"
        name="newMessageBody"
        placeholder="Enter your message"
        className={styles.textArea}
      />
      <button className={styles.sendMessageButton}>Send Message</button>
    </form>
  );
};

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);

export default Dialogs;
