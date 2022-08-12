import React from "react";
import styles from "./Dialogs.module.css";

const Dialogs = (props) => {
	return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        <div className={styles.item + ' ' + styles.active}>Dmytry</div>
        <div className={styles.item}>Sasha</div>
        <div className={styles.item}>Valery</div>
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