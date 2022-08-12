import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Dialogs.module.css";

const Dialogs = (props) => {
	return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        <div className={styles.item + ' ' + styles.active}><NavLink to="/dialogs/1">Dmytry</NavLink></div>
        <div className={styles.item}><NavLink to="/dialogs/2">Sasha</NavLink></div>
        <div className={styles.item}><NavLink to="/dialogs/3">Valery</NavLink></div>
        <div className={styles.item}><NavLink to="/dialogs/4">Sergey</NavLink></div>
      </div>
      <div className={styles.messages}>
        <div className={styles.message}>Hi</div>
        <div className={styles.message}>How are you?</div>
        <div className={styles.message}>How are your holidays?</div>
      </div>
    </div>
  );
}

export default Dialogs;