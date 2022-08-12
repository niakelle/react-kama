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
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        <DialogItem name="Dmytry" id="1" />
        <DialogItem name="Sasha" id="2" />
        <DialogItem name="Valery" id="3" />
        <DialogItem name="Sergey" id="4" />
      </div>
      <div className={styles.messages}>
        <Message className={styles.message} message="Hi" />
        <Message className={styles.message} message="How are you?" />
        <Message className={styles.message} message="How are your holidays?" />
      </div>
    </div>
  );
};

export default Dialogs;
