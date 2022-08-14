import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Dialogs.module.css";

let path = "/dialogs/";

// local component
const DialogItem = (props) => {
  return (
    <div className={styles.item}>
      <NavLink to={`${path}${props.id}`}>{props.name}</NavLink>
    </div>
  );
};

// local component
const Message = (props) => {
  return <div className={styles.message}>{props.message}</div>;
};

// MAIN component for exporting
const Dialogs = (props) => {
  // an array with data objects to build dialogs elements
  let dialogsData = [
    { id: 1, name: "Dmytry" },
    { id: 2, name: "Sasha" },
    { id: 3, name: "Valery" },
    { id: 4, name: "Sergey" },
  ];

  let messages = [
    { id: 1, message: "Hi" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "How are your holidays?" },
  ];

  let dialogsElements = dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messagesElements = messages.map((m) => (
    <Message className={styles.message} message={m.message} />
  ));

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>{dialogsElements}</div>
      <div className={styles.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
