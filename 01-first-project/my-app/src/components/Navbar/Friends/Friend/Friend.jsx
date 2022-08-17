import React from "react";
import styles from "./Friend.module.css";

const Friend = (props) => {

	return (
    <div className={styles.friendItem}>
      <img
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
        alt=""
        className={styles.img}
      />
      <div className={styles.name}>{props.name}</div>
    </div>
  );
}

export default Friend;