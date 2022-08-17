import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./DialogItem.module.css";

let path = "/dialogs/";

// local component
const DialogItem = (props) => {
  return (
    <div className={styles.item}>
      <NavLink className={styles.navLink} to={`${path}${props.id}`}>
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          alt="profile pic"
          className={styles.img}
        />
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
