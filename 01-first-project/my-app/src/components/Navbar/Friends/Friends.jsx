import React from "react";
import Friend from "./Friend/Friend";
import styles from "./Friends.module.css";

const Friends = (props) => {
  let friendsElements = props.friendsData.map((f) => <Friend name={f.name} />);

  return (
    <div className={styles.friendsBlock}>
      {friendsElements}
    </div>
  );
};

export default Friends;
