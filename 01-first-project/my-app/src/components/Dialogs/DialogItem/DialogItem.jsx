import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./DialogItem.module.css";

let path = "/dialogs/";

// local component
const DialogItem = (props) => {
  return (
    <div className={styles.item}>
      <NavLink to={`${path}${props.id}`}>{props.name}</NavLink>
    </div>
  );
};

export default DialogItem;
