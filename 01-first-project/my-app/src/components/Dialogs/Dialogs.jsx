import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Dialogs.module.css";

let path = "/dialogs/";

const DialogItem = (props) => {
  return (
    <div className={styles.item}>
      <NavLink to={`${path}${props.id}`}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={styles.message}>{props.message}</div>;
};

const Dialogs = (props) => {
  let dialogsData = [
    { id: 1, name: "Dmytry" },
    { id: 2, name: "Sasha" },
    { id: 3, name: "Valery" },
    { id: 4, name: "Sergey" },
  ];
  let messagesData = [
    { id: 1, message: "Hi" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "How are your holidays?" },
  ];

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
        <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
      </div>
      <div className={styles.messages}>
        <Message className={styles.message} message={messagesData[0].message} />
        <Message className={styles.message} message={messagesData[1].message} />
        <Message className={styles.message} message={messagesData[2].message} />
      </div>
    </div>
  );
};

export default Dialogs;
